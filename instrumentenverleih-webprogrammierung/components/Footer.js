function Footer() {
  return (
    <div className=" h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-2">
      <div className="p-5">
        <ul>
          <p className=" font-bold text-lg pb-4 hover:text-blue-600 cursor-pointer">
            Impressum
          </p>
        </ul>
      </div>
      <div className="p-5">
        <ul>
          <p className="text-white font-bold text-lg pb-4 hover:text-blue-600 cursor-pointer">
            Datenschutz
          </p>
        </ul>
      </div>
      <div className="p-5">
        <ul>
          <p className="text-white font-bold text-lg pb-4 hover:text-blue-600 cursor-pointer">
            AGB'S
          </p>
        </ul>
      </div>
      <div className="p-5">
        <ul>
          <p className="text-white font-bold text-lg pb-4 hover:text-blue-600 cursor-pointer">
            Kontakt/Support
          </p>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
