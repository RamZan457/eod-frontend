import axios from 'axios';
import React, { useState,useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { isAuthenticated, isDEO } from '../../../utilities/auth';


const TeacherSignup = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [serviceType, setServiceType] = useState("serviceType");
    const [cnic, setCnic] = useState("");
    const [dob, setDob] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [initialAppointment, setInitialAppointment] = useState("Appointment");
    const [grade, setGrade] = useState("");
    const [maritalStatus, setMaritalStatus] = useState("single");
    const [homeAddress, setHomeAddress] = useState("");
    const [currentSchool, setCurrentSchool] = useState("");
    const [dateOfJoining, setDateOfJoining] = useState("");
    const [postedAs, setPostedAs] = useState("postedAs");
    const [experience, setExperience] = useState("");

    useEffect(() => {
        if (!isAuthenticated() || !isDEO()) {
            navigate("/teacher-signin");
        }
    }, []);

    const goBack = () => {
        navigate("/");
    };

    const handleSubmit = async () => {
        try {
            const { data } = await axios.post("http://localhost:5001/teachers/register", {
                name, currentSchool, experience, homeAddress, cnic, email, password, dateOfJoining, postedAs, serviceType, dob, contactNumber, initialAppointment, grade, maritalStatus, homeAddress
            });
            console.log(data);
            navigate("/deodashboard")
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="">
            <div className="grid grid-cols-1 md:grid-cols-2 h-[100vh]">
                <div className="bg-[#165371] text-center">
                    <img
                        className="inline md:h-[400px] h-full md:mt-32 py-8 px-8 md:py-0 md:px-0"
                        src="/images/signup-new.webp"
                        alt="sd"
                    />
                </div>
                <div className="things md:px-32 px-4 md:mt-16 mt-4">
                    <div className="text-start">
                        <i
                            class="fa fa-arrow-left text-3xl text-[#165371] "
                            onClick={goBack}
                            style={{ cursor: "pointer" }}
                        ></i>
                    </div>
                    <div className="text-center">
                    </div>
                    <div className="mt-4">
                        <h1 className="text-center text-2xl font-bold whitespace-nowrap text-[#165371]">
                            Signup As Teacher
                        </h1>
                    </div>
                    <form>
                        <div className="w-full  mb-6 md:mb-0 mt-8">
                            <label
                                className="block  tracking-wide text-gray-700 text-base font-semibold mb-2 "
                                for="grid-first-name"
                            >
                                Name <span className="text-[red]">*</span>
                            </label>

                            <input
                                className="Name w-full py-2 px-2 border focus:outline-none"
                                type="text"
                                required
                                name="name"
                                placeholder="John Doe"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <span className="text-xs text-[red]"></span>
                        </div>
                        <div className="w-full  mb-6 md:mb-0 mt-8">
                            <label
                                className="block  tracking-wide text-gray-700 text-base font-semibold mb-2 "
                                for="grid-first-name"
                            >
                                School Name <span className="text-[red]">*</span>
                            </label>

                            <input
                                className="Name w-full py-2 px-2 border focus:outline-none"
                                type="text"
                                required
                                name="currentSchool"
                                placeholder="Govt High School Abbottabad"
                                value={currentSchool}
                                onChange={(e) => setCurrentSchool(e.target.value)}
                            />
                            <span className="text-xs text-[red]"></span>
                        </div>
                        <div className="w-full  mb-6 md:mb-0 mt-8">
                            <label
                                className="block  tracking-wide text-gray-700 text-base font-semibold mb-2 "
                                for="grid-first-name"
                            >
                                Date Of Joining  <span className="text-[red]">*</span>
                            </label>

                            <input
                                className="Name w-full py-2 px-2 border focus:outline-none"
                                type="text"
                                required
                                name="dateOfJoining"
                                placeholder="14/12/2021"
                                value={dateOfJoining}
                                onChange={(e) => setDateOfJoining(e.target.value)}
                            />
                            <span className="text-xs text-[red]"></span>
                        </div>
                        <div className="w-full  mb-6 md:mb-0 mt-8">
                            <label
                                className="block  tracking-wide text-gray-700 text-base font-semibold mb-2 "
                                for="grid-first-name"
                            >
                                Experience (In Years) <span className="text-[red]">*</span>
                            </label>

                            <input
                                className="Name w-full py-2 px-2 border focus:outline-none"
                                type="text"
                                required
                                name="experience"
                                placeholder="3 Years"
                                value={experience}
                                onChange={(e) => setExperience(e.target.value)}
                            />
                            <span className="text-xs text-[red]"></span>
                        </div>

                        <div className="w-full  mb-6 md:mb-0 mt-8">
                            <label
                                className="block  tracking-wide text-gray-700 text-base font-semibold mb-2 "
                                for="grid-first-name"
                            >
                                City <span className="text-[red]">*</span>
                            </label>

                            <input
                                className="Name w-full py-2 px-2 border focus:outline-none"
                                type="text"
                                required
                                name="homeAddress"
                                placeholder="Abbottabad"
                                value={homeAddress}
                                onChange={(e) => setHomeAddress(e.target.value)}
                            />
                            <span className="text-xs text-[red]"></span>
                        </div>

                        <div className="w-full  mb-6 md:mb-0 mt-8">
                            <label
                                className="block  tracking-wide text-gray-700 text-base font-semibold mb-2 "
                                for="grid-first-name"
                            >
                                Cnic <span className="text-[red]">*</span>
                            </label>

                            <input
                                className="Name w-full py-2 px-2 border focus:outline-none"
                                type="text"
                                required
                                name="cnic"
                                placeholder="13503-7887654-3"
                                value={cnic}
                                onChange={(e) => setCnic(e.target.value)}
                            />
                            <span className="text-xs text-[red]"></span>
                        </div>

                        <div className="w-full  mb-6 md:mb-0 mt-8">
                            <label
                                className="block  tracking-wide text-gray-700 text-base font-semibold mb-2 "
                                for="grid-first-name"
                            >
                                DOB <span className="text-[red]">*</span>
                            </label>

                            <input
                                className="Name w-full py-2 px-2 border focus:outline-none"
                                type="text"
                                required
                                name="dob"
                                placeholder="13/12/1996"
                                value={dob}
                                onChange={(e) => setDob(e.target.value)}
                            />
                            <span className="text-xs text-[red]"></span>
                        </div>

                        <div className="w-full  mb-6 md:mb-0 mt-8">
                            <label
                                className="block  tracking-wide text-gray-700 text-base font-semibold mb-2 "
                                for="grid-first-name"
                            >
                                Contact Number <span className="text-[red]">*</span>
                            </label>

                            <input
                                className="Name w-full py-2 px-2 border focus:outline-none"
                                type="text"
                                required
                                name="contactNumber"
                                placeholder="0333-1234567"
                                value={contactNumber}
                                onChange={(e) => setContactNumber(e.target.value)}
                            />
                            <span className="text-xs text-[red]"></span>
                        </div>

                        <div className="w-full  mb-6 md:mb-0 mt-8">
                            <label
                                className="block  tracking-wide text-gray-700 text-base font-semibold mb-2 "
                                for="grid-first-name"
                            >
                                Grade <span className="text-[red]">*</span>
                            </label>

                            <input
                                className="Name w-full py-2 px-2 border focus:outline-none"
                                type="text"
                                required
                                name="grade"
                                placeholder="Grade 17"
                                value={grade}
                                onChange={(e) => setGrade(e.target.value)}
                            />
                            <span className="text-xs text-[red]"></span>
                        </div>

                        <div className="w-full  mb-6 md:mb-0 mt-8">
                            <label
                                className="block  tracking-wide text-gray-700 text-base font-semibold mb-2 "
                                for="grid-first-name"
                            >
                                Email <span className="text-[red]">*</span>
                            </label>

                            <input
                                className="Name w-full py-2 px-2 border focus:outline-none"
                                type="email"
                                required
                                name="email"
                                placeholder="youremail@gmail.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <span className="text-xs text-[red]"></span>
                        </div>

                        <div className="w-full  mb-6 md:mb-0 mt-8">
                            <label
                                className="block  tracking-wide text-gray-700 text-base font-semibold mb-2 "
                                for="grid-first-name"
                            >
                                Password <span className="text-[red]">*</span>
                            </label>
                            <div className="io absolute right-[12%] mt-[9px] text-[#9fa5b0] hover:text-[#5538c8] cursor-pointer">
                                <i
                                    class="fa fa-eye"
                                    onClick={() => setShowPassword(!showPassword)}
                                    aria-hidden="true"
                                ></i>
                            </div>
                            <input
                                className="Name w-full py-2 px-2 border focus:outline-none"
                                type={showPassword ? "text" : "password"}
                                required
                                name="password"
                                placeholder="********"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </form>

                    <div className="flex justify-center mt-8 flex-col pb-4 md:pb-4 ">
                        <button
                            className="block w-full py-2 text-base text-white bg-[#165371]  hover:font-semibold px-8 mt-4"
                            onClick = {handleSubmit}
                        >
                            Signup
                        </button>
                        <Link to="/teacher-signin">
                            <p className="mt-8 text-center font-semibold">
                                Already Have an Account ? 
                                <span className="text-[#165371] font-semibold hover:font-bold cursor-pointer">
                                     Signin
                                </span>
                            </p>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeacherSignup