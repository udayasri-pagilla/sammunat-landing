import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Header />

      <main className="bg-white text-gray-900">

        {/* ================= HERO ================= */}
        <section className="relative flex h-screen items-center justify-center">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gray-50 via-white to-gray-100" />

          <div className="mx-auto max-w-6xl px-6 text-center">
            <h1 className="text-5xl font-extrabold md:text-7xl">
              Building Scalable
              <br />
              Digital Solutions
            </h1>

            <p className="mt-6 text-xl text-gray-700">
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
          className="min-h-screen flex items-center"
        >
          <div className="mx-auto max-w-7xl px-6 text-center">
            <h2 className="text-4xl font-bold">
              What We Do
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
              We help startups and businesses build scalable, reliable digital
              products from the ground up.
            </p>

            <div className="mt-20 grid gap-10 md:grid-cols-3">
              <div className="rounded-xl border p-10">
                <h3 className="text-xl font-semibold">
                  Product Development
                </h3>
                <p className="mt-4 text-gray-600">
                  From idea validation to production-ready applications with
                  long-term scalability.
                </p>
              </div>

              <div className="rounded-xl border p-10">
                <h3 className="text-xl font-semibold">
                  Web & App Solutions
                </h3>
                <p className="mt-4 text-gray-600">
                  Modern, high-performance web and mobile applications built
                  using proven technologies.
                </p>
              </div>

              <div className="rounded-xl border p-10">
                <h3 className="text-xl font-semibold">
                  Startup Consulting
                </h3>
                <p className="mt-4 text-gray-600">
                  Technical guidance to help startups make correct architectural
                  and product decisions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= PROCESS ================= */}
        <section
          id="process"
          className="min-h-screen flex items-center bg-gray-50"
        >
          <div className="mx-auto max-w-6xl px-6 text-center">
            <h2 className="text-4xl font-bold">
              Our Process
            </h2>

            <div className="mt-20 grid gap-12 md:grid-cols-3">
              <div>
                <h3 className="text-xl font-semibold">1. Understand</h3>
                <p className="mt-4 text-gray-600">
                  We deeply understand your problem, users, and business goals.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">2. Build</h3>
                <p className="mt-4 text-gray-600">
                  We design and build clean, scalable systems with best practices.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">3. Scale</h3>
                <p className="mt-4 text-gray-600">
                  We help you confidently scale products and teams.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= CONTACT ================= */}
        <section
          id="contact"
          className="min-h-screen flex items-center"
        >
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="text-4xl font-bold">
              Let’s Work Together
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-lg text-gray-600">
              Have a project in mind? Let’s discuss how we can help you build and
              scale it.
            </p>

            <div className="mt-12">
              <a
                href="mailto:udayasripagilla1873@gmail.com"
                className="inline-block rounded-lg bg-black px-10 py-4 text-white hover:bg-gray-800"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>

       {/* ================= FOOTER ================= */}
{/* ================= FOOTER ================= */}
<footer className="bg-gray-50">
  <div className="mx-auto max-w-7xl px-6 pb-12">

    <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

      {/* Brand */}
      <div>
        <h3 className="text-lg font-semibold">Sammunat</h3>
        <p className="mt-2 max-w-sm text-sm text-gray-600">
          Building scalable, production-ready digital solutions for startups and
          growing businesses.
        </p>
      </div>

      {/* Links */}
      <nav className="flex gap-6 text-sm text-gray-600">
        <a href="#services" className="hover:text-black">
          Services
        </a>
        <a href="#process" className="hover:text-black">
          Process
        </a>
        <a href="#contact" className="hover:text-black">
          Contact
        </a>
      </nav>

    </div>

    <div className="mt-8 text-center text-sm text-gray-500">
      © {new Date().getFullYear()} Sammunat. All rights reserved.
    </div>

  </div>
</footer>



      </main>
    </>
  );
}


