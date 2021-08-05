import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import useStyles from './style';


function ButtonStart() {
    const classes = useStyles();
    const [state, setstate] = useState(false)
    const changeState = () => {
        setstate(!state)
    }
    useEffect(() => {
        state ? gsap.to(cardRef.current, {
            scale: 1.5,
            rotate: 360,
            duration: 1.2
        })
            : gsap.to(cardRef.current, {
                scale: 1,
                rotate: 0,
                duration: 1.2
            })
    }, [state])
    const cardRef = useRef(null)
    return (
        <div
            className={classes.card}
            onClick={changeState}
            ref={cardRef}
        >
            Entrer
        </div>
    )
}

export default ButtonStart
