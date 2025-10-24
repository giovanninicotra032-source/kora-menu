import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-4">
              <Image
                src="/images/logo.png"
                alt="KORA Logo"
                width={60}
                height={60}
                className="rounded-full"
              />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">KORA</h1>
                <p className="text-sm text-gray-500">Pizza · Arte · Essenza</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/menu-sala" className="text-gray-700 hover:text-gray-900 font-medium">
                Menu Sala
              </Link>
              <Link href="/menu-asporto" className="text-gray-700 hover:text-gray-900 font-medium">
                Menu Asporto
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="mb-16">
            <h2 className="text-6xl md:text-8xl font-bold text-gray-900 mb-8 tracking-tight">
              Il nostro menù
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Scopri la nostra selezione di pizze artigianali, preparate con ingredienti di prima qualità e la passione di sempre.
            </p>
          </div>
          
          {/* Menu Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <Link 
              href="/menu-sala" 
              className="group relative bg-white rounded-3xl p-0 shadow-2xl hover:shadow-3xl transition-all duration-700 border border-gray-100 overflow-hidden transform hover:-translate-y-2"
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"></div>
              
              <div className="aspect-video rounded-t-3xl overflow-hidden relative">
                <Image
                  src="/images/1.png"
                  alt="Menu Sala"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              <div className="p-8 relative z-20">
                <h3 className="text-3xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300">
                  Menu Sala
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  La nostra carta completa per la cena in sala
                </p>
                
                {/* Arrow indicator */}
                <div className="mt-6 flex items-center text-gray-400 group-hover:text-gray-600 transition-colors duration-300">
                  <span className="text-sm font-medium mr-2">Scopri il menu</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

            <Link 
              href="/menu-asporto" 
              className="group relative bg-white rounded-3xl p-0 shadow-2xl hover:shadow-3xl transition-all duration-700 border border-gray-100 overflow-hidden transform hover:-translate-y-2"
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"></div>
              
              <div className="aspect-video rounded-t-3xl overflow-hidden relative">
                <Image
                  src="/images/scatola.png"
                  alt="Menu D'asporto"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              <div className="p-8 relative z-20">
                <h3 className="text-3xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300">
                  Menu D'asporto
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  Porta a casa la nostra arte culinaria
                </p>
                
                {/* Arrow indicator */}
                <div className="mt-6 flex items-center text-gray-400 group-hover:text-gray-600 transition-colors duration-300">
                  <span className="text-sm font-medium mr-2">Scopri il menu</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              La nostra arte
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ogni pizza è un'opera d'arte, creata con passione e ingredienti di prima qualità
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="group relative aspect-video rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-2">
              <Image
                src="/images/4.png"
                alt="Pizza Artigianale"
                width={800}
                height={600}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-2xl font-bold mb-2">Pizza Artigianale</h3>
                <p className="text-gray-200">Preparata con ingredienti selezionati</p>
              </div>
            </div>
            
            <div className="group relative aspect-video rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-2">
              <Image
                src="/images/5.png"
                alt="Ambiente Pizzeria"
                width={800}
                height={600}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-2xl font-bold mb-2">Ambiente Accogliente</h3>
                <p className="text-gray-200">Un'atmosfera unica per la tua cena</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chi Siamo Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Chi Siamo
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              La nostra storia e la nostra passione per l'arte culinaria
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="group relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-1">
              <Image
                src="/images/chi siamo.png"
                alt="Chi Siamo"
                width={1200}
                height={600}
                className="w-full h-auto group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* QR Code Section */}
      <section className="py-20 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="bg-white rounded-3xl shadow-2xl p-12 border border-gray-100 hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-1">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">Scansiona il QR Code</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Per accedere rapidamente al nostro menu dal tuo smartphone
            </p>
            
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg inline-block border-2 border-gray-100 mb-8 hover:shadow-xl transition-all duration-500">
              <Image 
                src="/qr-code.png" 
                alt="QR Code per il menu KORA" 
                width={180} 
                height={180} 
                className="mx-auto"
              />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/menu-sala"
                className="group px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <span className="flex items-center justify-center">
                  Menu Sala
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
              <Link
                href="/menu-asporto"
                className="group px-8 py-4 bg-white text-gray-900 border-2 border-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <span className="flex items-center justify-center">
                  Menu D'asporto
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <Image
                src="/images/logo.png"
                alt="KORA Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="text-xl font-bold">KORA</span>
            </div>
            <p className="text-gray-400">© 2025 KORA Pizzeria – Tutti i diritti riservati</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
