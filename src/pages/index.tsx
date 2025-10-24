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
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-6xl md:text-8xl font-bold text-gray-900 mb-8">
            Il nostro menù
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Scopri la nostra selezione di pizze artigianali, preparate con ingredienti di prima qualità e la passione di sempre.
          </p>
          
          {/* Menu Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Link 
              href="/menu-sala" 
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="aspect-video rounded-xl overflow-hidden mb-6">
                <Image
                  src="/images/1.png"
                  alt="Menu Sala"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Menu Sala</h3>
              <p className="text-gray-600">La nostra carta completa per la cena in sala</p>
            </Link>

            <Link 
              href="/menu-asporto" 
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="aspect-video rounded-xl overflow-hidden mb-6">
                <Image
                  src="/images/scatola.png"
                  alt="Menu D'asporto"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Menu D'asporto</h3>
              <p className="text-gray-600">Porta a casa la nostra arte culinaria</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="aspect-video rounded-2xl overflow-hidden">
              <Image
                src="/images/4.png"
                alt="Pizza Artigianale"
                width={800}
                height={600}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="aspect-video rounded-2xl overflow-hidden">
              <Image
                src="/images/5.png"
                alt="Ambiente Pizzeria"
                width={800}
                height={600}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Chi Siamo Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Chi Siamo</h2>
            <p className="text-xl text-gray-600">La nostra storia e la nostra passione</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/chi siamo.png"
                alt="Chi Siamo"
                width={1200}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* QR Code Section */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-xl p-12 border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Scansiona il QR Code</h2>
            <p className="text-lg text-gray-600 mb-8">Per accedere rapidamente al nostro menu</p>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg inline-block border-2 border-gray-100 mb-8">
              <Image 
                src="/qr-code.png" 
                alt="QR Code per il menu KORA" 
                width={150} 
                height={150} 
                className="mx-auto"
              />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/menu-sala"
                className="px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors font-medium"
              >
                Menu Sala
              </Link>
              <Link
                href="/menu-asporto"
                className="px-6 py-3 bg-white text-gray-900 border-2 border-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-colors font-medium"
              >
                Menu D'asporto
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
