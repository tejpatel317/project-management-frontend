import Leftbar from "./components/Leftbar";
import Feed from "./components/Feed";
import AddProjectForm from "./components/AddProjectForm";
import AddEmployeeForm from "./components/AddEmployeeForm";
import Rightbar from "./components/Rightbar";
import { Stack } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Stack direction="row" justifyContent="space-between">
      <BrowserRouter>
        <Leftbar/>
        <Routes>
            <Route path="/"/>
              <Route index element={<Feed />} />
              <Route path="addproject" element={<AddProjectForm />} />
              <Route path="addemployee" element={<AddEmployeeForm />} />
            <Route/>
        </Routes>
        <Rightbar/>
      </BrowserRouter>
    </Stack>
  );
}

export default App;
