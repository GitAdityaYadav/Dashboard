import React from "react";
import Drop from "../Componenets/Drop";
import {Box,Stack} from "@mui/material";
import Booking from "../Componenets/Booking";

function Register(){
    return(
        <Box>
        <Stack direction="row" spacing={2}>
             <Drop />
             <Box flex={5}>
             <Booking />
             </Box>
            </Stack>
        </Box>
    )
}

export default Register;