export default function Header() {
  return (
    <header className="sticky top-0 z-50 h-16 bg-white shadow-sm">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">

        {/* Brand */}
        <div className="text-xl font-bold">
          Sammunat
        </div>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <a href="#services" className="text-gray-600 hover:text-black">
            Services
          </a>
          <a href="#process" className="text-gray-600 hover:text-black">
            Process
          </a>
          <a href="#contact" className="text-gray-600 hover:text-black">
            Contact
          </a>
        </nav>

        {/* CTA */}
        <a
          href="#services"
          className="rounded-lg bg-black px-5 py-2 text-sm text-white hover:bg-gray-800"
        >
          Get Started
        </a>

      </div>
    </header>
  );
}





