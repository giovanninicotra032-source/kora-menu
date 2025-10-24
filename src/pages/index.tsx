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
                Menu D'asporto
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden min-h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/Homepage.png"
            alt="KORA Pizzeria Background"
            fill
            className="object-cover scale-105 hover:scale-100 transition-transform duration-[10s] ease-out"
            priority
          />
          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-black/60"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="mb-16">
            <h2 className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tight drop-shadow-2xl">
              Il nostro menù
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
              Scopri la nostra selezione di pizze artigianali, preparate con ingredienti di prima qualità e la passione di sempre.
            </p>
          </div>
          
          {/* Menu Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <Link 
              href="/menu-sala" 
              className="group relative bg-white/95 backdrop-blur-sm rounded-3xl p-0 shadow-2xl hover:shadow-3xl transition-all duration-700 border border-white/20 overflow-hidden transform hover:-translate-y-2"
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
              className="group relative bg-white/95 backdrop-blur-sm rounded-3xl p-0 shadow-2xl hover:shadow-3xl transition-all duration-700 border border-white/20 overflow-hidden transform hover:-translate-y-2"
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

      {/* Contatti e Info Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              Dove trovarci
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Vieni a trovarci per un'esperienza culinaria unica
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Dove */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold">Dove</h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Via Roma, 123<br />
                00100 – Roma
              </p>
            </div>

            {/* Come */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold">Come</h3>
              </div>
              <p className="text-gray-300 text-lg mb-4">
                Prenota direttamente da qui
              </p>
              <p className="text-gray-300 text-lg mb-4">
                Hai bisogno di maggiori informazioni?<br />
                Contattaci all'indirizzo info@kora.it
              </p>
              <p className="text-gray-300 text-lg">
                Chiamaci al +39 06 123 4567<br />
                <span className="text-sm text-gray-400">L'ufficio informazioni è aperto dal Lunedì al Sabato dalle ore 9:00 alle ore 18:00</span>
              </p>
            </div>

            {/* Orari */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 md:col-span-2 lg:col-span-1">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold">Orari di apertura</h3>
              </div>
              <div className="space-y-3 text-gray-300">
                <div className="flex justify-between">
                  <span className="font-medium">LUNEDI</span>
                  <span>Chiusi</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">MARTEDI E MERCOLEDI</span>
                  <span>19.00/00.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">GIOVEDI, VENERDI E SABATO</span>
                  <span>12.00/15.00<br />19.00/00.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">DOMENICA</span>
                  <span>19.00/00.00</span>
                </div>
              </div>
            </div>
          </div>

          {/* Gift Card Section */}
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold">Regala esperienze, non oggetti</h3>
            </div>
            <p className="text-gray-300 text-lg mb-6">
              Scopri le nostre Gift card
            </p>
            <button className="px-8 py-4 bg-white text-gray-900 rounded-full font-medium hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Acquistala qui
            </button>
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