import Header from "../../components/Header";
import { useSession } from "next-auth/react";
import { PencilIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

function NewUser() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [orders, setOrders] = useState([]);
  const [deviceNames, setDeviceNames] = useState([]);
  const [fetchedDevices, setFetchedDevices] = useState([]);

  const fetchOrders = async () => {
    if (session) {
      const fetchedOrders = await fetch(
        `http://localhost:3000/api/user/order/${session.user.id}`
      ).then((res) => res.json());
      setOrders(fetchedOrders);
    }
  };
  const getInstrumentName = async (deviceId) => {
    if (fetchedDevices.find((item) => item === deviceId) === undefined) {
      setFetchedDevices((prev) => prev.concat(deviceId));
      const device = await fetch(
        `http://localhost:3000/api/device/${deviceId}`
      ).then((res) => res.json());
      setDeviceNames((prev) => prev.concat(device.modelName));
    }
    return null;
  };

  useEffect(() => {
    if (orders.length == 0) {
      fetchOrders();
    }
  }, [session?.user?.id]);

  if (status === "unauthenticated") {
    router.push("/");
  }
  return (
    <div className="mx-5">
      <Header />
      <div className="flex flex-col">
        <div className="self-center mb-5 flex flex-row">
          <h2 className="text-white text-2xl mr-5">
            Ihre Accountinformationen
          </h2>
          <PencilIcon
            className="w-8 hover:cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              router.push("/auth/new-user");
              return;
            }}
          />
        </div>
        <div className="flex flex-row mb-2 self-center">
          <h2 className="text-xl mr-3 ">Name:</h2>
          <h2 className="text-xl self-center font-semibold">
            {session?.user?.name}
          </h2>
        </div>
        <div className="flex flex-row mb-2 self-center">
          <h2 className="text-xl mr-3 ">Email:</h2>
          <h2 className="text-xl self-center font-semibold">
            {session?.user?.email}
          </h2>
        </div>
        <div className="flex flex-row mb-2 self-center">
          <h2 className="text-xl mr-3 ">Adresse:</h2>
          <h2 className="text-xl  font-semiboldbreak-words">
            {session?.user?.adress}
          </h2>
        </div>
        <h2 className="text-white self-center text-2xl mt-5">
          Ihre Bestellungen
        </h2>
        <div className="mt-5 ml-5 self-center">
          {orders?.map((item, i) => {
            getInstrumentName(item.deviceId);
            return (
              <div
                key={i}
                className="border-gray-500 border-2 p-4 mb-5 w-11/12"
              >
                <h2 className="text-white text-xl p-1">{item.orderId}</h2>
                <div className="flex flex-col mt-2">
                  <div className="flex flex-row mb-2 self-center">
                    <h2 className="text-xl mr-3 ">Instrument:</h2>
                    <h2 className="text-xl  font-semibold break-words text-center">
                      {deviceNames[i]}
                    </h2>
                  </div>
                  <div className="flex flex-row mb-2 self-center">
                    <h2 className="text-xl mr-3 ">Bestelldatum:</h2>
                    <h2 className="text-xl  font-semibold break-words">
                      {new Date(item.orderDate).toLocaleString("de-DE", {
                        year: "2-digit",
                        month: "2-digit",
                        day: "2-digit",
                      })}
                    </h2>
                  </div>
                  <div className="flex flex-row mb-2 self-center">
                    <h2 className="text-xl mr-3 ">Zeitraum:</h2>
                    <h2 className="text-xl self-center font-semibold">
                      {new Date(item.borrowedFrom).toLocaleString("de-DE", {
                        year: "2-digit",
                        month: "2-digit",
                        day: "2-digit",
                      })}{" "}
                      -{" "}
                      {new Date(item.borrowedUntil).toLocaleString("de-DE", {
                        year: "2-digit",
                        month: "2-digit",
                        day: "2-digit",
                      })}
                    </h2>
                  </div>
                  <div className="flex flex-row mb-2 self-center">
                    <h2 className="text-xl mr-3 ">Preis:</h2>
                    <h2 className="text-xl  font-semibold break-words">
                      {item.price}€
                    </h2>
                  </div>
                  <div className="flex flex-row mb-2 self-center">
                    <h2 className="text-xl mr-3 ">Bezahlmethode:</h2>
                    <h2 className="text-xl  font-semibold break-words">
                      {item.paymentMethod}
                    </h2>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default NewUser;
