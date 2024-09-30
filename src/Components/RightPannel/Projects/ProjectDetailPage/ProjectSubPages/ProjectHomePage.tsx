import { Box, Stack, Typography } from '@mui/material';

interface PropTypes {
    name: string;
    description: string;
    imageName: string;
    buttonRef: React.MutableRefObject<null>;
}
const ProjectHomePage = (props: PropTypes) => {
    const { name, description, imageName, buttonRef } = props
    return (
        <Stack ref={buttonRef} sx={{ borderRadius: "40px", background: "#145EFD", minHeight: "calc(100vh - 16px)", justifyContent: "space-evenly" }}>
            <img
                style={{
                    alignSelf: "center",
                    width: "70%",
                    marginTop: "-145px",
                    filter: "drop-shadow(10px 4px 54px rgba(0, 0, 0, 0.15))",
                    borderRadius: "24px",
                    height: "calc(100vh - 150px)",
                    maxHeight: "100%",
                }}
                src={require("../../ProjectImages/" + imageName)}
                alt={name}
            />
            <Box display="flex" flexDirection="column" sx={{
                alignSelf: "center",
                padding: "24px"
            }}>
                <Typography variant='h2' sx={{ color: "#fff", fontSize: "80px", lineHeight: "97px" }}>{name}</Typography>
                <Typography variant='h4' sx={{ color: "#fff", fontWeight: "600" }}>{description}</Typography>
            </Box>
        </Stack>
    )
}

export default ProjectHomePage