import { Box, Typography, Button } from "@mui/material";
import banner from "@assets/banner.png";
import B from "@components/Buttons/Button";
import I from "@components/Icons/Icons"
import C from "@components/Colors/Colors"
const Header = () =>{
    return (
        <Box width={"90%"} height={104} display={"flex"} margin={"0 auto"} justifyContent={"space-between"} alignItems={"center"}>

            <img src={banner} alt="Logo" style={{width:"80px", height:"56px", backgroundColor:"white"}} />

            <Box width={"50%"} height={"100%"} display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                <Typography variant={"h6"} fontWeight={500} sx={{":hover":{color:C.Zinc[500], cursor:"pointer"}}}>Home</Typography>
                <Typography variant={"h6"} fontWeight={500} sx={{":hover":{color:C.Zinc[500], cursor:"pointer"}}}>Projects</Typography>
                <Typography variant={"h6"} fontWeight={500} sx={{":hover":{color:C.Zinc[500], cursor:"pointer"}}}>Learning</Typography>
                <Typography variant={"h6"} fontWeight={500} sx={{":hover":{color:C.Zinc[500], cursor:"pointer"}}}>Contact me</Typography>
            </Box>

            <Button sx={B.SmallButon} endIcon={<I.Download />}>Resume</Button>
        </Box>
    )
}

export default Header;