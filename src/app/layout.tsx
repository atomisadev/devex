"use client";

import { SessionProvider } from "next-auth/react";
import "./globals.css";

export default function RootLayout(props: any) {
  return (
    <html>
      <head></head>
      <body>
        <SessionProvider session={props.session}>
          {props.children}
        </SessionProvider>
      </body>
    </html>
  );
}
