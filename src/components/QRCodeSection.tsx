import Image from "next/image";
import Link from "next/link";

interface QRCodeSectionProps {
  variant?: 'default' | 'compact' | 'minimal';
  showInstructions?: boolean;
  showDirectLinks?: boolean;
  className?: string;
}

export default function QRCodeSection({ 
  variant = 'default', 
  showInstructions = true, 
  showDirectLinks = true,
  className = ''
}: QRCodeSectionProps) {
  if (variant === 'minimal') {
    return (
      <div className={`text-center ${className}`}>
        <p className="text-gray-500 text-sm mb-4">Scansiona per aprire il menu</p>
        <Image src="/qr-code.png" alt="QR Code" width={120} height={120} className="mx-auto" />
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className={`bg-white rounded-2xl shadow-lg p-6 border border-gray-200 ${className}`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Image
              src="/images/logo.png"
              alt="KORA Logo"
              width={50}
              height={50}
              className="rounded-full"
            />
            <div>
              <h2 className="text-xl font-bold text-gray-900">KORA</h2>
              <p className="text-sm text-gray-600">Scansiona per il menu</p>
            </div>
          </div>
          <div className="bg-white p-3 rounded-xl shadow-md">
            <Image 
              src="/qr-code.png" 
              alt="QR Code" 
              width={100} 
              height={100}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-3xl shadow-2xl p-12 border border-gray-100 ${className}`}>
      {/* Logo e titolo */}
      <div className="mb-8 text-center">
        <Image
          src="/images/logo.png"
          alt="KORA Logo"
          width={80}
          height={80}
          className="rounded-full mx-auto mb-6"
        />
        <h1 className="text-4xl font-bold text-gray-900 mb-2">KORA</h1>
        <p className="text-lg text-gray-600 mb-2">Pizza · Arte · Essenza</p>
        <p className="text-sm text-gray-500">Scansiona il QR code per vedere il nostro menu</p>
      </div>

      {/* QR Code principale */}
      <div className="mb-8 text-center">
        <div className="bg-white p-6 rounded-2xl shadow-lg inline-block border-2 border-gray-100">
          <Image 
            src="/qr-code.png" 
            alt="QR Code per il menu KORA" 
            width={200} 
            height={200} 
            className="mx-auto"
          />
        </div>
      </div>

      {/* Istruzioni */}
      {showInstructions && (
        <div className="space-y-4 text-gray-600 mb-8">
          <p className="text-lg font-medium text-center">Come utilizzare:</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-2">
                <span className="text-xl">📱</span>
              </div>
              <p className="font-medium">1. Apri la fotocamera</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-2">
                <span className="text-xl">📷</span>
              </div>
              <p className="font-medium">2. Scansiona il QR</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-2">
                <span className="text-xl">🍕</span>
              </div>
              <p className="font-medium">3. Scegli il tuo menu</p>
            </div>
          </div>
        </div>
      )}

      {/* Link diretti per chi non può scansionare */}
      {showDirectLinks && (
        <div className="pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4 text-center">Non riesci a scansionare? Usa questi link:</p>
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
      )}
    </div>
  );
}
