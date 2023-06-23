import React from "react";
import { Box,Divider,Stack,Typography} from "@mui/material";
import styled from "@emotion/styled";
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import { Link } from "react-router-dom";
const Display=styled(Box)({
    display:"flex",
    justifyContent:"space-between",
    backgroundColor:"#d59bf6",
    padding:"8px",
    borderRadius:"5px",
    alignItems:"center",
})

const List=styled(Box)({
  display:"flex",
  backgroundColor:"whitesmoke",
  color:"black",
  width:"100%",
  padding:"8px",
  textAlign:"left",
  fontWeight:"500",
})
function Right(){


   return (
    <Stack sx={{paddingTop:"2rem",margin:"1rem"}} spacing={2}>
     <Display>     
     <Typography variant="h7" align="left">
      Corporate Information
      </Typography>
      <Link to="register">
      <DriveFileRenameOutlineIcon />
      </Link>
     </Display>
     
     <Stack direction="row" justifyContent="space-between" spacing={2}>
     <div style={{width:"100%",marginRight:"1rem"}}>
      <Display width="100%">
      <Typography variant="h7" align="left">
      Allowances
      </Typography>
      <DriveFileRenameOutlineIcon />
      </Display>
      </div>
      <div style={{width:"100%",marginRight:"1rem"}}>
      <Display width="100%">
      <Typography variant="h7" align="left">
       Others
      </Typography>
      <DriveFileRenameOutlineIcon />
      </Display>
      
      <List>
      <Typography variant="h7" align="left" flex={2.5}>
       Retention Rate Of New Graduate Hires
      </Typography>
      <Typography fontWeight="400" variant="h7" align="left" flex={1}>
       Over 50%
      </Typography>
      </List>
      <Divider />

      <List>
      <Typography variant="h7" align="left" flex={2.5}>
       Work Style(Overseas Bases)
      </Typography>
      <Typography fontWeight="400" color="green" variant="h7" align="left" flex={1}>
       Yes
      </Typography>
      </List>
      <Divider />

      <List>
      <Typography variant="h7" align="left" flex={2.5}>
      Working Environment
      </Typography>
      <Typography  fontWeight="400" variant="h7" align="left" flex={1}>
       Not Working
      </Typography>
      </List>
      <Divider />


      <Display marginTop="1rem" width="100%">
      <Typography variant="h7" align="left">
       Holidays
      </Typography>
      <DriveFileRenameOutlineIcon />
      </Display>
      
      <List>
      <Typography variant="h7" align="left" flex={2.5}>
      Summer Holidays
      </Typography>
      <Typography fontWeight="400" color="green" variant="h7" align="left" flex={1}>
       Yes
      </Typography>
      </List>
      <Divider />

      <List>
      <Typography variant="h7" align="left" flex={2.5}>
       Golden Weeks
      </Typography>
      <Typography fontWeight="400" color="green" variant="h7" align="left" flex={1}>
       Yes
      </Typography>
      </List>
      <Divider />

      <List>
      <Typography variant="h7" align="left" flex={2.5}>
      Other Holidays
      </Typography>
      <Typography  fontWeight="400" color="green" variant="h7" align="left" flex={1}>
       Yes
      </Typography>
      </List>
      <Divider />

      </div>
      
     
     </Stack>
     
    </Stack>
    
   ) 
}

export default Right;