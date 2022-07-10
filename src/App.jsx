import "./App.css"
import Footer from "./Componentes/Footer/Footer"
import Header from "./Componentes/Header/Header"
import Profile from "./Componentes/Profile/Profile"
import Projects from "./Componentes/Projects/Projects"
import Repos from "./Componentes/Repos/Repos"

function App() {

  return (
    <div className="App">
    
      <Header />
      <Profile />
      <Projects />
      <Repos />
      <Footer />
          
    </div>
  )
}

export default App
