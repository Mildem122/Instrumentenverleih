import Header from "../../components/Header";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

function NewUser() {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <div className="mx-5">
      <Header />
      Hallo Welt
    </div>
  );
}
export default NewUser;
