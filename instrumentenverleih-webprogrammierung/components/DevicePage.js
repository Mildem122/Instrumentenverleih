import { useState } from "react";
import Device from "./Device";
import NavDynamic from "./NavDynamic";

function DevicePage({ devices }) {
  const [selectedDevice, setSelectedDevice] = useState(devices[0]);
  return (
    <div>
      <NavDynamic setSelectedDevice={setSelectedDevice} devices={devices} />
      <Device selectedDevice={selectedDevice} />
    </div>
  );
}

export default DevicePage;
