import Footer from "../../components/Footer";
import Header from "../../components/Header";
import OrderPage from "../../components/OrderPage";
function Order({ device }) {
  return (
    <div>
      <Header />
      <OrderPage device={device} />
      <Footer />
    </div>
  );
}

export default Order;

export async function getServerSideProps(context) {
  const devideId = context.params.deviceId;
  const device = await fetch(
    `http://localhost:3000/api/device/${devideId}`
  ).then((res) => res.json());

  return {
    props: {
      device: device,
    },
  };
}
