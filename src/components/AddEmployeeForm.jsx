import { Box, Button, Typography } from '@mui/material'
import CenterFocusStrongIcon from '@mui/icons-material/CenterFocusStrong';
import React, { useState } from 'react'

function AddEmployeeForm({projects}) {

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [position, setPosition] = useState("")
  const [avatar, setAvatar] = useState("")

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
          <label className="form-label">First Name:</label>
          <input type="text" className="form-control" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
        </div>
        <div className="my-4">
          <label className="form-label">Last Name:</label>
          <input type="text" className="form-control" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
        </div>
        <div className="my-4">
          <label className="form-label">Position:</label>
          <input type="text" className="form-control" value={position} onChange={(e) => setPosition(e.target.value)}/>
        </div>
        <div className="my-4">
          <label className="form-label">Avatar:</label>
          <input type="text" className="form-control" value={avatar} onChange={(e) => setAvatar(e.target.value)}/>
        </div>
        <div className="my-4">
          <label className="form-label">Assign To:</label>
          <select class="form-select" size="10" multiple aria-label="Default select example">
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <Button variant="contained" className="my-4" size="large">Submit</Button>
        </div>
      </form>
    </Box>
  )
}

export default AddEmployeeForm