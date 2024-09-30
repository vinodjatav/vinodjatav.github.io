import { Box, Typography } from "@mui/material"

interface PropTypes {
    buttonRef: React.MutableRefObject<null>;
    data: string;
}
const ImpactBeyondImaginationSubPage = (props: PropTypes) => {
    const {buttonRef, data} = props;
    return (
        <Box ref={buttonRef} display="flex" flexDirection="column" sx={{ padding: "80px", gap: "24px" }}>
            <Typography variant='h2' sx={{ fontSize: "60px", lineHeight: "73px" }}>Impact beyond imagination</Typography>
            <Typography variant="body1" style={{ fontSize: "24px", lineHeight: "29px" }}>{data}</Typography>
        </Box>
    )
}

export default ImpactBeyondImaginationSubPage