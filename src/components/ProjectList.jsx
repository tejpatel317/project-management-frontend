import React from 'react'
import projectItems from "./ProjectItems"
import ProjectItem from './ProjectItem'
import { Grid } from '@mui/material'

function ProjectList() {
    
    const projectList = projectItems.map((oneproject) => {
        return (<Grid item xs={4} key={oneproject.id}><ProjectItem oneproject={oneproject}/></Grid>)
    })

  return (
    <Grid container spacing={2}>
        {projectList}
    </Grid>
  )
}

export default ProjectList