import React from 'react'
import ProjectItem from './ProjectItem'
import { Grid } from '@mui/material'

function ProjectList({projects, employees}) {

  console.log(projects)

  const projectList = projects.map((oneproject) => {
    return (<Grid item xs={4} key={oneproject.id}><ProjectItem oneproject={oneproject} employees={employees}/></Grid>)
  })

  return (
    <Grid container spacing={2}>
      {projectList}
    </Grid>
  )
}

export default ProjectList