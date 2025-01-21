import { Route, Routes } from 'react-router-dom';
import Landing from "./scenes/landing";
import ProjectDetailsComponent from "./scenes/projects/projectDetails";
function App() {
    return (
        <Routes>
            <Route path="/" Component={Landing}/>
            <Route path='/project/:name' Component={ProjectDetailsComponent}/>
        </Routes>
        
    );
}

export default App;
