import { Route, Routes } from 'react-router-dom';
import Landing from "./scenes/landing";
import ProjectDetailsComponent from "./scenes/projects/projectDetails";
import WorkExperience from "./scenes/experience/work.tsx";
import EducationExperience from "./scenes/experience/education.tsx";
import Resume from "./scenes/resume";
function App() {
    return (
        <Routes>
            <Route path="/" Component={Landing}/>
            <Route path='/project/:name' Component={ProjectDetailsComponent}/>
            <Route path='/experience' Component={WorkExperience}/>
            <Route path='/education' Component={EducationExperience}/>
            <Route path='/resume' Component={Resume}/>
        </Routes>
        
    );
}

export default App;
