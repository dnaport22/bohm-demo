import styles from "./footerBar.module.scss";
import {Divider, Layout, Row} from "antd";
import Box from "@mui/material/Box";

const {Footer} = Layout;

export default function FooterBar() {
    return (
        <Box style={{padding: "2rem"}}>
            <Divider/>
            <Footer>
                <Row className={styles.container}>
                    <div>
                        <p>Bohm</p>
                        2023 © Bohm <br/>
                        All Rights Reserved
                    </div>
                    <div>
                        BOHM.WORK <br/>
                        THESEUS X <br/>
                        GRAND UNION STUDIOS 2.12 <br/>
                        332 LADBROKE GROVE <br/>
                        LONDON W10 5AD <br/>
                        51.5072° N, 0.1276° <br/>
                    </div>
                </Row>
            </Footer>
        </Box>
    )
}