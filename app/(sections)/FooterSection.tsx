import Link from "next/link";

export default function FooterSection() {
  return (
    <div className="flex flex-row justify-center items-center gap-2 my-8 opacity-30 text-sm">
      <span>Assembly Ventures © 2023</span>
      <span>&#x2022;</span>
      <Link href="/imprint">Imprint</Link>
    </div>
  )
}