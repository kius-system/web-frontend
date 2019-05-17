import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {setActiveCell} from '../../actions/colasActions'
import {connect } from 'react-redux'

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  td:{
    backgroundColor: '#002984'
  }
});

const dias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo']
const intHoras = [  "_0000_0030",  "_0030_0100",  "_0100_0130",  "_0130_0200",  "_0200_0230",  "_0230_0300",  "_0300_0330",  "_0330_0400",  "_0400_0430",  "_0430_0500",  "_0500_0530",  "_0530_0600",  "_0600_0630",  "_0630_0700",  "_0700_0730",  "_0730_0800",  "_0800_0830",  "_0830_0900",  "_0900_0930",  "_0930_1000",  "_1000_1030",  "_1030_1100",  "_1100_1130",  "_1130_1200",  "_1200_1230",  "_1230_1300",  "_1300_1330",  "_1330_1400",  "_1400_1430",  "_1430_1500",  "_1500_1530",  "_1530_1600",  "_1600_1630",  "_1630_1700",  "_1700_1730",  "_1730_1800",  "_1800_1830",  "_1830_1900",  "_1900_1930",  "_1930_2000",  "_2000_2030",  "_2030_2100",  "_2100_2130",  "_2130_2200",  "_2200_2230",  "_2230_2300",  "_2300_2330",  "_2330_0000",]

class ScheduleCalendar extends Component {
  setActive = (hora,dia) =>{
    this.props.setActiveCell(hora,dia)
  }
  render(){
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Horario</TableCell>
              {dias.map((dia)=>{
                  return <TableCell align="right" key={dia}>{dia}</TableCell>
                })}
            </TableRow>
          </TableHead>
          <TableBody>

            {intHoras.map((hora)=>{
              return <TableRow key={hora}>
                <TableCell>{this.props.cola.getReadeableHour(hora)}</TableCell>
                {dias.map((dia)=>{
                  return <TableCell
                          key={hora+dia} 
                          id={hora+"_"+dia}
                          style={this.props.cola.getActive(hora,dia)?{backgroundColor:"green"}:{}}
                          onClick={()=>{this.setActive(hora,dia)}}
                          >
                          
                          </TableCell>;
                })}
              </TableRow>;    
            })}
            
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

ScheduleCalendar.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state =>({
  cola: state.colas.newItem
})
export default connect(mapStateToProps,{setActiveCell})(withStyles(styles)(ScheduleCalendar));