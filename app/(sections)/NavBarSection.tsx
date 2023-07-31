import Link from "next/link";
import Logo from '../../public/images/av-summit-logo.svg';
import Image from 'next/image';

export default function NavBarSection() {
  return (
    <nav className="flex flex-row justify-between items-center w-full pt-8 px-6">
      <div>
        <Link href={"/"}>
          <Image src={Logo} height={40} alt="Assembly Summit" unoptimized/>
        </Link>
      </div>
      <div>
      </div>
    </nav>
  )
}