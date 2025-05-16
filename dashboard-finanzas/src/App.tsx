import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="ml-64 w-full min-h-screen bg-zinc-100 p-8">
        <h2 className="text-3xl font-bold text-red-500 mb-6">Panel Principal</h2>
        <p className="text-zinc-700">Bienvenido al dashboard financiero.</p>
      </main>
    </div>
  );
}

export default App;
