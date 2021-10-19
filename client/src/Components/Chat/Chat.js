import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";

export default function BasicList() {
  return (
    // <Box sx={{ width: "100%", maxWidth: 300, bgcolor: "background.paper" }}>
    <Container maxWidth="xl">
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <nav aria-label="secondary mailbox folders">
            <List>
              <ListItem disablePadding>
                <ListItemButton component="a" href="/{username}">
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>JW</Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Jesson W"
                      secondary="Jan 7, 2014"
                    />
                  </ListItem>
                </ListItemButton>
              </ListItem>
            </List>
            <Divider />
          </nav>
          <nav aria-label="main mailbox folders">
            <List>
              <ListItemButton component="a" href="/{username}">
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>MS</Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Matt S" secondary="July 20, 2014" />
                </ListItem>
              </ListItemButton>
              <ListItemButton component="a" href="/{username}">
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>BH</Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Blake H" secondary="July 20, 2014" />
                </ListItem>
              </ListItemButton>
              <ListItemButton component="a" href="/{username}">
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>BC</Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Bekah C" secondary="July 20, 2014" />
                </ListItem>
              </ListItemButton>
              <ListItemButton component="a" href="/{username}">
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>CE</Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Cory E" secondary="July 20, 2014" />
                </ListItem>
              </ListItemButton>
              <ListItemButton component="a" href="/{username}">
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>TM</Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Travis M"
                    secondary="July 20, 2014"
                  />
                </ListItem>
              </ListItemButton>

              <ListItemButton component="a" href="/{username}">
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>WF</Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Will F" secondary="July 20, 2014" />
                </ListItem>
              </ListItemButton>

              <ListItemButton component="a" href="/{username}">
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>PX</Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Pingping X"
                    secondary="Jan 9, 2014"
                  />
                </ListItem>
              </ListItemButton>
            </List>
          </nav>
        </Grid>
        <Grid item xs={8}>
          <Paper elevation={3} style={{ height: 450 }}></Paper>
          <Paper elevation={3} style={{ height: 120 }}></Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
