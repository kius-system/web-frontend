import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchColas } from '../actions/colasActions';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import {Delete, Edit, People, ExitToApp} from '@material-ui/icons'


const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

class ListarColas extends Component {

  componentWillMount(){
    this.props.fetchColas()
  }
  isDisabled = (perm, action)=>{
    switch(action){
      case "invite":
        return !this.enabledToInvite(perm)
      case "edit":
        return !this.enabledToEdit(perm)
      default:
        return !this.enabledToDelete(perm)
    }
    
  }
  enabledToInvite(perm){
    switch (perm) {
      case "Administrador":
        return true
      case "Gestor":
        return true
      default:
        return false
    }
  }
  
  enabledToEdit(perm){
    switch (perm) {
      case "Administrador":
        return true
      case "Gestor":
        return true
      default:
        return false
    }
  }
  enabledToDelete(perm){
    switch (perm) {
      case "Administrador":
        return true
      case "Gestor":
        return false
      default:
        return false
    }
  }

  render() {
    const {classes} = this.props
    return (
      <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell>Creador</TableCell>
            <TableCell>Permiso</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.props.colas.map(cola => (
            <TableRow key={cola.id}>
              <TableCell component="th" scope="row">
                {cola.nombre}
              </TableCell>
              <TableCell component="th" scope="row">
                {cola.creador}
              </TableCell>
              <TableCell component="th" scope="row">
                {cola.permiso}
              </TableCell>
              <TableCell component="th" scope="row">
                <Button disabled={this.isDisabled(cola.permiso,"invite")}><People/></Button>
              </TableCell>
              <TableCell component="th" scope="row">
                <Button disabled={this.isDisabled(cola.permiso,"edit")}><Edit/></Button>
              </TableCell>
              <TableCell component="th" scope="row">
                <Button disabled={this.isDisabled(cola.permiso,"delete")}><Delete/></Button>
              </TableCell>
              <TableCell component="th" scope="row">
                <Button><ExitToApp/></Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
    )
  }
}
const mapStateToProps = state => ({
  colas: state.colas.items,
});
export default connect(mapStateToProps, { fetchColas })(withStyles(styles)(ListarColas));