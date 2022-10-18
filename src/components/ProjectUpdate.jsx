import { Button, Grid } from '@mui/material'
import React, { useState } from 'react'

function ProjectUpdate({oneproject, handleProjectUpdate, setOpenForm, employees}) {

  const {id, name, detail, due_date: dueDate, employees: projectEmployees} = oneproject

  const [projectName, setProjectName] = useState(name)
  const [projectDetails, setProjectDetails] = useState(detail)
  const [projectDueDate, setProjectDueDate] = useState(dueDate)
  const [newEmployees, setNewEmployees] = useState([])

  const assignedEmployees = projectEmployees.map((employee) => {
    return (employee.id)
  })

  const unassignedEmployees = employees.filter((employee) => {
    return (!assignedEmployees.includes(employee.id))
  })

  const formSelectValues = unassignedEmployees.map((employee) => {
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
    setNewEmployees(selectedEmployees)
  }

  function handleSubmit(e) {
    e.preventDefault()
    fetch(`http://localhost:9292/projects/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: projectName,
        detail: projectDetails,
        due_date: projectDueDate,
        project_employees: newEmployees,
      }),
    })
    .then((r) => r.json())
    .then((newProject) => handleProjectUpdate(newProject))
  }

  return (
    <>
      <form className="mb-3" onSubmit={handleSubmit}>
          <label className="form-label pushleft">Project Name:</label>
          <input type="text" className="form-control" value={projectName} onChange={(e) => setProjectName(e.target.value)}/>
          <label className="form-label pushleft">Project Details:</label>
          <textarea type="text" className="form-control" rows="5" value={projectDetails} onChange={(e) => setProjectDetails(e.target.value)}></textarea>
          <label className="form-label pushleft">Due Date:</label>
          <input type="date" className="form-control" value={projectDueDate} onChange={(e) => setProjectDueDate(e.target.value)}/>
          <label className="form-label pushleft">Assign To:</label>
          <select class="form-select" size={`${unassignedEmployees.length}`} multiple aria-label="Default select example" value={newEmployees} onChange={handleEmployeeSelectChange}>
              {formSelectValues}
          </select>
        <Grid container mt={1} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
              <Button variant="contained" color="error" size="large" onClick={e=>setOpenForm(false)}>Cancel</Button>
          </Grid>
          <Grid item xs={6}>
              <Button variant="contained" color="success" size="large" type="submit">Submit Update</Button>
          </Grid>
        </Grid>
      </form>
    </> 
  )
}

export default ProjectUpdate