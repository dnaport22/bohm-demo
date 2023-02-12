import styles from "./sectionThree.module.scss";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

interface ISectionThreeProps {
    image: string;
    mainText: string;
}

export default function SectionThree({...props}: ISectionThreeProps) {
    return (
        <Box className={styles.container}>
            <img className={styles.image} src={props.image} />
            <Grid className={styles.overlayContainer}>
                <Typography className={styles.text} variant="h4">
                    {props.mainText}
                </Typography>
            </Grid>
        </Box>
    )
}