import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const TeacherSignin = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    async function handleLogin() {
        try {
            const { data } = await axios.post("http://localhost:5001/teachers/login", { email, password });

            const token = data.token;

            if (token) {
                // Store the token in localStorage with the 'Bearer ' prefix
                localStorage.setItem('token', `${token}`);
                localStorage.setItem("teacher", JSON.stringify(data.teacher));
                //   alert("Login successful");
            } else {
                alert("Token not received in the response");
            }
            navigate("/teacher-dashboard");
        } catch (error) {
            if (error.response && error.response.status === 401) {
                alert("Invalid credentials. Please check your email and password."); // Show an invalid credentials message
            } else {
                alert("Error logging in. Please try again later."); // Show a generic error message
            }
        }
      }

    const goBack = () => {
        navigate("/");
    };
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
                            Login As Teacher
                        </h1>
                    </div>
                    <form>
                        
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
                            <div className="io absolute right-[12%] mt-[9px] text-[#9fa5b0] hover:text-[#165371] cursor-pointer">
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

                    <div className="flex justify-center mt-8 flex-col pb-4 md:pb-0 ">
                        <button
                            className="block w-full py-2 text-base text-white bg-[#165371]  hover:font-semibold px-8 mt-4"
                            onClick={handleLogin}
                        >
                            Login
                        </button>
                        <Link to="/teacher-signup">
                            <p className="mt-8 text-center font-semibold">
                                Dont have an acoount ?
                                <span className="text-[#165371] font-semibold hover:font-bold cursor-pointer">
                                    Signup
                                </span>
                            </p>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeacherSignin