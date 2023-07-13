import { DesktopMenu, MobileMenu } from "./components";

const menuList = ["アプリについて", "使い方", "ダウンロード"];

export function Header() {
  return (
    <header className={"fixed h-16 w-full bg-inherit"}>
      <div
        className={
          "m-auto flex h-full w-full max-w-[1200px] items-center justify-between px-4"
        }
      >
        <img className="w-32" src={"/repaint-logo.svg"} alt={"Re:paint"} />
        <nav>
          <DesktopMenu menuList={menuList} />
          <MobileMenu menuList={menuList} />
        </nav>
      </div>
    </header>
  );
}
