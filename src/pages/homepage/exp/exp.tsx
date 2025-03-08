import { Box, Typography } from "@mui/material"
import C from "@components/Colors/Colors"
import ExpItem from "@components/ExpItem/ExpItem";
import logoblueoc from "@assets/logoblueoc.png"
import logofpt from "@assets/logofpt.png"
import { useMediaQuery } from "@mui/material";
const Exp = () => {

    const isMobile = useMediaQuery('(max-width:800px)');

    return (
        <Box width={"100%"} height={"100vh"} bgcolor={C.Primary.White} padding={"5% 10%"} display={"flex"} alignItems={"center"} flexDirection={"column"} gap={"32px"}>
            <Typography variant={isMobile?"h4":"h3"} color={C.Primary.Black} fontWeight={200} textAlign={"center"}>My <Typography component={"span"} variant={isMobile?"h4":"h3"} color={C.Primary.Black} fontWeight={700}>Experience</Typography></Typography>

            <Box sx={ExpItem} marginTop={isMobile?0:"40px"}>
                <Box className={"line1"}>
                <img src={logoblueoc} ></img>
                <Typography variant={isMobile?"h6":"h5"} color={C.Primary.Black} fontWeight={700}>Automation QA at BlueOC</Typography>
                </Box>

                <Typography variant={"body2"} color={C.Primary.Black} fontWeight={100}>1/2025 - Present</Typography>

                <Typography variant={"body1"} color={C.Primary.Black} fontWeight={100}>
                Currently, I am an Automation QA, responsible for designing, creating, and executing test cases to ensure software quality and reliability. I work with automation testing frameworks such as Cypress, Playwright, Cucumber, and Reflect to streamline testing processes, detect bugs early, and improve overall product stability.
                </Typography>
            </Box>
            <Box sx={ExpItem} bgcolor={C.Zinc[800]}>
            <Box className={"line1"}>
                <img src={logofpt} ></img>
                <Typography variant={isMobile?"h6":"h5"} color={C.Primary.White} fontWeight={700}>Frontend Developer at FPT Academy</Typography>
                </Box>

                <Typography variant={"body2"} color={C.Primary.White} fontWeight={100}>10/2023 - 1/2024</Typography>

                <Typography variant={"body1"} color={C.Primary.White} fontWeight={100}>
                I program web interfaces using HTML, CSS, JavaScript and ReactJS, and use libraries like MUI to design intuitive, modern UIs and Redux to manage application state efficiently. I always focus on optimizing performance, ensuring smooth interactions and the best user experience.
                </Typography>
            </Box>
            <Box sx={ExpItem}>
            <Box className={"line1"}>
                <img src={logoblueoc} ></img>
                <Typography variant={isMobile?"h6":"h5"} color={C.Primary.Black} fontWeight={700}>Frontend Developer at Alphaway Techonology</Typography>
                </Box>

                <Typography variant={"body2"} color={C.Primary.Black} fontWeight={100}>10/2022 - 5/2023</Typography>

                <Typography variant={"body1"} color={C.Primary.Black} fontWeight={100}>
                As a Front-end Developer, I translate BA requirements into user-friendly interfaces using Angular, JavaScript, and SASS to build dynamic and scalable web applications.
                </Typography>
            </Box>
        </Box>
    );
    }
    export default Exp;