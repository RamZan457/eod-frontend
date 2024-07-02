import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate();
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <>
            <div className="overflow-x-hidden">
                <nav className="bg-white">
                    <div className="max-w-6xl flex flex-wrap items-center justify-between mx-auto px-4 py-0 md:py-4">
                        <span
                            className="self-center text-xl font-bold whitespace-nowrap text-[#165371] cursor-pointer hover:tracking-[3px] duration-300 transition-ease-in-out delay-150"
                            onClick={() => navigate("/")}
                        >
                            <img src="/images/logo.webp" alt="" className='w-24 h-12' /> Teachers

                        </span>
                        <div>
                            <div className="flex items-center justify-between  md:hidden border-gray-400 py-8">
                                <section className="MOBILE-MENU flex lg:hidden">
                                    <div
                                        className="HAMBURGER-ICON space-y-2"
                                        onClick={() => setIsNavOpen((prev) => !prev)}
                                    >
                                        <span className="block h-0.5 w-8 animate-pulse  bg-[#165371]"></span>
                                        <span className="block h-0.5 w-8 animate-pulse  bg-[#165371]"></span>
                                        <span className="block h-0.5 w-8 animate-pulse  bg-[#165371]"></span>
                                    </div>
                                    <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                                        <div
                                            className="absolute top-0 right-0 px-8 py-8"
                                            onClick={() => setIsNavOpen(false)}
                                        >
                                            <svg
                                                className="h-8 w-8 text-gray-600"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <line x1="18" y1="6" x2="6" y2="18" />
                                                <line x1="6" y1="6" x2="18" y2="18" />
                                            </svg>
                                        </div>
                                        <ul className="flex flex-col items-center justify-between min-h-[250px]">

                                            <li className="border-b border-gray-400 my-8 uppercase">
                                                <a className="block py-2 pl-3 pr-4  text-black hover:text-[#165371] hover:font-semibold" href='/contact'>
                                                    Contact
                                                </a>
                                            </li>
                                            {/* <li className="border-b border-gray-400 my-8 uppercase">
                                                <a className="block py-2 pl-3 pr-4  text-black hover:text-[#165371] hover:font-semibold" href = "/submit-request">
                                                    Submit Request
                                                </a>
                                            </li> */}
                                            <li className=" my-8 ">
                                                <a className="py-[10px]  text-sm  px-[26px] text-white bg-[#165371] rounded-full hover:font-semibold text-[16px] font-[400]" onClick={() => navigate("/deo-signin")}>
                                                    Login as DEO
                                                </a>

                                                <button className="py-[10px] block mx-auto mt-6 text-sm  px-[26px] text-[#165371] bg-white border-3 border-[v] rounded-full hover:font-semibold text-[16px] font-[400] border" onClick={() => navigate("/teacher-signin")}>
                                                    Login as Teacher
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </section>



                                <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
                            </div>
                            <div
                                className="hidden w-full md:block md:w-auto"
                                id="navbar-default"
                            >
                                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4  md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white cursor-pointer">
                                    <li>
                                        <Link to="/"
                                            className="block py-2 pl-3 pr-4  text-black hover:text-[#165371] hover:font-semibold"

                                        >
                                            Home
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to="/contact"
                                            className="block py-2 pl-3 pr-4  text-black hover:text-[#165371] hover:font-semibold"

                                        >
                                            Contact
                                        </Link>
                                    </li>
                                    {/* <li>
                                        <Link to="/submit-request"
                                            className="block py-2 pl-3 pr-4  text-black hover:text-[#165371] hover:font-semibold"

                                        >
                                            Submit Request
                                        </Link>
                                    </li> */}

                                    <li>
                                        <button
                                            className="py-[10px]  text-sm  px-[26px] text-white bg-[#165371] rounded-full hover:font-semibold text-[16px] font-[400] me-4"
                                            onClick={() => navigate("/deo-signin")}
                                        >
                                            Login as DEO
                                        </button>

                                        <button
                                            className="py-[10px]  text-sm  px-[26px] text-[#165371] bg-white border-3 border-[#165371] rounded-full hover:font-semibold text-[16px] font-[400] border"
                                            onClick={() => navigate("/teacher-signin")}
                                        >
                                            Login as Teacher
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

        </>
    )
}

export default Navbar