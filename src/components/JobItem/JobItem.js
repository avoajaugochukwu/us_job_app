import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { getNDaysAgo, dateInWords, formatCurrency } from '../HelperFunctions';


import jobImage from '../../images/usa_jobs_img.jpg';
import styles from './JobItem.module.css';
import cx from 'classnames';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
    wrapper: {
        backgroundColor: '#d6d2ff',
        padding: '10px',
        borderBottom: '1px #2a007d solid',
        marginBottom: '10px'
    }
});

const JobItem = (data) => {
    const [isShown, setIsShown] = useState(false);

    const classes = useStyles();
    
    const { jobDetails } = data;



    return (

            <Box className={classes.wrapper}>

                <Grid container spacing={5} >
                    <Grid item xs={12} sm={12} md={1}>
                        <Box pr={1}>
                            <img src={jobImage} alt="usa job " className={styles.img} />
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

                        <Box mt={5}>
                            <a href={jobDetails.PositionURI} className={cx(styles.btn, styles.btn_primary)}>
                                Apply &rarr;
                            </a>   
                        </Box>
                        
                    </Grid>
                </Grid>

            </Box>
    );
}

export default JobItem;