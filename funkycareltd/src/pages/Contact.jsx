
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { HiMail } from 'react-icons/hi'
import { IconContext } from "react-icons";
import { FaEnvelopeOpenText, FaLocationDot, FaMobileScreenButton  } from 'react-icons/fa6';

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_s5d2vca', 'template_kldr8go', form.current, 'nWczK7M6m-yH-7OJR')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  
  return (
    <div className='relative w-full bg-cover bg-center bg-no-repeat  md:justify-center  bg-blend-multiply mb-5'>

{/* <Helmet>
            <title>WaterFields HealthCare Contacts</title>
            <meta name="description" content="Get in touch with us in the provided contact information"/>
            <link rel="canonical" href="/contact" />
        </Helmet> */}
        <section className='px-4 mx-auto  text-center pt-6 py-4 lg:py-24'>
            <div className=" max-w-screen-xl mt-5 pt-4">

                <div className="lg:px-4 mx-auto max-w-screen-xl text-center pt-6 mt-6 ">
                    <h4 className="mb-4  font-extrabold tracking-tight leading-none text-darkbluetheme md:text-3xl lg:text-3xl">
                    Contacting Us
                    </h4>
                </div> 

                <div className="sm:flex sm:items-center sm:justify-center lg:mx-8 mt-5 px-5">
                  <p className=" text-sm  text-darkbluetheme">
                      To request more information, please give us a call or email us. We would 
                      love to speak to you regarding our services. You can also enquire about our 
                      services. Simply leave your contact information using the form below and we will get back to you as soon as possible.
                  </p>
                  <br/>
            
                </div>
                

                <div className='md:mx-4 lg:flex'>
                  <div className='lg:w-full '> 
                   <div className=" px-2 md:px-8 pt-4 items-center sm:items-center sm:justify-center mx-4  lg:mx-4 mt-1">
                    
                     <div className="lg:px-5 px-4   max-w-max   sm:items-center sm:justify-center"> 

                        <IconContext.Provider value={{ color: '#134686', size: '40px', padding:'5px 2px' }}>
                            <a href="mailto:info@funkycareltd.co.uk"><div className="  sm:items-center sm:justify-center  mx-2 mt-5 mb-5">
                            
                            <FaEnvelopeOpenText className="sm:items-center sm:justify-center mx-1 my-6"/>
                            </div></a>
                          </IconContext.Provider>
                          <div className="  sm:items-center sm:justify-center  mt-1">
                            <p className=" text-sm ">
                            <div><span className=" text-2xl font-bold"><a href="mailto:info@funkycareltd.co.uk" className="block py-2 pl-1 pr-4 underline text-darkbluetheme rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-darkbluetheme dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Email Us</a></span></div>
                            info@funkycareltd.co.uk

                            </p>
                          </div>
                    </div> 

                    

                    <div className="lg:px-5 px-2   max-w-max   sm:items-start sm:justify-start">

                          <IconContext.Provider value={{ color: '#134686', size: '40px', padding:'5px 2px' }}>
                            <a href="tel:+44 7877 385483"><div className="  sm:items-center sm:justify-center   mt-5 mb-5">
                              <FaMobileScreenButton className="sm:items-center sm:justify-center  my-6"/>
                            </div></a>
                          </IconContext.Provider>
                          <div className="  sm:items-center sm:justify-center   mt-1">
                            <p className=" text-sm ">
                            <div><span className=" text-2xl font-bold  "><a href="tel:+44 7877 385483" 
                            className="block py-2  underline text-darkbluetheme rounded hover:bg-gray-100 md:hover:bg-transparent 
                            md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-darkbluetheme dark:hover:bg-gray-700
                             dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Give Us a Call</a></span></div>
                            +44 7400 180829 <br/>
                            +44 7877 385483 (manager)

                            </p>
                          </div>

                    </div>



                    <div className="lg:px-5 px-3  max-w-max  sm:items-start sm:justify-start">

                          <IconContext.Provider value={{ color: '#134686', size: '40px', padding:'5px 2px' }}>
                            <a href="https://www.google.com/maps/place/12+Hall+Dr,+Sandiacre,+Nottingham+NG10+5BT,+UK/@52.9240473,-1.2915212,17z"><div className="  sm:items-center sm:justify-center   mt-5 mb-5">
                              <FaLocationDot className="sm:items-center sm:justify-center  my-6"/>
                            </div></a>
                          </IconContext.Provider>
                          <div className="  sm:items-center sm:justify-start  mt-1">
                            <p className="text-justify text-sm ">
                              <div>
                                <span className="text-black text-2xl font-bold">
                                  <a href="https://www.google.com/maps/place/12+Hall+Dr,+Sandiacre,+Nottingham+NG10+5BT,+UK/@52.9240473,-1.2915212,17z" 
                                      className="block py-2  underline text-darkbluetheme rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-darkbluetheme dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Visit Us</a></span></div>
                                      Funkey Care Ltd, 12 Hall Drive, Sandiacre, 
                                      <br/>Nottingham, England, NG10 5BT
                            </p>
                          </div>

                    </div>
                 </div> 
                </div><br/>

                <div className="md:pt-5 lg:w-3/5 sm:w-screen">
                    <h1 className='font-bold md:text-2xl text-xl text-darkbluetheme'>Enquiry Form</h1>
                  <div className="lg:px-0 px-2 pb-4  pt-5 mt-1 w-fit md:w-full sm:items-start sm:justify-start">
                  <form className="  w-full" ref={form} onSubmit={sendEmail}>
                
                    <div className="mb-6 text-left">
                      <label
                        htmlFor="name"
                        className="block mb-2 text-gray-900 dark:text-black"
                      >
                        Full Name <span className="text-red italic">(Required)</span>
                      </label>

                      <input
                        type="text"
                        name="user_name"
                        id="name"
                        className="w-full shadow-sm bg-gray-50 border dark:placeholder-gray-400 border-gray-300 text-gray-900 text-sm rounded-lg py-2.5 px-2"
                        placeholder="example: John Smith"
                        required
                      />
                    </div>


                    <div className="mb-6 text-left">
                      <label
                        htmlFor="email"
                        className="block mb-2 text-gray-900 dark:text-black"
                      >
                        Email <span className="text-red italic">(Required)</span>
                      </label>

                      <input
                        type="email"
                        name="user_email"
                        id="email"
                        className="w-full shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg py-2.5 px-2 dark:placeholder-gray-400"
                        placeholder="example: name@email.com"
                        required
                      />
                    </div>


                     <div className="mb-6 text-left">
                      <label
                        htmlFor="telephone"
                        className="block mb-2 text-gray-900 dark:text-black"
                      >
                        Telephone <span className="text-red italic">(Required)</span>
                      </label>

                      <input
                        type="tel"
                        name="user_telephone"
                        id="telephone"
                        className="w-full shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg py-2.5 px-2 dark:placeholder-gray-400 "
                        placeholder="example: 0798 125 4567"
                        autocomplete="tel"
                        required
                      />
                    </div>
                          
                    
          <div className="mb-6 text-left">
                      <label
                        htmlFor="message"
                        className="block mb-2 text-gray-900 dark:text-black"
                      >
                        Message <span className="text-red italic">(Required)</span>
                      </label>

                      <input
                        type="tel"
                        name="message"
                        id="message"
                        className="w-full shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg py-2.5 px-2 dark:placeholder-gray-400 "
                        placeholder="...."
                        autocomplete="off"
                        required
                      />
                    </div>
                    

                  

                    {/* <div className="mb-6 sm:w-full lg:w-full md-w-full">
                        <p>
                        <span className="  font-semibold">Terms & Conditions<span className="text-red  italic ">(Required)</span><br/></span>
                        I agree to the Terms & Conditions and understand that stainmasterslimited.com has a legitimate interest to process the data that I have submitted.<Link
                        to="/terms_and_conditions"className=" underline text-blue-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-blue-700 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                        > See our Terms and Conditions and Privacy Policy </Link>for more information.
                        This site is protected by reCAPTCHA and the Google <a className="text-blue-700"href="https://policies.google.com/privacy">Privacy Policy </a>and <a className="text-blue-700" href="https://policies.google.com/terms">Terms of Service</a> apply.
                        
                        </p>
                    </div> */}
                        {/* <div className="max-w-full sm:82 rounded-lg sm:flex flex mx-6 mb-6">
                            <div className="ml-5 flex items-center h-5">
                            <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required/>
                            </div>
                            <label for="terms" className="ml-2 text-gray-900 dark:black">Yes I agree to the terms, conditions and privacy & cookie policy</label>
                        </div> */}
                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none 
                        focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 
                        dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                    
            </form>
                  </div>
                  </div>
                </div>
                </div>

        </section>
    </div>
  )
}

export default Contact