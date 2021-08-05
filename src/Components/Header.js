import { AppBar, Badge, Grid, IconButton, InputBase, Toolbar, makeStyles, GridListTile, ListSubheader } from '@material-ui/core'
import React, { useState } from 'react'
import { TiThMenu } from "react-icons/ti";
import { TiTimes } from "react-icons/ti";
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import SearchIcon from '@material-ui/icons/Search';
import { IconContext } from 'react-icons';
import { SidebarData } from './SideMenu';
import ButtonStart from "./ButtonStart";

import useStyles from './style';


export default function Header() {
    const [toggleNav, setToggleNav] = useState(false)

    const toggleNavFunc = () => {
        setToggleNav(!toggleNav)
    }
    const classes = useStyles()
    return (
        <>
            <IconContext.Provider value={{ color: '#dcdde1' }}>
                <AppBar position='static' className={classes.back}>
                    <Toolbar>
                        <Grid container alignItems='center'>
                            {toggleNav ?
                                <Grid item lg={2} md={2} xs={2} className={classes.navbar} onClick={toggleNavFunc}>
                                    <TiTimes className={classes.menuBars} />
                                </Grid>
                                :
                                <Grid item lg={2} md={2} xs={2} className={classes.navbar} onClick={toggleNavFunc}>
                                    <TiThMenu className={classes.menuBars} />
                                </Grid>
                            }
                            <Grid item lg={4} md={4} xs={4} >
                                <InputBase
                                    placeholder='Search'
                                    className={classes.searchInput}
                                    startAdornment={<SearchIcon fontSise='small' />}
                                />
                            </Grid>
                            <Grid item lg={6} md={6} xs={6} className={classes.iconBtn}>
                                <IconButton classes={{ root: classes.btnRoot, label: classes.btnLabel }}>
                                    <Badge badgeContent={4} color='secondary'>
                                        <NotificationsNoneIcon fontSise='small' style={{ color: '#dcdde1' }} />
                                    </Badge>
                                </IconButton>
                                <IconButton>
                                    <Badge badgeContent={3} color='primary'>
                                        <ChatBubbleOutlineIcon fontSise='small' style={{ color: '#dcdde1' }} />
                                    </Badge>
                                </IconButton>
                                <IconButton>
                                    <Badge color='primary'>
                                        <PowerSettingsNewIcon fontSise='small' style={{ color: '#dcdde1' }} />
                                    </Badge>
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
                <Grid container >
                    <Grid item lg={4} md={4} xs={4} >
                        <nav className={toggleNav ? classes.navMenuActive : classes.navMenu}>
                            {SidebarData.map((item, index) => {
                                return (
                                    <Grid item key={index} >
                                        <Link to={item.path} className={classes.navText}>
                                            <Grid item >
                                                {item.icon}
                                            </Grid>
                                            <Grid item >
                                                <Typography
                                                    variant="h6"
                                                    className={classes.span}
                                                >
                                                    {item.title}
                                                </Typography>
                                            </Grid>
                                        </Link>
                                    </Grid>
                                );
                            })}
                        </nav>
                    </Grid>
                    <Grid item container lg={8} md={8} xs={8}>
                        
                    </Grid>
                </Grid>

            </IconContext.Provider>

        </>
    )
}
