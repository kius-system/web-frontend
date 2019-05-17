import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import {Checkbox} from '@material-ui/core'
const styles = {
  card: {
    minWidth: 275,
  },
  pos: {
    marginBottom: 12,
  },
};

class BasicData extends Component {
  render(){
  const { classes } = this.props;

  return (
    <Card className={classes.card} elevation={4}>
      <CardContent>
        <form noValidate autoComplete="off">
          <TextField
            id="standard-name"
            label="Nombre de la cola"
            className={classes.textField}
            />
          <br/>
          <TextField
            id="standard-name"
            label="Direccion"
            value={this.props.direccion}
            className={classes.textField}
            />
          <br/>
          <Checkbox
            value={this.getTipoFila}
            label="Turno/Orden de llegada"
            />
          <Checkbox
            value={this.getTipoFila}
            label="Citas"
            />
        </form>
      </CardContent>
    </Card>
  );
  }
}
BasicData.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BasicData);