import type { AppProps } from 'next/app'
import '../../../packages/config/global.css'

export default function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}