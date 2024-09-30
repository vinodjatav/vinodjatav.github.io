import { Box, Typography } from '@mui/material'
import { ProjectDetailSubPageModel } from '../../../../../Models/Models';

interface PropTypes {
    buttonRef: React.MutableRefObject<null>;
    data: ProjectDetailSubPageModel[];
}
const ProjectDetailSubPage = (props: PropTypes) => {
    const { buttonRef, data } = props;
    return (
        <Box ref={buttonRef} display="grid" gridTemplateColumns="auto auto" sx={{ width: "calc(100vw - 700px)", padding: "80px", paddingTop: "24px", paddingBottom: "160px", gap: "60px" }}>
            {data?.map((details) => (
                <Box key={details?.id}>
                    <Typography variant='h4' color="#9CA6AD">{details?.type}</Typography>
                    <Typography variant='body1' sx={{ fontSize: "24px", lineHeight: "29px" }}>{details?.description}</Typography>
                </Box>
            ))}
        </Box>
    )
}

export default ProjectDetailSubPage