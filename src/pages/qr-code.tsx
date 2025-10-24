import Image from "next/image";

export default function QRCodePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Versione principale per tavoli */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-3xl shadow-2xl p-12 border border-gray-100">
            {/* Logo e titolo */}
            <div className="mb-8">
              <Image
                src="/images/logo.png"
                alt="KORA Logo"
                width={100}
                height={100}
                className="rounded-full mx-auto mb-6"
              />
              <h1 className="text-5xl font-bold text-gray-900 mb-2">KORA</h1>
              <p className="text-xl text-gray-600 mb-2">Pizza · Arte · Essenza</p>
              <p className="text-lg text-gray-500">Scansiona il QR code per vedere il nostro menu</p>
            </div>

            {/* QR Code principale */}
            <div className="mb-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg inline-block border-2 border-gray-100">
                <Image 
                  src="/qr-code.png" 
                  alt="QR Code per il menu KORA" 
                  width={250} 
                  height={250} 
                  className="mx-auto"
                />
              </div>
            </div>

            {/* Istruzioni semplici */}
            <div className="space-y-4 text-gray-600">
              <p className="text-xl font-medium">Come utilizzare:</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-lg">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-3">
                    <span className="text-2xl">📱</span>
                  </div>
                  <p className="font-medium">1. Apri la fotocamera</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-3">
                    <span className="text-2xl">📷</span>
                  </div>
                  <p className="font-medium">2. Scansiona il QR</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-3">
                    <span className="text-2xl">🍕</span>
                  </div>
                  <p className="font-medium">3. Scegli il tuo menu</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Versione compatta per biglietti da visita */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Image
                  src="/images/logo.png"
                  alt="KORA Logo"
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">KORA</h2>
                  <p className="text-sm text-gray-600">Scansiona per il menu</p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-md">
                <Image 
                  src="/qr-code.png" 
                  alt="QR Code" 
                  width={120} 
                  height={120}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Versione minimalista per stampa */}
      <section className="py-8 print:py-4">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 print:shadow-none print:border-none">
            <div className="text-center">
              <Image
                src="/images/logo.png"
                alt="KORA Logo"
                width={40}
                height={40}
                className="rounded-full mx-auto mb-3"
              />
              <h3 className="text-lg font-bold text-gray-900 mb-2">KORA</h3>
              <p className="text-sm text-gray-600 mb-4">Scansiona per il menu</p>
              <div className="bg-white p-3 rounded-lg shadow-sm inline-block">
                <Image 
                  src="/qr-code.png" 
                  alt="QR Code" 
                  width={100} 
                  height={100}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
