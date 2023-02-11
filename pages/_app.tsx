import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {Layout} from "antd";
import HeaderBar from "@/components/headerBar";
import FooterBar from "@/components/footerBar";

const {Content} = Layout;

export default function App({Component, pageProps}: AppProps) {
    return (
        <Layout>
            <HeaderBar/>
            <Content>
                <Component {...pageProps} />
            </Content>
            <FooterBar/>
        </Layout>
    )
}
