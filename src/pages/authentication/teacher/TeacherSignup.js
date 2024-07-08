import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { isAuthenticated, isDEO, isTeacher } from '../../../utilities/auth';

const TeacherSignup = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [serviceType, setServiceType] = useState("");
    const [cnic, setCnic] = useState("");
    const [dob, setDob] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [initialAppointment, setInitialAppointment] = useState("");
    const [grade, setGrade] = useState("");
    const [maritalStatus, setMaritalStatus] = useState("");
    const [homeAddress, setHomeAddress] = useState("");
    const [currentSchool, setCurrentSchool] = useState("");
    const [dateOfJoining, setDateOfJoining] = useState("");
    const [postedAs, setPostedAs] = useState("");
    const [experience, setExperience] = useState("");
    const [teacherId, setTeacherId] = useState("");
    const [ethAddress, setEthAddress] = useState("");
    const [asTeacher, setAsTeacher] = useState(false);
    const [asDEO, setAsDEO] = useState(false);

    useEffect(() => {
        if (!isAuthenticated()) {
            navigate("/teacher-signin");
        }
        if (isDEO() || !isTeacher()) {
            setAsDEO(true);
        }
        if (isTeacher() || !isDEO()) {
            setAsTeacher(true);
            const teacher = localStorage.getItem('teacher');
            const teacherData = {
                name: JSON.parse(teacher).name || "",
                email: JSON.parse(teacher).email || "",
                password: JSON.parse(teacher).password || "",
                serviceType: JSON.parse(teacher).serviceType || "",
                cnic: JSON.parse(teacher).cnic || "",
                dob: JSON.parse(teacher).dob || "",
                contactNumber: JSON.parse(teacher).contactNumber || "",
                initialAppointment: JSON.parse(teacher).initialAppointment || "",
                grade: JSON.parse(teacher).grade || "",
                maritalStatus: JSON.parse(teacher).maritalStatus || "",
                homeAddress: JSON.parse(teacher).homeAddress || "",
                currentSchool: JSON.parse(teacher).currentSchool || "",
                dateOfJoining: JSON.parse(teacher).dateOfJoining || "",
                postedAs: JSON.parse(teacher).postedAs || "",
                experience: JSON.parse(teacher).experience || "",
                teacherId: JSON.parse(teacher)._id || "",
                ethAddress: JSON.parse(teacher).ethAddress || ""
            };

            setName(teacherData.name);
            setEmail(teacherData.email);
            setPassword(teacherData.password);
            setServiceType(teacherData.serviceType);
            setCnic(teacherData.cnic);
            setDob(teacherData.dob);
            setContactNumber(teacherData.contactNumber);
            setInitialAppointment(teacherData.initialAppointment);
            setGrade(teacherData.grade);
            setMaritalStatus(teacherData.maritalStatus);
            setHomeAddress(teacherData.homeAddress);
            setCurrentSchool(teacherData.currentSchool);
            setDateOfJoining(teacherData.dateOfJoining);
            setPostedAs(teacherData.postedAs);
            setExperience(teacherData.experience);
            setTeacherId(teacherData.teacherId);
            setEthAddress(teacherData.ethAddress);
        }
    }, [navigate, asTeacher, asDEO]);

    const goBack = () => {
        navigate("/teacher-dashboard");
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.post("http://localhost:5001/teachers/register", {
                name, currentSchool, experience, homeAddress, cnic, email, password, dateOfJoining, postedAs, serviceType, dob, contactNumber, initialAppointment, grade, maritalStatus
            });

            if (response) {
                alert("Teacher Registered Successfully");
                navigate("/deodashboard");
            }
        } catch (error) {
            alert("Error: " + error.response.data.error);
            console.log(error);
        }
    }

    const handleUpdate = async () => {
        try {
            const token = localStorage.getItem('token');
            axios.defaults.headers.common = { 'Authorization': `${token}` }
            const response = await axios.post(`http://localhost:5001/teachers/addRequest `, {
                name, currentSchool, experience, homeAddress, cnic, email, password, dateOfJoining, postedAs, serviceType, dob, contactNumber, initialAppointment, grade, maritalStatus, ethAddress
            });

            if (response) {
                alert("Teacher Updated Successfully, and Send for Approval");
                navigate("/teacher-dashboard");
            }
        } catch (error) {
            alert("Error: " + error.response.data.error);
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
                            className="fa fa-arrow-left text-3xl text-[#165371] "
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
                        <div className="w-full mb-6 md:mb-0 mt-8">
                            <label
                                className="block tracking-wide text-gray-700 text-base font-semibold mb-2"
                                htmlFor="grid-first-name"
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
                        <div className="w-full mb-6 md:mb-0 mt-8">
                            <label
                                className="block tracking-wide text-gray-700 text-base font-semibold mb-2"
                                htmlFor="grid-first-name"
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
                        <div className="w-full mb-6 md:mb-0 mt-8">
                            <label
                                className="block tracking-wide text-gray-700 text-base font-semibold mb-2"
                                htmlFor="grid-first-name"
                            >
                                Date Of Joining <span className="text-[red]">*</span>
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
                        <div className="w-full mb-6 md:mb-0 mt-8">
                            <label
                                className="block tracking-wide text-gray-700 text-base font-semibold mb-2"
                                htmlFor="grid-first-name"
                            >
                                Initial Appointment <span className="text-[red]">*</span>
                            </label>

                            <input
                                className="Name w-full py-2 px-2 border focus:outline-none"
                                required
                                name="initialAppointment"
                                placeholder="Arts Teacher"
                                value={initialAppointment}
                                onChange={(e) => setInitialAppointment(e.target.value)}
                            />
                            <span className="text-xs text-[red]"></span>
                        </div>
                        <div className="w-full mb-6 md:mb-0 mt-8">
                            <label
                                className="block tracking-wide text-gray-700 text-base font-semibold mb-2"
                                htmlFor="grid-first-name"
                            >
                                Posted As <span className="text-[red]">*</span>
                            </label>

                            <input
                                className="Name w-full py-2 px-2 border focus:outline-none"
                                required
                                name="postedAs"
                                placeholder="Teacher"
                                value={postedAs}
                                onChange={(e) => setPostedAs(e.target.value)}
                            />
                            <span className="text-xs text-[red]"></span>
                        </div>
                        <div className="w-full mb-6 md:mb-0 mt-8">
                            <label
                                className="block tracking-wide text-gray-700 text-base font-semibold mb-2"
                                htmlFor="grid-first-name"
                            >
                                Service Type <span className="text-[red]">*</span>
                            </label>

                            <select
                                className="w-full py-2 px-2 border focus:outline-none"
                                required
                                name="serviceType"
                                value={serviceType}
                                onChange={(e) => setServiceType(e.target.value)}
                            >
                                <option value="" disabled>
                                    Choose an option
                                </option>
                                <option value="Regular">Regular</option>
                                <option value="Temporary">Temporary</option>
                            </select>
                            <span className="text-xs text-[red]"></span>
                        </div>
                        <div className="w-full mb-6 md:mb-0 mt-8">
                            <label
                                className="block tracking-wide text-gray-700 text-base font-semibold mb-2"
                                htmlFor="grid-first-name"
                            >
                                Grade <span className="text-[red]">*</span>
                            </label>

                            <input
                                className="Name w-full py-2 px-2 border focus:outline-none"
                                required
                                name="grade"
                                placeholder="16"
                                value={grade}
                                onChange={(e) => setGrade(e.target.value)}
                            />
                            <span className="text-xs text-[red]"></span>
                        </div>
                        <div className="w-full mb-6 md:mb-0 mt-8">
                            <label
                                className="block tracking-wide text-gray-700 text-base font-semibold mb-2"
                                htmlFor="grid-first-name"
                            >
                                Experience <span className="text-[red]">*</span>
                            </label>

                            <input
                                className="Name w-full py-2 px-2 border focus:outline-none"
                                required
                                name="experience"
                                placeholder="12 Years"
                                value={experience}
                                onChange={(e) => setExperience(e.target.value)}
                            />
                            <span className="text-xs text-[red]"></span>
                        </div>
                        <div className="w-full mb-6 md:mb-0 mt-8">
                            <label
                                className="block tracking-wide text-gray-700 text-base font-semibold mb-2"
                                htmlFor="grid-first-name"
                            >
                                CNIC <span className="text-[red]">*</span>
                            </label>

                            <input
                                className={`Name w-full py-2 px-2 border focus:outline-none ${asTeacher ? "bg-gray-200" : ""}`}
                                required
                                name="cnic"
                                readOnly={asTeacher}
                                placeholder="Cnic"
                                value={cnic}
                                onChange={(e) => setCnic(e.target.value)}
                            />
                            <span className="text-xs text-[red]"></span>
                        </div>
                        <div className="w-full mb-6 md:mb-0 mt-8">
                            <label
                                className="block tracking-wide text-gray-700 text-base font-semibold mb-2"
                                htmlFor="grid-first-name"
                            >
                                Date Of Birth <span className="text-[red]">*</span>
                            </label>

                            <input
                                className="Name w-full py-2 px-2 border focus:outline-none"
                                required
                                name="dob"
                                placeholder="24/10/1980"
                                value={dob}
                                onChange={(e) => setDob(e.target.value)}
                            />
                            <span className="text-xs text-[red]"></span>
                        </div>
                        <div className="w-full mb-6 md:mb-0 mt-8">
                            <label
                                className="block tracking-wide text-gray-700 text-base font-semibold mb-2"
                                htmlFor="grid-first-name"
                            >
                                Contact Number <span className="text-[red]">*</span>
                            </label>

                            <input
                                className="Name w-full py-2 px-2 border focus:outline-none"
                                required
                                name="contactNumber"
                                placeholder="+92 333 8978654"
                                value={contactNumber}
                                onChange={(e) => setContactNumber(e.target.value)}
                            />
                            <span className="text-xs text-[red]"></span>
                        </div>
                        <div className="w-full mb-6 md:mb-0 mt-8">
                            <label
                                className="block tracking-wide text-gray-700 text-base font-semibold mb-2"
                                htmlFor="grid-first-name"
                            >
                                Marital Status <span className="text-[red]">*</span>
                            </label>

                            <input
                                className="Name w-full py-2 px-2 border focus:outline-none"
                                required
                                name="maritalStatus"
                                placeholder="Single"
                                value={maritalStatus}
                                onChange={(e) => setMaritalStatus(e.target.value)}
                            />
                            <span className="text-xs text-[red]"></span>
                        </div>
                        <div className="w-full mb-6 md:mb-0 mt-8">
                            <label
                                className="block tracking-wide text-gray-700 text-base font-semibold mb-2"
                                htmlFor="grid-first-name"
                            >
                                Home Address <span className="text-[red]">*</span>
                            </label>

                            <input
                                className="Name w-full py-2 px-2 border focus:outline-none"
                                required
                                name="homeAddress"
                                placeholder="Home Address"
                                value={homeAddress}
                                onChange={(e) => setHomeAddress(e.target.value)}
                            />
                            <span className="text-xs text-[red]"></span>
                        </div>
                        <div className="w-full mb-6 md:mb-0 mt-8">
                            <label
                                className="block tracking-wide text-gray-700 text-base font-semibold mb-2"
                                htmlFor="grid-first-name"
                            >
                                Email <span className="text-[red]">*</span>
                            </label>

                            <input
                                className={`Name w-full py-2 px-2 border focus:outline-none ${asTeacher ? "bg-gray-200" : ""}`}
                                type="email"
                                required
                                readOnly={asTeacher}
                                name="email"
                                placeholder="johndoe@gmail.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <span className="text-xs text-[red]"></span>
                        </div>
                        {!asTeacher && (
                                                    <div className="w-full mb-6 md:mb-0 mt-8">
                            <label
                                className="block tracking-wide text-gray-700 text-base font-semibold mb-2"
                                htmlFor="grid-first-name"
                            >
                                Password <span className="text-[red]">*</span>
                            </label>

                            <div className="flex">
                                <input
                                    className="Name w-full py-2 px-2 border focus:outline-none"
                                    type={showPassword ? "text" : "password"}
                                    required
                                    name="password"
                                    placeholder="********"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <i
                                    className={`fa ${showPassword ? "fa-eye" : "fa-eye-slash"}  px-2 border`}
                                    onClick={() => setShowPassword(!showPassword)}
                                    style={{ cursor: "pointer" }}
                                ></i>
                            </div>
                            <span className="text-xs text-[red]"></span>
                        </div>
                        )}
                        <div className="md:flex justify-between mt-8">
                            <div className="md:w-[49%]">
                                <button
                                    className="md:w-full text-white text-base font-bold bg-[#165371] py-4 px-4"
                                    type="button"
                                    onClick={asTeacher ? handleUpdate : handleSubmit}
                                >
                                    {asTeacher ? "Update" : "Register"}
                                </button>
                            </div>
                            {asTeacher && (
                                <div className="md:w-[49%] mt-4 md:mt-0">
                                    <button
                                        className="md:w-full text-[#165371] text-base font-bold border-2 border-[#165371] py-4 px-4"
                                        type="button"
                                        onClick={goBack}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default TeacherSignup;
