import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Add a class to the body to enable the gradient background
    document.body.classList.add('bg-gradient');
  }, []);

  return (
    <div className="min-h-screen">
      <Component {...pageProps} />
    </div>
  );
}
