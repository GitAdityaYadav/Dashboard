import React,{useState} from "react";
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import { Typography,Button, Box, Menu,MenuItem,FormLabel,RadioGroup,FormControlLabel,Radio} from "@mui/material";
import styled from "@emotion/styled";
import { useForm } from "react-hook-form";
import "./bookingStyles.css";
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

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
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
      <form onSubmit={handleSubmit(onSubmit)}>
            <ModernItem >
            <FormLabel required="true" sx={{display:"flex",gap:"2rem",flexDirection:"row-reverse"}}>Salary System Based On Meritocracy</FormLabel>
           <RadioGroup row 
           >
           <Box>
           <div>
           <FormControlLabel value="first" label="Yes" control={<Radio {...register("first", {
          required:'This field is required'
           })}/>} />
           <FormControlLabel value="second" label="No" control={<Radio {...register("first", {
          required:'This field is required'
           })}/>} />
           </div>
           <div className="handle">
           <h8>{errors.first?.message}</h8>
           </div>
           
           </Box>
           </RadioGroup>
            </ModernItem>
        
            <ModernItem >
            <FormLabel required="true" sx={{display:"flex",gap:"2rem",flexDirection:"row-reverse"}}>120 Or More Annual Holidays</FormLabel>
           <RadioGroup row  defaultValue="Yes"
          >
            <Box>
           <div>
           <FormControlLabel value="first" label="Yes" control={<Radio  {...register("second", {
          required:'This field is required'
           })}/>} />
           <FormControlLabel value="second" label="No" control={<Radio  {...register("second", {
          required:'This field is required'
           })}/>} />
           </div>
           <div className="handle">
           <h8>{errors.second?.message}</h8>
           </div>
           
           </Box>
           </RadioGroup>
            </ModernItem>

            <ModernItem >
            <FormLabel required="true" sx={{display:"flex",gap:"2rem",flexDirection:"row-reverse"}}>Generous Welfare Benifits</FormLabel>
           <RadioGroup row  defaultValue="Yes"
           >
           <Box>
           <div>
           <FormControlLabel value="first" label="Yes" control={<Radio {...register("third", {
          required:'This field is required'
           })}/>} />
           <FormControlLabel value="second" label="No" control={<Radio {...register("third", {
          required:'This field is required'
           })}/>} />
           </div>
           <div className="handle">
           <h8>{errors.third?.message}</h8>
           </div>
           
           </Box>
           </RadioGroup>
            </ModernItem>

            <ModernItem >
            <FormLabel required="true" sx={{display:"flex",gap:"2rem",flexDirection:"row-reverse"}}>Enhanced Education And Training</FormLabel>
           <RadioGroup row  defaultValue="Yes"
           >
          <Box>
           <div>
           <FormControlLabel value="first" label="Yes" control={<Radio {...register("fourth", {
          required:'This field is required'
           })}/>} />
           <FormControlLabel value="second" label="No" control={<Radio {...register("fourth", {
          required:'This field is required'
           })}/>} />
           </div>
           <div className="handle">
           <h8>{errors.fourth?.message}</h8>
           </div>
           
           </Box>
           </RadioGroup>
            </ModernItem>

            <ModernItem >
            <FormLabel required="true" sx={{display:"flex",gap:"2rem",flexDirection:"row-reverse"}}>Support System For Acquriring Qualification</FormLabel>
           <RadioGroup row  defaultValue="Yes"
           {...register("fifth", {
          required:'This field is required'
           })}>
           <Box>
           <div>
           <FormControlLabel value="first" label="Yes" control={<Radio {...register("fifth", {
          required:'This field is required'
           })}/>} />
           <FormControlLabel value="second" label="No" control={<Radio {...register("fifth", {
          required:'This field is required'
           })}/>} />
           </div>
           <div className="handle">
           <h8>{errors.fifth?.message}</h8>
           </div>
           
           </Box>
           </RadioGroup>
            </ModernItem>

            <ModernItem >
            <FormLabel required="true" sx={{display:"flex",gap:"2rem",flexDirection:"row-reverse"}}>Reduced Working Hours System</FormLabel>
           <RadioGroup row  defaultValue="Yes"
           >
          <Box>
           <div>
           <FormControlLabel value="first" label="Yes" control={<Radio {...register("sixth", {
          required:'This field is required'
           })}/>} />
           <FormControlLabel value="second" label="No" control={<Radio {...register("sixth", {
          required:'This field is required'
           })}/>} />
           </div>
           <div className="handle">
           <h8>{errors.sixth?.message}</h8>
           </div>
           
           </Box>
           </RadioGroup>
            </ModernItem>

            <ModernItem >
            <FormLabel required="true" sx={{display:"flex",gap:"2rem",flexDirection:"row-reverse"}}>Maternity Care Leave System</FormLabel>
           <RadioGroup row  defaultValue="Yes"
           >
           <Box>
           <div>
           <FormControlLabel value="first" label="Yes" control={<Radio {...register("seventh", {
          required:'This field is required'
           })}/>} />
           <FormControlLabel value="second" label="No" control={<Radio {...register("seventh", {
          required:'This field is required'
           })}/>} />
           </div>
           <div className="handle">
           <h8>{errors.seventh?.message}</h8>
           </div>
           
           </Box>
           </RadioGroup>
            </ModernItem>


            <ModernItem >
            <FormLabel required="true" sx={{display:"flex",gap:"2rem",flexDirection:"row-reverse"}}>Company Housing / Rent Subsidy</FormLabel>
           <RadioGroup row  defaultValue="Yes"
           >
           <Box>
           <div>
           <FormControlLabel value="first" label="Yes" control={<Radio {...register("eight", {
          required:'This field is required'
           })}/>} />
           <FormControlLabel value="second" label="No" control={<Radio {...register("eight", {
          required:'This field is required'
           })}/>} />
           </div>
           <div className="handle">
           <h8>{errors.eight?.message}</h8>
           </div>
           
           </Box>
           </RadioGroup>
            </ModernItem>

            <ModernItem >
            <FormLabel required="true" sx={{display:"flex",gap:"2rem",flexDirection:"row-reverse"}}>Family Allowance</FormLabel>
           <RadioGroup row  defaultValue="Yes"
           >
           <Box>
           <div>
           <FormControlLabel value="first" label="Yes" control={<Radio {...register("nine", {
          required:'This field is required'
           })}/>} />
           <FormControlLabel value="second" label="No" control={<Radio {...register("nine", {
          required:'This field is required'
           })}/>} />
           </div>
           <div className="handle">
           <h8>{errors.nine?.message}</h8>
           </div>
           
           </Box>
           </RadioGroup>
            </ModernItem>

            <ModernItem >
            <FormLabel required="true" sx={{display:"flex",gap:"2rem",flexDirection:"row-reverse"}}>Employee Stock Ownership</FormLabel>
           <RadioGroup row  defaultValue="Yes"
           >
           <Box>
           <div>
           <FormControlLabel value="first" label="Yes" control={<Radio {...register("ten", {
          required:'This field is required'
           })}/>} />
           <FormControlLabel value="second" label="No" control={<Radio {...register("ten", {
          required:'This field is required'
           })}/>} />
           </div>
           <div className="handle">
           <h8>{errors.ten?.message}</h8>
           </div>
           
           </Box>
           </RadioGroup>
            </ModernItem>


            <ModernItem >
            <FormLabel required="true" sx={{display:"flex",gap:"2rem",flexDirection:"row-reverse"}}>Side Job Available</FormLabel>
           <RadioGroup row  defaultValue="Yes"
           >
           <Box>
           <div>
           <FormControlLabel value="first" label="Yes" control={<Radio {...register("eleven", {
          required:'This field is required'
           })}/>} />
           <FormControlLabel value="second" label="No" control={<Radio {...register("eleven", {
          required:'This field is required'
           })}/>} />
           </div>
           <div className="handle">
           <h8>{errors.eleven?.message}</h8>
           </div>
           
           </Box>
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

            <Button sx={{width:"200px",height:"3rem",backgroundColor:"purple",position:"relative",left:"270px"}} variant="contained" type="submit">Save</Button>
            </form>
      </Menu>
        </Display>
           
        
             
       
        
    )
}

export default DropDown;
