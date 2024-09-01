"use client"

import { useEffect, useState } from "react";
import Header from "~/app/components/Header"

export default function Home() {
  const [isSticked, setIsSticked] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [])

  const onScroll = () => {
    if (window.scrollY > 100) {
      setIsSticked(false)
    } else {
      setIsSticked(true)
    }
  }

  return (
    <>
      <Header isSticked={isSticked} />
      <h1 style={{ top: '100px' }}>asakaicodeのポートフォリオ</h1>
      <p>ようこそ。ここはasakaicodeのポートフォリオです。以下に作品を掲載いたします。今はあまりスタイルを整えていないのですが、これからスタイルを整えていきます。</p>
      <h2>About me</h2>
      <table>
        <tr>
          <td>名前</td>
          <td>asakaicode</td>
        </tr>
        <tr>
          <td>年齢</td>
          <td>26歳</td>
        </tr>
        <tr>
          <td>職業</td>
          <td>エンジニア</td>
        </tr>
        <tr>
          <td>技術スタック</td>
          <td>React, TypeScript, Next.js, MUI, Vercel, Node.js, Express, Firebase, MySQL, Python, Rust</td>
        </tr>
      </table>
      <h2>Works</h2>
      <ul>
        <li>まだ</li>
        <li>目立ったものが</li>
        <li>ない</li>
        <li>これから</li>
        <li>増やしていきます。</li>
      </ul>
    </>
  );
}
