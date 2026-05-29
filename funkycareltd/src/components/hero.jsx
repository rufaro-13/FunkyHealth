export default function Hero() {
    return (
        



<section className ="relative min-h-screen overflow-hidden">
  {/* Background Image */}
  <div className="absolute inset-0 hero-bg h-full w-full object-cover">
    
  </div>

   {/* Soft white gradient blend (IMPORTANT PART) */}
  <div className="absolute inset-0 bg-gradient-to-r 
      from-white/95 via-white/80 via-white/60 to-transparent">
  </div>

  {/* Hero Content */}
  <div className="relative z-10 flex min-h-screen items-center">
    
    <div className="max-w-2xl px-8 py-12 md:px-12">

      
      {/* Logo / Company Name */}
      <p className="mb-4 text-lg font-medium tracking-wide text-teal-600">
        Funky Care Limited
      </p>

      {/* Main Heading */}
      <h1 className="mb-6 text-5xl text-cyan-900 font-bold leading-tight md:text-7xl">
        Care that <br />
        feels like <span className="text-teal-600">home.</span>
      </h1>

      {/* Sub Text */}
      <p className="mb-8 text-lg leading-relaxed text-cyan-900 md:text-xl">
        Compassionate support. Independent living. Brighter days.
      </p>

      {/* Description */}
      <p className="mb-10 max-w-xl text-base text-cyan-900 md:text-lg">
        Personalised care services designed to support comfort,
        dignity, and independence in the place you love most — home.
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4">
        <button className="rounded-full bg-teal-500 px-8 py-4 text-lg font-semibold text-white transition hover:bg-teal-600">
          Get Support Today
        </button>

        <button className="rounded-full border border-white/70 px-8 py-4 text-lg font-semibold text-white transition hover:bg-white hover:text-black">
          Our Services
        </button>
      </div>
    </div>
  </div>
</section>
    );
}