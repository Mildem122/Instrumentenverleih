import Image from "next/image";
import HeaderItem from "./HeaderItem";
import {
  HomeIcon,
  UserIcon,
  LogoutIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/outline";
import { useSession } from "next-auth/react";
import GoogleProfile from "./GoogleProfile";
function Header() {
  const { data: session } = useSession();
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title="HOME" Icon={HomeIcon} url="/" />
        <HeaderItem
          title="SELBSTTEST"
          Icon={QuestionMarkCircleIcon}
          url="/instrument/test"
        />
        {session?.user?.image ? (
          <GoogleProfile
            title="ACCOUNT"
            url="/user/profile"
            pictureUrl={`${session.user.image}`}
          />
        ) : (
          <HeaderItem title="ACCOUNT" Icon={UserIcon} url="/api/auth/signin" />
        )}
        {session?.user?.image ? (
          <HeaderItem
            title="AUSLOGGEN"
            Icon={LogoutIcon}
            url="/api/auth/signout"
          />
        ) : null}
      </div>
      <Image
        className="object-contain "
        src="/../public/cooltext414321996166360.png"
        width={256}
        height={100}
      />
    </header>
  );
}

export default Header;
