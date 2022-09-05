import './App.css';
import About from './components/about/About';
import Intro from './components/intro/Intro';
import Loading from './components/Loading';
import ProjectList from './components/projectList/ProjectList';

function App() {
  return (
    <div className="App">
      <Intro />
      <About />
      <ProjectList />
      {/* <Loading /> */}
    </div>
  );
}

export default App;
