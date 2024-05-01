
import ProjectsSidebar from './components/ProjectsSidebar';
import NewProject from './components/NewProject';
import NoProjectSelected from './components/NoProjectSelected';
import { useState } from 'react';
import SelectedProject from './components/SelectedProject';

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

  function handleSelectProject(id) {
    setProjectsState((preState) => {
      return { ...preState, selectedProject: id }
    })
  }

  function handleAddProject(newProject) {
    setProjectsState((preState) => {
      return { ...preState, selectedProject: newProject.id, projects: [...preState.projects, newProject] };
    });
  }

  function handleAddCancel() {
    setProjectsState((preState) => {
      return { ...preState, selectedProject: undefined };
    });
  }

  function handleDelete() {
    console.log('delete')
    setProjectsState((preState) => {
      return {
        ...preState,
        selectedProject: undefined,
        projects: preState.projects?.filter(ele => ele.id !== preState.selectedProject)
      }
    })
  }
  let selectedProject = projectsState.projects?.find(ele => ele.id == projectsState.selectedProject);
  let content = <SelectedProject project={selectedProject} handleDelete={handleDelete} />;

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        onStartAddingProject={handleStartAddingProject}
        projects={projectsState.projects}
        onSelectProject={handleSelectProject}
        selectedProject={selectedProject}
      />
      {projectsState.selectedProject === null ? <NewProject handleAddProject={handleAddProject} handleAddCancel={handleAddCancel} />
        : projectsState.selectedProject ? content :
          <NoProjectSelected onStartAddingProject={handleStartAddingProject} />}
    </main>
  );
}

export default App;
