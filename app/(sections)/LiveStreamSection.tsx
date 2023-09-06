"use client";

import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function LivestreamSection() {

  return (
    <section className="px-4 pb-6" id="sessions">
      <h2 className=""><span className="thick-underline text-3xl font-black">Livestream</span></h2>
      <p className="mt-1">Click on the player below to watch our livestream.</p>
      <ReactPlayer url='https://www.youtube.com/watch?v=CDjVVBL95io' width='100%' height='100%'className="w-full aspect-video mt-6"/>
    </section>
  )
}