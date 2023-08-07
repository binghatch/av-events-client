import Link from "next/link";
import Logo from '../../public/images/av-logo.svg';
import Image from 'next/image';

export default function NavBarSection() {
  return (
    <nav className="flex flex-row justify-between items-center w-full pt-8 px-4">
      <div>
        <Link href={"https://www.assemblyventures.com/"} target="_blank">
          <Image src={Logo} quality={100} height={40} alt="Assembly Summit" unoptimized/>
        </Link>
      </div>
      <div>
      </div>
    </nav>
  )
}