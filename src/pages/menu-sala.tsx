import Image from "next/image";
import Link from "next/link";

export default function MenuSala() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <Link href="/" className="flex items-center space-x-4">
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
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/menu-sala" className="text-gray-900 font-medium border-b-2 border-gray-900">
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
            src="/images/1.png"
            alt="Menu Sala Background"
            fill
            className="object-cover scale-105 hover:scale-100 transition-transform duration-[10s] ease-out"
            priority
          />
          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-black/60"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tight drop-shadow-2xl">
            Menu Sala
          </h1>
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
            La nostra carta completa per la cena in sala. Scopri le nostre specialità preparate con ingredienti di prima qualità.
          </p>
        </div>
      </section>

      {/* Menu Images */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {/* Menu Pages */}
            <div className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
              <Image
                src="/images/Menu1.png"
                alt="Menu Sala - Pagina 1"
                width={1600}
                height={2000}
                className="w-full h-auto"
                quality={100}
              />
            </div>
            
            <div className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
              <Image
                src="/images/Menu2.png"
                alt="Menu Sala - Pagina 2"
                width={1600}
                height={2000}
                className="w-full h-auto"
                quality={100}
              />
            </div>

            {/* Pizza Menu */}
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Le nostre Pizze</h2>
            </div>
            
            <div className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
              <Image
                src="/images/MenuPizza1.png"
                alt="Menu Pizza - Parte 1"
                width={1200}
                height={1600}
                className="w-full h-auto"
                quality={100}
              />
            </div>
            
            <div className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
              <Image
                src="/images/MenuPizza2.png"
                alt="Menu Pizza - Parte 2"
                width={1200}
                height={1600}
                className="w-full h-auto"
                quality={100}
              />
            </div>
            
            <div className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
              <Image
                src="/images/MenuPizza3.png"
                alt="Menu Pizza - Parte 3"
                width={1200}
                height={1600}
                className="w-full h-auto"
                quality={100}
              />
            </div>

            {/* Dolci */}
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Pizze Dolci</h2>
            </div>
            
            <div className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
              <Image
                src="/images/Pizzedolci.png"
                alt="Pizze Dolci"
                width={2000}
                height={1200}
                className="w-full h-auto"
                quality={100}
              />
            </div>
          </div>
        </div>
      </section>

      {/* QR Code Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Condividi il Menu</h2>
            <p className="text-gray-600 mb-6">Scansiona il QR code per condividere questo menu</p>
            
            <div className="bg-white p-4 rounded-xl shadow-md inline-block border-2 border-gray-100 mb-6">
              <Image 
                src="/images/Untitled 1.png" 
                alt="QR Code per il menu KORA" 
                width={120} 
                height={120} 
                className="mx-auto"
              />
            </div>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors font-semibold text-center"
              >
                ← Torna alla Home
              </Link>
              <Link
                href="/menu-asporto"
                className="px-8 py-4 bg-white text-gray-900 border-2 border-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-colors font-semibold text-center"
              >
                Menu D'asporto →
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
