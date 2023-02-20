import styles from "./headerBanner.module.scss";

interface ISectionOneProps {
    image: string;
    mainText: string;
    subText: string;
    style?: any;
    withDownloadButton?: boolean;
}

import React, {useState} from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";
import {Card, Fade, Modal} from "@mui/material";
import Form from "@/components/form";

const HeaderBanner = ({...props}: ISectionOneProps) => {
    const [openModal, setModalOpen] = useState(false);

    const handleModalOpen = () => {
        setModalOpen(true);
    };

    const handleModalClose = () => {
        setModalOpen(false);
    };

    return (
        <>
        <Grid container className={styles.container}>
            <Grid item xs={12} sm={6} className={styles.textContainer}>
                <Typography variant="h2">{props.mainText}</Typography>
                <Typography variant="subtitle1">{props.subText}</Typography>
                <Button
                    style={{
                        marginTop: "1rem",
                        background: "#000"
                    }}
                    onClick={handleModalOpen}
                    variant="contained" color="primary">
                    Download Whitepaper
                </Button>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={styles.modal}
                    open={openModal}
                    onClose={handleModalClose}
                    closeAfterTransition
                >
                    <Fade in={openModal}>
                        <Card className={styles.modalContent}>
                            <h2 id="transition-modal-title">Download Whitepaper</h2>
                            <p id="transition-modal-description">
                                Thank you for your interest in our whitepaper. Please fill out the form below to download the whitepaper.
                            </p>
                            <Form modalState={setModalOpen}/>
                        </Card>
                    </Fade>
                </Modal>

            </Grid>
            <Grid sx={{ display: { sm: 'none' } }} item xs={12} sm={6}>
                <Box component="img" src={props.image} className={styles.imageContainer} />
            </Grid>
        </Grid>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}
                 component="img"
                 style={{
                     position: "absolute",
                     top: "-40px",
                     right: "-40px",
                     width: "700px",
                     height: "700px"
                 }}
                 src={props.image} className={styles.imageContainer} />
        </>
    );
};

export default HeaderBanner;