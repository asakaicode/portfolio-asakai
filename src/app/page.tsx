import Header from "~/app/components/Header"

export async function generateMetadata({}) {
  return {
    title: 'asakaicodeのポートフォリオ',
    description: 'asakaicodeのポートフォリオです。',
  };
}

export default function Home() {
  return (
    <><Header /><h1 style={{ top: '100px' }}>asakaicodeのポートフォリオ</h1></>
  );
}
