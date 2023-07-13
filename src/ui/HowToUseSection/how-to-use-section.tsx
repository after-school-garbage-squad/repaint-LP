import { Icon } from "@iconify/react";

import { StepCard } from "./components";

import type { StepCardProps } from "./components";

const iconStyle = "h-auto w-12";

const stepCardList: StepCardProps[] = [
  {
    number: 1,
    text: (
      <p>
        スマートフォンのストアページからアプリを
        <a href={"/"} className={"text-blue"}>
          ダウンロード
        </a>
        します。
      </p>
    ),
    children: (
      <div className={"flex gap-2"}>
        <Icon className={`${iconStyle}`} icon={"openmoji:mobile-phone"} />
        <Icon className={"h-auto w-8"} icon={"openmoji:fast-reverse-button"} />
        <img
          className={`${iconStyle}`}
          src={"/icon.png"}
          alt={"repaint icon"}
        />
      </div>
    ),
  },
  {
    number: 2,
    text: <p>アプリの起動時ぶに、位置情報と通知の許可をお願いします。</p>,
    children: (
      <div className="flex gap-2">
        <Icon
          className={`${iconStyle}`}
          icon={
            "streamline:interface-alert-alarm-bell-1-notification-vibrate-ring-sound-alarm-alert-bell-noise"
          }
        />
        <Icon
          className={`${iconStyle}`}
          icon={
            "streamline:travel-map-location-compass-1-arrow-compass-location-gps-map-maps-point"
          }
        />
      </div>
    ),
  },
  {
    number: 3,
    text: (
      <p>
        起動後、スタート画面からイベント参加用QRコードを読み取り、参加します。
        <br />
        （参加者用QRはイベント運営者から配布されますので、運営者の指示に従ってください）
      </p>
    ),
    children: (
      <img
        loading="lazy"
        className="w-52"
        src="/Explain.svg"
        alt="smatphone screen"
      />
    ),
  },
  {
    number: 4,
    text: (
      <p>
        イベントに参加できたら、会場にある撮影スペースで写真を撮影し、「QRコードを表示ボタン」からQRコードを表示し、イベント運営者に提示することで、撮影した写真をアプリに取り込むことができます。
        <br />
        (撮影は任意で、撮影しない場合はイベント運営者側で用意されたデフォルト画像でRe:paintを使用することができます。)
      </p>
    ),
    children: (
      <img
        loading="lazy"
        className="w-52"
        src="/Home.png"
        alt="smatphone screen"
      />
    ),
  },
  {
    number: 5,
    text: (
      <p>
        イベント各地にあるスポットで、QRコードを読み取り、「パレット」を取得することで写真に色づけていくことができます。
        また。「パレット」はスポットに近づくと、他のRe:paintの参加者の持っている「パレット」と自動で交換されます。
      </p>
    ),
  },
  {
    number: 6,
    text: (
      <p>
        「パレット」を集めて完成を写真の目指しましょう！完成した写真はアプリ内でダウンロードすることができます🎨
      </p>
    ),
  },
];

export function HowToUseSection() {
  return (
    <section className={"w-full"}>
      <div className={"mx-auto max-w-[1200px] px-4"}>
        <h2
          id="howtouse"
          className={"mt-8 w-max border-b-2 border-pink px-2 text-2xl"}
        >
          アプリの使い方
          <span className={"ml-3 hidden text-lg text-blue md:inline"}>
            How to use &quot;Repaint&quot;?
          </span>
        </h2>
        <ul className={"mt-4 flex flex-col gap-8"}>
          {stepCardList.map((index) => (
            <li key={index.number}>
              <StepCard {...index} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
