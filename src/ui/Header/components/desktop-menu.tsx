import type { MenuProps } from "./types";

export function DesktopMenu({ menuList }: MenuProps) {
  return (
    <ul className={"hidden gap-4 md:flex"}>
      {menuList.map((index) => (
        <li key={index.href}>
          <a
            href={index.href}
            className={"underline duration-300 hover:text-purple"}
          >
            {index.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
