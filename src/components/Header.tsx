// next image
import Image from "next/image";

// next link
import Link from "next/link";

// components
import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute z-50 w-full h-16  flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-around items-center xl:gap-y-6 py-3 xl:py-8">
    {/* <header> */}
          {/* <div>
          <div> */}
          {/* logo */}
          {/* <Link href={"/"}>
            <Image
              src={"/logo.png"}
              width={220}
              height={48}
              alt="full name/Logo svg"
              priority={true}
            />
          </Link> */}
          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;