import { ThemeProvider } from "@emotion/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import ProjectDetailPage from "./Components/RightPannel/Projects/ProjectDetailPage/ProjectDetailPage";
import { theme } from './Theme/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Dashboard />} />
          <Route path="/project/:id" element={<ProjectDetailPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
