import React, { useState } from 'react';
import { User, Lock } from 'lucide-react';
import upeaLogo from '../assets/UpeaPosgrado.png';

interface LoginPageProps {
  onLogin: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{username?: string; password?: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: {username?: string; password?: string} = {};
    if (!username.trim()) {
      newErrors.username = 'El usuario es requerido';
    }
    if (!password) {
      newErrors.password = 'La contraseña es requerida';
    } else if (password.length < 6) {
      newErrors.password = 'La contraseña debe tener al menos 6 caracteres';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    if (validateForm()) {
      onLogin();
    }
    setIsSubmitting(false);
  };

  return (
    <main className="min-h-screen bg-gray-900 flex items-center justify-center w-full px-4" role="main">
      <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-7xl flex" role="region" aria-labelledby="login-title">
        <div className="flex-1 pr-8 border-r border-gray-200 flex items-center justify-center p-4">
          <img 
            src={upeaLogo} 
            alt="Universidad Pública de El Alto - Posgrado" 
            className="max-w-[500px] max-h-[500px] object-contain border-4 border-gray-200 rounded-lg p-2"
          />
        </div>
        <div className="flex-1 pl-8 flex flex-col justify-center">
          <h1 id="login-title" className="text-3xl font-bold text-gray-800 mb-6">Iniciar Sesión</h1>
          <form 
            onSubmit={handleSubmit} 
            className="w-full max-w-md" 
            noValidate
            aria-label="Formulario de inicio de sesión"
          >
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
                Usuario <span className="text-red-500" aria-hidden="true">*</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="username"
                  name="username"
                  className={`w-full px-3 py-2 pl-10 text-gray-900 bg-gray-200 rounded focus:outline-none focus:bg-white focus:ring-2 ${errors.username ? 'border-red-500 focus:ring-red-500' : 'focus:ring-blue-500'}`}
                  placeholder="Ingrese su usuario"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                    if (errors.username) setErrors({...errors, username: undefined});
                  }}
                  aria-required="true"
                  aria-invalid={!!errors.username}
                  aria-describedby={errors.username ? "username-error" : undefined}
                />
                <User className="absolute left-3 top-2.5 text-gray-500" size={18} aria-hidden="true" />
              </div>
              {errors.username && (
                <p id="username-error" className="mt-1 text-red-500 text-sm" role="alert">
                  {errors.username}
                </p>
              )}
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                Contraseña <span className="text-red-500" aria-hidden="true">*</span>
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  name="password"
                  className={`w-full px-3 py-2 pl-10 text-gray-700 bg-gray-200 rounded focus:outline-none focus:bg-white focus:ring-2 ${errors.password ? 'border-red-500 focus:ring-red-500' : 'focus:ring-blue-500'}`}
                  placeholder="Ingrese su contraseña"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (errors.password) setErrors({...errors, password: undefined});
                  }}
                  aria-required="true"
                  aria-invalid={!!errors.password}
                  aria-describedby={errors.password ? "password-error" : undefined}
                />
                <Lock className="absolute left-3 top-2.5 text-gray-500" size={18} aria-hidden="true" />
              </div>
              {errors.password && (
                <p id="password-error" className="mt-1 text-red-500 text-sm" role="alert">
                  {errors.password}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300 disabled:opacity-50"
              disabled={isSubmitting}
              aria-busy={isSubmitting}
            >
              {isSubmitting ? 'Iniciando sesión...' : 'Ingresar'}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
