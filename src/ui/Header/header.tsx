const menuList = ["アプリについて", "使い方", "ダウンロード"];

export function Header() {
  return (
    <header className={"fixed h-16 w-full bg-beige"}>
      <div
        className={
          "m-auto flex h-full w-full max-w-[1200px] items-center justify-between px-4"
        }
      >
        <img src={"/Re_paint.svg"} alt={"Re:paint"} />
        <nav>
          <ul className={"flex gap-4"}>
            {menuList.map((menu) => (
              <li key={menu}>
                <a
                  href={"/"}
                  className={"underline duration-300 hover:text-purple"}
                >
                  {menu}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
