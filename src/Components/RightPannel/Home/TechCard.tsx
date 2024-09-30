import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Stack,
    Typography,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { CommonItem, ItemCard } from "../../../Models/Models";

interface PropTypes {
  selectedBackground: string;
  cardData: ItemCard;
}
const TechCard = (props: PropTypes) => {
  const { selectedBackground, cardData } = props;

  const style = {
    backgroundColor: selectedBackground.slice(0, -5) + "0.50)",
    ":hover": { backgroundColor: selectedBackground },
    borderRadius: "24px",
    padding: "24px",
  };

  return (
    <Stack sx={style}>
      <Typography variant="h2" sx={{ color: "#fff", marginBottom: "20px" }}>
        {cardData.title}
      </Typography>
      <List aria-label="tech-list">
        {cardData.items.map((item: CommonItem) => (
          <ListItem disablePadding key={item.id}>
            <ListItemIcon>
              <StarIcon />
            </ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Stack>
  );
};

export default TechCard;
