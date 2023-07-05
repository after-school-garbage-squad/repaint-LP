export function Hero() {
  return (
    <section className={"h-screen bg-beige"}>
      <div
        className={
          "m-auto h-full max-w-[1200px] bg-[url('/hero-bg.png')] bg-[length:200%] bg-center bg-no-repeat px-4 md:bg-cover"
        }
      >
        <div className={"flex h-full flex-col justify-center gap-2"}>
          <h1 className={"text-2xl"}>イベントにアソビ心を</h1>
          <p className={"text-xl"}>Coming soon...</p>
        </div>
      </div>
    </section>
  );
}
