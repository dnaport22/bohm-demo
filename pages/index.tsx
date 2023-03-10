import Head from 'next/head'
import HeaderBanner from "@/components/HeaderBanner";
import React from "react";
import AeCSection from "@/components/AeCSection";
import TriangleInfoSection from "@/components/TriangleInfoSection";
import Box from "@mui/material/Box";
import styles from "@/components/HeaderBanner/headerBanner.module.scss";

export default function Home() {
    return (
        <>
            <Head>
                <title>Bohm</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter" />
            </Head>
            <Box style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                alignContent: "center",
                height: "100vh",
                fontSize: "1.2rem"
            }}>
                <Box component="img" src={"logo.png"} style={{
                    width: "50px"
                }} />
                <p>Under Construction</p>
            </Box>
        </>
    )
}
