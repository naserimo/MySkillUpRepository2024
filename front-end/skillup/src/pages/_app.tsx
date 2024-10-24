// pages/_app.tsx
import type { AppProps } from 'next/app';
import '../styles/globals.css'; // Import global CSS if any
import Layout from './Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
