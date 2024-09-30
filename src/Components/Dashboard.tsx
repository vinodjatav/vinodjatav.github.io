import { Box } from "@mui/system";
import React from "react";
import { Route, Routes } from "react-router-dom";
import LeftPannel from "./LeftPannel/LeftPannel";
import Projects from "./RightPannel/Projects/Projects";
import Home from "./RightPannel/Home/Home";
import Certificates from "./RightPannel/Certificates/Certificates";

const Dashboard = () => {
  const [selectedBackground, setSelectedBackground] = React.useState(
    "rgba(67, 143, 229, 0.80)"
  );
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        background: selectedBackground,
      }}
    >
      <LeftPannel setSelectedBackground={setSelectedBackground} />
      <Routes>
        <Route
          path="/*"
          element={<Home selectedBackground={selectedBackground} />}
        />
        <Route path="/projects" element={<Projects selectedBackground={selectedBackground}/>} />
        <Route path="/certificates" element={<Certificates />} />
      </Routes>
    </Box>
  );
};

export default Dashboard;
