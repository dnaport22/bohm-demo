import styles from "./sectionOne.module.scss";

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

const SectionOne = ({...props}: ISectionOneProps) => {
    const [openModal, setModalOpen] = useState(false);

    const handleModalOpen = () => {
        setModalOpen(true);
    };

    const handleModalClose = () => {
        setModalOpen(false);
    };

    return (
        <Grid container className={styles.container} style={{
            padding: "2rem 0 4rem 0",
        }}>
            <Grid item xs={12} sm={6}>
                <Box component="img" src={props.image} className={styles.imageContainer} />
            </Grid>
            <Grid item xs={12} sm={6} className={styles.textContainer}>
                <Typography variant="h4">{props.mainText}</Typography>
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
        </Grid>
    );
};

export default SectionOne;