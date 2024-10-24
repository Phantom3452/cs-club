import React from 'react';
import img from '../images/HackCompOne.png'; 
import img2 from '../images/HackCompTwo.png';
import img3 from '../images/HackCompThree.png';
import img4 from '../images/HackCompFour.png';

const Competitions = () => {

    return (
        <div id="competitions" className="bg-blue-1200 py-12" >
            <section data-aos="zoom-in-down">
                    <div className="my-4 py-4">
                        <h2 className="my-2 text-center text-3xl text-red-900 uppercase font-bold">competitions</h2>
                        
                        <div className='flex justify-center'>
                            <div className='w-24 border-b-4 border-blue-900'></div>
                        </div>
                        <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">We host. YOU Create, Compete, Code.</h2>
                    </div>

                    <div className="px-12" data-aos="fade-down" data-aos-delay="600">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            
                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-black-700 hover:bg-black-500 hover:text-blue rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img} />
                                    <h2 className="font-semibold my-4 text-2xl text-center">Complex Coding</h2>

                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-black-700 hover:bg-black-500 hover:text-blue rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img2} />
                                    <h2 className="font-semibold my-4 text-2xl text-center">Interesting Projects</h2>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-black-700 hover:bg-black-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                    <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img3} />
                                    <h2 className="font-semibold my-4 text-2xl text-center ">Real World Applications</h2>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-black-700 hover:bg-black-500 hover:text-blue rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img4} />
                                    <h2 className="font-semibold my-4 text-2xl text-center ">Teamwork and Collaboration</h2>
                                </div>
                            </div>                    
                        </div>
                    </div>
            </section>

        </div>
    )
}

export default Competitions;
