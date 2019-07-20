import React from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {newQueue} from '../../redux/actions/queueActions'
import Button from '@material-ui/core/Button'

const Dashboard = ({newQueue})=>{
    return (
        <div>
            <Button color="primary" variant={"contained"} component={Link} to="/provider/queue/create" onClick={newQueue}>Create</Button>
            This is the Provider User Dashboard
        </div>
    )
}

export default connect(null, {newQueue})(Dashboard)