import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import JobItem from '../JobItem/JobItem';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
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
        width: 400,
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


const JobContainer = ({ data: { SearchResultCount, SearchResultCountAll, SearchResultItems }, handleSearchValue }) => {
    const classes = useStyles();

    // console.log(SearchResultItems);
    // Check if data is populated from api
    if (!SearchResultCount) {
        //Inform users that work is being done
        return 'loading..';
    }

    return (
        <div>

            <Container maxWidth="md" component="main">
                <Box mt={5} mb={2} pl={3}>
                    <Paper component="form" className={classes.root}>
                        <IconButton className={classes.iconButton} aria-label="menu">
                            <MenuIcon />
                        </IconButton>

                        <InputBase
                            className={classes.input}
                            placeholder="Search Google Maps"
                            inputProps={{ 'aria-label': 'search google maps' }}
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
                {SearchResultItems.map((item, i) => <JobItem key={item.MatchedObjectId} jobDetails={item.MatchedObjectDescriptor}>{item.MatchedObjectId}</JobItem>)}
            </Container>
        </div>
    )
}

export default JobContainer;