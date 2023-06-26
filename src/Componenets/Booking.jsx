

import "./bookingStyles.css";
import { Box, FormLabel,FormControlLabel, Grid, Radio,RadioGroup, TextField, Button} from "@mui/material";
import { useForm } from "react-hook-form";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

function Booking(){
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => console.log(data);

    return(
       <Box sx={{margin:"2rem"}}>
       <form onSubmit={handleSubmit(onSubmit)}>
       <Grid container spacing={2} sx={{marginBottom:"2rem"}}>
      <Grid item xs={6}>
      <div class="content">
      <FormLabel required="true">Business Description</FormLabel>
        <TextField 
         multiline
         rows={4}
         {...register("first", {
    required:'This field is required'
     })}
         error={errors.first?.message}
         helperText={errors.first?.message}
         ></TextField>
      </div>
      </Grid>
      <Grid item xs={6}>
      <div class="content">
      <FormLabel >Corporate Philosophy</FormLabel>
        <TextField 
         multiline
         rows={4}
         name="second"
         {...register('second')}
         ></TextField>
      </div>
      </Grid>
      
      </Grid>

      <Grid container spacing={2} sx={{marginBottom:"1rem"}}>
      <Grid item xs={4}>
      <div class="content">
      <FormLabel required="true">Company Name</FormLabel>
        <TextField 
        type="text"
        {...register('company', { required:'This field is required'})}
        error={errors.company?.message}
         helperText={errors.company?.message}
        ></TextField>
      </div>
      </Grid>
      <Grid item xs={4}>
      <div class="content">
      <FormLabel required="true">Industry</FormLabel>
        <TextField  
        type="text"
        {...register('Industry', { required:'This field is required' })}
        error={errors.Industry?.message}
         helperText={errors.Industry?.message}></TextField>
      </div>
      </Grid>
      
      <Grid item xs={4}>
      <div class="content">
      <FormLabel required="true">Mail ID</FormLabel>
        <TextField 
        type="email"
        {...register('email', { required:'This field is required' })} 
        error={errors.email?.message}
         helperText={errors.email?.message}></TextField>
      </div>
      </Grid>
      </Grid>
        
      <Grid container spacing={2} sx={{marginBottom:"1rem"}}>
      <Grid item xs={4}>
      <div class="content">
      <FormLabel required="true">Phone Number</FormLabel>
        <TextField 
        type="phone"
        {...register('phone',{required:"This field is required",
        maxLength:{
          value:10,
          message:"Enter a valid 10-digits number"
        },
        minLength:{
          value:10,
          message:"Enter a valid 10-digits number"
        }
        })}
        error={errors.phone?.message}
         helperText={errors.phone?.message}></TextField>
        
      </div>
      </Grid>
      <Grid item xs={4}>
      <div class="content">
      <FormLabel required="true">Location</FormLabel>
        <TextField  
        type="text"
        {...register('location', { required:'This field is required' })}
        error={errors.location?.message}
         helperText={errors.location?.message}></TextField>
      </div>
      </Grid>
      
      <Grid item xs={4}>
      <div class="content">
      <FormLabel >Website</FormLabel>
        <TextField  
        type="text"
       
        {...register('website')}
        error={errors.website?.message}
         helperText={errors.website?.message}></TextField>
      </div>
      </Grid>
      </Grid>

      <Grid container spacing={2} sx={{marginBottom:"1rem"}}>
      <Grid item xs={4}>
      <div class="content">
      <FormLabel required="true">Working Hours</FormLabel>
        <TextField 
        type="text"
      
        {...register('working', { required:'This field is required' })}
        error={errors.working?.message}
         helperText={errors.working?.message}></TextField>
      </div>
      </Grid>
      <Grid item xs={4}>
      <div class="content">
      <FormLabel required="true">Establishment Date </FormLabel>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TextField 
        type="date"
      
        {...register('date', { required:'This field is required' })}
        error={errors.working?.date}
         helperText={errors.working?.date}></TextField>
     
        
      
    </LocalizationProvider>
      
      </div>
      </Grid>
      
      <Grid item xs={4}>
      <div class="content">
      <FormLabel required="true">Initial Capital</FormLabel>
        <TextField 
        type="number"
        
        {...register('capital', { required:'This field is required' })}
          error={errors.capital?.message}
         helperText={errors.capital?.message}
         >
        </TextField>
      </div>
      </Grid>
      </Grid>

      <Grid container spacing={2} sx={{marginBottom:"1rem"}}>
      <Grid item xs={4}>
      <div class="content">
      <FormLabel required="true">Representative</FormLabel>
        <TextField 
        type="text"
        {...register('representative', { required:'This field is required' })}
        error={errors.representative?.message}
         helperText={errors.representative?.message}></TextField>
      </div>
      </Grid>
      <Grid item xs={4}>
      <div class="content">
      <FormLabel required="true" >Number Of Employees</FormLabel>
        <TextField type="number"
       
        {...register('emp', { required:'This field is required' })}
        error={errors.emp?.message}
         helperText={errors.emp?.message}></TextField>
      </div>
      </Grid>
      
      <Grid item xs={4}>
      <div class="content">
      <FormLabel required="true">Branch</FormLabel>
        <TextField type="text" 
        {...register('branch', { required:'This field is required'})}
       error={errors.branch?.message}
         helperText={errors.branch?.message} ></TextField>
      </div>
      </Grid>
      </Grid>

      <Grid container spacing={2} sx={{marginBottom:"1rem"}}>
      <Grid item xs={4}>
      <div class="content">
      <FormLabel required="true">Sales Revenue </FormLabel>
        <TextField type="number" 
        
        
        {...register('Sales', { required:'This field is required' })}
        error={errors.Sales?.message}
         helperText={errors.Sales?.message}></TextField>
      </div>
      </Grid>
      <Grid item xs={4}>
      <div class="content">
      <FormLabel required="true">Operation Profit</FormLabel>
        <TextField type="number"  
       
       
        {...register('profit', { required:'This field is required' })}
        error={errors.profit?.message}
         helperText={errors.profit?.message}></TextField>
      </div>
      </Grid>
      
      <Grid item xs={4}>
      <div class="content">
      <FormLabel >Avrage Age Of Employees
 </FormLabel>
        <TextField  type="number" 
        name="age"
        {...register('age')}
        ></TextField>
      </div>
      </Grid>
      </Grid>

      <Grid container spacing={2} sx={{marginBottom:"1rem"}}>
      <Grid item xs={4}>
      <div class="content">
      <FormLabel >Stock</FormLabel>
        <TextField type="number"
        
        name="stock"
        {...register('stock')}
         ></TextField>
      </div>
      </Grid>
      <Grid item xs={4}>
      <div class="content">
      <FormLabel >Linkedin Link</FormLabel>
        <TextField  
        type="text"
        name="linkedin"
        {...register('linkedin')}
        ></TextField>
      </div>
      </Grid>
      
      <Grid item xs={4}>
      <div class="content">
      <FormLabel >Twitter Link</FormLabel>
        <TextField 
        type="text"
        name="twitter"
        {...register('twitter')} ></TextField>
      </div>
      </Grid>
      </Grid>

      <Grid container spacing={2} sx={{marginBottom:"1rem"}}>
      <Grid item xs={4}>
      <div class="content">
      <FormLabel >Facebook Link</FormLabel>
        <TextField 
        type="text"
        name="facebook"
        {...register('facebook')}></TextField>
      </div>
      </Grid>
      <Grid item xs={4}>
      <div class="content">
      <FormLabel >Youtube Link</FormLabel>
        <TextField  
        type="text"
        name="youtube"
        {...register('youtube')}></TextField>
      </div>
      </Grid>
      
      <Grid item xs={4}>
      <div class="content">
      <FormLabel >Instagram Link</FormLabel>
        <TextField  
        type="text"
        name="instagram"
        {...register('instagram')}></TextField>
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
      
      <Button sx={{width:"200px",height:"3rem",backgroundColor:"purple"}} variant="contained" type="submit">Save</Button>
      </form>

      </Box>
     
    )
}

export default Booking;