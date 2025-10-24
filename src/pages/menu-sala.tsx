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
                Menu Asporto
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-8">
            Menu Sala
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            La nostra carta completa per la cena in sala. Scopri le nostre specialità preparate con ingredienti di prima qualità.
          </p>
        </div>
      </section>

      {/* Menu Images */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/Menu1.png"
                alt="Menu Sala - Pagina 1"
                width={800}
                height={1000}
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/Menu2.png"
                alt="Menu Sala - Pagina 2"
                width={800}
                height={1000}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Pizza Menu */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Le nostre Pizze</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/MenuPizza1.png"
                  alt="Menu Pizza - Parte 1"
                  width={600}
                  height={800}
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/MenuPizza2.png"
                  alt="Menu Pizza - Parte 2"
                  width={600}
                  height={800}
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/MenuPizza3.png"
                  alt="Menu Pizza - Parte 3"
                  width={600}
                  height={800}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Dolci */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Pizze Dolci</h2>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/Pizzedolci.png"
                alt="Pizze Dolci"
                width={1000}
                height={600}
                className="w-full h-auto"
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
                src="/qr-code.png" 
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
                Menu Asporto →
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
