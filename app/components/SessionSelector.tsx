import SelectorButton from "./SelectorButton";
import { HandleToggleFunction } from "../types";

export default function SessionSelector({ handleToggle }: { handleToggle: HandleToggleFunction }) {
  return (
    <div className="flex flex-col justify-start items-start w-full p-4 mt-6 rounded-md bg-terracotta-400 bg-opacity-10">
      <p className="font-medium">Filter sessions</p>
      <div className="flex flex-row flex-wrap gap-2 mt-2.5">
        <SelectorButton group="All" handleToggle={handleToggle}/>
        <SelectorButton group="Opening" handleToggle={handleToggle} />
        <SelectorButton group="Infrastructure" handleToggle={handleToggle} />
        <SelectorButton group="Systems" handleToggle={handleToggle} />
        <SelectorButton group="Applications" handleToggle={handleToggle} />
        <SelectorButton group="Closing" handleToggle={handleToggle} />
      </div>
    </div>
  )
}