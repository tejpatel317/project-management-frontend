import { Box, Typography } from '@mui/material'
import React from 'react'

function Rightbar() {
  return (
    <Box bgcolor="#eeeeee" borderLeft={2} borderColor="#bdbdbd" flex={1} p={2} sx={{ display: { xs: "none", sm:"block"}}}>
      <Typography variant="h6" fontWeight={300} className="rightbartext">Employees</Typography>
    </Box>
  )
}

export default Rightbar