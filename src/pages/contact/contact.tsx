import { Box, Typography, useMediaQuery } from "@mui/material";
import C from "@components/Colors/Colors";
const Contact = () => {   



    const isMobile = useMediaQuery('(max-width:800px)');
    
    return(
        <Box width={"100%"} height={isMobile? "auto": "100vh"} padding={isMobile? "5vh 5%":"10vh 10%"} bgcolor={C.Primary.White} display={"flex"} alignItems={"center"} justifyContent={"center"} flexDirection={"column"} gap={"32px"}>
            <Typography variant={isMobile?"h6":"h5"} color={C.Primary.Black} fontWeight={100} textAlign={"center"}>
                Contact
              </Typography>
            <Typography variant={isMobile?"h6":"h5"} color={C.Primary.Black} fontWeight={100} textAlign={"center"}>
                Updating
              </Typography>
        </Box>
    )
};

export default Contact;