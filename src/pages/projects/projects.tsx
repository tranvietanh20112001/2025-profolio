import { Box, Typography, useMediaQuery } from "@mui/material";
import C from "@components/Colors/Colors";
import project1 from "@assets/project1.png";
const Projects = () => {   



    const isMobile = useMediaQuery('(max-width:800px)');
    
    return(
        <Box width={"100%"} height={isMobile? "auto": "100vh"} padding={isMobile? "5vh 5%":"10vh 10%"} bgcolor={C.Primary.Black} display={"flex"} flexDirection={"column"} gap={"32px"}>
            <Typography variant={isMobile?"h4":"h3"} color={C.Primary.White} fontWeight={200} textAlign={"center"}>My <Typography component={"span"} variant={isMobile?"h4":"h3"} color={C.Primary.White} fontWeight={700}>Projects</Typography></Typography>

           <Box width={"100%"} height={"200px"} display={"flex"} justifyContent={"space-between"}>
                <img src={project1} alt="project1" width={"40%"} height={"100%"} style={{objectFit:"cover", borderRadius:"20px"}}/>
                <Box width={"50%"} height={"100%"} display={"flex"} flexDirection={"column"} justifyContent={"space-evenly"} >
                    <Typography variant={isMobile?"h6":"h5"} color={C.Primary.White} fontWeight={700}>Greenwich Vietnam Graduation Project</Typography>
                    <Typography variant={"body1"} color={C.Primary.White} fontWeight={100} textAlign={"justify"}>
                    Website hosting excellent graduation projects of Greenwich Vietnam students. The website is programmed with 2 customer and employee sites, made with ReactJS, NodeJS, MongoDB, Firebase, Vercel and ChatGPT.
                    </Typography>
                    <Typography variant={"body2"} color={C.Primary.White} fontWeight={100} sx={{textDecoration:"underline"}}>Visit here</Typography>
                </Box>
           </Box>

           

           

        </Box>
    )
};

export default Projects;