import React from 'react'
import ProjectItem from './ProjectItem'
import { Grid } from '@mui/material'

function ProjectList({projects, employees, onDeletedProject, handleProjectUpdate}) {

  const projectList = projects.map((oneproject) => {
    return (<Grid item xs={4} key={oneproject.id}><ProjectItem oneproject={oneproject} employees={employees} onDeletedProject={onDeletedProject} handleProjectUpdate={handleProjectUpdate}/></Grid>)
  })

  return (
    <Grid container spacing={2}>
      {projectList}
    </Grid>
  )
}

export default ProjectList