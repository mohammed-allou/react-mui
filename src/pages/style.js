import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    title: {
        display: 'flex',
        top: 0,
        fontSize: '3rem',
        paddingTop: '15vh',
        paddingLeft: '13vw',
        color: '#273c75',
    },
    img: {
        marginTop: '2vh',
        marginLeft: '24vw',
        height: '41vh',
        width: '20vw',
    },
    button: {
        border: '2px solid #0097e6',
        padding: '1vw 5vw',
        marginLeft: '5vw',
        marginBottom: '50vh',
        fontSize: '2rem',
        color: '#0097e6',
        borderRadius: '1vw',
        transition: '1s ease-out',
        '&:hover': {
            border: '2px solid #e1b12c',
            color: '#e1b12c',
            padding: '1vw 4vw',
            background:'#dcdde1'
        },
    },
}))