import type { MenuProps } from "./types";

export function DesktopMenu({ menuList }: MenuProps) {
  return (
    <ul className={"hidden gap-4 md:flex"}>
      {menuList.map((index, key) => (
        <li key={index.href}>
          <a
            tabIndex={key + 1}
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
