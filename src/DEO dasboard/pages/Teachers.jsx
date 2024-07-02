import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Header } from '../components';
import { useStateContext } from '../../contexts/ContextProvider';
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Navbar, Footer, Sidebar, ThemeSettings } from "../components";
import { getAllTeachers } from '../../components/api';
import { Link, useNavigate } from 'react-router-dom';
import { isAuthenticated, isDEO } from '../../utilities/auth';

const Teachers = () => {
    const navigate = useNavigate();
    const {
        setCurrentColor,
        setCurrentMode,
        currentMode,
        activeMenu,
        currentColor,
        themeSettings,
        setThemeSettings,
    } = useStateContext();

    useEffect(() => {
        if (!isAuthenticated() || !isDEO()) {
            navigate('/deo-signin');
        }
        const currentThemeColor = localStorage.getItem("colorMode");
        const currentThemeMode = localStorage.getItem("themeMode");
        if (currentThemeColor && currentThemeMode) {
            setCurrentColor(currentThemeColor);
            setCurrentMode(currentThemeMode);
        }
    }, []);

    const [teachers, setTeachers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchTeacherProfiles = async () => {
            try {
                const teacherData = await getAllTeachers();
                setTeachers(teacherData);
            } catch (error) {
                console.error('Error fetching teacher profiles:', error);
            }
        };

        fetchTeacherProfiles();
    }, []);

    const filteredTeachers = teachers.filter(
        (teacher) =>
            teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            teacher.cnic.includes(searchTerm)
    );

    return (
        <div className={currentMode === "Dark" ? "dark" : ""}>
            <div className="flex relative dark:bg-main-dark-bg">
                <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
                    <TooltipComponent content="Settings" position="Top">
                        <button type="button"
                            onClick={() => setThemeSettings(true)}
                            style={{ background: currentColor, borderRadius: "50%" }}
                            className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
                        >
                            <FiSettings />
                        </button>
                    </TooltipComponent>
                </div>
                {activeMenu ? (
                    <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
                        <Sidebar />
                    </div>
                ) : (
                    <div className="w-0 dark:bg-secondary-dark-bg">
                        <Sidebar />
                    </div>
                )}
                <div
                    className={
                        activeMenu
                            ? "dark:bg-main-dark-bg bg-main-bg min-h-screen md:ml-72 w-full"
                            : "bg-main-bg dark:bg-main-dark-bg w-full min-h-screen flex-2"
                    }
                >
                    <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
                        <Navbar />
                    </div>
                    <div>
                        {themeSettings && <ThemeSettings />}
                        <div className="mb-4 mt-6 max-w-[400px] mx-auto">
                            <label htmlFor="search" className="text-md font-bold text-[#555] mt-4 mb-4">
                                Search Teacher
                            </label>
                            <input
                                id="search"
                                type="text"
                                placeholder="Search by name or CNIC"
                                className="p-2 border rounded-md w-full"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
                            <Header category="Page" title="Teachers" />
                            <Link to="/teacher-signup" className="bg-green-500 text-white px-4 py-2 rounded m-2">
                                Add Another Teacher
                            </Link>
                            <div className="overflow-x-auto">
                                <table className="min-w-full bg-white dark:bg-secondary-dark-bg">
                                    <thead>
                                        <tr>
                                            <th className="py-2">ID</th>
                                            <th className="py-2">Name</th>
                                            <th className="py-2">CNIC</th>
                                            <th className="py-2">Email</th>
                                            <th className="py-2">Phone</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredTeachers.map((teacher) => (
                                            <tr key={teacher._id}>
                                                <td className="py-2">{teacher._id}</td>
                                                <td className="py-2">{teacher.name}</td>
                                                <td className="py-2">{teacher.cnic}</td>
                                                <td className="py-2">{teacher.email}</td>
                                                <td className="py-2">{teacher.contactNumber}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default Teachers;