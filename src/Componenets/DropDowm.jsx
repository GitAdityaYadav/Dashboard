import React,{useState} from "react";
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import { Typography,Button, Box, Menu,MenuItem,FormLabel,RadioGroup,FormControlLabel,Radio} from "@mui/material";
import styled from "@emotion/styled";


const Display=styled(Box)({
    display:"flex",
    justifyContent:"space-between",
    backgroundColor:"#d59bf6",
    padding:"8px",
    borderRadius:"5px",
    alignItems:"center",
})

const ModernItem=styled(MenuItem)({

    width:"700px",
    display:"flex",
    justifyContent:"space-between",
   
})

function DropDown(){
    const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };
    return(
        <Display width="100%">
             <Typography variant="h7" align="left">
      Allowances
      </Typography>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{
          color:"black"
        }
        }
      >
      <DriveFileRenameOutlineIcon />
      </Button> 

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}

        anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
       }}
      transformOrigin={{
       vertical: 'top',
       horizontal: 'center',
      }}
      >
      <h2 style={{paddingLeft:"20px"}}>Allowances</h2>
            <ModernItem >
            <FormLabel required="true" sx={{display:"flex",gap:"2rem",flexDirection:"row-reverse"}}>Salary System Based On Meritocracy</FormLabel>
           <RadioGroup row name="use-radio-group" defaultValue="Yes">
           <FormControlLabel value="first" label="Yes" control={<Radio />} />
           <FormControlLabel value="second" label="No" control={<Radio />} />
           </RadioGroup>
            </ModernItem>
        
            <ModernItem >
            <FormLabel required="true" sx={{display:"flex",gap:"2rem",flexDirection:"row-reverse"}}>120 Or More Annual Holidays</FormLabel>
           <RadioGroup row name="use-radio-group" defaultValue="Yes">
           <FormControlLabel value="first" label="Yes" control={<Radio />} />
           <FormControlLabel value="second" label="No" control={<Radio />} />
           </RadioGroup>
            </ModernItem>

            <ModernItem >
            <FormLabel required="true" sx={{display:"flex",gap:"2rem",flexDirection:"row-reverse"}}>Generous Welfare Benifits</FormLabel>
           <RadioGroup row name="use-radio-group" defaultValue="Yes">
           <FormControlLabel value="first" label="Yes" control={<Radio />} />
           <FormControlLabel value="second" label="No" control={<Radio />} />
           </RadioGroup>
            </ModernItem>

            <ModernItem >
            <FormLabel required="true" sx={{display:"flex",gap:"2rem",flexDirection:"row-reverse"}}>Enhanced Education And Training</FormLabel>
           <RadioGroup row name="use-radio-group" defaultValue="Yes">
           <FormControlLabel value="first" label="Yes" control={<Radio />} />
           <FormControlLabel value="second" label="No" control={<Radio />} />
           </RadioGroup>
            </ModernItem>

            <ModernItem >
            <FormLabel required="true" sx={{display:"flex",gap:"2rem",flexDirection:"row-reverse"}}>Support System For Acquriring Qualification</FormLabel>
           <RadioGroup row name="use-radio-group" defaultValue="Yes">
           <FormControlLabel value="first" label="Yes" control={<Radio />} />
           <FormControlLabel value="second" label="No" control={<Radio />} />
           </RadioGroup>
            </ModernItem>

            <ModernItem >
            <FormLabel required="true" sx={{display:"flex",gap:"2rem",flexDirection:"row-reverse"}}>Reduced Working Hours System</FormLabel>
           <RadioGroup row name="use-radio-group" defaultValue="Yes">
           <FormControlLabel value="first" label="Yes" control={<Radio />} />
           <FormControlLabel value="second" label="No" control={<Radio />} />
           </RadioGroup>
            </ModernItem>

            <ModernItem >
            <FormLabel required="true" sx={{display:"flex",gap:"2rem",flexDirection:"row-reverse"}}>Maternity Care Leave System</FormLabel>
           <RadioGroup row name="use-radio-group" defaultValue="Yes">
           <FormControlLabel value="first" label="Yes" control={<Radio />} />
           <FormControlLabel value="second" label="No" control={<Radio />} />
           </RadioGroup>
            </ModernItem>


            <ModernItem >
            <FormLabel required="true" sx={{display:"flex",gap:"2rem",flexDirection:"row-reverse"}}>Company Housing / Rent Subsidy</FormLabel>
           <RadioGroup row name="use-radio-group" defaultValue="Yes">
           <FormControlLabel value="first" label="Yes" control={<Radio />} />
           <FormControlLabel value="second" label="No" control={<Radio />} />
           </RadioGroup>
            </ModernItem>

            <ModernItem >
            <FormLabel required="true" sx={{display:"flex",gap:"2rem",flexDirection:"row-reverse"}}>Family Allowance</FormLabel>
           <RadioGroup row name="use-radio-group" defaultValue="Yes">
           <FormControlLabel value="first" label="Yes" control={<Radio />} />
           <FormControlLabel value="second" label="No" control={<Radio />} />
           </RadioGroup>
            </ModernItem>

            <ModernItem >
            <FormLabel required="true" sx={{display:"flex",gap:"2rem",flexDirection:"row-reverse"}}>Employee Stock Ownership</FormLabel>
           <RadioGroup row name="use-radio-group" defaultValue="Yes">
           <FormControlLabel value="first" label="Yes" control={<Radio />} />
           <FormControlLabel value="second" label="No" control={<Radio />} />
           </RadioGroup>
            </ModernItem>


            <ModernItem >
            <FormLabel required="true" sx={{display:"flex",gap:"2rem",flexDirection:"row-reverse"}}>Side Job Available</FormLabel>
           <RadioGroup row name="use-radio-group" defaultValue="Yes">
           <FormControlLabel value="first" label="Yes" control={<Radio />} />
           <FormControlLabel value="second" label="No" control={<Radio />} />
           </RadioGroup>
            </ModernItem>

            <ModernItem >
            <FormLabel sx={{paddingLeft:"2.7rem"}}>Mentor System</FormLabel>
           <RadioGroup row name="use-radio-group" defaultValue="Yes">
           <FormControlLabel value="first" label="Yes" control={<Radio />} />
           <FormControlLabel value="second" label="No" control={<Radio />} />
           </RadioGroup>
            </ModernItem>


            <ModernItem >
            <FormLabel  sx={{paddingLeft:"2.7rem"}}>Career Consulting</FormLabel>
           <RadioGroup row name="use-radio-group" defaultValue="Yes">
           <FormControlLabel value="first" label="Yes" control={<Radio />} />
           <FormControlLabel value="second" label="No" control={<Radio />} />
           </RadioGroup>
            </ModernItem>

            <Button sx={{width:"200px",height:"3rem",backgroundColor:"purple",position:"relative",left:"270px"}} variant="contained">Save</Button>
           
      </Menu>
        </Display>
           
        
             
       
        
    )
}

export default DropDown;
