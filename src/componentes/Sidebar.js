import React from 'react';
import images from '../images/images.png'

function Sidebar() {
  return (
    <aside>
      <h2>Sidebar</h2>
      <img
        src={images}
        className='logo-epn'
        alt="logo"
        width='100px'
        height='100px'
        />
      <p>Contenido de Sidebar</p>
      <ul class="collapse">
        <li><a href="#">Mi Perfil</a></li>
        <li><a href="#">Tareas</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Logout</a></li>
      </ul>
    </aside>
  );
}

export default Sidebar;
