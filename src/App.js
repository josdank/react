import logo from './logo.svg';
import './App.css';
import Header from './componentes/header';
import Sidebar from './componentes/Sidebar';
import Nav from './componentes/Nav';
import Footer from './componentes/Footer';
import Tarea from './componentes/Tareas';

function App() {
  return (
    <div className="aplicacion-tareas">
      <Header/>
      <Nav/>
      <div className='main-content'>
      <Sidebar/>
      </div>
      <div className='lista-tareas'>
        <h1>Lista de Tareas</h1>
        Componente
        <Tarea texto="Aprendiendo React en Diseño de Interfaces" />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
