import { useEffect, useState } from "react";
import CustomButton from "./CustomButton";

function RequiredInformation({
  device,
  setOrderStep,
  dateFrom,
  dateTo,
  setDateFrom,
  setDateTo,
}) {
  const dateToday = new Date().toLocaleString("en-CA", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  const buttonFunction = () => {
    setOrderStep((val) => val + 1);
  };
  const [minDate, setMinDate] = useState(dateToday);

  useEffect(() => {
    const newDate = new Date(dateFrom);
    newDate.setDate(newDate.getDate() + 7);
    const newMinDate = newDate.toLocaleString("en-CA", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
    setMinDate(newMinDate);
  }, [dateFrom]);

  return (
    <div className="flex flex-col">
      <h2 className=" text-2xl font-medium text-white mb-2 text-center">
        Ihr gewünschter Mietzeitraum für {device.modelName}!
      </h2>
      <div className="flex flex-row self-center my-5 ">
        <h2 className="text-2xl mr-5 text-white self-center">Von:</h2>
        <input
          className="rounded-xl text-black"
          type="date"
          min={dateToday}
          onChange={(e) => setDateFrom(e.target.value)}
        />
        {dateFrom ? (
          <div className="flex flex-row self-center ">
            <h2 className="text-2xl mx-5 text-white">Bis:</h2>
            <input
              className="rounded-xl text-black  "
              type="date"
              onChange={(e) => setDateTo(e.target.value)}
              min={minDate}
            />
          </div>
        ) : null}
      </div>
      {dateFrom && dateTo ? (
        <div className="max-w-xl self-center">
          <CustomButton
            buttonText="Bestätigen"
            buttonFunction={buttonFunction}
          />
        </div>
      ) : null}
    </div>
  );
}

export default RequiredInformation;
