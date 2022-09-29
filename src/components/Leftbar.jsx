import { Box, Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText, makeStyles, styled, Typography } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import React from 'react'
import { NavLink } from 'react-router-dom'
import '../index.css'


function Leftbar() {
  return (
    <Box bgcolor="#eeeeee" borderRight={2} borderColor="#bdbdbd" flex={1} p={5} sx={{ display: { xs: "none", sm: "none", md: "none", lg:"block"}}}>
        <Box position="fixed" className="leftbarinnerbox">
        <img className="companylogo" src="https://th.bing.com/th/id/R.3f7189662f19f8318fc75252deee723a?rik=Qa956Np1tp8Zcg&riu=http%3a%2f%2f1000logos.net%2fwp-content%2fuploads%2f2017%2f06%2fTwitter-Logo.png&ehk=6ekNd2ZmhpvFDGRZF19QcumP9fb8pZRkwrbFbK%2bpULA%3d&risl=&pid=ImgRaw&r=0"/>
        <Typography variant="h4" className="companyname">Twitter</Typography>
                <List>
                    <ListItem disablePadding >
                        <ListItemButton component={NavLink} to="/"> 
                            <ListItemIcon>
                                <HomeIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Homepage"/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component={NavLink} to="/addproject"> 
                            <ListItemIcon>
                                <AddIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Add Project" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component={NavLink} to="/addemployee"> 
                            <ListItemIcon>
                                <AddIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Add Employee" />
                        </ListItemButton>
                    </ListItem>
                </List>
        </Box>
    </Box>
  )
}

export default Leftbar