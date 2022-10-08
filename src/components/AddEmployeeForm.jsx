import { Box, Button, Typography } from '@mui/material'
import CenterFocusStrongIcon from '@mui/icons-material/CenterFocusStrong';
import React, { useState } from 'react'

function AddEmployeeForm({projects, handleNewEmployee}) {

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [position, setPosition] = useState("")
  const [avatar, setAvatar] = useState("")
  const [avaliableProjects, setAvaliableProjects] = useState([])

  const formSelectValues = projects.map((project) => {
    return (<option value={`${project.id}`}>{project.name}</option>)
  })

  function handleProjectChange(e) {
    const options = e.target.options;
      const selectedProjects = [];
        for (let i = 0; i < options.length; i++) {
          if (options[i].selected) {
            selectedProjects.push(options[i].value);
          }
        }
    setAvaliableProjects(selectedProjects)
  }

  function handleSubmit(e) {
    e.preventDefault()
    fetch("http://localhost:9292/employees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        position: position,
        avatar: avatar,
        avaliable_project: avaliableProjects,
      }),
    })
    .then((r) => r.json())
    .then((newEmployee) => handleNewEmployee(newEmployee))
  }

  return (
    <Box bgcolor="#eeeeee" flex={6} p={2}>
      <div>
        <div className="tophomepagediv">
          <CenterFocusStrongIcon sx={{ fontSize: 80 }} className="managementlogo"></CenterFocusStrongIcon>
          <Typography className="managementtitle" variant="h4">Scope</Typography>
          <Button variant="contained" className="logoutbutton" size="large">Logout</Button>
        </div>
      </div>
      <form className="p-5 mt-4 mx-5" onSubmit={handleSubmit}>
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
          <select class="form-select" size={formSelectValues.length} multiple aria-label="Default select example" value={avaliableProjects} onChange={handleProjectChange}>
            {formSelectValues}
          </select>
          <Button variant="contained" className="my-4" size="large" type="submit">Submit</Button>
        </div>
      </form>
    </Box>
  )
}

export default AddEmployeeForm