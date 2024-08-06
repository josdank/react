import logo from './logo.svg';
import './App.css';
import Header from './componentes/header';
import Sidebar from './componentes/Sidebar';
import Nav from './componentes/Nav';
import Footer from './componentes/Footer';
import ListaTareas from './componentes/ListaTareas';
import images from './images/images.png'
import TareaFormulario from './componentes/TareaFormulario';

function App() {
  return (
      <div className="aplicacion-tareas">
          <div className="logo-contenedor">
              <img
              src={images}
              className='logo-epn'
              alt="logo"
              />
          </div>
          <Header/>
          <Nav/>
          <div className='lista-tareas'>
              <h1>Lista de Tareas</h1>
              <ListaTareas/>
          </div>
          <Footer/>
      </div>
  );
}

export default App;
