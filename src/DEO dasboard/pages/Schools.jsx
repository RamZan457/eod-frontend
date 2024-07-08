import React, { useEffect, useState } from 'react';
import { Header } from '../components';
import { useStateContext } from '../../contexts/ContextProvider';
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Navbar, Footer, Sidebar, ThemeSettings } from "../components";
import { useNavigate } from 'react-router-dom';
import { isAuthenticated, isDEO } from '../../utilities/auth';
import { addSchool, getAllSchools } from '../../components/api';
import AddSchoolModal from '../components/AddSchoolModal';
import AddVacancyModal from '../components/AddVacancyModal';

const Schools = () => {
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

    const [schools, setSchool] = useState([]);
    const [isSchoolModalOpen, setIsSchoolModalOpen] = useState(false);
    const [isVacancyModalOpen, setIsVacancyModalOpen] = useState(false);

    useEffect(() => {
        if (!isAuthenticated() || !isDEO()) {
            navigate('/deo-signin');
        } else {
            const fetchSchools = async () => {
                try {
                    const schoolsData = await getAllSchools();
                    setSchool(schoolsData);
                } catch (error) {
                    console.error('Error fetching teacher profiles:', error);
                }
            };

            fetchSchools();
        }
        const currentThemeColor = localStorage.getItem("colorMode");
        const currentThemeMode = localStorage.getItem("themeMode");
        if (currentThemeColor && currentThemeMode) {
            setCurrentColor(currentThemeColor);
            setCurrentMode(currentThemeMode);
        }
    }, [isSchoolModalOpen, navigate]);

    const handleAddSchool = async (school) => {
        await addSchool(school);
    };

    return (
        <div className={currentMode === "Dark" ? "dark" : ""}>
            <div className="flex relative dark:bg-main-dark-bg">
                <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
                    <TooltipComponent content="Settings" position="Top">
                        <button
                            type="button"
                            onClick={() => setThemeSettings(true)}
                            style={{ background: currentColor, borderRadius: "50%" }}
                            className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
                        >
                            <FiSettings />
                        </button>
                    </TooltipComponent>
                </div>
                {activeMenu ? (
                    <div className="w-72 fixedsidebar dark:bg-secondary-dark-bg bg-white">
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
                    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
                            <Header category="Page" title="Schools" />
                            <button
                                onClick={() => setIsSchoolModalOpen(true)}
                                className="bg-blue-500 text-white py-2 px-4 rounded-md"
                            >
                                Add School
                            </button>
                            <button
                                onClick={() => setIsVacancyModalOpen(true)}
                                className="bg-green-500 text-white py-2 px-4 rounded-md ml-2"
                            >
                                Add Vacancy
                            </button>
                            {schools.length > 0 ? (
                                <div className="overflow-x-auto">
                                    <table className="min-w-full bg-white dark:bg-secondary-dark-bg text-center">
                                        <thead>
                                            <tr>
                                                <th className="py-2">ID</th>
                                                <th className="py-2">Name</th>
                                                <th className="py-2">CITY</th>
                                                <th className="py-2">Phone</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {schools.map((schools) => (
                                                <tr key={schools._id}>
                                                    <td className="py-2">{schools._id}</td>
                                                    <td className="py-2">{schools.name}</td>
                                                    <td className="py-2">{schools.city}</td>
                                                    <td className="py-2">{schools.contactNumber}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            ) : (
                                <h1 className="text-center">No schools found</h1>
                            ) }
                    </div>
                </div>
                <Footer />
            </div>
            </div>
            <AddSchoolModal
                isOpen={isSchoolModalOpen}
                onClose={() => setIsSchoolModalOpen(false)}
                onAddSchool={handleAddSchool}
            />
            <AddVacancyModal
                isOpen={isVacancyModalOpen}
                onClose={() => setIsVacancyModalOpen(false)}
                schools={schools}
            />
    </div>
);
};

export default Schools;