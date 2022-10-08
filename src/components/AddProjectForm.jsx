import { Box, Button, Typography } from '@mui/material'
import CenterFocusStrongIcon from '@mui/icons-material/CenterFocusStrong';
import React from 'react'

function AddProjectForm({employees}) {

  console.log(employees)

  const formSelectValues = employees.map((employee) => {
    return (<option value={`${employee.id}`}>{`${employee.first_name} ${employee.last_name}`}</option>)
  })
  
  return (
    <Box bgcolor="#eeeeee" flex={6} p={2}>
      <div>
        <div className="tophomepagediv">
          <CenterFocusStrongIcon sx={{ fontSize: 80 }} className="managementlogo"></CenterFocusStrongIcon>
          <Typography className="managementtitle" variant="h4">Scope</Typography>
          <Button variant="contained" className="logoutbutton" size="large">Logout</Button>
        </div>
      </div>
      <form className="p-5 mt-4 mx-5">
        <div className="my-4">
          <label className="form-label">Project Name:</label>
          <input type="text" className="form-control"/>
        </div>
        <div className="my-4">
          <label className="form-label">Project Details:</label>
          <textarea type="text" className="form-control" rows="5"></textarea>
        </div>
        <div className="my-4">
          <label className="form-label">Due Date:</label>
          <input type="date" className="form-control"/>
        </div>
        <div className="my-4">
          <label className="form-label">Assign To:</label>
          <select class="form-select" size={employees.length} multiple aria-label="Default select example">
            {formSelectValues}
          </select>
          <Button variant="contained" className="my-4" size="large">Submit</Button>
        </div>
      </form>
    </Box>
  )
}

export default AddProjectForm