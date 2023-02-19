import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import {Layout} from "antd";
import HeaderBar from "@/components/headerBar";
import FooterBar from "@/components/footerBar";
import {CssBaseline} from "@mui/material";
import Box from "@mui/material/Box";

const {Content} = Layout;

export default function App({Component, pageProps}: AppProps) {
    return (
        <div>
            <CssBaseline />
            <HeaderBar/>
            <Box>
                <Component {...pageProps} />
            </Box>
            <FooterBar/>
        </div>
    )
}
