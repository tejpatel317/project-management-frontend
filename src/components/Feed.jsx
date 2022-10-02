import { Avatar, AvatarGroup, Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Grid, IconButton, styled, Typography } from '@mui/material'
import React from 'react'
import CenterFocusStrongIcon from '@mui/icons-material/CenterFocusStrong';
import ProjectList from './ProjectList';

function Feed() {
  return (
    <Box bgcolor="#eeeeee" flex={6} p={2} className="feedbox">
      <div>
        <div className="tophomepagediv">
          <CenterFocusStrongIcon sx={{ fontSize: 80 }} className="managementlogo"></CenterFocusStrongIcon>
          <Typography className="managementtitle" variant="h4">Scope</Typography>
          <Button variant="contained" className="logoutbutton" size="large">Logout</Button>
        </div>
      </div>
      <form className="p-0 my-5 mx-5">
        <input className="form-control" type="text" value={"Search"}/>     
      </form>
      <ProjectList></ProjectList>
    </Box>
  )
}

export default Feed