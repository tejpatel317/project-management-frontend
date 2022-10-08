import { Avatar, Box, ListItem, ListItemAvatar, ListItemText, Modal, styled, Typography } from '@mui/material'
import React, { useState } from 'react'

function AvatarItem({employee}) {
  const {id, first_name: firstname, last_name: lastname, avatar} = employee
  const [open, setOpen] = useState(false)

  const StyledModal = styled(Modal)({
    display:"flex",
    alignItems:"center",
    justifyContent: "center"
  })

  const assignedProjects = employee.projects.map((project) => {
    return (project.name)
  }).join(", ")

  return (
    <>
    <ListItem onClick={e=>setOpen(true)}>
        <ListItemAvatar>
          <Avatar alt={`${firstname} ${lastname}`} src={avatar} />
        </ListItemAvatar>
        <ListItemText primary={`${firstname} ${lastname}`}/>
    </ListItem>
    <StyledModal
      open={open}
      onClose={e=>{setOpen(false)}}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box width={500} bgcolor="white" p={3} borderRadius={5} className="avatarmodal">
        <Typography variant="h4" mb={2} fontWeight={500}>{`${firstname} ${lastname}`}</Typography>
        <Box className="avatarmodalimage">
          <Avatar alt={`${firstname} ${lastname}`} src={avatar} sx={{ width: 100, height: 100 }} mb={2}/>
        </Box>
        <Typography mt={3} variant="h6" mb={2} fontWeight={500}>Position: {employee.position}</Typography>
        <Typography mt={3} variant="h6" mb={2} fontWeight={500}>Assigned To: {assignedProjects}</Typography>
      </Box>
    </StyledModal>
    </>
  )
}

export default AvatarItem