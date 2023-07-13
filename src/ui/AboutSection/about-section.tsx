import { SectionLayout } from "../shared/SectionLayout";

import { ExplainCard } from "./componets";

import type { ExplainCardProps } from "./componets";
const explainList: ExplainCardProps[] = [
  {
    cardIndex: 1,
    text: "イベント会場で記念写真を撮り、アプリ内にモノクロな写真として取り込まれます。",
    icon: "openmoji:camera",
  },
  {
    cardIndex: 2,
    text: "モノクロな写真は、写真を構成する色が入っている「パレット」を集めることで、色づけていくことができます。",
    icon: "openmoji:artist-palette",
  },
  {
    cardIndex: 3,
    text: "「パレット」は、イベント会場の各地にある、特定のスポットで他の人と交換できたり、スポット内にあるQRコードを読み取ることで取得できます。",
    icon: "openmoji:wifi",
  },
  {
    cardIndex: 4,
    text: "「パレット」をすべて集めきると、色づいた写真になり、ダウンロードすることができます。",
    icon: "openmoji:picture",
  },
];

export function AboutSection() {
  return (
    <SectionLayout
      title="アプリについて"
      subTitle={'what is "Re:paint"?'}
      sectionId="about"
    >
      <p className={"mt-4  px-4 "}>
        Re:paintは、会場の各地を周り、モノクロの写真・絵を色づけていくアプリです。
        <br />
        なにげなく会場を周ることに楽しみを付け加えます。
      </p>
      <ul
        className={
          "m-auto mt-16 flex w-max flex-col flex-wrap justify-center gap-8 md:w-full md:flex-row"
        }
      >
        {explainList.map((index) => (
          <li key={index.cardIndex}>
            <ExplainCard
              cardIndex={index.cardIndex}
              text={index.text}
              icon={index.icon}
            />
          </li>
        ))}
      </ul>
    </SectionLayout>
  );
}
