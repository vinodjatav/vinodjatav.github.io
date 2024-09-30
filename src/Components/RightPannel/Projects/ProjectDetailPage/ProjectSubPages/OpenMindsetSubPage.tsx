import { Box, ListItemText, Typography } from "@mui/material"
import { OpenMinsetSubPageModel } from "../../../../../Models/Models";

interface PropTypes {
    buttonRef: React.MutableRefObject<null>;
    data: OpenMinsetSubPageModel;
}
const OpenMindsetSubPage = (props: PropTypes) => {
    const {buttonRef, data} = props;
    return (
        <Box ref={buttonRef} display="flex" flexDirection="column" sx={{ padding: "80px", gap: "24px" }}>
            <Typography variant='h2' sx={{ fontSize: "60px", lineHeight: "73px" }}>Open mindset to go beyond software</Typography>
            <ListItemText primary={<Typography variant="body1" style={{ fontSize: "24px", lineHeight: "29px" }}>&bull; {data.mainItem} </Typography>} />
            {data.openMinsetItems.map((item)=>(
               <ListItemText primary={ <Typography key={item.id} component="ul" variant="body1" style={{ fontSize: "24px", lineHeight: "29px" }}>&bull; {item.text}</Typography>} />
            ))}
            <ListItemText primary={<Typography variant="body1" style={{ fontSize: "24px", lineHeight: "29px" }}>&bull; {data.anotherMainItem}</Typography>} />
        </Box>
    )
}

export default OpenMindsetSubPage