import { DesktopMenu, MobileMenu } from "./components";

const menuList = [
  { href: "#about", label: "アプリについて" },
  { href: "#howtouse", label: "使い方" },
  { href: "#download", label: "ダウンロード" },
];

export function Header() {
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
