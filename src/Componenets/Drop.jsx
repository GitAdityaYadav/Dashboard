import React from "react";
import Box from '@mui/material/Box';
import { List, ListItem,Typography } from "@mui/material";
import GridViewIcon from '@mui/icons-material/GridView';
import styled from "@emotion/styled";
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LogoutIcon from '@mui/icons-material/Logout';

const Items=styled(ListItem)({
 display:"flex",
 gap:"30px",
 padding:"15px"
}
)
function Drop(){
    return(
        <Box flex={1}>
        <List sx={{backgroundColor:"#27296d",
        color:"white",
        }
        } >
        <Items>
        <GridViewIcon /><Typography variant="h7">
        Dashboard </Typography></Items>

        <Items>
        <BusinessCenterIcon />
        <Typography variant="h7">
        Manage Subscription </Typography></Items>

        <Items>
        <BusinessCenterIcon />
        <Typography variant="h7">
        Young Brain </Typography></Items>

        <Items>
        <BusinessCenterIcon />
        <Typography variant="h7">
        Mid Career </Typography></Items>

        <Items>
        <BusinessCenterIcon />
        <Typography variant="h7">
        Vendor </Typography></Items>

        <Items>
        <BusinessCenterIcon />
        <Typography variant="h7">
        Consultant</Typography></Items>

        <Items>
        <GridViewIcon />
        <Typography variant="h7">
        Reports </Typography></Items>
        
        <Items>
        <LogoutIcon />
        <Typography variant="h7">
        Sign Out </Typography></Items>
        </List>
     </Box> 
    )
}

export default Drop;
