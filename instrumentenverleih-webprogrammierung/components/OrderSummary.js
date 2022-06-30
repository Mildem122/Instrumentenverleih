import CustomButton from "./CustomButton";
import {
  ShoppingCartIcon,
  UserCircleIcon,
  CashIcon,
} from "@heroicons/react/outline";
import { useSession } from "next-auth/react";
import { useState } from "react";
import ThreeRadioButton from "./ThreeRadioButtons";

function OrderSummary({
  device,
  dateFrom,
  dateTo,
  setOrderStep,
  setFinishedOrder,
}) {
  const { data: session } = useSession();
  const [checked, setChecked] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);
  const daysBetweenDate = (dateOne, dateTwo) => {
    const date1 = new Date(dateOne);
    const date2 = new Date(dateTwo);
    const differenceInTime = date2.getTime() - date1.getTime();
    const differenceInDays = differenceInTime / (1000 * 3600 * 24);
    return differenceInDays;
  };
  const calculatePrice = (days, price) => {
    return (days * price).toFixed(2);
  };

  const makeid = (length) => {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  const buttonFunction = async () => {
    const updatedDevice = device;
    if (updatedDevice.availableDevices === 0) {
      return;
    }
    updatedDevice.availableDevices = updatedDevice.availableDevices - 1;
    //Update Device
    const putUpdatedDevice = await fetch(
      `http://localhost:3000/api/device/${device.id}`,
      {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedDevice),
      }
    );
    //Create Order
    const newOrder = await fetch(`http://localhost:3000/api/order`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: `${session.user.id}`,
        deviceId: `${device.id}`,
        borrowedFrom: `${dateFrom}`,
        borrowedUntil: `${dateTo}`,
        orderId: `#${makeid(15)}`,
        price: calculatePrice(
          daysBetweenDate(dateFrom, dateTo),
          device.price / 30
        ),
        paymentMethod: `${selectedValue}`,
      }),
    }).then((response) => response.json());
    setFinishedOrder(newOrder);
    setOrderStep((val) => val + 1);
  };

  return (
    <div className="flex flex-col px-10">
      <div className="flex flex-row self-center mb-10">
        <ShoppingCartIcon className="w-8" />
        <h2 className="text-2xl font-medium text-white text-center pl-5">
          Warenkorb
        </h2>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row mb-2 self-center">
          <h2 className="text-xl mr-3 ">Instrument:</h2>
          <h2 className="text-xl self-center text-white">{device.modelName}</h2>
        </div>
        <div className="flex flex-row mb-2 self-center">
          <h2 className="text-xl mr-3 ">Zeitraum:</h2>
          <h2 className="text-xl self-center text-white">
            {new Date(dateFrom).toLocaleString("de-DE", {
              year: "2-digit",
              month: "2-digit",
              day: "2-digit",
            })}{" "}
            -{" "}
            {new Date(dateTo).toLocaleString("de-DE", {
              year: "2-digit",
              month: "2-digit",
              day: "2-digit",
            })}
          </h2>
        </div>
      </div>
      <div className="flex flex-row mb-2 self-center">
        <h2 className="text-xl mr-3 ">Preis:</h2>
        <h2 className="text-xl self-center text-white">
          {calculatePrice(daysBetweenDate(dateFrom, dateTo), device.price / 30)}
          €
        </h2>
      </div>
      <div className="flex flex-row self-center my-10">
        <UserCircleIcon className="w-8" />
        <h2 className="text-2xl font-medium text-white text-center pl-5">
          Accountinformationen
        </h2>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row mb-2 self-center">
          <h2 className="text-xl mr-3 ">Name:</h2>
          <h2 className="text-xl self-center text-white">
            {session.user.name}
          </h2>
        </div>
        <div className="flex flex-row mb-2 self-center">
          <h2 className="text-xl mr-3 ">Email:</h2>
          <h2 className="text-xl self-center text-white">
            {session.user.email}
          </h2>
        </div>
        <div className="flex flex-row mb-2 self-center">
          <h2 className="text-xl mr-3 ">Adresse:</h2>
          <h2 className="text-xl self-center text-white">
            {session.user.adress}
          </h2>
        </div>
      </div>
      <div className="flex flex-row self-center my-10">
        <CashIcon className="w-8" />
        <h2 className="text-2xl font-medium text-white text-center pl-5">
          Bezahlmethode
        </h2>
      </div>

      <ThreeRadioButton
        textOne="Paypal"
        textTwo="Klarna"
        textThree="Kreditkarte"
        valueOne="Paypal"
        valueTwo="Klarna"
        valueThree="Kreditkarte"
        setSelectedValue={setSelectedValue}
        flexDirection="row"
      />
      <label className="self-center my-10 block text-gray-500 font-bold ">
        <input
          class="mr-2 leading-tight"
          type="checkbox"
          onChange={() => setChecked(!checked)}
        />
        <a class="text-sm text-blue-400" href="http://localhost:3000">
          Kaufbedingungen aktzeptieren
        </a>
      </label>
      <div className="w-80 self-center">
        {checked && selectedValue ? (
          <CustomButton
            buttonText="Jetzt Zahlungspflichtig bestellen"
            buttonFunction={buttonFunction}
          />
        ) : null}
      </div>
    </div>
  );
}

export default OrderSummary;
