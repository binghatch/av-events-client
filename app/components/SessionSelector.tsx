// import SelectorButton from "./SelectorButton";
import { HandleToggleFunction } from "../types";

export default function SessionSelector() {
  return (
    <div className="flex flex-col justify-start items-start w-full p-4 mt-6 rounded-md bg-terracotta-400 bg-opacity-10">
      <p className="font-medium">Filter sessions</p>
      <div className="flex flex-row flex-wrap gap-2 mt-4">
        {/* <SelectorButton text="All" handleToggle={handleToggle}/>
        <SelectorButton text="Opening" handleToggle={handleToggle} />
        <SelectorButton text="Infrastructure" handleToggle={handleToggle} />
        <SelectorButton text="Systems" handleToggle={handleToggle} />
        <SelectorButton text="Applications" handleToggle={handleToggle} />
        <SelectorButton text="Closing" handleToggle={handleToggle} /> */}
      </div>
    </div>
  )
}