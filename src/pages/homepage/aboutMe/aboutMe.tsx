import { Box, Typography, useMediaQuery } from "@mui/material";
import C from "@components/Colors/Colors";
import banner from "@assets/logo4.gif";

const AboutMe = () => {

    const isMobile = useMediaQuery('(max-width:800px)');

    return (
        <Box width={"100%"} height={isMobile? "auto": "100vh"} padding={isMobile? "5vh 5%":"10vh 10%"} bgcolor={C.Primary.Black}>
            <Box width={"100%"} height={"100%"} display={"flex"} flexDirection={isMobile ? "column" : "row"} justifyContent={"space-between"} gap={isMobile ?"24px" :0}>
                <Box width={isMobile? "100%": "50%"} height={"100%"} >
                    <img src={banner} width={"100%"} height={"100%"} alt="Banner" style={{ objectFit: "cover" }} />
                </Box>

                <Box width={isMobile? "100%": "50%"} height={isMobile? "auto":"100%"}  display={"flex"}  flexDirection={"column"} gap={isMobile? "24px":"40px"} justifyContent={"center"}>
                    <Typography variant={"h3"} color={C.Primary.White} >About Me</Typography>

                    <Typography variant={"body1"} color={C.Primary.White} textAlign={"justify"}>
                        Hi, I'm Alex Tran, although my name is Tran Viet Anh. I currently reside in Hanoi, Vietnam, and was born in Nam Dinh in 2001. In 2025, I will receive my degree in information technology from Greenwich, Vietnam.
                    </Typography>

                    <Typography variant={"body1"} color={C.Primary.White} textAlign={"justify"}>
                        I've been working as a front-end developer for web programming for two years now. At BlueOC, I'm now working on automation testing. I am proficient with front-end frameworks like Angular, Next, React, and Node.js for back-end development. I also have some experience with business analysis and project management using the Waterfall and Agile frameworks.
                    </Typography>

                    <Typography variant={"body1"} color={C.Primary.White} textAlign={"justify"}>
                        "Try to do better" is my guiding principle in my work. I think we can all make anything "perfect" better; nothing is perfect. As a result, in addition to enhancing my professional experience, I also continuously educate myself on new technologies and global knowledge in an effort to get 1% better every day. I also enjoy reading, playing the piano, playing badminton, and exploring new places as hobbies.
                    </Typography>

                    
                    <Typography variant={"body1"} color={C.Primary.White} textAlign={"justify"}>It is a pleasure to meet new friends.</Typography>
                </Box>

                
            </Box>

        </Box>
    )
}
export default AboutMe;