import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styles from './form.module.scss';
import axios from "axios";
import {Alert, AlertTitle} from "@mui/material";

const Form = ({modalState}: any) => {
    const [fullName, setFullName] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState(false);

    const formUrl = "https://script.google.com/macros/s/AKfycbwUnTnYBX5Mah7mO4KtBP3IlctMidK_Otq6gqMFT9MoOwg9Ikk8SeBt0jREl79IfTk/exec";

    const handleSubmit = (e: any) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append("name", fullName);
        formData.append("email", email);
        formData.append("jobTitle", jobTitle);
        formData.append("insertedAt", new Date().toISOString());

        axios.post(formUrl, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then((res) => {
            console.log(res);
            setError(false);
            setFullName('');
            setJobTitle('');
            setEmail('');
            modalState(false);
        }).catch((err) => {
            console.log(err);
            setError(true);
        });
    };

    return (
        <>
            {
                error ?
                    <Alert severity="error">
                        <AlertTitle>Error</AlertTitle>
                        Error downloading Whitepaper
                    </Alert>
                    : <></>
            }
        <form onSubmit={handleSubmit} className={styles.form}>
            <TextField
                required
                label="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className={styles.name}
            />
            <TextField
                label="Job Title"
                value={jobTitle}
                onChange={(e: any) => setJobTitle(e.target.value)}
                className={styles.jobTitle}
            />
            <TextField
                required
                label="Email"
                value={email}
                onChange={(e: any) => setEmail(e.target.value)}
                className={styles.email}
            />
            <Button type="submit" className={styles.submit}>
                Download Whitepaper
            </Button>
        </form>
            </>
    );
};

export default Form;
