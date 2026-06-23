
//import applform from '../images/Application Form_Step by Step .docx'
import { IconContext } from "react-icons";
/* import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom'; */
import { FaFilePdf,FaFileWord } from 'react-icons/fa6';
//import appfm from '../images/Application_Form Step_by _Step .pdf'
function Careers() {
  /* const form = useRef();

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
  */
  
  return (
    <div class="relative w-full bg-cover bg-center bg-no-repeat  bg-sky-50 bg-blend-multiply">

    {/*  <Helmet>
            <title>About WaterFields HealthCare Ltd</title>
            <meta name="description" content="Providing person centred care and support to all our service users with a range of care and support needs.
                        "/>
            <link rel="canonical" href="/about" />
        </Helmet> */}
      <section className='bg-sky-50'>
            <div class=" px-4 mx-auto max-w-screen-xl mt-4">

                <div class="px-4 mx-auto max-w-screen-xl text-center pt-6 py-4 lg:py-12 ">
                    <h1 class="mt-8 pt-7 mb-4 text-3xl font-extrabold tracking-tight leading-none text-darkblue md:text-3xl lg:text-5xl">
                       Careers
                    </h1>

                    
                </div>

                <div>

                <h1 class="mt-4 pt-4 mb-4 text-3xl font-extrabold tracking-tight leading-none text-darkblue md:text-3xl lg:text-3xl">
                Support Worker Job Description
                    </h1>  

            <p class='font-normal text-darkblue text-sm md:text-base px-2'>
                At Funkey Care Limited, our aim is to promote independent living within the comfort of the home, to help enable our clients to pursue 
                a life that is as full and interesting as possible.

                We are seeking passionate and committed individuals, who embody our ethos and values and want to join our specialists’ 
                healthcare professionals.<br/><br/>

            <b>A suitable Care Worker will be able to demonstrate the following:</b>
            <ul class="list-disc ml-6">
            <li>Respect for individual privacy and maintaining service user confidentiality.</li>
                
            <li>Flexible approach to location of work.</li>
               
            <li>Empathy, compassion, and caring nature.</li>

            <li>Excellent communication skills with both service users and other members of staff.</li>
               
            </ul>
        
            <br/><br/>

            <b>Tasks you are required to perform include but is not limited to:</b>
            <ul class="list-disc ml-6">

            <li>Providing activities to stimulate and engage the service user e.g. recreational activities.</li>
            <li> Provide companionship and promote social inclusion</li>
            <li>Ensuring service users’ overall comfort and wellbeing.</li>
            <li> Promote learning and development of new skills</li>
            <li>Undertaking light cleaning and domestic duties.</li>
            <li>Helping with daily activities such as letter writing, paying bills, collecting benefits etc.</li>
            <li>Daily record keeping of all service user activities.</li>

            <li>Liaising with other healthcare professionals to meet the needs of the service user.</li>
               
            </ul>
        
            <br/><br/>
            
            <b>Other:</b>
            <ul class="list-disc ml-6">
            <li>Although there are no formal academic entry requirements, progress towards the appropriate qualifications for the job is expected.</li>
                
            <li>Both off- and on-the-job training is provided by Funkey Care Limited </li>
               
            <li>A wide range of qualifications including NVQs/SVQs covering various aspects of care are available. Background checks including a DBS check will be required.</li>

            <li>Applicants must typically be a minimum of 18 years old and have experience of working in a healthcare environment.</li>
               
            </ul>
        
            <br/><br/>

            The above list of duties is not exhaustive and may be modified from time to time in accordance with the development of the service and the employee.
            <br/><br/>
            Note : Staff are paid hourly rates.<br/><br/>
            <span className='font-semibold'>Please{/* download an application form and */} send your CV to 
             <a href="mailto:careers@funkycareltd.co.uk" className=" underline text-darkblue rounded hover:bg-gray-100 
            md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-navcolour dark:hover:bg-gray-700
             dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"> careers@funkycareltd.co.uk</a>{/*  along with your CV. */} {/* <span className='italic font-normal'>(The form in Word format can be completed electronically and
             PDF format is for printing the form)</span> */}
            </span></p>

        </div>

        <div class='text-center py-4 md: flex'>
        
        {/* <div class="col-span-1 flex lg:ml-8 mt-2 px-2 lg:px-8  items-start">
               <IconContext.Provider value={{ color: 'red', size: '25px', padding:'2px 2px' }}>
                    
                    <FaFilePdf class=" mx-1 my-1"/>
                
               </IconContext.Provider>
               <p class="md:text-1xl text-sm"> */}
               
              {/*  <a href={appfm} class="text-blue-700 hover:underline" download="Ste_by_Step Application Form">Application Form</a> */}
              {/*  </p>
               
             </div> */}


             {/* <div class="col-span-1 flex lg:ml-8 mt-2 px-2 lg:px-8  items-start">
               <IconContext.Provider value={{ color: 'blue', size: '25px', padding:'2px 2px' }}>
                    
                    <FaFileWord class=" mx-1 my-1"/>
                
               </IconContext.Provider>
               <p class="md:text-1xl text-sm"> */}
               
               {/* <a href={applform} class="text-blue-700 hover:underline" download="Ste_by_Step Application Form">Application Form</a> */}
              {/*  </p>
               
             </div> */}
        
        </div>

       {/*  <div  class="md:w-full pb-5 sm:82 rounded-lg  sm:items-center justify-center  mx-auto lg:ml-10 mt-8 ">
            
             <form class=" md:px-auto lg:ml-24 lg:mr-8" ref={form} onSubmit={sendEmail}>
            <div class="px-4 mx-auto max-w-screen-xl text-center pt-4 py-4 lg:py-12 ">
                    <h1 class="mt-5 pt-4 mb-4 text-2xl font-extrabold tracking-tight leading-none text-darkblue md:text-3xl lg:text-4xl">
                       Application Form
                    </h1>

                    
                </div>
                <div class="mb-6 ">
                    <label for="means" class=" block mb-2 text-sm font-medium text-gray-900 dark:text-black">How did you hear us <span class="text-pink-700 text-1xl italic font-normal">(Required)</span></label>
                    <select id="means" name="user-means"class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[95%] lg:w-1/2 py-2.5 px-2 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"  required>
                        
                        <option value="Google">Google</option>
                        <option value="mouth">Word of mouth</option>
                        <option value="media">Social nedia</option>
                        <option value="newspaper">Newspaper/Article</option>
                        <option selected value="other">Other</option>
                    </select>
                </div>
                 <div className='md:flex'>     
                <div class="mb-6">
                    <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Title <span class="text-pink-700 text-1xl italic font-normal">(Required)</span></label>
                    <select id="title" name="user-title"class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[95%] lg:w-3/4  py-2.5 px-2 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"  required>
                        <option selected>-- --</option>
                        <option value="Mrs"> Mrs</option>
                        <option value="Mr"> Mr</option>
                        <option value="Miss"> Miss</option>
                        <option value="Ms"> Ms</option>
                        <option value="Doctor"> Doctor</option>
                    </select>
                </div> 
                <div class=" px-6 mb-6">
                    <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Preferred Pronoun <span class="text-pink-700 text-1xl italic font-normal">(Required)</span></label>
                    <select id="title" name="user-title"class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[95%] lg:w-3/4  py-2.5 px-2 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"  required>
                        <option selected>-- --</option>
                        <option value="female">She/Her</option>
                        <option value="male">He/Him</option>
                        <option value="they">They/Them</option>
                       
                    </select>
                </div> </div> 

                <div className='md:flex'>

                    <div class="mb-6 ">
                        <label for="fname" class=" block mb-2 text-sm font-medium text-gray-900 dark:text-black">First Name <span class="text-pink-700 text-1xl italic font-normal">(Required)</span></label>
                        <input type="text" name="user_fname" id="fname" size="60" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[95%] lg:w-3/4 py-2.5 px-2 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="example: John Smith" required/>
                    </div>

                    <div class="mb-6 ">
                        <label for="lname" class=" block mb-2 text-sm font-medium text-gray-900 dark:text-black">Last Name <span class="text-pink-700 text-1xl italic font-normal">(Required)</span></label>
                        <input type="text" name="user_lname" id="lname" size="60" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[95%] lg:w-3/4 py-2.5 px-2 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="example: John Smith" required/>
                    </div>
                </div>

                <div className='md:flex'>

                    <div class="mb-6 ">
                        <label for="email" class=" block mb-2 text-sm font-medium text-gray-900 dark:text-black">Email Address <span class="text-pink-700 text-1xl italic font-normal">(Required)</span></label>
                        <input type="email" name="user_email" id="email" size="60" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[95%] lg:w-3/4 py-2.5 px-2 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="example: john@eaxample.com" required/>
                    </div>

                    <div class="mb-6 ">
                        <label for="phone" class=" block mb-2 text-sm font-medium text-gray-900 dark:text-black">Phone Number <span class="text-pink-700 text-1xl italic font-normal">(Required)</span></label>
                        <input type="text" name="user_phone" id="phone"    size="60" class=" shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[95%] lg:w-3/4 py-2.5 px-2 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="example: 123456789" required/>
                    </div>
                </div>

                <div className='mb-6'>
                    
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload file<span class="text-pink-700 text-1xl italic font-normal">(Required)</span></label>
                    <input class="block w-full text-sm lg:w-1/2 text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" required/>

                </div>

                <div class="mb-6">
                    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Messsage <span class="text-pink-700 text-1xl italic font-normal">(Required)</span></label>
                    <textarea id="message" name="message"rows="5" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full lg:w-1/2 p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required/>
                </div>

                <div class="mb-6 sm:w-full lg:w-full md-w-full">
                    <p>
                    <span class=" text-1xl font-semibold">Terms & Conditions<span class="text-pink-700 text-1xl italic font-normal">(Required)</span><br/></span>
                    I agree to the Terms & Conditions and understand that stepbystep.co.uk has a legitimate interest to process the data that I have submitted.<Link>
                    to="/terms_and_conditions"className=" underline text-blue-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-blue-700 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                     See our Terms and Conditions and Privacy Policy </Link>for more information.
                    This site is protected by reCAPTCHA and the Google <a class="text-blue-700"href="https://policies.google.com/privacy">Privacy Policy </a>and <a class="text-blue-700" href="https://policies.google.com/terms">Terms of Service</a> apply.
                    
                    </p>
                </div>
                    <div class="max-w-full sm:82 rounded-lg sm:flex flex mx-6 mb-6">
                        <div class="ml-5 flex items-center h-5">
                        <input id="terms" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required/>
                        </div>
                        <label for="terms" class="ml-2 text-sm font-medium text-gray-900 dark:black">Yes I agree to the terms, conditions and privacy & cookie policy</label>
                    </div>
                    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none 
                    focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 
                    dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                
            </form> 
        </div> */}

            </div>
      </section> 
    </div>
  )
}

export default Careers