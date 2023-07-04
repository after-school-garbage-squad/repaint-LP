export function Header() {
  return (
    <header className={"fixed h-16 w-full bg-background"}>
      <div
        className={
          "m-auto flex h-full w-full max-w-[1200px] items-center justify-between px-4"
        }
      >
        <img src={"/Re_paint.svg"} alt={"Re:paint"} />
        <nav>
          <a className={"font-normal"} href={"/"}>
            アプリについて
          </a>
          <a href={"/"}>使い方</a>
          <a href={"/"}>ダウンロード</a>
          <a href={"/"}>test</a>
        </nav>
      </div>
    </header>
  );
}
