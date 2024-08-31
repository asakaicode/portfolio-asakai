import { useEffect, useState } from "react";
import Header from "~/app/components/Header"

export async function generateMetadata({}) {
  return {
    title: 'asakaicodeのポートフォリオ',
    description: 'asakaicodeのポートフォリオです。',
  };
}

export default function Home() {
  const [displayHead, setIsDisplayHead] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [])

  const onScroll = () => {
    if (window.scrollY > 100) {
      setIsDisplayHead(true)
    } else {
      setIsDisplayHead(false)
    }
  }

  return (
    <>
      {displayHead && <Header />}
      <h1 style={{ top: '100px' }}>asakaicodeのポートフォリオ</h1>
    </>
  );
}
