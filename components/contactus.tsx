import Head from "next/head";
import SectionOne from "@/components/sectionOne";
import SectionTwo from "@/components/sectionTwo";
import SectionThree from "@/components/sectionThree";
import SectionFour from "@/components/sectionFour";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import styles from "@/components/form/form.module.scss";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React from "react";
import {TextareaAutosize} from "@mui/base";

export default function Contactus() {
    const [fullName, setFullName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");
    const [error, setError] = React.useState(false);

    return (
        <div className={"contactUs"}>
            <Grid container rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} sm={6}>
                    <Box style={{
                        backgroundColor: "#fff",
                        padding: "2rem",
                        borderRadius: "13px",
                        margin: "2rem"
                    }}>
                        <h1>Contact Us</h1>
                        <p>Explore the future of AEC with us.<br/>Feel free to get in touch.</p>
                        <form onSubmit={() => {}} className={styles.form}>
                            <TextField
                                required
                                label="Full Name"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                className={styles.name}
                            />
                            <TextField
                                required
                                label="Email"
                                value={email}
                                onChange={(e: any) => setEmail(e.target.value)}
                                className={styles.email}
                            />
                        </form>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box style={{
                        backgroundColor: "#fff",
                        padding: "2rem",
                        borderRadius: "13px",
                        margin: "2rem",
                        display: "flex",
                        flexDirection: "column",
                        height: "85%",
                    }}>
                    <TextareaAutosize
                        required
                        aria-label="minimum height"
                        placeholder={"Message"}
                        value={email}
                        onChange={(e: any) => setMessage(e.target.value)}
                        className={styles.email}
                        style={{
                            height: "100%",
                        }}
                    />
                    <Button type="submit" className={styles.submit}>
                        Send Message
                    </Button>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}