import Header from "./components/header"
import Home from "./components/home"
import AboutMe from "./components/aboutme"
import Stacks from "./components/stacks"
import Contact from "./components/contact"
import Stacks2 from "./components/stacks2"

function App() {
  return (
    <div className="app-container">
      <Header />
      <Home />
      <Stacks />
      <Stacks2 />
      <AboutMe />
      <Contact />
    </div>
  )
}

export default App
