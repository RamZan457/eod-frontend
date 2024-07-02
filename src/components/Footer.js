import { useNavigate } from "react-router-dom";


const Footer =  () => {
    const navigate = useNavigate();

    const EarnWithUs = () => {
        navigate("/becometutor")
    }

    const Careers = () => {
        navigate("/careers")
    }

    const Privacy = () => {
        navigate("/terms-and-conditions")
    }

    const HelpCenter = () => {
        navigate("/help-center")
    }

    const ContactUs = () => {
        navigate("/contactus")
    }
    return (
        <>
            <div className="carousel bg-[#165371] footer">
                <div className="max-w-screen-xl items-center  mx-auto p-4 ">
                    <div className="flex justify-between mt-10">

                        <div className="flex gap-16">
                            <div className="text-white cursor-pointer">

                                <p className=" hover:font-semibold" onClick={EarnWithUs}>
                                    DEO
                                </p>
                                <p className="mt-4  hover:font-semibold" onClick={Careers}>
                                    Teachers
                                </p>
                                <p className="mt-4  hover:font-semibold" onClick={ContactUs}>
                                    Tranfer
                                </p>
                            </div>
                            <div className="text-white cursor-pointer">
                                <p className="hover:font-semibold" onClick={Privacy}>
                                    Privacy Policy
                                </p>
                                <p className="mt-4  hover:font-semibold">
                                    Sitemap
                                </p>
                                <p className="mt-4  hover:font-semibold" onClick={HelpCenter}>
                                    Help Center
                                </p>
                            </div>
                        </div>
                        <div className="text-white mt-7 flex flex-col items-center">
                            <img src = "/images/logo.webp" className="w-40 h-40"/>


                        </div>

                    </div>
                    <div className="text-center mt-16">
                        <div className="footer-icons flex justify-center gap-4">
                            <a href="https://www.facebook.com/profile.php?id=100090742051272" target="_blank">
                                <img src="/images/Group 14586.webp" alt="" className="mt-4 md:mt-4" />
                            </a>
                            <a href="https://twitter.com/academic_air" target="_blank">
                                <img src="/images/Group 14584.webp" alt="" className="mt-4 md:mt-4" />
                            </a>
                            <a href="https://www.instagram.com/airacademic/" target="_blank">
                                <img src="/images/Group 14585.webp" alt="" className="mt-4 md:mt-4" />
                            </a>
                            <a href="https://www.youtube.com/@AirAcademic/videos" target="_blank">
                                <img src="/images/Group 14587.webp" alt="" className="mt-4 md:mt-4" />
                            </a>
                            <a href="https://www.linkedin.com/company/air-academic/?originalSubdomain=pk" target="_blank">
                                <img src="/images/footer-linkedin.webp" alt="" className="mt-4 md:mt-4" />
                            </a>
                        </div>


                        <div className="flex items-center justify-center mt-4">
                            <img src="/images/copyright.webp" alt="" className="mr-1 mb-4 md:mb-0" />
                            <p className="text-white font-thin">
                                <span className="font-semibold">Blockchain</span>
                                2023 copyright all rights reserved
                            </p>
                        </div>
                    </div>




                </div>
            </div>
        </>
    );
};

export default Footer;

