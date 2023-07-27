import { HandleToggleFunction } from "../types";

export default function SelectorButton({ group, handleToggle, isSelected }: { group: string, handleToggle: HandleToggleFunction, isSelected: boolean }) {
  return (
    <button 
      onClick={() => handleToggle(group)} 
      className={`inline-flex flex-row box-border justify-center items-center px-1 py-[0.05em] text-sm tracking-wide font-medium border border-violet-700 rounded ${isSelected ? 'bg-violet-800 focus:ring-2 ring-violet-500' : 'bg-violet-700 hover:bg-violet-800'}`}>
      {group}
    </button>
  )
}
