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

  function handleNewProject(newProject) {
    setProjects([...projects, newProject])

    const employeesToUpdate = newProject.employees.map((employee) => employee.id)
    const updatedEmployees = employees.map((employee) => {
      if (employeesToUpdate.includes(employee.id)) {
        const copyEmployeeProjects = [...employee.projects, {id: newProject.id, name: newProject.name, detail: newProject.detail, due_date: newProject.due_date}]
        const newEmployee = {...employee}
        newEmployee.projects = copyEmployeeProjects
        return newEmployee
      }
      else {
        return employee
      }
    })

    setEmployees(updatedEmployees)
  }


  function handleNewEmployee(newEmployee) {
    setEmployees([...employees, newEmployee])

    const projectsToUpdate = newEmployee.projects.map((project) => project.id)
    const updatedProjects = projects.map((project) => {
      if (projectsToUpdate.includes(project.id)) {
        const copyProjectEmployees = [...project.employees, {id: newEmployee.id, first_name: newEmployee.first_name, last_name: newEmployee.last_name, position: newEmployee.position, avatar: newEmployee.avatar}]
        const newProject = {...project}
        newProject.employees = copyProjectEmployees
        return newProject
      }
      else {
        return project
      }
    })

    setProjects(updatedProjects)
  }

  function onDeletedProject(deletedProject) {
    const updatedProjects = projects.filter((project) => project.id !== deletedProject.id)
    setProjects(updatedProjects)

    const employeesToUpdate = deletedProject.employees.map((employee) => employee.id)
    const updatedEmployees = employees.map((employee) => {
      if (employeesToUpdate.includes(employee.id)) {
        const copyEmployeeProjects = employee.projects.filter((project) => project.id !== deletedProject.id)
        const newEmployee = {...employee}
        newEmployee.projects = copyEmployeeProjects
        return newEmployee
      }
      else {
        return employee
      }
    })

    setEmployees(updatedEmployees)
  }

  function handleProjectUpdate(newProject) {

    const oldEmployees = projects.find((project) => project.id === newProject.id).employees.map((employee) => employee.id)
    const newEmployees = newProject.employees.map((employee) => employee.id)
    const employeesToUpdate = newEmployees.filter(x => !oldEmployees.includes(x))
    const updatedEmployees = employees.map((employee) => {
      if (employeesToUpdate.includes(employee.id)) {
        const copyEmployeeProjects = [...employee.projects, {id: newProject.id, name: newProject.name, detail: newProject.detail, due_date: newProject.due_date}]
        const newEmployee = {...employee}
        newEmployee.projects = copyEmployeeProjects
        return newEmployee
      }
      else {
        return employee
      }
    })

    setEmployees(updatedEmployees)

    const updatedProjects = projects.map((project) => {
      if (project.id === newProject.id) {
        return newProject
      } else {
        return project
      }
    })

    setProjects(updatedProjects)
  }

  return (
    <Stack direction="row" justifyContent="space-between">
      <BrowserRouter>
        <Leftbar/>
        <Routes>
            <Route path="/"/>
              <Route index element={<Feed projects={projects} employees={employees} onDeletedProject={onDeletedProject} handleProjectUpdate={handleProjectUpdate}/>}/>
              <Route path="addproject" element={<AddProjectForm employees={employees} handleNewProject={handleNewProject}/>} />
              <Route path="addemployee" element={<AddEmployeeForm projects={projects} handleNewEmployee={handleNewEmployee}/>} />
            <Route/>
        </Routes>
        <Rightbar employees={employees}/>
      </BrowserRouter>
    </Stack>
  );
}

export default App;
