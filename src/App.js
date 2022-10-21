import './App.css';
import RenderNav from './Components/Nav/NavContainer';
import HeroContainer from './Components/Hero/HeroContainer';
import Introduction from './Components/Introduction';
import SkillsContainer from './Components/Skills/SkillsContainer';
import ProjectsContainer from './Components/Projects/ProjectsContainer';
import Contact from './Components/Contact/Contact';


function App() {
  return (
    <div className="w-full">
      <RenderNav />
      <HeroContainer />
      <Introduction />
      <SkillsContainer />
      <ProjectsContainer />
      <Contact />
    </div>
  );
}

export default App;
