import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Header />

      <main className="bg-white text-gray-900">

        {/* ================= HERO ================= */}
        <section className="relative flex h-screen items-center justify-center">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gray-50 via-white to-gray-100"></div>

          <div className="mx-auto max-w-6xl px-6 text-center">
            <h1 className="text-5xl font-extrabold tracking-tight md:text-7xl">
              Building Scalable
              <br />
              Digital Solutions
            </h1>

            <p className="mt-6 text-xl font-medium text-gray-700">
              From idea to production-ready systems.
            </p>

            <p className="mx-auto mt-8 max-w-xl text-lg text-gray-600">
              Sammunat partners with startups and growing businesses to design,
              build, and scale reliable digital products using modern technologies.
            </p>

            <div className="mt-12 flex justify-center gap-5">
              <a
                href="#services"
                className="rounded-lg bg-black px-8 py-4 text-white hover:bg-gray-800"
              >
                Get Started
              </a>
              <a
                href="#contact"
                className="rounded-lg border px-8 py-4 hover:bg-gray-100"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>

        {/* ================= SERVICES ================= */}
        <section
          id="services"
          className="scroll-mt-24 py-24"
        >
          <div className="mx-auto max-w-7xl px-6 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              What We Do
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              We help startups and businesses build scalable digital products.
            </p>

            <div className="mt-16 grid gap-8 md:grid-cols-3">
              <div className="rounded-xl border p-8 hover:shadow-lg">
                <h3 className="text-xl font-semibold">
                  Product Development
                </h3>
                <p className="mt-4 text-gray-600">
                  From idea to production-ready applications.
                </p>
              </div>

              <div className="rounded-xl border p-8 hover:shadow-lg">
                <h3 className="text-xl font-semibold">
                  Web & App Solutions
                </h3>
                <p className="mt-4 text-gray-600">
                  Scalable web and mobile applications.
                </p>
              </div>

              <div className="rounded-xl border p-8 hover:shadow-lg">
                <h3 className="text-xl font-semibold">
                  Startup Consulting
                </h3>
                <p className="mt-4 text-gray-600">
                  Architecture and technology guidance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= PROCESS ================= */}
        <section
          id="process"
          className="scroll-mt-24 bg-gray-50 py-24"
        >
          <div className="mx-auto max-w-6xl px-6 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              Our Process
            </h2>

            <div className="mt-16 grid gap-10 md:grid-cols-3">
              <div>
                <h3 className="text-xl font-semibold">
                  1. Understand
                </h3>
                <p className="mt-3 text-gray-600">
                  We deeply understand your problem and goals.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  2. Build
                </h3>
                <p className="mt-3 text-gray-600">
                  We design and build scalable solutions.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  3. Scale
                </h3>
                <p className="mt-3 text-gray-600">
                  We help you grow and scale confidently.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= CONTACT ================= */}
        <section
          id="contact"
          className="scroll-mt-24 py-24"
        >
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              Let’s Work Together
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-gray-600">
              Have a project in mind? Let’s talk.
            </p>

            <div className="mt-10">
              <button className="rounded-lg bg-black px-8 py-4 text-white hover:bg-gray-800">
                Contact Us
              </button>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}

