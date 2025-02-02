import { Box, Typography, Button, useMediaQuery } from "@mui/material";
import B from "@components/Buttons/Button";
import I from "@components/Icons/Icons"
import C from "@components/Colors/Colors"
const Header = () =>{

    const isMobile = useMediaQuery('(max-width:800px)');
    return (
        <Box width={"90%"} height={104} display={"flex"} margin={"0 auto"} justifyContent={"space-between"} alignItems={"center"}>

            <Typography variant={"h4"} fontWeight={700}>TranVietAnh</Typography>

            <Box width={"50%"} height={"100%"} display={isMobile? "none" :"flex"} justifyContent={"space-between"} alignItems={"center"}>
                <Typography variant={"h6"} fontWeight={500} sx={{":hover":{color:C.Zinc[500], cursor:"pointer"}}}>Home</Typography>
                <Typography variant={"h6"} fontWeight={500} sx={{":hover":{color:C.Zinc[500], cursor:"pointer"}}}>Projects</Typography>
                <Typography variant={"h6"} fontWeight={500} sx={{":hover":{color:C.Zinc[500], cursor:"pointer"}}}>Learning</Typography>
                <Typography variant={"h6"} fontWeight={500} sx={{":hover":{color:C.Zinc[500], cursor:"pointer"}}}>Contact me</Typography>
            </Box>

            <Button sx={{...B.SmallButon, display: isMobile ? "none" : "flex" }} endIcon={<I.Download />}>Resume</Button>

            <Button sx={{...B.SquareButton, display: isMobile ? "flex" : "none" }} variant="text"><I.MenuIcon /></Button>
        </Box>
    )
}

export default Header;