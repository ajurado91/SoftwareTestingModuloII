import React from 'react';
import { LogOut, Home as HomeIcon } from 'lucide-react';

interface HomePageProps {
  onLogout: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ onLogout }) => {
  return (
    <main className="min-h-screen bg-gray-900 flex items-center justify-center w-full px-4" role="main">
      <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-7xl">
        <header className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <HomeIcon className="w-8 h-8 text-blue-800 mr-2" aria-hidden="true" />
            <h1 id="welcome-title" className="text-2xl font-bold text-gray-800">Bienvenido</h1>
          </div>
          <button
            onClick={onLogout}
            className="flex items-center bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300"
            aria-label="Cerrar sesión"
          >
            <LogOut className="w-4 h-4 mr-2" aria-hidden="true" />
            <span>Cerrar sesión</span>
          </button>
        </header>

        <p className="text-gray-600 mb-6" role="status">
          Has iniciado sesión correctamente. Esta es tu página de inicio.
        </p>
      </div>
    </main>
  );
};

export default HomePage;
