import { CheckCircleIcon } from "@heroicons/react/outline";
import CustomButton from "./CustomButton";
import { useRouter } from "next/router";
function SuccessfulOrder({ finishedOrder }) {
  const router = useRouter();
  const buttonFunction = () => {
    router.push("/");
  };
  return (
    <div className="flex flex-col px-10">
      <div className="flex flex-row self-center mb-5">
        <CheckCircleIcon className="w-8" />
        <h2 className="text-xl font-medium text-white text-center pl-5">
          Vielen Dank für ihre Bestellung!
        </h2>
      </div>
      <div className="flex flex-row mb-5">
        <h2 className="text-xl mr-3 ">Bestellnummer:</h2>
        <h2 className="text-xl self-center text-white">
          {finishedOrder.orderId}
        </h2>
      </div>
      <h2 className="text-xl mr-3 text-center ">
        Sie können nun zur Startseite zurückkehren oder in ihrem Profil ihre
        Bestellungen einsehen und verwalten. Das Instrument können sie sich an
        unserem Standort, sobald ihr Mietzeitraum beginnt, abholen.
      </h2>

      <CustomButton
        buttonText="Zurück zur Startseite!"
        buttonFunction={buttonFunction}
      />
    </div>
  );
}

export default SuccessfulOrder;
