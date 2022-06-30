import CustomButton from "./CustomButton";
import { useRouter } from "next/router";
import { useSession, signIn } from "next-auth/react";
import { useEffect, useState } from "react";

function Device({ selectedDevice }) {
  const [manufacturer, setManufacturer] = useState(null);
  const router = useRouter();
  const { data: session } = useSession();
  const onButtonClick = async () => {
    router.push(`http://localhost:3000/order/${selectedDevice.id}`);
  };
  const fetchManufacturer = async () => {
    const manufacturer = await fetch(
      `http://localhost:3000/api/manufacturer/${selectedDevice.manufacturerId}`
    ).then((res) => res.json());
    setManufacturer(manufacturer.name);
  };
  useEffect(() => {
    if (manufacturer === null) {
      fetchManufacturer();
    }
  }, [selectedDevice]);
  return (
    <div className="flex flex-col md:grid grid-cols-6 place-items-start">
      <div className="px-20 py-7 group cursor-pointer transition duration-200 ease-in transform self-center sm:hover:scale-105 hover:z-50 md:col-span-3  ">
        <img
          src={`${selectedDevice.pictureUrl}`}
          style={{ width: "100%", height: "auto", maxWidth: "420px" }}
        />
      </div>
      <div className="flex flex-col mx-10 md:col-start-4 md:col-span-2 xl:col-span-2 xl:-ml-20">
        <div className="flex flex-row mb-2 md:mt-16">
          <h2 className="text-2xl mr-3 text-white">Model:</h2>
          <h2 className="text-xl self-center">{selectedDevice.modelName}</h2>
        </div>
        <div className="flex flex-col mb-2">
          <h2 className="text-2xl mr-3 text-white">Beschreibung:</h2>
          <h2 className="text-lg">{selectedDevice.description}</h2>
        </div>
        <div className="flex flex-row mb-2 ">
          <h2 className="text-2xl mr-3 text-white">Klang:</h2>
          <h2 className="text-xl self-center">{selectedDevice.tone}</h2>
        </div>
        <div className="flex flex-row mb-2">
          <h2 className="text-2xl mr-3 text-white">Hersteller:</h2>
          <h2 className="text-xl self-center">{manufacturer}</h2>
        </div>
        {selectedDevice.size?.length > 1 ? (
          <div className="flex flex-row mb-2">
            <h2 className="text-2xl mr-3 text-white">Größe:</h2>
            <h2 className="text-xl self-center">{selectedDevice.size}</h2>
          </div>
        ) : null}
        {selectedDevice.fingering?.length > 1 ? (
          <div className="flex flex-row mb-2">
            <h2 className="text-2xl mr-3 text-white">Griff:</h2>
            <h2 className="text-xl self-center">{selectedDevice.fingering}</h2>
          </div>
        ) : null}
        <div className="flex flex-row mb-2">
          <h2 className="text-2xl mr-3 text-white">Preis:</h2>
          <h2 className="text-xl self-center">{selectedDevice.price}€/Monat</h2>
        </div>
        <div className="flex flex-row mb-2">
          <h2 className="text-2xl mr-3 text-white">Verfügbarkeit:</h2>
          {selectedDevice.isAvailable ? (
            <h2 className="text-xl self-center text-green-400">
              {selectedDevice.availableDevices} Verfügbar!
            </h2>
          ) : (
            <h2 className="text-xl self-center text-red-400">
              Leider nicht auf Lager!
            </h2>
          )}
        </div>
        {selectedDevice.isAvailable ? (
          session ? (
            <CustomButton
              buttonText="Jetzt Mieten!"
              buttonFunction={onButtonClick}
            />
          ) : (
            <CustomButton
              buttonText="Bitte Loggen Sie sich ein, um forzufahren!"
              buttonFunction={signIn}
            />
          )
        ) : null}
      </div>
    </div>
  );
}

export default Device;
