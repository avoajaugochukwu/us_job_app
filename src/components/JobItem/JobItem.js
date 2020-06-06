import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { getNDaysAgo, dateInWords, formatCurrency } from '../HelperFunctions';
import red from '@material-ui/core/colors/red';


import jobImage from '../../images/usa_jobs_img.jpg';
import styles from './JobItem.module.css';


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
    ExpansionPanelSummary: {
        backgroundColor: '#f5f4ff',
    }
});

const closingDate = red[500];

const JobItem = (data) => {
    const classes = useStyles();

    const { jobDetails } = data;
    // console.log(jobDetails);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    const [expanded, setExpanded] = React.useState(false);

    return (
        <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')} >
            <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                className={classes.ExpansionPanelSummary}
            >

                <Grid container spacing={5} >
                    <Grid item xs={12} sm={12} md={1}>
                        <Box pr={1}>
                            <img src={jobImage} alt="usa job image" className={styles.img} />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={8}>
                        <Typography align="left" className={styles.positionTitle} variant={'h6'}>
                            {jobDetails.PositionTitle}
                        </Typography>
                        <Typography align="left" gutterBottom={true}>
                            <small>
                                <i>
                                    {jobDetails.JobCategory[0].Name}
                                </i>
                            </small>
                        </Typography>
                        <Box mt={1} mb={2}>
                            <Typography align="left">
                                <small>
                                    <b>{jobDetails.OrganizationName}</b> | {jobDetails.DepartmentName}
                                </small>
                            </Typography>
                            <Typography align="left" gutterBottom={true}>
                                <small>
                                    <LocationOnIcon style={{ fontSize: 15 }} color="primary" />{jobDetails.PositionLocationDisplay}
                                </small>
                            </Typography>
                        </Box>
                        <Typography align="left">
                            <small>
                                {getNDaysAgo(jobDetails.PublicationStartDate)} days ago
                            </small>
                            <small className={styles.closeDate}>
                                &nbsp; until {dateInWords(jobDetails.ApplicationCloseDate)}
                            </small>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3} style={{ "backgroundColor": '' }}>
                        <small>
                            Starting at {formatCurrency.format(jobDetails.PositionRemuneration[0].MinimumRange)}
                            &nbsp;{jobDetails.PositionRemuneration[0].RateIntervalCode}
                        </small>


                    </Grid>
                </Grid>

            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Grid container spacing={5} >
                    <Grid item xs={12} sm={12} md={12}>
                        <Box>
                            <Typography align="left" variant="h5" gutterBottom={true}>
                                Summary
                        </Typography>
                            <Typography align="left" gutterBottom={true}>
                                {jobDetails.UserArea.Details.JobSummary}
                            </Typography>
                        </Box>
                        <Box>
                            <Typography align="left" variant="h5" gutterBottom={true}>
                                Qualification
                        </Typography>
                            <Typography align="left" gutterBottom={true}>
                                {jobDetails.QualificationSummary}
                            </Typography>
                        </Box>
                        
                    </Grid>
                </Grid>
            </ExpansionPanelDetails>
        </ExpansionPanel>

    );
}

export default JobItem;