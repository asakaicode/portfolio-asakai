import Head from "next/head";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <Head>
        <title>asakaicodeのポートフォリオ</title>
        <meta name="description" content="asakaicodeのポートフォリオです。" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
