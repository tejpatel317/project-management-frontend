import { ExpandMore, Favorite, MoreVert, Share } from '@mui/icons-material'
import { Avatar, AvatarGroup, Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Grid, IconButton, styled, Typography } from '@mui/material'
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
            <AvatarGroup max={6} className="cardavatars">
              <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg"/>
              <Avatar alt="Travis Howard" src="https://mui.com/static/mages/avatar/2.jpg"/>
              <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/3.jpg"/>
              <Avatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/4.jpg"/>
              <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/5.jpg"/>
              <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/3.jpg"/>
              <Avatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/4.jpg"/>
              <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/5.jpg"/>
            </AvatarGroup>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
        <Card>
            <CardHeader title="Shrimp and Chorizo Paella" subheader="September 14, 2016"/>
            <div className="carddivision"/>
            <CardContent>
            <AvatarGroup max={6} className="cardavatars">
              <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg"/>
              <Avatar alt="Travis Howard" src="https://mui.com/static/mages/avatar/2.jpg"/>
              <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/3.jpg"/>
              <Avatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/4.jpg"/>
              <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/5.jpg"/>
              <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/3.jpg"/>
              <Avatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/4.jpg"/>
              <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/5.jpg"/>
            </AvatarGroup>
            </CardContent>
          </Card>
        </Grid>
      <Grid item xs={4}>
        <Card>
            <CardHeader title="Shrimp and Chorizo Paella" subheader="September 14, 2016"/>
            <div className="carddivision"/>
            <CardContent>
            <AvatarGroup max={6} className="cardavatars">
              <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg"/>
              <Avatar alt="Travis Howard" src="https://mui.com/static/mages/avatar/2.jpg"/>
              <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/3.jpg"/>
              <Avatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/4.jpg"/>
              <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/5.jpg"/>
              <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/3.jpg"/>
              <Avatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/4.jpg"/>
              <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/5.jpg"/>
            </AvatarGroup>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
        <Card>
            <CardHeader title="Shrimp and Chorizo Paella" subheader="September 14, 2016"/>
            <div className="carddivision"/>
            <CardContent>
            <AvatarGroup max={6} className="cardavatars">
              <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg"/>
              <Avatar alt="Travis Howard" src="https://mui.com/static/mages/avatar/2.jpg"/>
              <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/3.jpg"/>
              <Avatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/4.jpg"/>
              <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/5.jpg"/>
              <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/3.jpg"/>
              <Avatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/4.jpg"/>
              <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/5.jpg"/>
            </AvatarGroup>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
        <Card>
            <CardHeader title="Shrimp and Chorizo Paella" subheader="September 14, 2016"/>
            <div className="carddivision"/>
            <CardContent>
            <AvatarGroup max={6} className="cardavatars">
              <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg"/>
              <Avatar alt="Travis Howard" src="https://mui.com/static/mages/avatar/2.jpg"/>
              <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/3.jpg"/>
              <Avatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/4.jpg"/>
              <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/5.jpg"/>
              <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/3.jpg"/>
              <Avatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/4.jpg"/>
              <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/5.jpg"/>
            </AvatarGroup>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
        <Card>
            <CardHeader title="Shrimp and Chorizo Paella" subheader="September 14, 2016"/>
            <div className="carddivision"/>
            <CardContent>
            <AvatarGroup max={6} className="cardavatars">
              <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg"/>
              <Avatar alt="Travis Howard" src="https://mui.com/static/mages/avatar/2.jpg"/>
              <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/3.jpg"/>
              <Avatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/4.jpg"/>
              <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/5.jpg"/>
              <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/3.jpg"/>
              <Avatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/4.jpg"/>
              <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/5.jpg"/>
            </AvatarGroup>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
        <Card>
            <CardHeader title="Shrimp and Chorizo Paella" subheader="September 14, 2016"/>
            <div className="carddivision"/>
            <CardContent>
            <AvatarGroup max={6} className="cardavatars">
              <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg"/>
              <Avatar alt="Travis Howard" src="https://mui.com/static/mages/avatar/2.jpg"/>
              <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/3.jpg"/>
              <Avatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/4.jpg"/>
              <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/5.jpg"/>
              <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/3.jpg"/>
              <Avatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/4.jpg"/>
              <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/5.jpg"/>
            </AvatarGroup>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
        <Card>
            <CardHeader title="Shrimp and Chorizo Paella" subheader="September 14, 2016"/>
            <div className="carddivision"/>
            <CardContent>
            <AvatarGroup max={6} className="cardavatars">
              <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg"/>
              <Avatar alt="Travis Howard" src="https://mui.com/static/mages/avatar/2.jpg"/>
              <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/3.jpg"/>
              <Avatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/4.jpg"/>
              <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/5.jpg"/>
              <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/3.jpg"/>
              <Avatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/4.jpg"/>
              <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/5.jpg"/>
            </AvatarGroup>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
        <Card>
            <CardHeader title="Shrimp and Chorizo Paella" subheader="September 14, 2016"/>
            <div className="carddivision"/>
            <CardContent>
            <AvatarGroup max={6} className="cardavatars">
              <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg"/>
              <Avatar alt="Travis Howard" src="https://mui.com/static/mages/avatar/2.jpg"/>
              <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/3.jpg"/>
              <Avatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/4.jpg"/>
              <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/5.jpg"/>
              <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/3.jpg"/>
              <Avatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/4.jpg"/>
              <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/5.jpg"/>
            </AvatarGroup>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
        <Card>
            <CardHeader title="Shrimp and Chorizo Paella" subheader="September 14, 2016"/>
            <div className="carddivision"/>
            <CardContent>
            <AvatarGroup max={6} className="cardavatars">
              <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg"/>
              <Avatar alt="Travis Howard" src="https://mui.com/static/mages/avatar/2.jpg"/>
              <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/3.jpg"/>
              <Avatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/4.jpg"/>
              <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/5.jpg"/>
              <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/3.jpg"/>
              <Avatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/4.jpg"/>
              <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/5.jpg"/>
            </AvatarGroup>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
        <Card>
            <CardHeader title="Shrimp and Chorizo Paella" subheader="September 14, 2016"/>
            <div className="carddivision"/>
            <CardContent>
            <AvatarGroup max={6} className="cardavatars">
              <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg"/>
              <Avatar alt="Travis Howard" src="https://mui.com/static/mages/avatar/2.jpg"/>
              <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/3.jpg"/>
              <Avatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/4.jpg"/>
              <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/5.jpg"/>
              <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/3.jpg"/>
              <Avatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/4.jpg"/>
              <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/5.jpg"/>
            </AvatarGroup>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
        <Card>
            <CardHeader title="Shrimp and Chorizo Paella" subheader="September 14, 2016"/>
            <div className="carddivision"/>
            <CardContent>
            <AvatarGroup max={6} className="cardavatars">
              <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg"/>
              <Avatar alt="Travis Howard" src="https://mui.com/static/mages/avatar/2.jpg"/>
              <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/3.jpg"/>
              <Avatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/4.jpg"/>
              <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/5.jpg"/>
              <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/3.jpg"/>
              <Avatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/4.jpg"/>
              <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/5.jpg"/>
            </AvatarGroup>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
        <Card>
            <CardHeader title="Shrimp and Chorizo Paella" subheader="September 14, 2016"/>
            <div className="carddivision"/>
            <CardContent>
            <AvatarGroup max={6} className="cardavatars">
              <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg"/>
              <Avatar alt="Travis Howard" src="https://mui.com/static/mages/avatar/2.jpg"/>
              <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/3.jpg"/>
              <Avatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/4.jpg"/>
              <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/5.jpg"/>
              <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/3.jpg"/>
              <Avatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/4.jpg"/>
              <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/5.jpg"/>
            </AvatarGroup>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
        <Card>
            <CardHeader title="Shrimp and Chorizo Paella" subheader="September 14, 2016"/>
            <div className="carddivision"/>
            <CardContent>
            <AvatarGroup max={6} className="cardavatars">
              <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg"/>
              <Avatar alt="Travis Howard" src="https://mui.com/static/mages/avatar/2.jpg"/>
              <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/3.jpg"/>
              <Avatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/4.jpg"/>
              <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/5.jpg"/>
              <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/3.jpg"/>
              <Avatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/4.jpg"/>
              <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/5.jpg"/>
            </AvatarGroup>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Feed