import React from 'react'
import Navbar from '../components/Navbar';
import { model } from '../content/Models';
import { modelverse } from '../content/ModelVerse';
import Footer from '../components/Footer';


function LandingPage() {
    return (
        <div className='bg-[#d5e8ff]'>
            <div>
                <Navbar />
            </div>

            {/* section 1 */}
            <section className="text-gray-600 body-font mt-10">
                <div className="container mx-auto flex flex-col px-5 py-10 justify-center items-center">
                    <h1 className="lg:w-[55%] w-full text-center title-font sm:text-5xl text-3xl font-bold text-gray-900">
                        <span className=''>Generate Impressive Visuals</span>
                        <span className='text-[#A99801] font-bold'> in seconds</span>
                    </h1>
                    <img className="lg:w-[25%] md:w-3/6 w-5/6 object-cover object-center rounded" alt="hero" src="/images/camera.png" />
                    <div className="w-full lg:w-[40%] md:w-2/3 flex flex-col mb-16 items-center text-center">
                        {/* <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Knausgaard typewriter readymade marfa</h1> */}
                        <p className="mb-8 lg:text-4xl text-2xl font-semibold  leading-relaxed">
                            <span className='bg-gradient-to-r from-[#c17985] to-[#da6679] bg-clip-text text-transparent'>Say Good Bye To Photoshoots  Say Hello To </span>
                            <span className='bg-gradient-to-r from-[#61cdff] to-[#0C72A1] bg-clip-text text-transparent'>Model Verse’s AI</span>
                        </p>
                        <div className="flex w-fit justify-center items-end shadow-2xl">
                            <button href="/" className=" bg-gradient-to-r from-[#51F8D2] to-[#DFEBF000] text-black border-[1px] border-black hover:text-white px-4 py-3 rounded-md text-base  font-semibold">Get Started</button>
                        </div>
                    </div>
                </div>
            </section>


            {/* section 2 */}
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-col px-5 py-10 justify-center items-center">
                    <div className='mb-10'>
                        <h1 className="lg:w-full w-[90%] mx-auto text-center title-font sm:text-4xl text-2xl font-bold text-gray-900">
                            Enhance User Experience with AI Models
                        </h1>
                        <h1 className="w-full pb-10 text-center title-font sm:text-4xl text-2xl font-bold bg-gradient-to-r from-[#c17985] to-[#da6679] bg-clip-text text-transparent">“Choose AI Models for your clothes”</h1>
                    </div>

                    <section className="text-gray-600 body-font">
                        <div className="container px-5 mx-auto">
                            <div className="lg:flex flex-wrap -m-4" >
                                {model.map((data) =>
                                    <div className="p-4 md:w-1/3" key={data.id}>
                                        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg ">
                                            <img className="lg:h-[35rem] md:h-36 h-[40rem] lg:w-full w-[100%] mx-auto object-cover object-center" src={data.imgUrl} alt={data.id} />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </section>

                    <h1 className="lg:w-[90%] w-full py-10 text-center title-font lg:text-3xl text-2xl font-bold bg-gradient-to-r from-[#c17985] to-[#FF002C] bg-clip-text text-transparent">
                        One Stop Destination for Your Catalogs, Studio Images in SecondsModels
                    </h1>

                    <div className="flex w-fit justify-center items-end shadow-2xl">
                        <button href="/" className=" bg-gradient-to-r from-[#51F8D2] to-[#DFEBF000] text-black border-[1px] border-black hover:text-white px-4 py-3 rounded-md text-base  font-semibold">Talk to an Expert</button>
                    </div>
                </div>
            </section>

            {/* section 3 */}
            {/* Youtube Link  */}

            {/* section 4 */}
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-col px-5 py-10 justify-center items-center">
                    <div className='mb-'>
                        <h1 className="w-full pb-2 text-center title-font sm:text-4xl text-3xl font-bold bg-gradient-to-r from-[#FF9E0C] to-[#ffa824] bg-clip-text text-transparent"> Introducing Model Verse:</h1>
                        <h1 className="w-full pb-10 text-center title-font sm:text-4xl text-2xl font-bold bg-gradient-to-r from-[#FF0C0C] to-[#ff9393] bg-clip-text text-transparent">Unleash the Magic of Endless Fashion Possibilities</h1>
                    </div>

                    <p className="lg:w-[60%] w-full pb-20 lg:text-justify text-justify title-font sm:text-lg text-lg font-base italic font-serif text-black">
                        “Say goodbye to the days of costly and time-consuming photoshoot in various locations, where you find yourself pouring your hard-earned capital into photographers, agencies, models, and endless logistics. Model Verse is here to revolutionize the way you capture stunning visuals for your fashion brand or personal wardrobe”</p>

                    <section className="text-gray-600 body-font">
                        <div className="container px-5 mx-auto">
                            <div className="lg:flex lg:flex-wrap -m-4" >
                                {modelverse.map((data) =>
                                    <div className="p-4 md:w-1/4" key={data.id}>
                                        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg w-full mx-auto">
                                            <img className="lg:h-full md:h-36 h-[40rem] w-[100%] mx-auto object-cover object-center" src={data.imgUrl} alt={data.id} />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </section>

                    <h1 className="w-[90%] py-10 text-center title-font sm:text-4xl text-3xl font-bold text-[#0071A6]">
                        Unlock The World Class Studio
                    </h1>
                </div>
            </section>


            {/* section 4 */}
            <section className="text-gray-600 body-font bg-gradient-to-r from-[#FFDEDA] from-30% via-[#FFFFFF] via-50% to-[#ffadf0] to-80% ">
                <div className="container px-5 py-24 mx-auto">
                    <div className=" -m-4">
                        <div className='lg:flex w-full'>
                            <div className="lg:w-[45%] flex lg:mb-0 mb-6 p-4 mx-auto lg:my-[10%]">
                                <img alt="1" className="lg:w-[40%] w-[10%] lg:h-[30vh] h-[1%]" src="images/1.png" />
                                <div className="h-full text-justify mx-5">
                                    <p className="leading-relaxed">“<span className='font-semibold text-black'>Experience Model Verse</span> cutting-edge e-commerce AI imaging services that revolutionize garment sales.From lightning-fast AI editing to seamless AI model image creation, we accelerate your market entry and enhance your online presence.”</p>
                                </div>
                            </div>
                            <img className='ml-auto mx-auto' src='images/Man1.png' alt='man1' />
                        </div>
                        <div className='lg:flex w-full'>
                            <img className='mx-auto lg:flex hidden' src='images/Woman1.png' alt='woman1' />
                            <div className="lg:w-[45%] flex lg:mb-0 mb-6 p-4 ml-auto mx-auto lg:my-[10%]">
                                <img alt="2" className="lg:w-[50%] w-[15%] lg:h-[30vh] h-[1%]" src="images/2.png" />
                                <div className="h-full text-justify my-auto mx-5">
                                    <p className="leading-relaxed">“<span className='font-semibold text-gray-800'>Model Verse</span> specializes in tailoring customized imaging solutions to meet the unique cataloging needs of brands, retailers, and marketplaces. Our services are designed to cater to your specific requirements, ensuring seamless and efficient image management”</p>
                                </div>
                            </div>
                            <img className='mx-auto lg:hidden' src='images/Woman1.png' alt='woman1' />
                        </div>

                        <div className='lg:flex w-full'>
                            <div className="lg:w-[45%] flex lg:mb-0 mb-6 p-4 mx-auto lg:my-[10%]">
                                <img alt="3" className="lg:w-[40%] w-[15%] lg:h-[30vh] h-[1%]" src="images/3.png" />
                                <div className="h-full text-justify my-auto mx-5">
                                    <p className="leading-relaxed">“<span className='font-semibold text-gray-800'>Model Verse's</span> AI technology enables effortless generation of eCommerce and creative images at a massive scale.”</p>
                                </div>
                            </div>
                            <img className='ml-auto mx-auto' src='images/Woman2.png' alt='woman2' />
                        </div>

                    </div>
                </div>
            </section>

            {/* section 5 */}
            <section className="text-gray-600 body-font  ">
                <div className="container mx-auto flex flex-col px-5 py-10 justify-center items-center">
                    <div className='mb-10'>
                        <h1 className="w-full mb-5 text-center title-font sm:text-4xl text-2xl font-bold text-gray-900">
                            Use Cases
                        </h1>
                        <h1 className="w-full text-center text-black title-font sm:text-4xl text-2xl font-bold">Find a Stunning Model for Your Garment Showcase</h1>
                    </div>
                    <p className="lg:w-[65%] w-full text-justify title-font sm:text-lg text-lg font-base text-black">
                        Experience our comprehensive imaging solutions designed to cater to a diverse clientele, ranging from Entrepreneur dearest startups to multinational corporations. Our curated offerings are tailored to meet the specific use cases of fashion brands, retailers, and marketplaces. Explore our product offerings to find the perfect solution that aligns with your unique needs.</p>

                </div>
            </section>
            <section className="w-full text-gray-600 body-font bg-gradient-to-tr from-[#e0f4ff] from-50% via-[#7db9ba] via-80% to-[#d1c2b4] to-100%">
                <h1 className="w-full pt-10 text-center title-font sm:text-3xl text-3xl font-bold text-black">
                    From <span className='text-[#CB393B]'>Garments</span> To <span className='text-[#2F5FA9]'>Studio</span>Pictures in <span className='text-[#094B5F]'>Seconds</span>
                </h1>

                <div className="container px-5 lg:py-24 py-10 ">
                    <div className="flex flex-wrap sm:-m-4 mx-auto -mb-10 -mt-4">
                        <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                            <div className="rounded-lg h overflow-hidden">
                                <img alt="content" className="object-cover object-center h-full w-full" src="images/model8.png" />
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3 sm:mb-0 mb-6 lg:-mt-10">
                            <div className="rounded-lg h overflow-hidden">
                                <img alt="content" className="object-cover object-center h-full w-full" src="images/model9.png" />
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                            <div className="rounded-lg h overflow-hidden">
                                <img alt="content" className="object-cover object-center h-full w-full" src="images/model10.png" />
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            {/* section 6 */}
            <section className="w-full text-gray-600 body-font bg-white my-20">
                <h1 className="w-full pt-10 text-center title-font sm:text-5xl text-3xl font-bold text-black">
                    Choose <span className='bg-gradient-to-r from-[#7c8000bf] to-[#D127AC] bg-clip-text text-transparent'>Your Model</span>
                </h1>
                <div className="container px-5 pt-10 mx-auto">
                    <div className="p-4 mx-auto md:w- sm:mb-0 mb-6 lg:-mt-10">
                        <div className="rounded-lg h overflow-hidden">
                            <img alt="content" className="object-cover object-center h-full w-full" src="images/model11.png" />
                        </div>
                    </div>
                </div>
                <h1 className="w-full pt-10 text-center title-font sm:text-3xl text-3xl font-bold text-black">
                    <span className='bg-gradient-to-r from-[#7c8000bf] to-[#D127AC] bg-clip-text text-transparent'>350+ AI Human Models Available</span>
                </h1>


                {/* section 7 Contact */}
                <section className="text-gray-black body-font relative ">
                    <div className="container px-5 py-24 mx-auto">

                        <div className="lg:w- md:w-2/3 mx-auto py-20 bg-gradient-to-br from-[#ff97b9] from-10% to-[#E5EA1233] to-60%">
                            <div className="flex flex-wrap -m-2">
                                <div className="flex flex-col text-center mx-5 w-full lg:mb-12 mb-5">
                                    <h1 className="sm:text-4xl text-2xl font-semibold font-sans title-font mb-4 text-gray-900">Get in Touch & Talk To An Expert </h1>
                                </div>
                                <div className="p-2 w-[80%] lg:flex mx-auto">
                                    <div className="relative w-full mx-auto">
                                        {/* <label for="message" className="leading-7 text-sm text-gray-600">Message</label> */}
                                        <textarea id="message" name="message" placeholder='Enter your message with contact info.' className="w-full bg-white bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h- text-base outline-none text-gray-800 py-1 px-3     resize-none leading-6 transition-colors duration-200 ease-in-out mx-auto"></textarea>
                                    </div>
                                    <div className="p-2 lg:my-0 my-10 w-fit mx-auto">
                                        <button className="text-black font-semibold bg-[#74afb4] border-0 py-2 px-8 focus:outline-none hover:bg-[#82C5C9] rounded text-lg">Submit</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </section>

            <div>
                <Footer />
            </div>
        </div>
    )
}

export default LandingPage
