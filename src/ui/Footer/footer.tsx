export function Footer() {
  return (
    <footer className={"flex h-24 flex-col justify-end gap-2 bg-beige"}>
      <div className="flex items-center justify-center gap-4">
        <a href="/terms" className="underline duration-300 hover:text-purple">
          利用規約
        </a>
        <a href="/policy" className="underline duration-300 hover:text-purple">
          プライバシーポリシー
        </a>
      </div>
      <p className={"mb-4 text-center"}>&copy;after school garbage squard</p>
    </footer>
  );
}
