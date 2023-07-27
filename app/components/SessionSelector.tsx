import SelectorButton from "./SelectorButton";
import { HandleToggleFunction } from "../types";

export default function SessionSelector({ handleToggle, selectedGroup }: { handleToggle: HandleToggleFunction, selectedGroup: string }) {
  return (
    <div className="flex flex-col justify-start items-start w-full p-4 mt-6 rounded-md bg-terracotta-400 bg-opacity-10">
      <p className="font-medium">Filter sessions</p>
      <div className="flex flex-row flex-wrap gap-2 mt-2.5">
        <SelectorButton group="All" handleToggle={handleToggle} isSelected={selectedGroup === "All"}/>
        <SelectorButton group="Opening" handleToggle={handleToggle} isSelected={selectedGroup === "Opening"} />
        <SelectorButton group="Infrastructure" handleToggle={handleToggle} isSelected={selectedGroup === "Infrastructure"} />
        <SelectorButton group="Systems" handleToggle={handleToggle} isSelected={selectedGroup === "Systems"} />
        <SelectorButton group="Applications" handleToggle={handleToggle} isSelected={selectedGroup === "Applications"} />
        <SelectorButton group="Closing" handleToggle={handleToggle} isSelected={selectedGroup === "Closing"} />
      </div>
    </div>
  )
}
