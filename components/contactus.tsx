import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import styles from "@/components/form/form.module.scss";
import Button from "@mui/material/Button";
import React from "react";
import axios from "axios";

export default function Contactus() {
    const [fullName, setFullName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");
    const [error, setError] = React.useState(false);

    const url = "https://script.google.com/macros/s/AKfycbz_OYdDNrXkmvE5QiezVBuMexLgDa2HU78GN9l6RW9MYh6Sg21TyPe5UP5LuMrdSNYcTA/exec";

    const handleSubmit = (e: any) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append("name", fullName);
        formData.append("email", email);
        formData.append("message", message);
        formData.append("datetime", new Date().toISOString());

        axios.post(url, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then((res) => {
            console.log(res);
            setError(false);
            setFullName('');
            setMessage('');
            setEmail('');
        }).catch((err) => {
            console.log(err);
            setError(true);
        });
    };

    return (
        <div className={"contactUs"}>
            <Grid container rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} sm={6}>
                    <Box style={{
                        backgroundColor: "transparent",
                        padding: "2rem",
                        borderRadius: "13px",
                        margin: "2rem"
                    }}>
                        <h1>Contact Us</h1>
                        <p>Explore the future of AEC with us.<br/>Feel free to get in touch.</p>
                        <form onSubmit={() => {}} className={styles.form} style={{
                            padding: 0
                        }}>
                            <div className={"contactUsFormSmallField"}>
                                <span>Name</span>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Full Name"
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                />
                            </div>

                            <div className={"contactUsFormSmallField"}>
                                <span>Email</span>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <Button onClick={handleSubmit} className={"formButton"}>
                                Send Message
                            </Button>
                        </form>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box style={{
                        backgroundColor: "transparent",
                        padding: "2rem",
                        borderRadius: "13px",
                        margin: "2rem",
                        display: "flex",
                        flexDirection: "column",
                        height: "85%",
                    }}>
                    <textarea
                        required
                        placeholder={"Message"}
                        value={message}
                        onChange={(e: any) => setMessage(e.target.value)}
                        className={"formTextArea"}
                    />
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}