import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    card: {
        background: 'linear-gradient(0deg, rgb(112, 96, 96), rgb(192, 150, 150))',
        width: '20vw',
        height: '20vh',
        borderRadius: '20px 0',
        margin: '20vw auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: ' rgb(247, 241, 238)',
        letterSpacing: '5px',
        fontSize: '2.5rem',
        padding: '10vh 10vw',
        fontWeight: 'bolder',
        cursor: 'pointer',

    },
    menu: {
        textDecoration: 'none',
        padding: '9vh 9vw',
        marginBottom: '5vh',
        height: '7vh',
        color: 'aqua',
    },
    btn: {
        float: 'right',
        width: '3vw',
        height: '6vh',
        borderRadius: ' 50%',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn_icon: {
        width: '5vw',
        height: '9vh',
        borderRadius: '50%',
    },

    nav: {
        position: 'fixed',
        left: 0,
        top: 0,
        height: '100vh',
        backgroundColor: '#253053',
        transition: 'transform 0.4s ease-in-out',
        [theme.breakpoints.down("md")]: {
            transform: 'translateX(-100 %)'
        },
    },

    nav_active: {
        transform: 'translateX(0)',
    },
    root: {
        padding: '1rem 1rem 1rem 0.5rem',
        margin: 0,
        transition: '0.3s',
        borderRadius: 3,
    },
    sideMenu: {
        // display: 'flex',
        position: 'fixed',
        flexDirection: 'column',
        // position: 'absolute',
        left: 0,
        top: 0,
        width: '320px',
        height: '100%',
        backgroundColor: '#253053',
        transition: 'transform 0.4s ease-in-out'
    },
    grid: {
        // fontFamily: 'Rubik , Verdana ,Futura',
        // fontSize: 14,
        // lineHeight: '1rem',
        // color: '#3c4d6f',
        // height: '10vh',
        // border: ' 1px solid #c5bcbc',
        // background: '#f4f7fa',
        // '& .MuiIconButton-label': {
        //     padding: '1.5vw 3vw'
        // },
        [theme.breakpoints.down("md")]: {
            display: 'none'
        },
    },
    navbar: {
        backgroundColor: '#487eb0',
        width: '25vw',
        // height: '11.5vh',
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center',
        cursor: 'pointer',
    },

    menuBars: {
        marginLeft: '2rem',
        fontSize: '2rem',
        background: 'none',
    },

    navMenu: {
        backgroundColor: '#487eb0',
        width: '250px',
        height: '88.7vh',
        // display: 'flex',
        justifyContent: 'center',
        position: 'fixed',
        // top: '12.5vh',
        left: '-100%',
        transition: 'all 2s ease-in-out',
    },

    navMenuActive: {
        left: 0,
        transition: '450ms ease-out',
        backgroundColor: '#487eb0',
        width: '25vw',
        height: '88.7vh',
        
    },

    navText: {
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center',
        margin: '0vh 2vw',
        padding: '2vw 2vw',
        listStyle: 'none',
        width: '90%',
        height: '100%',
        textDecoration: 'none',
        backgroundColor: '#487eb0',
        '&:hover': {
            color: '#c23616',
            width: '60%',
            height: '80%',
            padding: '2vw 3vw'
        },
    },
    navMenuItems: {
        width: '100%',
    },
    span: {
        textDecoration: 'none',
        marginLeft: '1vw',
        color: '#dcdde1',
        '&:hover': {
            color: '#e1b12c',
        },
    },
    appMain: {
        paddingLeft: "320px",
        width: '100%'
    },
    back: {
        backgroundColor: '#487eb0'
    },
    searchInput: {
        opacity: '0.6',
        // padding: '0px 8px',
        color: '#dcdde1',
        padding: `0px ${theme.spacing(1)}px`,
        fontSize: '0.8rem',
        '&:hover': {
            backgroundColor: '#0097e6'
        },
        '& .MuiSvgIcon-root': {
            marginRight: theme.spacing(1)
        }
    },
    btnRoot: {
        color: '#dcdde1',
    },
    btnLabel: {
        color: '#dcdde1',
    },
    iconBtn: {
        marginLeft: 'auto',
        flexBasis: 'auto',
    },
    footer: {
        display: 'flex',
        float: 'right',
        paddingLeft: '15vw',
        paddingRight: '5vw',
        margin: '5vh 0 5vh 20vw'
    },
    mediasBtn: {
        width: '5vw',
        color: '#dcdde1',
        height: '9vh',
        justifyContent: 'center',
        marginRight: '2vw',
        cursor: 'pointer',
        '&:hover': {
            color: '#e1b12c',

        },
    }




}));