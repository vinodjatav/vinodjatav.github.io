import { Button, Stack, Typography } from '@mui/material';
const listOfSubProjectDetail = [
    {
        id: 1,
        name: "Project Details"
    },
    {
        id: 2,
        name: "You will learn"
    },
    {
        id: 3,
        name: "The challenge - A wicked problem"
    },
    {
        id: 4,
        name: "Four-pronged approach to a solving a wicked problem"
    },
    {
        id: 5,
        name: "Our market"
    },
    {
        id: 6,
        name: "Focus in a massive industry"
    },
    {
        id: 7,
        name: "Open mindset to go beyond software"
    },
    {
        id: 8,
        name: "My unique blend of innovation"
    },
    {
        id: 9,
        name: "Impact beyond imagination"
    },
    {
        id: 10,
        name: "My learnings"
    },
]

interface PropTypes {
    listOfButtonRef: { [key: string]: React.MutableRefObject<any> };
    selectedItem: number;
    setSelectedItem: Function;
}
const ProjectDetailSubList = (props: PropTypes) => {
    const { listOfButtonRef, selectedItem, setSelectedItem } = props;
    const handleButtonClick = (id: number) => {
        setSelectedItem(id);
        const buttonRef = listOfButtonRef['buttonRef' + id];
        buttonRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    return (
        <Stack sx={{
            position: "absolute",
            left: "84%",
            top: "0px",
            alignItems: "flex-end",
            padding: "120px 24px",
        }}>
            {listOfSubProjectDetail?.map((subProjectDetail) => (
                <Button key={subProjectDetail?.id} sx={{ background: "#fff !important", }} onClick={() => handleButtonClick(subProjectDetail?.id)}>
                    <Typography variant='h6'
                        sx={{
                            color: (selectedItem === subProjectDetail?.id) ? "#353535" : "#9CA6AD",
                            textTransform: "none",
                            maxWidth: "180px",
                            background: "#fff",
                            textAlign: "right",
                            borderBottom: (selectedItem === subProjectDetail?.id) ? "2px solid #145EFD" : "none",
                            ":hover": {
                                color: "#353535",
                                borderBottom: "2px solid #145EFD"

                            }

                        }}>{subProjectDetail?.name}</Typography>
                </Button>
            ))}
        </Stack>
    )
}

export default ProjectDetailSubList