const Sidebar = () => {
    return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-zinc-900 text-white shadow-lg p-6">
      <h1 className="text-2xl font-bold mb-10 tracking-tight">💰 Finanzas</h1>
      <nav>
        <ul className="flex flex-col gap-4">
          <li className="hover:text-yellow-400 transition-colors cursor-pointer">Inicio</li>
          <li className="hover:text-yellow-400 transition-colors cursor-pointer">Gráficos</li>
          <li className="hover:text-yellow-400 transition-colors cursor-pointer">Portafolio</li>
          <li className="hover:text-yellow-400 transition-colors cursor-pointer">Historial</li>
          <li className="hover:text-yellow-400 transition-colors cursor-pointer">Configuración</li>
        </ul>
      </nav>
    </aside>
    );
};




export default Sidebar;