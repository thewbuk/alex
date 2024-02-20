import LogoImage from "./../images/logos/Logo.png";
import Link from "next/link";
import Image from "next/image";
import { AspectRatio } from "./ui/aspect-ratio";

function Logo() {
  return (
    <div>
      <div className="flex items-center w-72"></div>
      <AspectRatio ratio={16 / 9} className="flex items-center justify-center">
        <Link href="/">
          <Image
            alt="LogoMain"
            src={LogoImage}
            className="w-16 rounded-full"
            priority
          ></Image>
        </Link>
      </AspectRatio>
    </div>
  );
}

export default Logo;
