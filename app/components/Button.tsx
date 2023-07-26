import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface ButtonProps {
  url: string;
  text: string;
  icon?: LucideIcon; // Make the icon prop optional by adding "?"
}

export default function Button(props: ButtonProps) {
  return (
    <>
      <Link href={props.url}>
        {props.icon && <span><LucideIcon name={props.icon} /></span>}
        {props.text}
      </Link>
    </>
  );
}