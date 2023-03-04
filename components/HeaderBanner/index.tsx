import styles from "./headerBanner.module.scss";

import React, {useState} from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";
import {Card, Fade, Modal} from "@mui/material";
import Form from "@/components/form";

const HeaderBanner = () => {
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
                <p className={styles.bannerMainText}>
                    Dedicated to
                    the creation of
                    a waste-free future
                    and a custom-made world
                </p>
                <Typography variant="subtitle1">
                    An on-chain solution for the Architecture, Engineering and Construction industry
                </Typography>
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
                <Box component="img" src={"logo.png"} className={styles.imageContainer} />
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
                 src={"logo.png"} className={styles.imageContainer} />
        </>
    );
};

export default HeaderBanner;