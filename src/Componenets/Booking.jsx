

import "./bookingStyles.css";
import { Box, FormLabel,FormControlLabel, Grid, Radio,RadioGroup, TextField, Button} from "@mui/material";



function Booking(){

  
    return(
       <Box sx={{margin:"2rem"}}>
       
       <Grid container spacing={2} sx={{marginBottom:"2rem"}}>
      <Grid item xs={6}>
      <div class="content">
      <FormLabel required="true">Business Description</FormLabel>
        <TextField 
         multiline
         rows={4}
         maxRows={8}
         ></TextField>
      </div>
      </Grid>
      <Grid item xs={6}>
      <div class="content">
      <FormLabel required="true">Corporate Philosophy</FormLabel>
        <TextField 
         multiline
         rows={4}
         maxRows={8}
         ></TextField>
      </div>
      </Grid>
      
      </Grid>

      <Grid container spacing={2} sx={{marginBottom:"1rem"}}>
      <Grid item xs={4}>
      <div class="content">
      <FormLabel required="true">Company Name</FormLabel>
        <TextField ></TextField>
      </div>
      </Grid>
      <Grid item xs={4}>
      <div class="content">
      <FormLabel required="true">Industry</FormLabel>
        <TextField  ></TextField>
      </div>
      </Grid>
      
      <Grid item xs={4}>
      <div class="content">
      <FormLabel required="true">Mail ID</FormLabel>
        <TextField  ></TextField>
      </div>
      </Grid>
      </Grid>
        
      <Grid container spacing={2} sx={{marginBottom:"1rem"}}>
      <Grid item xs={4}>
      <div class="content">
      <FormLabel required="true">Phone Number</FormLabel>
        <TextField ></TextField>
      </div>
      </Grid>
      <Grid item xs={4}>
      <div class="content">
      <FormLabel required="true">Location</FormLabel>
        <TextField  ></TextField>
      </div>
      </Grid>
      
      <Grid item xs={4}>
      <div class="content">
      <FormLabel required="true">Website</FormLabel>
        <TextField  ></TextField>
      </div>
      </Grid>
      </Grid>

      <Grid container spacing={2} sx={{marginBottom:"1rem"}}>
      <Grid item xs={4}>
      <div class="content">
      <FormLabel required="true">Working Hours</FormLabel>
        <TextField ></TextField>
      </div>
      </Grid>
      <Grid item xs={4}>
      <div class="content">
      <FormLabel required="true">Establishment Date </FormLabel>
      <TextField ></TextField>
      </div>
      </Grid>
      
      <Grid item xs={4}>
      <div class="content">
      <FormLabel required="true">Initial Capital</FormLabel>
        <TextField  ></TextField>
      </div>
      </Grid>
      </Grid>

      <Grid container spacing={2} sx={{marginBottom:"1rem"}}>
      <Grid item xs={4}>
      <div class="content">
      <FormLabel required="true">Representative</FormLabel>
        <TextField ></TextField>
      </div>
      </Grid>
      <Grid item xs={4}>
      <div class="content">
      <FormLabel required="true">Number Of Employees</FormLabel>
        <TextField type="number"></TextField>
      </div>
      </Grid>
      
      <Grid item xs={4}>
      <div class="content">
      <FormLabel required="true">Branch</FormLabel>
        <TextField type="number" ></TextField>
      </div>
      </Grid>
      </Grid>

      <Grid container spacing={2} sx={{marginBottom:"1rem"}}>
      <Grid item xs={4}>
      <div class="content">
      <FormLabel required="true">Sales Revenue </FormLabel>
        <TextField type="number" ></TextField>
      </div>
      </Grid>
      <Grid item xs={4}>
      <div class="content">
      <FormLabel required="true">Operation Profit</FormLabel>
        <TextField type="number"  ></TextField>
      </div>
      </Grid>
      
      <Grid item xs={4}>
      <div class="content">
      <FormLabel >Avrage Age Of Employees
 </FormLabel>
        <TextField  type="number" ></TextField>
      </div>
      </Grid>
      </Grid>

      <Grid container spacing={2} sx={{marginBottom:"1rem"}}>
      <Grid item xs={4}>
      <div class="content">
      <FormLabel >Stock</FormLabel>
        <TextField type="number" ></TextField>
      </div>
      </Grid>
      <Grid item xs={4}>
      <div class="content">
      <FormLabel >Linkedin Link</FormLabel>
        <TextField  ></TextField>
      </div>
      </Grid>
      
      <Grid item xs={4}>
      <div class="content">
      <FormLabel >Twitter Link</FormLabel>
        <TextField  ></TextField>
      </div>
      </Grid>
      </Grid>

      <Grid container spacing={2} sx={{marginBottom:"1rem"}}>
      <Grid item xs={4}>
      <div class="content">
      <FormLabel >Facebook Link</FormLabel>
        <TextField ></TextField>
      </div>
      </Grid>
      <Grid item xs={4}>
      <div class="content">
      <FormLabel >Youtube Link</FormLabel>
        <TextField  ></TextField>
      </div>
      </Grid>
      
      <Grid item xs={4}>
      <div class="content">
      <FormLabel >Instagram Link</FormLabel>
        <TextField  ></TextField>
      </div>
      </Grid>
      </Grid>
      
      <Grid container spacing={2} sx={{marginBottom:"1rem"}}>
      <Grid item xs={4}>
      <div class="content">
      
      <FormLabel >Foreign Owned</FormLabel>
      <RadioGroup row name="use-radio-group" defaultValue="Yes">
  <FormControlLabel value="first" label="Yes" control={<Radio />} />
  <FormControlLabel value="second" label="No" control={<Radio />} />
</RadioGroup>
      </div>
      </Grid>
      
      </Grid>
      
      <Button sx={{width:"200px",height:"3rem",backgroundColor:"purple"}} variant="contained">Save</Button>

      </Box>

    )
}

export default Booking;