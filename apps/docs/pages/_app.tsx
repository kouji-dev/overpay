import type { AppProps } from 'next/app'
import '../../../packages/ui/styles/global.css'
import '../../../packages/ui/styles/base.css'

export default function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}