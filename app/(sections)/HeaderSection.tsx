import Link from "next/link";
import Image from "next/image";
import SummitLogo from "../../public/images/av-summit-logo.svg";
import Logo from '../../public/images/av-logo.svg';


export default function HeaderSection() {
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="flex flex-row justify-between items-center w-full pt-8 px-4">
        <div>
          <Link href={"https://www.assemblyventures.com/"} target="_blank">
            <Image src={Logo} priority quality={100} height={40} alt="Assembly Summit" unoptimized />
          </Link>
        </div>
        <div>
        </div>
      </nav>
      <header className="flex flex-col justify-center items-start w-full min-h-screen">
        <div className="px-4 py-6">
          {/* <h1 className="flex flex-col items-start font-medium text-3xl">Welcome to</h1> */}
          <Image className="-ms-1" priority src={SummitLogo} height={64} quality={100} alt="Assembly Summit" />
          <p className="tracking-wide max-w-prose w-5/6 mt-3 md:mt-6">
          <span className="hidden md:inline-block">For this year’s Assembly Summit, we have partnered up with VDA to curate the Visionary Clubhouse at IAA in Munich on September 6th.</span><br /><br />
            Join us to engage with thought leaders, category-leading entrepreneurs and corporate innovators across the mobility sector. Together, we will take a closer look at how mobility innovation is unfolding across infrastructure, systems, and applications.
          </p>
          {/* <Link className="inline-flex justify-start items-center mt-12 px-4 py-2 rounded-full border border-terracotta-400 bg-terracotta-400 bg-opacity-10 text-terracotta-400" href="#sessions">
            <span>Jump to sessions</span>
            <ArrowRight className="ms-4" width={16} height={16} />
          </Link> */}
          <div className="flex flex-col justify-start items-start gap-4 mt-12">
            <div>
              <p className="font-bold text-sm">Time</p>
              <p className="tracking-wide">September 6th, 2023<br />10:00 am - 06:00 pm (CEST)</p>
            </div>
            <div>
              <p className="font-bold text-sm">Place</p>
              <Link href="https://goo.gl/maps/hhdT6XKMNL83qwYq6" target="_blank" className="tracking-wide">
                <span className="no-underline hover:underline underline-offset-4">Visionary Clubhouse</span><span className="inline-flex flex-row justify-center items-center ms-1.5 px-1 py-[0.05em] text-sm tracking-wide font-medium border rounded border-violet-700 bg-violet-700">Hall A2</span>
              </Link>
            </div>
          </div>
        </div>
        <div>

        </div>
      </header>
    </div>
  )
}