import type { Metadata } from "next";
import { makeStyles } from "@mui/styles";

export const metadata: Metadata = {
  title: "asakaicodeのポートフォリオ",
  description: "asakaiのポートフォリオです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const classes = useStyles()

  return (
    <html lang="ja">
      <body className={classes.root}>{children}</body>
    </html>
  );
}

const useStyles = makeStyles({
  root: {
    alignItems: "center",
  },
})
