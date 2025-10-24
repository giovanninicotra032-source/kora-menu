import Image from "next/image";
import Link from "next/link";

interface CardMenuProps {
  title: string;
  image: string;
  alt: string;
  href: string;
}

export default function CardMenu({ title, image, alt, href }: CardMenuProps) {
  return (
    <Link
      href={href}
      className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      <Image
        src={image}
        alt={alt}
        width={600}
        height={400}
        className="object-cover w-full h-64 group-hover:scale-110 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
        <h2 className="text-white text-3xl font-semibold font-playfair text-center">
          {title}
        </h2>
      </div>
    </Link>
  );
}

