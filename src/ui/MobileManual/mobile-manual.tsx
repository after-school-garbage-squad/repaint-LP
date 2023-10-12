import { Icon } from "@iconify/react";

export const MobileManual = () => {
  return (
    <section title="マニュアル">
      <h1 className="mx-2 mt-8 text-xl">アプリの使い方</h1>
      <div className="mx-auto mt-4 flex max-w-xl flex-col gap-4 px-2 text-sm">
        <div className="flex items-center justify-between gap-2 rounded-lg bg-beige p-2 shadow-md">
          <div>
            <Icon
              icon="fluent-emoji:mobile-phone"
              className="flex-1 text-7xl"
            />
          </div>
          <div className="grid flex-auto place-items-center gap-2">
            <h2 className="w-max rounded-lg bg-white px-4">イベントへの参加</h2>
            <p>参加用QRコードをアプリ内から読み取ろう。</p>
          </div>
        </div>
        <div className="flex items-center justify-between gap-2 rounded-lg bg-beige p-2 shadow-md">
          <div className="grid flex-auto place-items-center gap-2">
            <h2 className="w-max rounded-lg bg-white px-4">
              パレットを集めよう
            </h2>
            <p>「パレット」を集めて写真に色をつけていこう。</p>
          </div>
          <div>
            <Icon icon="fluent-emoji:selfie" className="flex-1 text-7xl" />
          </div>
        </div>
        <div className="flex items-center justify-between gap-2 rounded-lg bg-beige p-2 shadow-md">
          <div>
            <Icon icon="fluent-emoji:handshake" className="flex-1 text-7xl" />
          </div>
          <div className="grid flex-auto place-items-center gap-2">
            <h2 className="w-max rounded-lg bg-white px-4">パレットの集め方</h2>
            <p>
              ユーザー同士てすれ違うことでパレットを交換できる可能性があります。会場を回って色々な人とすれ違いましょう。
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between gap-2 rounded-lg bg-beige p-2 shadow-md">
          <div className="grid flex-auto place-items-center gap-2">
            <h2 className="w-max rounded-lg bg-white px-4">パレットの集め方</h2>
            <p>会場内の専用QRコードを読み取ることでパレットを入手することができます。</p>
          </div>
          <div>
            <Icon
              icon="fluent-emoji:palm-down-hand"
              className="flex-1 text-7xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
