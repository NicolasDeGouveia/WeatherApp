import React from "react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(
    new QueryClient({
      defaultOptions: {
        queries: { refetchOnWindowFocus: false, suspense: false, retry: false },
      },
    })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ReactQueryDevtools />
        <main className={inter.className}>
          <Component {...pageProps} />
        </main>
      </Hydrate>
    </QueryClientProvider>
  );
}
