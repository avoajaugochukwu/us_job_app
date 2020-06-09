import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import JobItem from '../JobItem/JobItem';
import Container from '@material-ui/core/Container';



const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
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


const JobContainer = ({ data: { SearchResultCount, SearchResultCountAll, SearchResultItems } }) => {
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
                
                {SearchResultItems.map((item, i) => <JobItem key={item.MatchedObjectId} jobDetails={item.MatchedObjectDescriptor}>{item.MatchedObjectId}</JobItem>)}
            </Container>
        </div>
    )
}

export default JobContainer;