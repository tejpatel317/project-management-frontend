import { ExpandMore, Favorite, MoreVert, Share } from '@mui/icons-material'
import { Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Grid, IconButton, styled, Typography } from '@mui/material'
import React from 'react'
import CenterFocusStrongIcon from '@mui/icons-material/CenterFocusStrong';

const Search = styled("form")({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "white",
  margin: "50px 10px",
  padding: "15px 15px",
  borderRadius: "10px",
});

function Feed() {
  return (
    <Box bgcolor="#eeeeee" flex={6} p={2}>
      <div>
        <div className="tophomepagediv">
          <CenterFocusStrongIcon sx={{ fontSize: 80 }} className="managementlogo"></CenterFocusStrongIcon>
          <Typography className="managementtitle" variant="h4">Scope</Typography>
          <Button variant="contained" className="logoutbutton" size="large">Logout</Button>
        </div>
      </div>
      <Search>
        <label>Search Project</label>
      </Search>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Card>
            <CardHeader title="Shrimp and Chorizo Paella" subheader="September 14, 2016"/>
            <div className="carddivision"/>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to cook
                together with your guests. Add 1 cup of frozen peas along with the mussels,
                if you like.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <Favorite />
              </IconButton>
              <IconButton aria-label="share">
                <Share />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={4}>
        <Card>
            <CardHeader title="Shrimp and Chorizo Paella" subheader="September 14, 2016"/>
            <div className="carddivision"/>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to cook
                together with your guests. Add 1 cup of frozen peas along with the mussels,
                if you like.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <Favorite />
              </IconButton>
              <IconButton aria-label="share">
                <Share />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={4}>
        <Card>
            <CardHeader title="Shrimp and Chorizo Paella" subheader="September 14, 2016"/>
            <div className="carddivision"/>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to cook
                together with your guests. Add 1 cup of frozen peas along with the mussels,
                if you like.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <Favorite />
              </IconButton>
              <IconButton aria-label="share">
                <Share />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Feed