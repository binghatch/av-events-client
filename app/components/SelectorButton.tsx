import { HandleToggleFunction } from "../types";

export default function SelectorButton({ group, handleToggle, isSelected }: { group: string, handleToggle: HandleToggleFunction, isSelected: boolean }) {
  return (
    <button 
      onClick={() => handleToggle(group)} 
      className={`inline-flex flex-row box-border justify-center items-center px-1 py-[0.05em] text-sm tracking-wide font-medium rounded ${isSelected ? 'bg-terracotta-400 bg-opacity-100 focus:ring-2 ring-terracotta-500' : 'bg-terracotta-400 bg-opacity-10 hover:bg-opacity-30'}`}>
      {group}
    </button>
  )
}
