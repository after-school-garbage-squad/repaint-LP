import { Icon } from "@iconify/react/dist/iconify.js";

export const ManualSection: React.FC = () => {
  return (
    <section title="マニュアル">
      <h1 className="mx-2 mt-8 text-xl">アプリの使い方</h1>
      <div className="mt-4 flex flex-col items-center">
        <div className="flex justify-between">
          <Icon icon="fluent-emoji:mobile-phone" className="text-6xl" />
          <div>
            <h2>アプリについて</h2>
            <p>会場内を回ってパレットを集めよう！</p>
          </div>
        </div>
      </div>
    </section>
  );
};
