import React from 'react'
import {TextField} from '@material-ui/core'

const BasicInfo = () => {
    return (
        <div>
            <TextField
                id="standard-name"
                label="Name"
                value={""}
                margin="normal"
            />
            <TextField
                id="standard-name"
                label="Direction"
                value={""}
                margin="normal"
            />
        </div>
    )
}

export default BasicInfo