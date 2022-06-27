import Header from "../../components/Header";
import DevicePage from "../../components/DevicePage";
function Instrument({ devices }) {
  return (
    <div>
      <Header />
      <DevicePage devices={devices} />
    </div>
  );
}

export default Instrument;

export async function getServerSideProps(context) {
  const instrumentId = context.params.instrumentId;
  const devices = await fetch(
    `http://localhost:3000/api/device/withinstrumentid/${instrumentId}`
  ).then((res) => res.json());

  return {
    props: {
      devices: devices,
    },
  };
}
