export const joinManualText = [
  {
    title: "Testflightのインストール",
    children: (
      <div>
        <p>
          App Store から
          <a
            href={"https://apps.apple.com/jp/app/testflight/id899247664"}
            className="text-blue underline"
          >
            Testflightアプリ
          </a>
          をダウンロードします。
        </p>
        <img
          src="testflight-store.png"
          alt="testflighのストア"
          width="180"
          className="mx-auto mt-4"
        />
      </div>
    ),
  },
  {
    title: "Re:paintのインストール",
    children: (
      <div>
        <p>
          Testflightアプリをダウンロード後、
          <a
            href="https://testflight.apple.com/join/ZreoO6ws"
            className="text-blue underline"
          >
            こちらのページ
          </a>
          から「テストを開始」ボタンを押してRe:paintをインストールしてください。
        </p>
        <img
          src="tesflight-policy.jpg"
          alt="testflighのストア"
          width="180"
          className="mx-auto mt-4"
        />
      </div>
    ),
  },
  {
    title: "アプリの起動",
    children: (
      <div>
        <p>
          アプリを起動すると、下記画像のような画面が表示される場合があります。された場合は、「テストを開始」をタップしてください。
        </p>
        <img
          src="repaint-lanchar.png"
          alt="testflighのストア"
          width="180"
          className="mx-auto mt-4"
        />
      </div>
    ),
  },
  {
    title: "イベントへの参加",
    children: (
      <p>
        アプリのインストール後、パンフレットやポスターの指示に従ってイベントに参加してください。
      </p>
    ),
  },
];
