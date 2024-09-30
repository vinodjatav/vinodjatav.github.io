import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Project } from '../../../Models/Models';

const styleBox = {
    gap: "4px",
    width: "244px",
    height: "45px",
    padding: "16px",
    borderRadius: "32px",
    WebkitBackdropFilter: "blur(64px)",
    backdropFilter: "blur(64px)",
    backgroundColor: "rgba(255, 255, 255, 0.4)",
};

interface propType {
    selectedBackground: string;
    projectDetail: Project;
}

const ProjectCard = (props: propType) => {
    const { selectedBackground, projectDetail } = props;
    const navigate = useNavigate();

    const [isHover, setHover] = useState(false);
    const handleOnMouseEnter = () => {
        setHover(true);
    };
    const handleOnMouseLeave = () => {
        setHover(false);
    };
    const handleClickProject = (id: number) => {
        navigate(`/project/${id}`);
    };
    return (
        <Box
            display="flex"
            flexDirection="column"
            sx={{
                position: "relative",
                width: "490px",
                height: "382px",
                padding: "8px",
                borderRadius: "40px",
                backgroundColor: isHover ? selectedBackground.slice(0, -5) + "1)" : "#fff"
            }}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
        >
            <Button
                sx={{
                    borderRadius: "32px",
                    WebkitBackdropFilter: "blur(64px)",
                    backdropFilter: "blur(64px)",
                    backgroundColor: "rgba(255, 255, 255, 0.4)", padding: "16px",
                    justifyContent: "space-between",
                    alignItems: "center",
                    ":hover, :active, :focus": {
                        WebkitBackdropFilter: "blur(64px)",
                        backdropFilter: "blur(64px)",
                        backgroundColor: "rgba(255, 255, 255, 0.4)", padding: "16px",
                    }
                }}
                onClick={() => handleClickProject(projectDetail?.id)}>
                <Box display="flex" flexDirection="column" alignItems="flex-start">
                    <Typography variant='h3' sx={{ textTransform: "none", color: isHover ? "#fff" : "#353535" }}>
                        {projectDetail?.name}
                    </Typography>
                    <Typography variant='overline' sx={{ textAlign: "left", textTransform: "none", color: isHover ? "#fff" : "#353535" }}>
                        {projectDetail?.description}
                    </Typography>
                </Box>
                {isHover &&
                    <ArrowCircleUpIcon sx={{ width: "36px", height: "36px", rotate: "90deg", color: "#fff" }} />
                }

            </Button>
            <img
                style={{
                    height: "306px",
                    maxHeight: "75%",
                    alignSelf: "center"
                }}
                src={require("./ProjectImages/" + projectDetail?.imageName)}
                alt={projectDetail?.name}
            />
            {isHover &&
                <Box display="flex"
                    sx={{
                        position: "absolute",
                        justifyContent: "space-between",
                        bottom: "8px",
                        width: "490px",
                        gap: "2px",
                        alignItems: "center"
                    }}>
                    <Box display="flex"
                        flexDirection="column"
                        sx={styleBox}>
                        <Typography variant='subtitle2'>Project type:</Typography>
                        <Typography variant='h6'>{projectDetail?.projectType}</Typography>
                    </Box>
                    <Box display="flex"
                        flexDirection="column"
                        sx={styleBox}>
                        <Typography variant='subtitle2'>Services:</Typography>
                        <Typography variant='h6'>{projectDetail?.services}</Typography>
                    </Box>
                </Box>}
        </Box >
    );
};

export default ProjectCard;
