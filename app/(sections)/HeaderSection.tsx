import Link from "next/link";
import { ArrowRight } from "lucide-react";


export default function HeaderSection() {
  return (
    <section className="flex flex-col justify-center items-start min-h-screen w-full bg-hero-bg bg-no-repeat bg-center bg-cover">
      <div className="p-6">
        <h1 className="flex flex-col items-start font-medium text-5xl">Assembly Summit</h1>
        <p className="mt-6 font-light text-wide w-5/6">Engage with thought leaders and entrepreneurs shaping the future of infrastructure, systems, and applications.</p>
        <Link className="inline-flex justify-start items-center mt-12 px-4 py-2 rounded-full border border-persimmon-400 bg-persimmon-400 bg-opacity-10 text-persimmon-400" href="#sessions">
          <span>Jump to sessions</span>
          <ArrowRight className="ms-4" width={16} height={16} />
        </Link>
      </div>
    </section>
  )
}