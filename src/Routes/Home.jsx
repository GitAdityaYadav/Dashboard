import React from "react";
import Box from '@mui/material/Box';
import Stack from "@mui/material/Stack";

import Drop from "../Componenets/Drop";
import Right from "../Componenets/Right";
function Home(){
    return(
        <Box>
            <Stack direction="row" spacing={2}>
             <Drop />
             <Box flex={5}>
                <Right />
             </Box>
            </Stack>
        </Box>
    )
}

export default Home;