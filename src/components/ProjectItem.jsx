import { Avatar, AvatarGroup, Box, Button, Card, CardContent, CardHeader, Grid, Modal, styled, Typography } from '@mui/material'
import React, { useState } from 'react'

function ProjectItem({oneproject, employees}) {

    const {id, name, detail, due_date: dueDate, employees: projectEmployees} = oneproject
    const [open, setOpen] = useState(false)
    const [openform, setOpenForm] = useState(false)

    const groupedAvatars = projectEmployees.map((employee) => {
        return (<Avatar alt={`${employee.first_name} ${employee.last_name}`} src={employee.avatar}></Avatar>)
    })

    const employeeNameList = projectEmployees.map((employee) => {
        return (`${employee.first_name} ${employee.last_name}`)
    }).join(", ")

    const assignedEmployees = projectEmployees.map((employee) => {
        return (employee.id)
    })

    const unassignedEmployees = employees.filter((employee) => {
        return (!assignedEmployees.includes(employee.id))
    })

    const formSelectValues = unassignedEmployees.map((employee) => {
        return (<option value={`${employee.id}`}>{`${employee.first_name} ${employee.last_name}`}</option>)
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
                <>
                    <form className="mb-3">
                        <label className="form-label">Assign To:</label>
                        <select class="form-select" size={`${unassignedEmployees.length}`} multiple aria-label="Default select example">
                            {formSelectValues}
                        </select>
                    </form>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={6}>
                            <Button variant="contained" color="error" size="large" onClick={e=>setOpenForm(false)}>Cancel</Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button variant="contained" color="success" size="large">Submit Update</Button>
                        </Grid>
                    </Grid>
                </> 
                :
                <>
                    <Typography variant="h4" mb={3} fontWeight={500}>{name}</Typography>
                    <Typography variant="h6" mb={3} fontWeight={500}>{`Due Date: ${dueDate}`}</Typography>
                    <Typography variant="h6" mb={3} fontWeight={500}>{detail}</Typography>
                    <Typography variant="h6" mb={3} fontWeight={500}>{`Assigned To: ${employeeNameList}`}</Typography>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={6}>
                            <Button variant="contained" color="error" size="large">Delete Project</Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button variant="contained" color="success" size="large" onClick={e=>setOpenForm(true)}>Update Assigned</Button>
                        </Grid>
                    </Grid>
                </>
            }
        </Box>
    </StyledModal>
  </>
)
}

export default ProjectItem