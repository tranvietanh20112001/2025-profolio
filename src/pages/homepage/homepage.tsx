import { Box, Typography, Button, Divider, Tooltip, useMediaQuery } from "@mui/material";
import logo from "@assets/logo3.gif";
import B from "@components/Buttons/Button";
import I from "@components/Icons/Icons";
import { useState, useEffect } from "react";

const Homepage = () => {
    const roles = ["Developer", "Tester", "Tarot Reader", "Book Lover"];
    const [currentRole, setCurrentRole] = useState(0);
    const isMobile = useMediaQuery('(max-width:800px)');

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRole((prevRole) => (prevRole + 1) % roles.length);
        }, 1000);

        return () => clearInterval(interval);
    }, [roles.length]);

    return (
        <Box width={"90%"} height={isMobile ? "auto" :716} display={"flex"} flexDirection={isMobile ? "column" : "row"} margin={"0 auto"} paddingBottom={"24px"}>
            <Box width={isMobile ? "100%" : "50%"} height={isMobile ? "50%" : "100%"} display={isMobile? "flex": "none"} justifyContent={"center"} alignContent={"center"}>
                <img src={logo} width={"100%"} height={"100%"} alt="Logo" />
            </Box>
            <Box width={isMobile ? "100%" : "50%"} height={isMobile ? "50%" : "100%"} display={"flex"} flexDirection={"column"} gap={"24px"} justifyContent={"center"}>
                <Typography variant={isMobile? "h5" :"h3"} fontWeight={200}>Hello, I'm <Typography variant={isMobile? "h5" :"h3"} component={"span"} fontWeight={500}>Tran Viet Anh</Typography></Typography>
                <Typography variant={isMobile? "h6": "h4"} fontWeight={500}>A {roles[currentRole]} <Typography variant={isMobile? "h6": "h4"} component={"span"} fontWeight={200}>in HaNoi, VietNam</Typography> </Typography>
                <Typography variant="body1" component="p" textAlign={"justify"}>
                    Hi there! I'm <Typography component={"span"} fontWeight={500}>Tran Viet Anh</Typography>, born in 2001 and currently working as an <Typography component={"span"} fontWeight={500}>Automation Tester at BlueOC</Typography>,
                    specializing in Cypress and Playwright. I also have experience in frontend development with React,
                    Angular, HTML, and CSS, along with a solid foundation in Business Analysis and Project Management.
                </Typography>

                <Typography variant="body1" component="p" textAlign={"justify"}>
                    I’m passionate about technology, always eager to explore and optimize testing processes while enhancing user experience. Looking forward to connecting and sharing insights with everyone!
                </Typography>

                <Divider sx={{display: isMobile? "none":"block"}}/>
                <Box display={"flex"} gap={"16px"}>
                    <Tooltip title="Facebook" arrow>
                        <Button variant="outlined" sx={B.SquareButton}><I.FacebookIcon /></Button>
                    </Tooltip>
                    <Tooltip title="Github" arrow>
                        <Button variant="outlined" sx={B.SquareButton}><I.GitHubIcon /></Button>
                    </Tooltip>
                    <Tooltip title="Projects" arrow>
                        <Button variant="outlined" sx={B.SquareButton}><I.AssignmentIcon /></Button>
                    </Tooltip>
                    <Tooltip title="Contact" arrow>
                        <Button 
                            variant="outlined" 
                            sx={B.SquareButton}
                        >
                            <I.AlternateEmailIcon />
                        </Button>
                    </Tooltip>
                </Box>
            </Box>

            <Box width={isMobile ? "100%" : "50%"} height={isMobile ? "50%" : "100%"} display={isMobile? "none": "flex"} justifyContent={"center"} alignContent={"center"}>
                <img src={logo} width={"100%"} height={"100%"} alt="Logo" />
            </Box>
        </Box>
    );
};

export default Homepage;
