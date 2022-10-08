import { Box, Button, Typography } from '@mui/material'
import CenterFocusStrongIcon from '@mui/icons-material/CenterFocusStrong';
import React, { useState } from 'react'

function AddProjectForm({employees, handleNewProject}) {

  const [projectName, setProjectName] = useState("")
  const [projectDetails, setProjectDetails] = useState("")
  const [projectDueDate, setProjectDueDate] = useState(new Date().toJSON().slice(0,10))
  const [projectEmployees, setProjectEmployees] = useState([])

  const formSelectValues = employees.map((employee) => {
    return (<option value={`${employee.id}`}>{`${employee.first_name} ${employee.last_name}`}</option>)
  })

  function handleEmployeeSelectChange(e) {
    const options = e.target.options;
      const selectedEmployees = [];
        for (let i = 0; i < options.length; i++) {
          if (options[i].selected) {
            selectedEmployees.push(options[i].value);
          }
        }
    setProjectEmployees(selectedEmployees)
  }

  function handleSubmit(e) {
    e.preventDefault()
    fetch("http://localhost:9292/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: projectName,
        detail: projectDetails,
        due_date: projectDueDate,
        project_employees: projectEmployees,
      }),
    })
    .then((r) => r.json())
    .then((newProject) => handleNewProject(newProject))
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
          <label className="form-label">Project Name:</label>
          <input type="text" className="form-control" value={projectName} onChange={(e) => setProjectName(e.target.value)}/>
        </div>
        <div className="my-4">
          <label className="form-label">Project Details:</label>
          <textarea type="text" className="form-control" rows="5" value={projectDetails} onChange={(e) => setProjectDetails(e.target.value)}></textarea>
        </div>
        <div className="my-4">
          <label className="form-label">Due Date:</label>
          <input type="date" className="form-control" value={projectDueDate} onChange={(e) => setProjectDueDate(e.target.value)}/>
        </div>
        <div className="my-4">
          <label className="form-label">Assign To:</label>
          <select class="form-select" size={employees.length} multiple aria-label="Default select example" value={projectEmployees} onChange={handleEmployeeSelectChange}>
            {formSelectValues}
          </select>
          <Button variant="contained" className="my-4" size="large" type="submit">Submit</Button>
        </div>
      </form>
    </Box>
  )
}

export default AddProjectForm