import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import Container from '@material-ui/core/Container'
import useStyles from './style';
function Footer() {
    const classes = useStyles()
    return (
        <>
            <Container maxWidth="xs" className={classes.footer}>
                <FaInstagram className={classes.mediasBtn} />
                < FaLinkedin className={classes.mediasBtn} />
                < FaTwitter className={classes.mediasBtn} />
                < FaWhatsapp className={classes.mediasBtn} />
            </Container>

        </>
    )
}

export default Footer
