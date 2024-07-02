import React,{useEffect, useState} from 'react';
import Avatar from 'react-avatar';


const UserProfile = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    const storageUser = JSON.parse(localStorage.getItem('teacher'));
    setUser(storageUser);
  }, []);
  return (
    <>
      {user && (
        <div className="bg-white dark:bg-secondary-dark-bg rounded-lg p-6 shadow-md">
          <div className="flex items-center mb-4">
            <Avatar name="Akhter" size="50" round={true} />
            <div>
              <h2 className="text-xl font-bold ml-4">{user.name}</h2>
              <p className="text-gray-600 dark:text-gray-300 ml-4">PST (Arts)</p>
            </div>
          </div>

          <h3 className="text-lg bg-slate-400 font-bold mb-4 text-black-600 dark:text-indigo-400 inline-block rounded-md p-1">
            Personal Information
          </h3>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">CNIC</p>
              <p className="font-semibold">{user.cnic}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">DOB</p>
              <p className="font-semibold">{user.dob}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Contact</p>
              <p className="font-semibold">{user.contactNumber}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
              <p className="font-semibold">{user.email}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Marital Status</p>
              <p className="font-semibold">{user.maritalStatus}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Address</p>
              <p className="font-semibold">{user.homeAddress}</p>
            </div>
          </div>

          <h3 className="text-lg bg-slate-400 font-bold mb-4 text-black-600 dark:text-indigo-400 inline-block rounded-md p-1">
            Professional Information</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Employee ID</p>
              <p className="font-semibold">{user._id}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Service Type/Grade</p>
              <p className="font-semibold">{user.serviceType} / {user.grade}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Current School</p>
              <p className="font-semibold">{user.currentSchool}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Posted As</p>
              <p className="font-semibold">{user.postedAs}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Experience</p>
              <p className="font-semibold">{user.experience}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Date of Joining Current School</p>
              <p className="font-semibold">{user.dateOfJoining}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Initial Appointment</p>
              <p className="font-semibold">{user.initialAppointment}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserProfile;