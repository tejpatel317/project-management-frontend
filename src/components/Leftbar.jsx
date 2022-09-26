import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import React from 'react'
import { Link } from 'react-router-dom'

function Leftbar() {
  return (
    <Box bgcolor="#eeeeee" borderRight={2} borderColor="#bdbdbd" flex={1} p={2} sx={{ display: { xs: "none", sm:"block"}}}>
        <List>
            <ListItem disablePadding>
                <ListItemButton component={Link} to="/"> 
                    <ListItemIcon>
                        <HomeIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Homepage" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton component={Link} to="/addproject"> 
                    <ListItemIcon>
                        <AddIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Add Project" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton component={Link} to="/addemployee"> 
                    <ListItemIcon>
                        <AddIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Add Employee" />
                </ListItemButton>
            </ListItem>
        </List>
    </Box>
  )
}

export default Leftbar