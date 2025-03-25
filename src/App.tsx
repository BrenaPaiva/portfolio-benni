import Header from "./components/header"
import Home from "./components/home"
import AboutMe from "./components/aboutme"
import Stacks from "./components/stacks"
import Projects from "./components/projects"

function App() {
  return (
    <div className="app-container">
      <Header />
      <Home />
      <Stacks />
      <AboutMe />
      <Projects />
    </div>
  )
}

export default App
