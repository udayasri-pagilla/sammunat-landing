import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Header />

      <main className="bg-white text-gray-900">

        {/* HERO SECTION */}
        <section className="relative flex h-screen items-center justify-center">

          {/* Background */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gray-50 via-white to-gray-100"></div>

          {/* Content Wrapper */}
          <div className="mx-auto w-full max-w-6xl px-6 text-center">

            {/* Main Heading – BIG & DOMINANT */}
            <h1 className="text-5xl font-extrabold leading-tight tracking-tight md:text-7xl">
              Building Scalable
              <br />
              Digital Solutions
            </h1>

            {/* One-line Value */}
            <p className="mt-6 text-xl font-medium text-gray-700">
              From idea to production-ready systems.
            </p>

            {/* Supporting Description */}
            <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-gray-600">
              Sammunat partners with startups and growing businesses to design,
              build, and scale reliable digital products using modern
              technologies.
            </p>

            {/* Actions */}
            <div className="mt-12 flex justify-center gap-5">
              <button className="rounded-lg bg-black px-8 py-4 text-base font-medium text-white hover:bg-gray-800">
                Get Started
              </button>
              <button className="rounded-lg border border-gray-300 px-8 py-4 text-base font-medium hover:bg-gray-100">
                Contact Us
              </button>
            </div>

          </div>
        </section>

      </main>
    </>
  );
}


