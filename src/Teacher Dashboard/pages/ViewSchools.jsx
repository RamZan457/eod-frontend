import React, {useEffect, useState} from 'react';

import { Header } from '../components';
import { useStateContext } from '../../contexts/ContextProvider';
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Navbar, Footer, Sidebar, ThemeSettings } from "../components";
import { isAuthenticated, isTeacher } from '../../utilities/auth';
import { useNavigate } from 'react-router-dom';
import { getAllSchools } from '../../components/api';

const ViewSchools = () => {
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

  const [school, setSchool] = useState([]);

  useEffect(() => {
    if (!isAuthenticated() || !isTeacher()) {
      navigate('/teacher-signin');
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
  }, []);

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
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
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
                ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  "
                : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
            }
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Navbar />
            </div>
            <div>
              {themeSettings && <ThemeSettings />}
              <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
              <Header category="Page" title="Schools" />
              {school.length > 0 ? (
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
                      {school.map((school) => (
                        <tr key={school._id}>
                          <td className="py-2">{school._id}</td>
                          <td className="py-2">{school.name}</td>
                          <td className="py-2">{school.city}</td>
                          <td className="py-2">{school.contactNumber}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <h1 className="text-center">No schools found</h1>
              )}
            </div>
              
            </div>
            <Footer />
          </div>
        </div>
    </div>
    
  );
};

export default ViewSchools;



