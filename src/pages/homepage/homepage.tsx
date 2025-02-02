import { Box, Typography, Button, Divider, Tooltip } from "@mui/material";
import banner from "@assets/banner.png";
import B from "@components/Buttons/Button"
import I from "@components/Icons/Icons"

const Homepage = () => {
    return (
        <Box width={"90%"} height={716} display={"flex"} margin={"0 auto"}>
            <Box width={"50%"} height={"100%"} display={"flex"} flexDirection={"column"} gap={"24px"} justifyContent={"center"}>
                <Typography variant={"h3"} fontWeight={200}>Hello, I'm <Typography variant="h3" component={"span"} fontWeight={500}>Tran Viet Anh</Typography></Typography>
                <Typography variant={"h4"} fontWeight={500}>A Developer <Typography variant="h4" component={"span"} fontWeight={200}>in HaNoi, VietNam</Typography> </Typography>
                <Typography variant="body1" component="p" textAlign={"justify"}>
                    Hi there! I'm <Typography component={"span"} fontWeight={500}>Tran Viet Anh</Typography>, born in 2001 and currently working as an <Typography component={"span"} fontWeight={500}>Automation Tester at BlueOC</Typography>,
                    specializing in Cypress and Playwright. I also have experience in frontend development with React,
                    Angular, HTML, and CSS, along with a solid foundation in Business Analysis and Project Management.
                </Typography>

                <Typography variant="body1" component="p" textAlign={"justify"}>
                    I’m passionate about technology, always eager to explore and optimize testing processes while enhancing user experience. Looking forward to connecting and sharing insights with everyone!
                </Typography>

            <Divider />
                <Box display={"flex"} gap={"16px"}>
                <Tooltip title="Facebook" arrow>
                <Button variant="outlined" sx={B.SquareButton}><I.FacebookIcon/></Button>
                </Tooltip>
                <Tooltip title="Github" arrow>
                <Button variant="outlined" sx={B.SquareButton}><I.GitHubIcon/></Button>
                </Tooltip>
                <Tooltip title="Projects" arrow>
                <Button variant="outlined" sx={B.SquareButton}><I.AssignmentIcon/></Button>
                </Tooltip>
                <Tooltip title="Contact" arrow>
                <Button variant="outlined" sx={B.SquareButton}><I.AlternateEmailIcon/></Button>
                </Tooltip>
                </Box>
                
            </Box>
            <Box width={"50%"} height={"100%"} display={"flex"} justifyContent={"center"} alignContent={"center"}>
                <img src={banner} width={"100%"}></img>
            </Box>
        </Box>
    );
};
export default Homepage;