import CustomButton from "./CustomButton";
import {
  ShoppingCartIcon,
  UserCircleIcon,
  CashIcon,
} from "@heroicons/react/outline";
const user = {
  id: "cl3yop4fg0037r4jv6cs12aoe",
  userName: "Mildem",
  password: "123",
  name: "Marcel Mildenberger",
  email: "marcel.milde@outlook.de",
  adress: "Rottfeldstraße 10",
};

function OrderSummary({
  device,
  dateFrom,
  dateTo,
  setOrderStep,
  setFinishedOrder,
}) {
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
        userId: `${user.id}`,
        deviceId: `${device.id}`,
        borrowedFrom: `${dateFrom}`,
        borrowedUntil: `${dateTo}`,
        orderId: `#${makeid(15)}`,
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
      <div className="flex flex-row mb-2">
        <h2 className="text-xl mr-3 ">Instrument:</h2>
        <h2 className="text-xl self-center text-white">{device.modelName}</h2>
      </div>
      <div className="flex flex-row mb-2">
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
      <div className="flex flex-row mb-2">
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
      <div className="flex flex-row mb-2">
        <h2 className="text-xl mr-3 ">Name:</h2>
        <h2 className="text-xl self-center text-white">{user.name}</h2>
      </div>
      <div className="flex flex-row mb-2">
        <h2 className="text-xl mr-3 ">Email:</h2>
        <h2 className="text-xl self-center text-white">{user.email}</h2>
      </div>
      <div className="flex flex-row mb-2">
        <h2 className="text-xl mr-3 ">Adresse:</h2>
        <h2 className="text-xl self-center text-white">{user.adress}</h2>
      </div>
      <div className="flex flex-row self-center my-10">
        <CashIcon className="w-8" />
        <h2 className="text-2xl font-medium text-white text-center pl-5">
          Bezahlmethode
        </h2>
      </div>
      <div>
        <div class="form-check mb-3">
          <input
            class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label
            class="form-check-label inline-block text-white"
            for="flexRadioDefault1"
          >
            Paypal
          </label>
        </div>
        <div class="form-check mb-3">
          <input
            class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            checked
          />
          <label
            class="form-check-label inline-block text-white"
            for="flexRadioDefault2"
          >
            Klarna
          </label>
        </div>
        <div class="form-check mb-3">
          <input
            class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault3"
            checked
          />
          <label
            class="form-check-label inline-block text-white"
            for="flexRadioDefault3"
          >
            Kreditkarte
          </label>
        </div>
      </div>
      <CustomButton
        buttonText="Jetzt Zahlungspflichtig bestellen"
        buttonFunction={buttonFunction}
      />
    </div>
  );
}

export default OrderSummary;
