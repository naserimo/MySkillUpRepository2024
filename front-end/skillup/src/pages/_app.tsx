// src/pages/_app.tsx
import type { AppProps } from 'next/app';
import '../styles/styles.css';  // Import your global CSS here


const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
