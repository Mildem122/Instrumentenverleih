import Header from "../../components/Header";
import DevicePage from "../../components/DevicePage";
import Footer from "../../components/Footer";
function Instrument({ devices }) {
  return (
    <div>
      <Header />
      <DevicePage devices={devices} />
      <Footer />
    </div>
  );
}

export default Instrument;

export async function getServerSideProps(context) {
  const instrumentId = context.params.instrumentId;
  const devices = await fetch(
    `http://localhost:3000/api/device/withinstrumentid/${instrumentId}`
  ).then((res) => res.json());
  const sortedDevices = devices.sort((a, b) => a.price - b.price);
  return {
    props: {
      devices: sortedDevices,
    },
  };
}
