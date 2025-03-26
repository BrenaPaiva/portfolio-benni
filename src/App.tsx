import Header from "./components/header"
import Home from "./components/home"
import AboutMe from "./components/aboutme"
import Stacks from "./components/stacks"
import Contact from "./components/contact"

function App() {
  return (
    <div className="app-container">
      <Header />
      <Home />
      <Stacks />
      <AboutMe />
      <Contact />
    </div>
  )
}

export default App
