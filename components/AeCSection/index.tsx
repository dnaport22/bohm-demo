import styles from "./AeCSection.module.scss";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import React from "react";

export default function AeCSection() {
    return (
        <div style={{
            fontFamily: "Inter !important",
            fontSize: "1.4rem !important",
            marginTop: "10rem",
        }}>
            <Grid container item className={styles.AContainer}>
                <Grid item xs={8} sm={4} className={styles.ARHSImage}>
                    <Box component="img" src={"tile1.png"}/>
                </Grid>
                <Grid item xs={12} sm={6} className={styles.AtextContainer}>
                    <p>The AEC industry and the built
                        environment is responsible for
                        nearly 40% of global CO<sub style={{
                            fontSize: "1rem",
                        }}>2</sub></p>
                </Grid>
            </Grid>

            <Grid container className={styles.EContainer}>
                <Grid item xs={14} sm={6} className={styles.ERHSImage}>
                    <Box component="img" src={"tile2.png"}/>
                </Grid>
                <Grid item xs={10} sm={4} className={styles.EtextContainer}>
                    <p>Communication between AEC disciplines is fragmented & ineffective</p>
                </Grid>
            </Grid>

            <Grid container className={styles.CContainer}>
                <Grid item xs={12} sm={7} className={styles.CtextContainer}>
                    <p>Procurement of goods and services is wasteful, costly and prone to error
                    </p>
                </Grid>
                <Grid item xs={12} sm={5} className={styles.CLHSImage}>
                    <Box component="img" src={"tile3.png"} />
                </Grid>
            </Grid>

        </div>
    )
}