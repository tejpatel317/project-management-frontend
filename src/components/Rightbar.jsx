import { Box } from '@mui/material'
import React from 'react'

function Rightbar() {
  return (
    <Box bgcolor="#eeeeee" borderLeft={2} borderColor="#bdbdbd" flex={1} p={2} sx={{ display: { xs: "none", sm:"block"}}}>Rightbar</Box>
  )
}

export default Rightbar