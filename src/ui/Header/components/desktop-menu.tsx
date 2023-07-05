type DesktopMenuProps = {
  menuList: string[];
};

export function DesktopMenu({ menuList }: DesktopMenuProps) {
  return (
    <ul className={"hidden gap-4 md:flex"}>
      {menuList.map((menu) => (
        <li key={menu}>
          <a href={"/"} className={"underline duration-300 hover:text-purple"}>
            {menu}
          </a>
        </li>
      ))}
    </ul>
  );
}
