import { Button, Grid, Typography } from '@mui/material';
import React from 'react'

function ProjectInfo({oneproject, onDeletedProject, setOpenForm}) {

  const {id, name, detail, due_date: dueDate, employees: projectEmployees} = oneproject
  
  const employeeNameList = projectEmployees.map((employee) => {
    return (`${employee.first_name} ${employee.last_name}`)
  }).join(", ")

  function handleDelete(e) {
    fetch(`http://localhost:9292/projects/${id}`, {
      method: "DELETE",
    })
    .then((r) => r.json())
    .then((deletedProject) => onDeletedProject(deletedProject));
  }

  return (
    <>
      <Typography variant="h4" mb={3} fontWeight={500}>{name}</Typography>
      <Typography variant="h6" mb={3} fontWeight={500}>{`Due Date: ${dueDate}`}</Typography>
      <Typography variant="h6" mb={3} fontWeight={500}>{detail}</Typography>
      <Typography variant="h6" mb={3} fontWeight={500}>{`Assigned To: ${employeeNameList}`}</Typography>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
              <Button variant="contained" color="error" size="large" onClick={handleDelete}>Delete Project</Button>
          </Grid>
          <Grid item xs={6}>
              <Button variant="contained" color="success" size="large" onClick={e=>setOpenForm(true)}>Update Project</Button>
          </Grid>
      </Grid>
    </>
  )
}

export default ProjectInfo