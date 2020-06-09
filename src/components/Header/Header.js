import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import styles from './Header.module.css';
import { motion } from "framer-motion";
import cx from 'classnames';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import DirectionsIcon from '@material-ui/icons/Directions';


const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    color: {
        color: "#fff",
    },
    button: {
        margin: theme.spacing(1),
      },
      input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
}));



const Header = ({ handleSearchValue }) => {
    const classes = useStyles();
    return (
        <div>
            <AppBar position="static">
                <Container maxWidth="md" component="main">
                    <Toolbar>
                        {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography align="left">
                            Home
                        </Typography>
                        &nbsp;
                        <Typography align="left">
                                    Newsletter
                        </Typography>
                        <Button color="inherit">Login</Button> */}
                    </Toolbar>
                </Container>
            </AppBar>
            <div className={styles.hero_pattern}>
                <Container maxWidth="md" component="main">
                    <Box pt={10}>
                        <Typography variant="h5" align="left" className={classes.color}>
                            US Government Jobs
                        </Typography>
                    </Box>
                    <Box pb={1} pt={4}>
                        <Typography variant="h3" align="left" className={classes.color}>
                            Leading job board for federal departments and agencies jobs.
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant="h6" align="left" className={classes.color}>
                            Cryptocurrency Jobs curates the best new federal government jobs doing interesting work.
                        </Typography>
                    </Box>
                    <Box pb={3} pt={2}>
                        <Grid container spacing={10} justify="space-between">
                            <Grid item>
                                <motion.button
                                    whileHover={{ y: -4 }}
                                    whileTap={{ scale: 0.9 }}
                                    className={cx(styles.btn, styles.btn_primary)}
                                >
                                    Find a job
                                </motion.button>

                                <motion.button
                                    whileHover={{ y: -4 }}
                                    whileTap={{ scale: 0.9 }}
                                    className={cx(styles.btn, styles.btn_secondary, classes.button)}
                                >
                                    Post a job
                                </motion.button>

                            </Grid>
                        </Grid>

                    </Box>
                </Container>
                <Container maxWidth="md" component="section">
                    <Box mt={5} mb={2}>
                        <Paper component="form" className={classes.root}>
                            
                                <IconButton className={classes.iconButton} aria-label="menu">
                                    <MenuIcon />
                                </IconButton>

                                <InputBase 
                                    className={classes.input}
                                    placeholder="Job Title, Keywords or Location"
                                    inputProps={{ 'aria-label': 'Job Title, Keywords or Location' }}
                                    onChange={(e) => handleSearchValue(e.target.value)}
                                />

                                <IconButton type="submit" className={classes.iconButton} aria-label="search">
                                    <SearchIcon />
                                </IconButton>

                                <Divider className={classes.divider} orientation="vertical" />

                                <IconButton color="primary" className={classes.iconButton} aria-label="directions">
                                    <DirectionsIcon />
                                </IconButton>
                            
                        </Paper>
                    </Box>
                </Container>
            </div>
        </div>
    )
}

export default Header;
