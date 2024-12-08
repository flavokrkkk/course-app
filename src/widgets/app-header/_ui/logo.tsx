import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link className="flex items-center space-x-2" href="/">
      <Image
        alt="Main logo"
        src={"/logo/Иконка 3.png"}
        width={"30"}
        height={"30"}
      />
      <span className="font-bold inline-block">Micro courses</span>
    </Link>
  );
}
