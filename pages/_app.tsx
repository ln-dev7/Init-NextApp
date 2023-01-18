import '../styles/index.scss'
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { AppProps } from "next/app";

import Router from "next/router";
import NProgress from "nprogress"; //nprogress module
//Route Events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

NProgress.configure({ showSpinner: false });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
