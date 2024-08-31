"use client"

import { makeStyles } from "@mui/styles";

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
