import styles from "./TriangleInfoSection.module.scss";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import React from "react";

export default function TriangleInfoSection() {
    return (
        <>
            <Grid item xs={18} sm={6} className={styles.BOHMInfoText}>
                <p>By intelligently connecting all parties in any architectural and
                    construction process, BOHM ensures smooth handovers, mutual goals and united conversations.
                    Time, resources and money are optimised and the entire chain is underpinned by
                    efficiency and transparency. Commercial and environmental goals operate in support of one
                    another and what would have been waste becomes profit.</p>
            </Grid>
            <Grid container className={styles.triangleContainer}>
                <Box component="img" src={"triangle.png"} className={styles.triangleImage} />
                <Box component="img" src={"triangle.png"} className={styles.triangleImage} />

                <div className={styles.triangleTextContainer}>
                    <p>BOHM automates the transactional activities of the AEC industry
                        <br/><br/>
                        Securely validating process and optimising outcomes</p>
                </div>
            </Grid>
        </>
    )
}