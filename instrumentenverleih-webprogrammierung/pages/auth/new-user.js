import Header from "../../components/Header";
import CustomButton from "../../components/CustomButton";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

function NewUser() {
  const { data: session } = useSession();
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [city, setCity] = useState("");
  const [plz, setPlz] = useState("");
  const [checked, setChecked] = useState(false);
  const [name, setName] = useState(null);
  const router = useRouter();
  const buttonFunction = async () => {
    const userData = await fetch(
      `http://localhost:3000/api/user/${session.user.id}`
    ).then((res) => res.json());
    userData.adress = `${street} ${number}, ${plz} ${city}`;
    if (!session?.user?.name) {
      userData.name = name;
    }
    //update User
    const updatedUser = await fetch(
      `http://localhost:3000/api/user/${userData.id}`,
      {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      }
    );
    router.push("/");
  };
  return (
    <div className="mx-5">
      <Header />
      <div className="flex flex-col">
        <h2 className="self-center font-bold text-xl mb-6 text-center">
          Bitte vervollständigen Sie folgende Informationen
        </h2>
        <form class="w-full max-w-sm self-center">
          {session?.user?.name ? null : (
            <div class="md:flex md:items-center mb-6">
              <div class="md:w-1/3">
                <label
                  class="block text-white font-bold md:text-right mb-1 md:mb-0 pr-4"
                  for="inline-full-name"
                >
                  Name
                </label>
              </div>
              <div class="md:w-2/3">
                <input
                  class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="inline-full-name"
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
          )}
          <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
              <label
                class="block text-white font-bold md:text-right mb-1 md:mb-0 pr-4"
                for="inline-full-name"
              >
                Straße
              </label>
            </div>
            <div class="md:w-2/3">
              <input
                class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name"
                type="text"
                onChange={(e) => setStreet(e.target.value)}
              />
            </div>
          </div>
          <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
              <label
                class="block text-white font-bold md:text-right mb-1 md:mb-0 pr-4"
                for="inline-password"
              >
                Hausnummer
              </label>
            </div>
            <div class="md:w-2/3">
              <input
                class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-password"
                type="text"
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
          </div>
          <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
              <label
                class="block text-white font-bold md:text-right mb-1 md:mb-0 pr-4"
                for="inline-city"
              >
                Stadt
              </label>
            </div>
            <div class="md:w-2/3">
              <input
                class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-city"
                type="text"
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
          </div>
          <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
              <label
                class="block text-white font-bold md:text-right mb-1 md:mb-0 pr-4"
                for="inline-plz"
              >
                Postleitzahl
              </label>
            </div>
            <div class="md:w-2/3">
              <input
                class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-plz"
                type="text"
                onChange={(e) => setPlz(e.target.value)}
              />
            </div>
          </div>
          <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3"></div>
            <label class="md:w-2/3 block text-gray-500 font-bold">
              <input
                class="mr-2 leading-tight"
                type="checkbox"
                onChange={() => setChecked(!checked)}
              />
              <a class="text-sm text-blue-400" href="http://localhost:3000">
                Datenschutz & AGB's aktzeptieren
              </a>
            </label>
          </div>
          <div class="md:flex md:items-center">
            <div class="md:w-1/3"></div>
            {checked &&
            street.length > 3 &&
            number.length > 0 &&
            city.length > 1 &&
            plz.length > 4 ? (
              <div class="md:w-2/3">
                <CustomButton
                  buttonText="Bestätigen"
                  buttonFunction={buttonFunction}
                />
              </div>
            ) : null}
          </div>
        </form>
      </div>
    </div>
  );
}
export default NewUser;
