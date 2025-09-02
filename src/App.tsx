import './App.css';
import Logo from './assets/logo_encanto_criativo-sem_fundo-01.svg'; // 1. IMPORTAÇÃO MÁGICA DO VITE

function App() {
  return (
    <div className="bg-[#F8F7F4] min-h-screen flex flex-col items-center justify-center text-center p-4">
      <header className="mb-12">
        {/* 2. USE O LOGO COMO UM COMPONENTE */}
        <img src={Logo} className="w-60 max-w-[90%] text-[#C5A554]" alt="Vite logo" />
      </header>

      <main>
        <h2 className="text-3xl md:text-5xl font-semibold text-[#C5A554]">
          Em Breve
        </h2>
        <p className="mt-4 max-w-2xl text-base md:text-lg text-gray-600">
          Estamos preparando um espaço acolhedor e criativo, com produtos pensados com carinho para todos. Agradecemos a sua paciência e mal podemos esperar para compartilhar nosso encanto com você.
        </p>
      </main>

      <footer className="mt-12 text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} Encanto Criativo. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;

