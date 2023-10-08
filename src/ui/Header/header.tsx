import { DesktopMenu, MobileMenu } from "./components";

export type HeaderProps = {
  menuList: { href: string; label: string }[];
};

export function Header({ menuList }: HeaderProps) {
  return (
    <header className={"fixed h-16 w-full bg-inherit"}>
      <div
        className={
          "m-auto flex h-full w-full max-w-[1200px] items-center justify-between px-4"
        }
      >
        <img
          width={128}
          height={48}
          src={"/repaint-logo.svg"}
          alt={"Re:paint"}
        />

        <nav>
          <DesktopMenu menuList={menuList} />
          <MobileMenu menuList={menuList} />
        </nav>
      </div>
    </header>
  );
}
