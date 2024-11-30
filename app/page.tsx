import Image from "next/image";
import Link from "next/link";
import stock from "../public/data/Data";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] py-8">
      <div className="container w-full max-w-5xl h-full mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Product Image */}
          <div className="w-full">
            <Image
              src={stock.image}
              alt={stock.title}
              width={705}
              height={1000}
              className="w-full h-full object-fill rounded-lg shadow-lg"
              priority
            />
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-3xl font-bold text-[var(--accent-primary)] mb-4">
              {stock.title}
            </h1>

            <p className="text-lg text-[var(--foreground)] mb-6">
              {stock.description}
            </p>

            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-3">Destaques:</h2>
              <ul className="list-disc list-inside space-y-2 text-[var(--foreground)]">
                {stock.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="flex items-center mb-6">
              <span className="text-3xl font-bold text-[var(--accent-primary)] mr-4">
                {stock.price}
              </span>
            </div>

            <div className="space-y-4">
              <Link
                href="/Comprar"
                className="block w-full text-center bg-[var(--accent-primary)] text-white py-4 rounded-lg text-lg hover:opacity-90 transition-opacity"
              >
                Comprar Agora
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            href="https://www.instagram.com/auroradeluz.pt/"
            target="_blank"
            className="inline-flex items-center text-[var(--accent-primary)] hover:opacity-80 transition-opacity"
          >
            <svg
              className="w-6 h-6 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.148-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            Siga-nos no Instagram
          </Link>
        </div>
      </div>
    </main>
  );
}
