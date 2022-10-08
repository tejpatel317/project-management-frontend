import Leftbar from "./components/Leftbar";
import Feed from "./components/Feed";
import AddProjectForm from "./components/AddProjectForm";
import AddEmployeeForm from "./components/AddEmployeeForm";
import Rightbar from "./components/Rightbar";
import { Stack } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {

  const [projects, setProjects] = useState([]);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/projects")
      .then((r) => r.json())
      .then((projects) => setProjects(projects));
  }, []);

  useEffect(() => {
    fetch("http://localhost:9292/employees")
      .then((r) => r.json())
      .then((employees) => setEmployees(employees));
  }, []);

  return (
    <Stack direction="row" justifyContent="space-between">
      <BrowserRouter>
        <Leftbar/>
        <Routes>
            <Route path="/"/>
              <Route index element={<Feed projects={projects} employees={employees}/>}/>
              <Route path="addproject" element={<AddProjectForm employees={employees}/>} />
              <Route path="addemployee" element={<AddEmployeeForm projects={projects}/>} />
            <Route/>
        </Routes>
        <Rightbar/>
      </BrowserRouter>
    </Stack>
  );
}

export default App;
