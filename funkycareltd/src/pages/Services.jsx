import domiciliary from '../images/magnific_supported-living-for-adul_8vReMvJIrU.png'
import personalCare from '../images/magnific_helping-a-disabled-person_DBP0aqdpcl.png'
import respite from '../images/magnific_adult-lying-in-bed-under-_xgmMOkijfW.png'
import socialInclusion from '../images/magnific_bright-welcoming-supporte_brXYFRa5Y2.png'

/* import { Helmet } from 'react-helmet-async' */
function Services() {
  return (
    <div className='relative w-full bg-cover bg-center bg-no-repeat  bg-blend-multiply mb-5'>
        {/* <Helmet>
            <title>Domiciliary Care</title>
            <meta name="description" content="See our detailed domiciliary care services"/>
            <link rel="canonical" href="/domiciliary" />
        </Helmet> */}
        <section >
        <section className=" bg-cover bg-center bg-no-repeat services-bg bg-gray-600  bg-blend-multiply">
            <div className="px-4 mx-auto max-w-7xl  bg- py-24 lg:py-50">
                <h1 className="mb-4 text-4xl font-extrabold  tracking-tight leading-none text-icyteal md:text-5xl lg:text-6xl">
                 Our Services </h1>
               
                
               
            </div>
        </section>
            <div className=" px-2 mx-auto max-w-7xl t pt-4">

                {/* <div className=" mx-auto max-w-screen-xl text-center pt-6  ">
                    <h4 className="bg-gradient-to-r from-violet-950 to-fuchsia-950 bg-clip-text text-transparent mb-4 text-2xl font-extrabold tracking-tight leading-none text-emerald-800 md:text-3xl lg:text-3xl">
                       Our services:
                    </h4>
                </div> 
 */}
                <div className="  ">

                    {/* Supported living for Adults */}

                <div  className=" items-center grid grid-cols-2 bg-neutral-primary-soft px-2 pt-5  rounded-base md:flex-row  md:flex-row ">
                    <div  className="flex flex-col items-center bg-neutral-primary-soft pt-5  rounded-base  ">
                        <img className="rounded-lg  border-1 object-cover w-full rounded-base h-64 md:h-auto md:w-3/4 mb-4 md:mb-0" src={domiciliary} alt="Value"/>
                        
            
                    </div>

                    <div className="   border-navcolour sm:82 rounded-lg   text-darkbluetheme   mx-4 ">
                        <h5 className="mx-auto mt-2 mb-4 text-1xl font-bold tracking-tight leading-none  text-titleblue md:text-2xl lg:text-2xl">
                            <u>Supported living for Adults</u> <br/><br/>
                        </h5>

                        <p className=' text-sm leading-7 px-2'>
                        Our Supported Living services are designed to help individuals live independently and manage their tenancies, with personalized 
                        support based on their needs and goals. We promote choice and independence, supporting adults with learning disabilities, mental 
                        health needs, dementia, post-hospital discharge, and other complex care needs. Our service provides a calming, therapeutic 
                        environment for adults with learning difficulties and works closely with individuals transitioning from secure units into the 
                        community.<br/><br/>

                        With a focus on recovery and independence, we aim to empower service users to achieve their personal goals. Our outcome-based 
                        approach encourages individuals to secure their own tenancies with minimal support, enabling them to lead fulfilling lives in the 
                        community.
                        
                        </p>

                    
                    </div> 

                </div>
                        {/* Respite Care */}

                <div  className=" items-center grid grid-cols-2 bg-neutral-primary-soft px-2 pt-5  rounded-base md:flex-row  md:flex-row ">
                    

                    <div className="   border-navcolour sm:82 rounded-lg   text-darkbluetheme   mx-4 ">
                        <h5 className="mx-auto mt-2 mb-4 text-1xl font-bold tracking-tight leading-none  text-titleblue md:text-2xl lg:text-2xl">
                            <u>Respite Care</u> <br/><br/>
                        </h5>

                        <p className=' text-sm leading-7 px-2'>
                        We provide essential relief for primary caregivers and families by offering temporary care for their loved ones. This service allows 
                        caregivers to take a break from their caregiving responsibilities, ensuring they have time to recharge. Meanwhile, the individuals 
                        receiving care are supported by trained professionals in a safe and nurturing environment.
                        </p>
                    
                    </div> 

                    <div  className="flex flex-col items-center bg-neutral-primary-soft p-2  rounded-base  ">
                        <img className="rounded-lg  border-1 object-cover w-full rounded-base h-64 md:h-auto md:w-3/4 mb-4 md:mb-0" src={respite} alt="Value"/>
                        
            
                    </div>

                </div>

                {/* Personal care */}
                <div  className=" items-center grid grid-cols-2 bg-neutral-primary-soft px-2 pt-5  rounded-base md:flex-row  md:flex-row ">
                    <div  className="flex flex-col items-center bg-neutral-primary-soft p-2  rounded-base  ">
                        <img className="rounded-lg  border object-cover w-full rounded-base h-64 md:h-auto md:w-3/4 mb-4 md:mb-0" src={personalCare} alt="Value"/>
                        
                    </div>

                    <div className="   border-navcolour sm:82 rounded-lg   text-darkbluetheme   mx-4 ">
                        <h5 className="mx-auto mt-2 mb-4 text-1xl font-bold tracking-tight leading-none  text-titleblue md:text-2xl lg:text-2xl">
                            <u>Personal Care</u> <br/><br/>
                        </h5>

                        <p className=' text-sm leading-7 px-2'>
                        <b>Personal Care:</b> Assisting with daily tasks such as bathing, dressing, grooming, and toileting to ensure comfort and dignity.<br/><br/>

                        <b>Medication Management:</b> Providing support with medication, including prompting from blister packs and monitoring supply to 
                        ensure adherence to prescribed regimens. <br/><br/> 
                        
                        <b>Mobility Assistance:</b> Helping clients move safely around their environment, utilizing mobility aids as necessary to promote independence.<br/><br/>
                        </p>

                    
                    </div> 

                </div>

                {/* Social inclusion */}
                <div  className=" items-center grid grid-cols-2 bg-neutral-primary-soft px-2 pt-5  rounded-base md:flex-row  md:flex-row ">
                   
                    <div className="   border-navcolour sm:82 rounded-lg   text-darkbluetheme   mx-4 ">
                        <h5 className="mx-auto mt-2 mb-4 text-1xl font-bold tracking-tight leading-none  text-titleblue md:text-2xl lg:text-2xl">
                            <u>Social Inclusion</u> <br/><br/>
                        </h5>

                        <p className=' text-sm leading-7 px-2'>
                            Our services are designed to foster active participation in society, ensuring our clients have access to essential resources and 
                            opportunities for social engagement. We offer:<br/><br/>
                        <b>Companionship: </b>  Providing friendly company both at home and in the community. Activity Access: Assisting clients in 
                        participating in local activities and social events.<br/><br/>

                        <b>Appointment Support:</b> Helping with appointments, including hospital visits, GP check-ups, hair appointments, and more. <br/><br/> 
                        
                        <b>Social Outings:</b> Organizing outings such as holidays, club visits, day services, and other leisure activities of the client’s choice.<br/><br/>
                        </p>

                    
                    </div> 

                     <div  className="flex flex-col items-center bg-neutral-primary-soft p-2  rounded-base  ">
                        <img className="rounded-lg  border-1 object-cover w-full rounded-base h-64 md:h-auto md:w-3/4 mb-4 md:mb-0" src={socialInclusion} alt="Value"/>
                        
                    </div>

                </div>
                    
                </div>

               
            </div>
        </section>
    </div>
)
}

export default Services