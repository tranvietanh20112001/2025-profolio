import { Box} from "@mui/material";
import C from "@components/Colors/Colors";
import banner from "@assets/logo4.gif";
const AboutMe = () => {
    return (
        <Box width={"100%"} margin={"0 auto"} height={"100vh"} padding={"10vh 0"} bgcolor={C.Primary.Black}>
            <Box width={"90%"} height={"100%"} display={"flex"} >
                <Box width={"50%"} height={"100%"} >
                    <img src={banner}  width={"100%"} height={"100%"} alt="Banner" />
                </Box>
                </Box>
            
        </Box>
    )
}
export default AboutMe;