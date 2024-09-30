import { Box, ListItemText, Typography } from "@mui/material";
import { FocusSubPageModel } from "../../../../../Models/Models";

interface PropTypes {
    buttonRef: React.MutableRefObject<null>;
    data: FocusSubPageModel;
}
const FocusSubPage = (props: PropTypes) => {
    const { buttonRef, data } = props;
    return (
        <Box ref={buttonRef} display="flex" flexDirection="column" sx={{ padding: "80px", gap: "24px" }}>
            <Typography variant='h2' sx={{ fontSize: "60px", lineHeight: "73px" }}>Focus in a massive industry</Typography>
            <ListItemText primary={<Typography variant="body1" style={{ fontSize: "24px", lineHeight: "29px" }}>&bull; {data.mainItem} </Typography>} />
            {data.focusItems.map((item)=>(
               <ListItemText primary={ <Typography key={item.id} component="ul" variant="body1" style={{ fontSize: "24px", lineHeight: "29px" }}>&bull; {item.text}</Typography>} />
            ))}
        </Box>
    )
}

export default FocusSubPage