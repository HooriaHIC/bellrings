import App from "next/app";
import Router from 'next/router';
import Head from "next/head";
import "../styles/globals.css";
import { createContext } from "react";
import { getStrapiMedia } from "../lib/media";
import { fetchAPI } from "../lib/api";
import NProgress from 'nprogress'; 
import 'nprogress/nprogress.css'; //styles of nprogress

// Store Strapi Global object in context
export const GlobalContext = createContext({});

Router.events.on('routeChangeStart', () => NProgress.start()); Router.events.on('routeChangeComplete', () => NProgress.done()); Router.events.on('routeChangeError', () => NProgress.done());  

const MyApp = ({ Component, pageProps }) => {
  const { global } = pageProps;

  
  if (typeof window !== "undefined") {
    window.addEventListener('scroll', () => {
      document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
    }, false);
  }
  
  return (
    <>
      <Head>
        <link rel="shortcut icon" href={getStrapiMedia(global.favicon)} />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link 
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        />
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossOrigin="anonymous"/>
      </Head>
      <GlobalContext.Provider value={global}>
        <Component {...pageProps} />
      </GlobalContext.Provider>
      
      <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossOrigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/gsap.min.js" integrity="sha512-cdV6j5t5o24hkSciVrb8Ki6FveC2SgwGfLE31+ZQRHAeSRxYhAQskLkq3dLm8ZcWe1N3vBOEYmmbhzf7NTtFFQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    </>
  );
};

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (ctx) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx);
  // Fetch global site settings from Strapi
  const global = await fetchAPI("/global");
  // Pass the data to our page via props
  return { ...appProps, pageProps: { global } };
};

export default MyApp;