import Goal from "../images/minimalist-3d-dartboard.jpg";
import Vision from "../images/11667271_20943509.jpg";
import Value from "../images/17748327_5878303.jpg";
import { VscArrowRight } from "react-icons/vsc";
import { IconContext } from "react-icons";
import { IoPersonSharp } from "react-icons/io5";
import { FaHandHoldingHeart,FaHandshake } from "react-icons/fa6";
import { LiaCertificateSolid } from "react-icons/lia";
export default function About() {
  return (
        <div className="pt-8 mt-8 min-h-screen ">

            <div className=" m-5 justify-items-center pt-8">
                <h1 className="text-4xl font-bold text-darkblue  p-3 ">About Us</h1>
            </div>
            <div  className=" items-center grid grid-cols-2 bg-neutral-primary-soft p-6 mx-12 rounded-base shadow-xs md:flex-row  md:flex-row ">
                <div  className="flex flex-col items-center bg-neutral-primary-soft p-2  rounded-base  ">
                    <img className="object-cover w-full rounded-base h-64 md:h-auto md:w-2/4 mb-4 md:mb-0 border rounded-lg" src={Goal} alt="Goal"/>
                    <div className="flex flex-col justify-between md:p-4 leading-normal">
                        <h5 className="mb-2 text-center text-2xl font-bold tracking-tight text-darkblue">Our Mission</h5>
                        <p className="mt-6 text-body text-sm leading-7">At Funkey Care Limited, our mission is to deliver outstanding supported living and respite care services tailored to individuals with 
                            learning disabilities, mental health challenges and other complex care needs. We are dedicated to fostering empowerment, independence and 
                            dignity through personalised care that respects each individual's unique journey. Our commitment to service excellence ensures that every person 
                            we support receives compassionate and inclusive care that promotes equality and pride. Our team of healthcare professionals is always
                            ready to discharge their duties through providing care and support 24/7.</p>
                    </div>
                </div>

                <div  className="flex flex-col items-center bg-neutral-primary-soft p-2  rounded-base">
                    <img className="object-cover w-full rounded-base h-64 md:h-auto md:w-2/4 mb-4 md:mb-0 border rounded-lg" src={Vision} alt="Vision"/>
                    <div className="flex flex-col justify-between md:p-4 leading-normal">
                        <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-darkblue">Our Vision.</h5>
                        <p className="mt-6 text-body text-sm leading-7">Our vision is to be the foremost provider of comprehensive care services across the UK, recognized for our 
                            expertise in supported living and respite care for those with diverse needs. We aim to create a nurturing environment where individuals 
                            with learning disabilities, mental health conditions, and complex care requirements can thrive. Through innovation, collaboration, and a 
                            steadfast commitment to dignity and respect, we aspire to set new benchmarks in quality care and inclusivity.</p>
                    </div>
                </div>
            </div>

            <div  className=" items-center grid grid-cols-2 bg-neutral-primary-soft px-6 pt-1  rounded-base md:flex-row  md:flex-row ">
                <div  className="flex flex-col items-center bg-neutral-primary-soft p-2  rounded-base  ">
                    <img className="object-cover w-full rounded-base h-64 md:h-auto md:w-3/4 mb-4 md:mb-0" src={Value} alt="Value"/>
                    
        
                </div>

                <div  className="flex flex-col items-center  p-2  rounded-base  ">
                    
                    <div className="flex flex-col justify-between md:p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-darkblue text-heading">Our Values.</h5>
                        <p className="mb-6 text-body text-sm leading-7">At Funkey Care Limited, our mission is to deliver outstanding supported living and respite care services tailored to individuals with 
                            learning disabilities, mental health challenges, and other complex care needs. We are dedicated to fostering empowerment, independence, and 
                            dignity through personalised care that respects each individual's unique journey. Our commitment to service excellence ensures that every person 
                            we support receives compassionate and inclusive care that promotes equality and pride. Our team of healthcare professionals is always
                            ready to discharge their duties through providing care and support 24/7..
                        </p>
                            
                            <br/>

                            <div className='flex col-span-1  rounded-lg'>
                                <IconContext.Provider value={{ color: '#059212', size: '40px', padding:'2px ' }}>
                                    <div className="  sm:items-center sm:justify-center    mb-1">
                                    <VscArrowRight className="sm:items-center sm:justify-center  "/>
                                    </div>
                                </IconContext.Provider>
                            

                                <p className="pl-4 text-justify text-sm leading-7">
                                
                                <b className="text-titleblue">Person Centered Care -</b> Funkey Care Limited is flexible and we value service user’s unique needs. We work with each individual according to their care and 
                                    support plan.
                                <br/><br/>

                                </p>

                            </div>

                            <div className='flex col-span-1  rounded-lg'>
                                <IconContext.Provider value={{ color: '#059212', size: '40px', padding:'2px ' }}>
                                    <div className="  sm:items-center sm:justify-center    mb-1">
                                    <VscArrowRight className="sm:items-center sm:justify-center  "/>
                                    </div>
                                </IconContext.Provider>
                            

                                <p className="pl-4 text-justify text-sm leading-7 ">
                                
                                <b className="text-titleblue">Service excellence -</b> Funkey Care Limited strives to provide the best services possible in accordance with current guidelines and recommendations to 
                                    clients and all stakeholders.

                                <br/><br/>

                                </p>

                            </div>

                            <div className='flex col-span-1  rounded-lg'>
                                <IconContext.Provider value={{ color: '#059212', size: '40px', padding:'2px ' }}>
                                    <div className="  sm:items-center sm:justify-center    mb-1">
                                    <VscArrowRight className="sm:items-center sm:justify-center  "/>
                                    </div>
                                </IconContext.Provider>
                            

                                <p className="pl-4 text-justify text-sm leading-7">
                                
                                <b className="text-titleblue">Dignity and respect-</b> At Funkey Care Limited we understand that people’s choices can be varied and need to be respected.


                                <br/><br/>

                                </p>

                            </div>

                           
                           <div className='flex col-span-1  rounded-lg'>
                                <IconContext.Provider value={{ color: '#059212', size: '40px', padding:'2px ' }}>
                                    <div className="  sm:items-center sm:justify-center    mb-1">
                                    <VscArrowRight className="sm:items-center sm:justify-center  "/>
                                    </div>
                                </IconContext.Provider>
                            

                                <p className="pl-4 text-justify text-sm leading-7">
                                
                                <b className="text-titleblue">Equality -</b> Funkey Care Limited is flexible and we value service user’s unique needs. We work with each individual according to their care and 
                                    support plan.
                                <br/><br/>

                                </p>

                            </div>

                            <div className='flex col-span-1  rounded-lg'>
                                <IconContext.Provider value={{ color: '#059212', size: '40px', padding:'2px ' }}>
                                    <div className="  sm:items-center sm:justify-center    mb-1">
                                    <VscArrowRight className="sm:items-center sm:justify-center  "/>
                                    </div>
                                </IconContext.Provider>
                            

                                <p className="pl-4 text-justify text-sm leading-7">
                                
                                <b className="text-titleblue">Pride -</b> We are passionate about making a positive difference to the individuals and community we support.
                                <br/><br/>

                                </p>

                            </div>

                
                    </div>
                </div>
            </div>

            {/* <div  className=" items-center  bg-neutral-primary-soft px-6 pt-1  rounded-base xs ">
                <div className=" m-5 justify-items-center p-8">
                    <h1 className="text-4xl font-bold text-gray-800  p- ">Our Experience</h1>
                </div>
                

                <div  className=" items-center grid grid-cols-2 bg-neutral-primary-soft p- mx-12 rounded-base shadow-xs md:flex-row  md:flex-row ">
                    <div  className=" items-center bg-neutral-primary-soft p-2  rounded-base  ">
                        <div className=' col-span-1  rounded-lg'>
                                    <IconContext.Provider value={{ color: '#767F9E', size: '250px',  }}>
                                        <div className="flex justify-center  mb-1">
                                        <IoPersonSharp  className="place-content-center  "/>
                                        </div>
                                    </IconContext.Provider>
                                

                                    <p className="px-4 text-justify text-sm leading-7">
                                    
                                    <b className="text-titleblue">Dr ---------, Director -</b>  is a dedicated and experienced general adult psychiatrist, 
                                    proudly serving as a member of the Royal College of Psychiatrists. With a career in the mental health sector spanning over a decade, Dr. Farai 
                                    Makoni has honed expertise across a range of settings, including community, inpatient, and specialist services such as Early Intervention in Psychosis. 
                                    As a director of Funkey Care Limited, Dr. Farai Makoni brings a wealth of knowledge and a compassionate approach to mental health care, ensuring that 
                                    supported living and domiciliary care services are delivered with the highest standards of excellence and empathy. Committed to fostering a supportive 
                                    environment, ------------ is passionate about empowering individuals to achieve their fullest potential and enhancing their quality of life. With 
                                    a strong focus on person-centered care, Dr. Farai is poised to make a significant impact in the community, guided by Dr. Farai's visionary leadership 
                                    and dedication to mental health advocacy.
                                    <br/><br/>

                                    </p>

                                </div>
                    </div>

                    <div  className="flex flex-col items-center bg-neutral-primary-soft p-2  rounded-base">
                        <div className=' col-span-1  rounded-lg'>
                                    <IconContext.Provider value={{ color: '#767F9E', size: '250px', padding:'2px ' }}>
                                        <div className="  flex justify-center    mb-1">
                                        <IoPersonSharp  className="sm:items-center sm:justify-center  "/>
                                        </div>
                                    </IconContext.Provider>
                                

                                    <p className="px-4 text-justify text-sm leading-7">
                                    
                                    <b className="text-titleblue">Francis Mutazu  -</b>  is a registered social worker and member of Social Work England, holding an MA in Social Work. 
                                    With extensive experience in both children and family services as well as adult social care, he specializes in supporting individuals with learning 
                                    disabilities and autism. His expertise in Adult Social Care transitions and pathway teams specialising on Learning Disability and Autism has honed his 
                                    skills in coordinating effective care plans for diverse needs. Previously, Francis worked as a senior support worker, providing direct care to 
                                    individuals with mental health challenges and learning disabilities. This hands-on experience has strengthened his understanding of service user needs 
                                    and his ability to advocate for their rights and well-being. As Operations Manager, Francis is committed to building collaborative relationships with 
                                    families, healthcare providers, and community organizations. His primary goal is to enhance the quality of life for service users by ensuring they 
                                    receive compassionate, person-centered care that respects their unique circumstances and aspirations.
                                    <br/><br/>

                                    </p>

                                </div>
                    </div>
                </div>

            </div> */}

            <div  className=" items-center  bg-neutral-primary-soft px-6 pt-1  rounded-base  ">
                <div className=" m-5 justify-items-center p-2">
                    <h1 className="text-4xl font-bold text-darkblue  p-2 ">Why Choose US</h1>
                </div>

                <div  className=" items-center grid grid-cols-3 bg-neutral-primary-soft p- mx-12 rounded-base  md:flex-row  md:flex-row ">
                    <div  className="flex flex-col items-center bg-neutral-primary-soft p-2  rounded-base">
                        <div className=' col-span-1  rounded-lg'>
                                    <IconContext.Provider value={{ color: '#057a8a', size: '160px', padding:'2px ' }}>
                                        <div className="  flex justify-center    mb-1">
                                        <FaHandHoldingHeart  className="sm:items-center sm:justify-center  "/>
                                        </div>
                                    </IconContext.Provider>
                                

                                    <p className="pl-4 text-justify text-sm leading-7">
                                    
                                    <b className="text-titleblue">We Are Reliable  -</b>  We offer 24 hour services. Anytime you request our services, we show up to work
                                    according to personal schedule. We also make at-home care easy for loved ones.
                                    <br/><br/>

                                    
                                    </p>

                                </div>
                    </div>

                    <div  className="flex flex-col items-center bg-neutral-primary-soft p-2  rounded-base">
                        <div className=' col-span-1  rounded-lg'>
                                    <IconContext.Provider value={{ color: '#057a8a', size: '160px', padding:'2px ' }}>
                                        <div className="  flex justify-center    mb-1">
                                        <FaHandshake  className="sm:items-center sm:justify-center  "/>
                                        </div>
                                    </IconContext.Provider>
                                

                                    <p className="pl-4 text-justify text-sm leading-7">
                                    
                                    <b className="text-titleblue">We Care -</b> We have a team of dedicated, passionate and experienced caregivers who provide great care.
                                    We work with families to find the most suitable caregiver for their loved ones. We also provide training to our caregivers to ensure they 
                                    are up to date with the best care practices.
                                    <br/><br/>

                                    </p>

                                </div>
                    </div>

                    <div  className="flex flex-col items-center bg-neutral-primary-soft p-2  rounded-base">
                        <div className=' col-span-1  rounded-lg'>
                                    <IconContext.Provider value={{ color: '#057a8a', size: '160px', padding:'2px ' }}>
                                        <div className="  flex justify-center    mb-1">
                                        <LiaCertificateSolid  className="sm:items-center sm:justify-center  "/>
                                        </div>
                                    </IconContext.Provider>
                                

                                    <p className="pl-4 text-justify text-sm leading-7">
                                    
                                    <b className="text-titleblue">We Are Professionals -</b> Our staff members are highly trained and experienced in providing care to 
                                    individuals with diverse needs. We are committed to maintaining the highest standards of professionalism and ensuring that our 
                                    clients receive the best possible care in line with care standards.
                                    <br/><br/>

                                    </p>

                                </div>
                    </div>

                </div>


            </div>
           

        </div>
       
    
  );
}