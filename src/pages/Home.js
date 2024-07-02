import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Home = () => {
    return (
        <>
            <Navbar />
            <div className="bb max-w-6xl items-center mx-auto p-4 md:mt-0 mt-0 mb-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center text-center lg:text-left">
                    <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start">
                        <div className="flex items-center">
                            <p className="text-4xl lg:text-[2.375rem] mt-6 md:mt-0 lg:leading-[70.2px] font-bold">
                                TransferHub
                            </p>
                        </div>
                        <div>
                            <p className="text-4xl lg:text-[1.375rem] mt-4 md:mt-0 lg:leading-[70.2px] font-bold">
                                <span className="text-[#165371]">Transparent Employee Transfers on Blockchain</span>
                            </p>
                        </div>


                        <p className="mx-w-96 md:w-96 lg:w-96 lg:text-[1.31rem] mt-4 mx-auto lg:mx-0">
                            Securely streamline
                            <span className="text-[#165371] cursor-pointer hover:font-bold ms-1 me-1">
                                employee transfers with
                            </span>
                            transparent blockchain technology.
                        </p>
                    </div>

                    {/* Images for large and medium screens */}
                    <div className="hidden lg:flex items-center lg:justify-end">
                        <img src="/images/girl-laptop.webp" alt="ring-img" className="max-w-[500px] max-h-[500px] mb-16" />
                    </div>

                    {/* Images for mobile screens */}
                    <div className="lg:hidden flex flex-col items-center mt-4">
                        <img src="/images/girl-laptop.webp" alt="ring-img" className="max-w-[300px] " />
                    </div>

                </div>

                <div>
                    <div className="top-heading text-center mt-20 md:mt-8 mb-8">
                        <h1 className='text-2xl md:text-4xl underline font-bold text-[#165371]'>Blockchain Based Employee Transfer System</h1>
                    </div>

                    <div className="grid md:grid-cols-3 grid-cols-1 gap-24">
                        <div className="left">
                            <h1 className='text-lg mt-4 mb-4'>Decentralized system ensuring fair and transparent staff relocations using blockchain.</h1>
                            <img src="/images/block-1.jpg" alt="" className='w-50 h-60 rounded-3xl' />
                        </div>
                        <div className="left">
                            <h1 className='text-lg mt-4 mb-4'>Revolutionize employee mobility—transparent transfers through innovative blockchain tech</h1>
                            <img src="/images/block-2.jpg" alt="" className='w-50 h-60 rounded-3xl' />
                        </div>
                        <div className="left">
                            <h1 className='text-lg mt-4 mb-4'>Unlock transparency in staff movements with our blockchain-centric transfer solution.</h1>
                            <img src="/images/block-3.jpg" alt="" className='w-50 h-60 rounded-3xl' />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home