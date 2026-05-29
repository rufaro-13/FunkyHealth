import Hero from "../components/hero";
import personalCare from "../images/personal_care.png";
import supportedLiving from "../images/supported_living.png";
import respiteCare from "../images/respite_care.png";
import socialInclusion from "../images/social_inclusion.png";
import Testimonials from "../components/Testimonials";
export default function Home() {
  return (
    <div  className="flex flex-col">
      <Hero />

      {/* Services Section */}
      <section className="bg-cyan-950 w-full py-20">
        <div className="relative w-full lg:w-3/4 mx-auto bg-[#eef2f1] py-16">
          
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.08),transparent_60%)]"></div>

          <div className="relative text-center px-4">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-teal-600">
              Our Services
            </p>

            <h2 className="text-4xl md:text-6xl font-bold text-cyan-950">
              Support designed around people
            </h2>
          </div>

          {/* GRID */}
          <div className="relative grid grid-cols-3 grid-rows-3 gap-6 px-6 md:px-16 mt-16">
            
            <div className="service-card col-start-2 row-start-1">
              <img src={personalCare} alt="" />
              <div className="p-2">
                <h3>Personal Care</h3>
                <p>Daily support with dignity and compassion.</p>
              </div>
            </div>

            <div className="service-card col-start-1 row-start-2">
              <img src={supportedLiving} alt="" />
              <div className="p-2">
                <h3>Live-In Care</h3>
                <p>24/7 companionship in the comfort of home.</p>
              </div>
            </div>

            <div className="service-card col-start-3 row-start-2">
              <img src={respiteCare} alt="" />
              <div className="p-2">
                <h3>Home Support</h3>
                <p>Helping maintain safe and comfortable living.</p>
              </div>
            </div>

            <div className="service-card col-start-2 row-start-3">
              <img src={socialInclusion} alt="" />
              <div className="p-2">
                <h3>Specialist Care</h3>
                <p>Tailored support for complex needs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="bg-[#eef2f1] py-20">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-cyan-950 mb-6">
            Compassionate care, personalised for you
          </h2>

          <p className="text-lg text-cyan-900 leading-relaxed">
            At Funckey Care Limited, our mission is to deliver outstanding supported living and respite care services to individuals with
            learning disabilities, mental health challenges, and other complex care needs. We are dedicated to fostering empowerment, 
            independence, and dignity through personalized care that respects each individual’s unique journey. Our commitment to service 
            excellence ensures that every person we support receives compassionate and inclusive care that promotes equality and pride.
          </p>
        </div>
      </section>

      <Testimonials />
    </div>
  );
}