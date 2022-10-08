import { Avatar, Box, Container, List, ListItem, ListItemAvatar, ListItemText, Modal, styled, Typography } from '@mui/material'
import AvatarList from './AvatarList'
import React from 'react'


function Rightbar({employees}) {
  return (
    <Box bgcolor="#eeeeee" borderLeft={2} borderColor="#bdbdbd" flex={1.2} sx={{ display: { xs: "none", sm: "none", md: "none", lg:"block"}}}>
      <div className="rightbarsticky">
        <Typography variant="h6" fontWeight={400} className="rightbartext" position="sticky" pt={2}>Employees</Typography>
        <form className="p-0 my-3 mx-2">
          <input className="form-control" type="text" value={"Search"}/>  
        </form>
      </div>
      <div className="avatarblock">
      <List>
      <AvatarList employees={employees}></AvatarList>
      </List>
    </div>
    </Box>
  )
}

export default Rightbar