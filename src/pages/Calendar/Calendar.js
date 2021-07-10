import React from 'react'
import ReactApexChart from 'react-apexcharts';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { pt } from 'date-fns/locale';



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
export default function Calendar() {
    const classes = useStyles();
    const [options, setOptions] = React.useState({
        chart: {
          height: 350,
          type: 'heatmap',
        },
        plotOptions: {
          heatmap: {
            shadeIntensity: 0.5,
            radius: 0,
            useFillColorAsStroke: true,
            colorScale: {
              ranges: [{
                  from: 1,
                  to: 3,
                  name: 'low',
                  color: '#00A100'
                },
                {
                  from: 3,
                  to: 6,
                  name: 'high',
                  color: '#FFB200'
                },
                {
                  from: 6,
                  to: 12,
                  name: 'extreme',
                  color: '#FF0000'
                }
              ]
            }
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: 1
        },
        title: {
          text: 'HeatMap Chart with Color Range'
        },
    })
    const [series, setSeries] = React.useState([]);

    React.useEffect(()=>{

        const months = [];
        for (var i = 0; i < 12; i++) { 
          months.push( pt.localize.month(i, { width: 'abbreviated' }) )
        }

        setSeries(months.map((m) => ( 
             {
                 name:m, 
                 data: generateData(31, {min: 0, max: 12})
             }
        )));
        
    },[])

    return (
        <div>
            <h2>Calendar</h2>
            <Grid>
                <Grid>
                    <ReactApexChart options={options} series={series} type="heatmap" height={350} />
                </Grid>
            </Grid>
        </div>
    )
}


function generateData(count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
        var x = (i + 1).toString();
        var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

        series.push({
            x: x,
            y: y
        });
        i++;
    }
    return series;
}