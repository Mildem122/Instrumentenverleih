import { useState } from "react";
import OrderSummary from "./OrderSummary";
import RequiredInformation from "./RequiredInformation";
import SuccessfulOrder from "./SuccessfulOrder";

function OrderPage({ device }) {
  const [orderStep, setOrderStep] = useState(1);
  const [dateFrom, setDateFrom] = useState(null);
  const [dateTo, setDateTo] = useState(null);
  const [finishedOrder, setFinishedOrder] = useState(null);

  return (
    <div className="mx-10">
      {orderStep === 1 ? (
        <RequiredInformation
          device={device}
          setOrderStep={setOrderStep}
          dateFrom={dateFrom}
          dateTo={dateTo}
          setDateTo={setDateTo}
          setDateFrom={setDateFrom}
        />
      ) : null}
      {orderStep === 2 ? (
        <OrderSummary
          device={device}
          dateFrom={dateFrom}
          dateTo={dateTo}
          setOrderStep={setOrderStep}
          setFinishedOrder={setFinishedOrder}
        />
      ) : null}
      {orderStep === 3 ? (
        <SuccessfulOrder finishedOrder={finishedOrder} />
      ) : null}
    </div>
  );
}

export default OrderPage;
