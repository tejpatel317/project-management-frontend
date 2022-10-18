import { Avatar, AvatarGroup, Box, Button, Card, CardContent, CardHeader, Grid, Modal, styled, Typography } from '@mui/material'
import React, { useState } from 'react'
import ProjectInfo from './ProjectInfo'
import ProjectUpdate from './ProjectUpdate'

function ProjectItem({oneproject, employees, onDeletedProject, handleProjectUpdate}) {

  const {id, name, detail, due_date: dueDate, employees: projectEmployees} = oneproject
  const [open, setOpen] = useState(false)
  const [openform, setOpenForm] = useState(false)

  const groupedAvatars = projectEmployees.map((employee) => {
    return (<Avatar key={employee.id} alt={`${employee.first_name} ${employee.last_name}`} src={employee.avatar}></Avatar>)
  })

  const StyledModal = styled(Modal)({
    display:"flex",
    alignItems:"center",
    justifyContent: "center"
  })

  return (
    <>
    <Card onClick={e=>setOpen(true)}>
      <CardHeader title={name} subheader={dueDate}/>
      <div className="carddivision"/>
      <CardContent>
        <AvatarGroup max={6} className="cardavatars">
            {groupedAvatars}
        </AvatarGroup>
      </CardContent>
    </Card>
    <StyledModal
    open={open}
    onClose={e=>{setOpen(false)}}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    >
      <Box width={650} bgcolor="white" p={5} borderRadius={5} className="avatarmodal">
          {openform ? 
          <ProjectUpdate oneproject={oneproject} handleProjectUpdate={handleProjectUpdate} setOpenForm={setOpenForm} employees={employees}/> 
          : 
          <ProjectInfo oneproject={oneproject} onDeletedProject={onDeletedProject} setOpenForm={setOpenForm}/>}
      </Box>
    </StyledModal>
  </>
)
}

export default ProjectItem