import './App.css'

function App() {
  return (
    <div className="bg-[#F8F7F4] min-h-screen flex flex-col items-center justify-center text-center p-4">
      <header className="mb-8">
        {/* Futuramente, aqui pode ir um SVG do logo */}
        <h1 className="text-4xl md:text-6xl font-bold text- tracking-tight">
          Encanto Criativo
        </h1>
        <p className="text-lg md:text-xl text- mt-2">
          Papelaria e Estamparia com Propósito
        </p>
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