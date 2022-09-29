import { Avatar, Box, Container, List, ListItem, ListItemAvatar, ListItemText, styled, Typography } from '@mui/material'
import React from 'react'


const Search = styled("form")({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "white",
  margin: "20px 10px 0px 10px",
  padding: "10px 10px",
  borderRadius: "6px",
});

function Rightbar() {
  return (
    <Box bgcolor="#eeeeee" borderLeft={2} borderColor="#bdbdbd" flex={1} sx={{ display: { xs: "none", sm: "none", md: "none", lg:"block"}}}>
      <div className="rightbarsticky">
        <Typography variant="h6" fontWeight={400} className="rightbartext" position="sticky" pt={2}>Employees</Typography>
        <Search>
          <label>Search</label>
        </Search>
      </div>
      <div className="avatarblock">
      <List>
      <ListItem>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://www.teachaway.com/sites/default/files/profile_picture.jpg" />
        </ListItemAvatar>
        <ListItemText primary="THIS ITEM WILL BE A NAME"/>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://content1.getnarrativeapp.com/68f6039f-a2f9-4e15-9b91-4f7cebe2a378/img_ref/4e80a9d6-aef4-4875-ab94-5952b6926e07/Hamish-5_professional_headshots_photographer_headshot_750.jpg" />
        </ListItemAvatar>
        <ListItemText primary="Work"/>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://i.pinimg.com/736x/97/31/02/9731022f0be7c965e880505461643850.jpg"/>
        </ListItemAvatar>
        <ListItemText primary="Vacation"/>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://www.teachaway.com/sites/default/files/profile_picture.jpg" />
        </ListItemAvatar>
        <ListItemText primary="THIS ITEM WILL BE A NAME"/>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://content1.getnarrativeapp.com/68f6039f-a2f9-4e15-9b91-4f7cebe2a378/img_ref/4e80a9d6-aef4-4875-ab94-5952b6926e07/Hamish-5_professional_headshots_photographer_headshot_750.jpg" />
        </ListItemAvatar>
        <ListItemText primary="Work"/>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://i.pinimg.com/736x/97/31/02/9731022f0be7c965e880505461643850.jpg"/>
        </ListItemAvatar>
        <ListItemText primary="Vacation"/>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://www.teachaway.com/sites/default/files/profile_picture.jpg" />
        </ListItemAvatar>
        <ListItemText primary="THIS ITEM WILL BE A NAME"/>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://content1.getnarrativeapp.com/68f6039f-a2f9-4e15-9b91-4f7cebe2a378/img_ref/4e80a9d6-aef4-4875-ab94-5952b6926e07/Hamish-5_professional_headshots_photographer_headshot_750.jpg" />
        </ListItemAvatar>
        <ListItemText primary="Work"/>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://i.pinimg.com/736x/97/31/02/9731022f0be7c965e880505461643850.jpg"/>
        </ListItemAvatar>
        <ListItemText primary="Vacation"/>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://www.teachaway.com/sites/default/files/profile_picture.jpg" />
        </ListItemAvatar>
        <ListItemText primary="THIS ITEM WILL BE A NAME"/>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://content1.getnarrativeapp.com/68f6039f-a2f9-4e15-9b91-4f7cebe2a378/img_ref/4e80a9d6-aef4-4875-ab94-5952b6926e07/Hamish-5_professional_headshots_photographer_headshot_750.jpg" />
        </ListItemAvatar>
        <ListItemText primary="Work"/>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://i.pinimg.com/736x/97/31/02/9731022f0be7c965e880505461643850.jpg"/>
        </ListItemAvatar>
        <ListItemText primary="Vacation"/>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://www.teachaway.com/sites/default/files/profile_picture.jpg" />
        </ListItemAvatar>
        <ListItemText primary="THIS ITEM WILL BE A NAME"/>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://content1.getnarrativeapp.com/68f6039f-a2f9-4e15-9b91-4f7cebe2a378/img_ref/4e80a9d6-aef4-4875-ab94-5952b6926e07/Hamish-5_professional_headshots_photographer_headshot_750.jpg" />
        </ListItemAvatar>
        <ListItemText primary="Work"/>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://i.pinimg.com/736x/97/31/02/9731022f0be7c965e880505461643850.jpg"/>
        </ListItemAvatar>
        <ListItemText primary="Vacation"/>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://www.teachaway.com/sites/default/files/profile_picture.jpg" />
        </ListItemAvatar>
        <ListItemText primary="THIS ITEM WILL BE A NAME"/>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://content1.getnarrativeapp.com/68f6039f-a2f9-4e15-9b91-4f7cebe2a378/img_ref/4e80a9d6-aef4-4875-ab94-5952b6926e07/Hamish-5_professional_headshots_photographer_headshot_750.jpg" />
        </ListItemAvatar>
        <ListItemText primary="Work"/>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://i.pinimg.com/736x/97/31/02/9731022f0be7c965e880505461643850.jpg"/>
        </ListItemAvatar>
        <ListItemText primary="Vacation"/>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://www.teachaway.com/sites/default/files/profile_picture.jpg" />
        </ListItemAvatar>
        <ListItemText primary="THIS ITEM WILL BE A NAME"/>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://content1.getnarrativeapp.com/68f6039f-a2f9-4e15-9b91-4f7cebe2a378/img_ref/4e80a9d6-aef4-4875-ab94-5952b6926e07/Hamish-5_professional_headshots_photographer_headshot_750.jpg" />
        </ListItemAvatar>
        <ListItemText primary="Work"/>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://i.pinimg.com/736x/97/31/02/9731022f0be7c965e880505461643850.jpg"/>
        </ListItemAvatar>
        <ListItemText primary="Vacation"/>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://www.teachaway.com/sites/default/files/profile_picture.jpg" />
        </ListItemAvatar>
        <ListItemText primary="THIS ITEM WILL BE A NAME"/>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://content1.getnarrativeapp.com/68f6039f-a2f9-4e15-9b91-4f7cebe2a378/img_ref/4e80a9d6-aef4-4875-ab94-5952b6926e07/Hamish-5_professional_headshots_photographer_headshot_750.jpg" />
        </ListItemAvatar>
        <ListItemText primary="Work"/>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://i.pinimg.com/736x/97/31/02/9731022f0be7c965e880505461643850.jpg"/>
        </ListItemAvatar>
        <ListItemText primary="Vacation"/>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://www.teachaway.com/sites/default/files/profile_picture.jpg" />
        </ListItemAvatar>
        <ListItemText primary="THIS ITEM WILL BE A NAME"/>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://content1.getnarrativeapp.com/68f6039f-a2f9-4e15-9b91-4f7cebe2a378/img_ref/4e80a9d6-aef4-4875-ab94-5952b6926e07/Hamish-5_professional_headshots_photographer_headshot_750.jpg" />
        </ListItemAvatar>
        <ListItemText primary="Work"/>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://i.pinimg.com/736x/97/31/02/9731022f0be7c965e880505461643850.jpg"/>
        </ListItemAvatar>
        <ListItemText primary="Vacation"/>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://www.teachaway.com/sites/default/files/profile_picture.jpg" />
        </ListItemAvatar>
        <ListItemText primary="THIS ITEM WILL BE A NAME"/>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://content1.getnarrativeapp.com/68f6039f-a2f9-4e15-9b91-4f7cebe2a378/img_ref/4e80a9d6-aef4-4875-ab94-5952b6926e07/Hamish-5_professional_headshots_photographer_headshot_750.jpg" />
        </ListItemAvatar>
        <ListItemText primary="Work"/>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://i.pinimg.com/736x/97/31/02/9731022f0be7c965e880505461643850.jpg"/>
        </ListItemAvatar>
        <ListItemText primary="Vacation"/>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://www.teachaway.com/sites/default/files/profile_picture.jpg" />
        </ListItemAvatar>
        <ListItemText primary="THIS ITEM WILL BE A NAME"/>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://content1.getnarrativeapp.com/68f6039f-a2f9-4e15-9b91-4f7cebe2a378/img_ref/4e80a9d6-aef4-4875-ab94-5952b6926e07/Hamish-5_professional_headshots_photographer_headshot_750.jpg" />
        </ListItemAvatar>
        <ListItemText primary="Work"/>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://i.pinimg.com/736x/97/31/02/9731022f0be7c965e880505461643850.jpg"/>
        </ListItemAvatar>
        <ListItemText primary="Vacation"/>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://www.teachaway.com/sites/default/files/profile_picture.jpg" />
        </ListItemAvatar>
        <ListItemText primary="THIS ITEM WILL BE A NAME"/>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://content1.getnarrativeapp.com/68f6039f-a2f9-4e15-9b91-4f7cebe2a378/img_ref/4e80a9d6-aef4-4875-ab94-5952b6926e07/Hamish-5_professional_headshots_photographer_headshot_750.jpg" />
        </ListItemAvatar>
        <ListItemText primary="Work"/>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://i.pinimg.com/736x/97/31/02/9731022f0be7c965e880505461643850.jpg"/>
        </ListItemAvatar>
        <ListItemText primary="Vacation"/>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://www.teachaway.com/sites/default/files/profile_picture.jpg" />
        </ListItemAvatar>
        <ListItemText primary="THIS ITEM WILL BE A NAME"/>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://content1.getnarrativeapp.com/68f6039f-a2f9-4e15-9b91-4f7cebe2a378/img_ref/4e80a9d6-aef4-4875-ab94-5952b6926e07/Hamish-5_professional_headshots_photographer_headshot_750.jpg" />
        </ListItemAvatar>
        <ListItemText primary="Work"/>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://i.pinimg.com/736x/97/31/02/9731022f0be7c965e880505461643850.jpg"/>
        </ListItemAvatar>
        <ListItemText primary="Vacation"/>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://www.teachaway.com/sites/default/files/profile_picture.jpg" />
        </ListItemAvatar>
        <ListItemText primary="THIS ITEM WILL BE A NAME"/>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://content1.getnarrativeapp.com/68f6039f-a2f9-4e15-9b91-4f7cebe2a378/img_ref/4e80a9d6-aef4-4875-ab94-5952b6926e07/Hamish-5_professional_headshots_photographer_headshot_750.jpg" />
        </ListItemAvatar>
        <ListItemText primary="Work"/>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://i.pinimg.com/736x/97/31/02/9731022f0be7c965e880505461643850.jpg"/>
        </ListItemAvatar>
        <ListItemText primary="Vacation"/>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://www.teachaway.com/sites/default/files/profile_picture.jpg" />
        </ListItemAvatar>
        <ListItemText primary="THIS ITEM WILL BE A NAME"/>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://content1.getnarrativeapp.com/68f6039f-a2f9-4e15-9b91-4f7cebe2a378/img_ref/4e80a9d6-aef4-4875-ab94-5952b6926e07/Hamish-5_professional_headshots_photographer_headshot_750.jpg" />
        </ListItemAvatar>
        <ListItemText primary="Work"/>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://i.pinimg.com/736x/97/31/02/9731022f0be7c965e880505461643850.jpg"/>
        </ListItemAvatar>
        <ListItemText primary="Vacation"/>
      </ListItem>
    </List>
    </div>
    </Box>
  )
}

export default Rightbar