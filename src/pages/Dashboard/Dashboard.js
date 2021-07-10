import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
//Charts
import TimelineChart from './components/TimelineChart';
import {dataSeries} from "../../assets/irregular-data-series"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function Dashboard() {
    const classes = useStyles();

    const [data, setData] = React.useState({
        timeline_hours:set_timeline_hours()
    });

    return (
        <div>
            <h2>Dashboard</h2>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>xs=12</Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>xs=6</Paper>
                </Grid>
                <Grid item xs={8}>
                    <Paper className={classes.paper}><TimelineChart series={data.timeline_hours} /></Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>xs=3</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>xs=3</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>xs=3</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>xs=3</Paper>
                </Grid>
            </Grid>
        </div>
    )
}


function set_timeline_hours(){

    var ts1 = 1388534400000;
    var ts2 = 1388620800000;
    var ts3 = 1389052800000;
  
    var dataSet = [[],[],[]];
  
    for(var i=0; i<12; i++) {
        ts1 = ts1 + 86400000;
        var innerArr = [ts1, dataSeries[2][i].value];
        dataSet[0].push(innerArr)
    }
    for(var i=0; i<18; i++) {
        ts2 = ts2 + 86400000;
        var innerArr = [ts2, dataSeries[1][i].value];
        dataSet[1].push(innerArr)
    }
    for(var i=0; i<12; i++) {
        ts3 = ts3 + 86400000;
        var innerArr = [ts3, dataSeries[0][i].value];
        dataSet[2].push(innerArr)
    }

    var data = [{
        name: 'PED A',
        data: dataSet[0]
      }, {
        name: 'PED B',
        data: dataSet[1]
      }, {
        name: 'PED C',
        data: dataSet[2]
      }]

    return data;
}