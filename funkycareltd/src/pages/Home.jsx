import Hero from "../components/hero";
import personalCare from "../images/personal_care.png";
import supportedLiving from "../images/supported_living.png";
import respiteCare from "../images/respite_care.png";
import socialInclusion from "../images/social_inclusion.png";
import Testimonials from "../components/Testimonials";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div  className="flex flex-col">
      <Hero />

      {/* Services Section */}
      <section className="bg-cyan-950 w-full py-20">
        <div className="relative w-full lg:px-4 mx-auto bg-[#eef2f1] md:py-16">
          
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.08),transparent_60%)]"></div>

          <div className="relative text-center px-4">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-teal-600">
              Our Services
            </p>

            <h2 className="text-2xl md:text-6xl font-bold text-cyan-950">
              Support designed around people
            </h2>
          </div>

          <div className=" lg:flex grid  lg:grid-cols-2 lg:gap-x-5 m-auto md:grid-cols-2 md:gap-x-2 grid-col-1 px-2 px-6 item-stretch ">

                    <div className=" shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:translate-x-6 hover:scale-110 duration-300 hover:bg-cards col-span-1 rounded-lg bg-bluetheme  md:w-1/2 mt-8 sm:items-center sm:justify-center">
                        <img className="rounded-lg" src={respiteCare} alt="old man sitting on a wheelchair" />
                        <h5 className="text-lg font-semibold tracking-tight text-darkblue pt-2">
                            <p>
                            Home Support
                            </p>
                        </h5>
                        <p className=" text-cyan-900 pt-4">
                            <p className='mx-2 text-sm text-justify'>
                                Helping maintain safe and comfortable living.
                        
                            </p>

                            <Link to="/services"
                                 className="inline-flex justify-center hover:text-gray-900 items-center mt-2 md:py-2 md:mt-3 py-1 px-3 text-white font-medium text-sm  text-center
                                 text-blue rounded-lg border border-green hover:bg-green-300 focus:ring-4 focus:ring-green-400  bg-green-400 ">
                                     Learn more
                                </Link>
                        </p>
                    </div>
                    

              
                
                    <div className="shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:translate-x-6 hover:scale-110 duration-300 hover:bg-cards col-span-1 lg:w-1/2 rounded-lg bg-bluetheme md:w-1/3 mt-8 sm:items-center sm:justify-center">
                        <img className="rounded-t-lg" src={personalCare} alt="young-doctor-helping-one-guy-stand-up" />
                        <h5 className="text-lg font-semibold tracking-tight text-darkblue pt-2">
                            <p>
                            Personal Care
                            </p>
                        </h5>
                        <p className="text-cyan-900 pt-4">
                            <p className='mx-2 text-sm text-justify'>
                                Daily support with dignity and compassion.
                            </p>

                            <Link to="/services"
                                 className="inline-flex justify-center hover:text-gray-900 items-center mt-2 md:py-2 md:mt-3 py-1 px-3 text-white font-medium text-sm  text-center
                                 text-blue rounded-lg border border-green hover:bg-green-300 focus:ring-4 focus:ring-green-400  bg-green-400 ">
                                     Learn more
                                </Link>
                        </p>
                    </div>

                    <div className="shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:translate-x-6 hover:scale-110 duration-300 hover:bg-cards col-span-1 rounded-lg bg-bluetheme lg:w-1/2 md:w-1/3 mt-8 sm:items-center sm:justify-center">
                        <img className="rounded-t-lg" src={supportedLiving} alt="male-social-worker-taking-care-old-woman" />
                        <h5 className="text-lg font-semibold tracking-tight text-darkblue pt-2">
                            <p >
                            Live-In Care
                            </p>
                        </h5>
                        <p className="text-cyan-900 pt-4">
                            <p className='mx-2 text-sm text-justify'>
                            24/7 companionship in the comfort of home.
                            </p>

                            <Link to="/services"
                                 className="inline-flex justify-center hover:text-gray-900 items-center mt-2 md:py-2 md:mt-3 py-1 px-3 text-white font-medium text-sm  text-center
                                 text-blue rounded-lg border border-green hover:bg-green-300 focus:ring-4 focus:ring-green-400  bg-green-400 ">
                                     Learn more
                                </Link>
                        </p>
                    </div>

                    <div className="shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:translate-x-6 hover:scale-110 duration-300 hover:bg-cards col-span-1 rounded-lg bg-bluetheme lg:w-1/2 md:w-1/3 mt-8 items-center ">
                        <img className="rounded-t-lg" src={socialInclusion} alt="male-social-worker-taking-care-old-woman" />
                        <h5 className="text-lg font-semibold tracking-tight text-darkblue pt-2">
                            <p >
                            Specialist Care
                            </p>
                        </h5>
                        <p className="text-cyan-900 pt-4 place-items:center items-center">
                            <p className='mx-2 text-sm text-justify'>
                            Tailored support for complex needs.
                            </p>

                            <Link to="/services" 
                                 className="inline-flex justify-center hover:text-gray-900 items-center mt-2 md:py-2 md:mt-3 py-1 px-3 text-white font-medium text-sm  text-center
                                 text-blue rounded-lg border border-green hover:bg-green-300 focus:ring-4 focus:ring-green-400  bg-green-400 ">
                                     Learn more
                                </Link>
                        </p>
                    </div>

                </div>

          {/* GRID */}
          {/* <div className="relative grid grid-cols-3 grid-rows-3 gap-6 px-6 md:px-16 mt-16">
            
            <div className="service-card col-start-2 row-start-1">
              <img src={personalCare} alt="" />
              <div className="p-2">
                <h3><b>Personal Care</b></h3>
                <p>Daily support with dignity and compassion.</p>
              </div>
            </div>

            <div className="service-card col-start-1 row-start-2">
              <img src={supportedLiving} alt="" />
              <div className="p-2">
                <h3><b>Live-In Care</b></h3>
                <p>24/7 companionship in the comfort of home.</p>
              </div>
            </div>

            <div className="service-card col-start-3 row-start-2">
              <img src={respiteCare} alt="" />
              <div className="p-2">
                <h3><b>Home Support</b></h3>
                <p>Helping maintain safe and comfortable living.</p>
              </div>
            </div>

            <div className="service-card col-start-2 row-start-3">
              <img src={socialInclusion} alt="" />
              <div className="p-2">
                <h3><b>Specialist Care</b></h3>
                <p>Tailored support for complex needs.</p>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      {/* About */}
      <section className="bg-[#eef2f1] md:py-20 py-10">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className=" text-2xl md:text-4xl font-bold text-cyan-950 mb-6">
            Compassionate care, personalised for you
          </h2>

          <p className="text-sm text-cyan-900 leading-relaxed">
            At Funckey Care Limited, our mission is to deliver outstanding supported living and respite care services to individuals with
            learning disabilities, mental health challenges, and other complex care needs. We are dedicated to fostering empowerment, 
            independence, and dignity through personalised care that respects each individual’s unique journey. Our commitment to service 
            excellence ensures that every person we support receives compassionate and inclusive care that promotes equality and pride.
          </p>
        </div>
      </section>

      <Testimonials />
    </div>
  );
}