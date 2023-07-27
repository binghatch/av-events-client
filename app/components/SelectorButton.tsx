import { HandleToggleFunction } from "../types";

export default function SelectorButton({ group, handleToggle }: { group: string, handleToggle: HandleToggleFunction}) {
  return (
    <>
    <button onClick={async () => handleToggle(`${group}`)} className="inline-flex flex-row box-borde justify-center items-center px-1 py-[0.05em] text-sm tracking-wide font-medium border rounded border-violet-700 bg-violet-700 hover:bg-violet-800 focus:ring-2 ring-violet-500">{group}</button>
    </>
  )
}