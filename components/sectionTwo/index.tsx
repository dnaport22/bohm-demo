import styles from "./sectionTwo.module.scss";
import {Col, Row} from "antd";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import React from "react";

interface ISectionOneProps {
    image: string;
    mainText: string;
    subText: string;
    style?: any;
}


export default function SectionTwo({...props}: ISectionOneProps) {
    return (
        <Grid container className={styles.container} style={{
            ...props.style,

        }}>
            <Grid
                style={{
                    paddingBottom: "2rem",
                }}
                item xs={12} sm={6} className={styles.textContainer}>
                <Typography variant="h4" style={{
                    color: "black"
                }}>{props.mainText}</Typography>
                <Typography variant="subtitle1">{props.subText}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Box component="img" src={props.image} className={styles.imageContainer} />
            </Grid>
        </Grid>
    )
}