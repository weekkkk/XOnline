import { Layout } from "./layout";
import "./global.css";

import { Montserrat } from "next/font/google";
import { useEffect } from "react";
const montserrat = Montserrat({ subsets: ["cyrillic", "latin"] });

export function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} className />
    </Layout>
  );
}
