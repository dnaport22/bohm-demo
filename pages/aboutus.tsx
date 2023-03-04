import styles from "../styles/About.module.scss";
import Head from "next/head";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Contactus from "@/components/contactus";

export default function Aboutus() {
    return (
        <div className={"aboutUsMainContainer"}>
            <Head>
                <title>About Us</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Grid container rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
                <Grid item xs={12} sm={3} className={"aboutLogoContainer"}>
                    <Box component="img" src={"aboutlogo.png"} style={{
                        width: "200px",
                        margin: "1rem"
                    }} />
                </Grid>
                <Grid item xs={12} sm={3} className={"usLogoContainer"}>
                    <Box component="img" src={"uslogo.png"} style={{
                        width: "400px",
                    }} />
                </Grid>
                <Grid item xs={12} sm={3} className={"usLogoContainerText"} style={{
                    fontFamily: "Inter"
                }}>
                    <p>We are a community of architects, engineers, constructors & technologists,
                        driven by the desire to make waste-free working a sector-wide norm</p>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12} sm={6}
                      className={"crossContainerText"}
                      sx={{
                          fontSize: {"xs": "1.2rem", "sm": "1.5rem"},
                          padding: {"xs": "2rem"},
                      }}
                >
                    <p style={{
                            width: "400px",
                            marginLeft: "5rem",
                            fontFamily: "Inter"
                        }}
                    >The result is a world where any built environment is precisely <br/>
                        <br/>
                        cut-to-fit<br/>
                        fit-for-purpose<br/>
                        fit-to-last<br/>
                    </p>
                </Grid>
                <Grid item xs={12} sm={3} className={"crossContainer"}>
                    <Box component="img" src={"cross-section.png"}
                         className={"tileImageContainer"}
                         style={{
                             width: "500px",
                         }}
                    />
                </Grid>
                <div className={"contactContainer"}>
                    <Contactus />
                </div>
            </Grid>
        </div>
    )
}