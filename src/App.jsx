
import ProjectsSidebar from './components/ProjectsSidebar';
import NewProject from './components/NewProject';
import NoProjectSelected from './components/NoProjectSelected';
import { useState } from 'react';

function App() {

  const [projectsState, setProjectsState] = useState({
    selectedProject: undefined,
    projects: []
  });

  function handleStartAddingProject() {
    setProjectsState((preState) => {
      const newState = { ...preState, selectedProject: null };
      return newState;
    });
  }

  function handleAddProject(newProject) {
    setProjectsState((preState) => {
      return { ...preState, selectedProject: newProject.id, projects: [...preState.projects, newProject] };
    });
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onStartAddingProject={handleStartAddingProject} projects={projectsState.projects}/>
      {projectsState.selectedProject === null ? <NewProject handleAddProject={handleAddProject}/> : <NoProjectSelected onStartAddingProject={handleStartAddingProject} />}
    </main>
  );
}

export default App;
