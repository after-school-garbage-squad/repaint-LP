import { ExplainCard } from "./componets";

export function AboutSection() {
  return (
    <section className={"w-full"}>
      <div className={"mx-auto max-w-[1200px] px-4"}>
        <h2 className={"mt-8 w-max border-b-2 border-pink px-2 text-2xl"}>
          アプリについて
          <span className={"ml-3 hidden text-lg text-blue md:inline"}>
            What is &quot;Repaint&quot;?
          </span>
        </h2>
        <p className={"mt-4  px-4 "}>
          Re:paintは、会場の各地を周り、モノクロの写真・絵を色づけていくアプリです。
          <br />
          なにげなく会場を周ることに楽しみを付け加えます。
        </p>
        <div
          className={
            "mx-auto mt-16 flex w-max flex-col flex-wrap gap-4 md:w-full md:flex-row md:justify-between"
          }
        >
          <ExplainCard
            cardIndex={1}
            text={
              "イベント会場で記念写真を撮り、アプリ内にモノクロな写真として取り込まれます。"
            }
            icon={"openmoji:camera"}
          />
          <ExplainCard
            cardIndex={1}
            text={
              "イベント会場で記念写真を撮り、アプリ内にモノクロな写真として取り込まれます。"
            }
            icon={"openmoji:camera"}
          />
          <ExplainCard
            cardIndex={1}
            text={
              "イベント会場で記念写真を撮り、アプリ内にモノクロな写真として取り込まれます。"
            }
            icon={"openmoji:camera"}
          />
          <ExplainCard
            cardIndex={1}
            text={
              "イベント会場で記念写真を撮り、アプリ内にモノクロな写真として取り込まれます。"
            }
            icon={"openmoji:camera"}
          />
        </div>
      </div>
    </section>
  );
}
