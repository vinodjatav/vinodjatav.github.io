import { Stack, Typography } from "@mui/material";

const Certificates = () => {
  return (
    <Stack
      sx={{
        margin: "8px",
        marginLeft: "0px",
        background: "#fff",
        borderRadius: "40px",
        overflow: "auto",
        maxHeight: "calc(100vh - 16px)",
        height: "100vh",
        width: "calc(100vw - 242px)",
        maxWidth: "calc(100vw - 242px)",
        "::-webkit-scrollbar": {
          display: "none",
        },
        alignItems: "center",
      }}
    >
      <Typography marginTop="40%">In progress.........</Typography>
    </Stack>
  );
};

export default Certificates;
