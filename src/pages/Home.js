import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import useStyles from './style';
import Typewriter from 'typewriter-effect';
import Grid from '@material-ui/core/Grid';
import ButtonStart from '../Components/ButtonStart';
import Button from '@material-ui/core/Button';

import web from '../resources/web.png'



function Home() {
    const classes = useStyles()
    const [toggleBtn, setToggleBtn] = useState(false)
    return (
        <>
            <Grid container spacing={1} className={classes.title} direction="row">
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter.typeString('Bienvenue à MedDev, Dev Full-Stack')
                            .callFunction(() => {
                                console.log('chaînes tapées!');
                            })
                            .pauseFor(2500)
                            .deleteChars(10)
                            .callFunction(() => {
                                console.log('Toutes les chaînes ont été supprimées');
                            })
                            .typeString('<span style="color:#fbc531">JavaScript </span>')
                            .pauseFor(2500)
                            .deleteChars(11)
                            .typeString('<span style="color:#00a8ff">CSS</span>')
                            .pauseFor(2500)
                            .deleteChars(3)
                            .typeString('<span style="color:#0097e6">Reactjs </span>')
                            .pauseFor(2500)
                            .deleteChars(8)
                            .typeString('<span style="color:#44bd32">Vuejs </span>')
                            .pauseFor(2500)
                            .deleteAll()
                            .typeString('<span style="color:#273c75">Toutes les nouvelles technologies :)</span>')
                            .pauseFor(2500)
                            .deleteAll()
                            .typeString('<span style="color:#273c75">Inscrivez-vous dés maintenent !</span>')
                            .callFunction(() => {
                                setToggleBtn(true)
                            })
                            .start();
                    }}
                />
            </Grid>
            <Grid item>
                <img src={web} alt="" className={classes.img} />
                {toggleBtn ? (
                    <Button variant="outlined" color="default" className={classes.button}>
                        S'inscrire
                    </Button>
                ) : null}
            </Grid>
            <ButtonStart />

        </>
    )
}

export default Home
