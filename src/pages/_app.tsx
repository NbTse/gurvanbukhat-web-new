import Head from "next/head";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import { SWRConfig } from "swr";

import "@/styles/globals.scss";
import Layout from "@/components/layout";
import fetcher from "@/lib/utils/axios";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Гурван бухат</title>
                <meta
                    name="viewport"
                    content="width=device-width, height=device-height, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, shrink-to-fit=no"
                />
            </Head>

            <NextNProgress
                color="#2154EC"
                startPosition={0.3}
                stopDelayMs={200}
                height={3}
                showOnShallow={true}
            />

            <SWRConfig
                value={{
                    refreshInterval: 0,
                    revalidateOnFocus: false,
                    shouldRetryOnError: false,
                    fetcher,
                }}
            >
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </SWRConfig>
        </>
    );
}
