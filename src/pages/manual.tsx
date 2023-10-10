import { Footer } from "../ui/Footer";
import { Header } from "../ui/Header";
import { ManualSection } from "../ui/ManualSection/manual-section";

const menuList = [
  { href: "/#about", label: "アプリについて" },
  { href: "/#download", label: "ダウンロード" },
  { href: "/manual", label: "マニュアル" },
];

export const Manual: React.FC = () => {
  return (
    <div className="grid h-screen min-h-full">
      <Header menuList={menuList} />
      <div className="mt-16 grid gap-16">
        <main className="mx-auto w-full max-w-[1200px]">
          <ManualSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};
