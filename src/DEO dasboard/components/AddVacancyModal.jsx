import React, { useState } from 'react';
import { addVacancy } from '../../components/api';

const AddVacancyModal = ({ isOpen, onClose, schools }) => {
    const [selectedSchool, setSelectedSchool] = useState('');
    const [postSubject, setPostSubject] = useState('');
    const [grade, setGrade] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            const vacancyData = {
                schoolId: selectedSchool,
                postSubject,
                grade,
            };
        
            await addVacancy(vacancyData)
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
                onClose();
            }, 2000);
            setSelectedSchool('');
            setPostSubject('');
            setGrade('');
            
        } catch (error) {
            console.error('Error adding vacancy:', error);
        }

    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-96">
                <h2 className="text-2xl font-bold mb-4">Add Vacancy</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="school" className="block text-sm font-medium text-gray-700">
                            School
                        </label>
                        <select
                            id="school"
                            value={selectedSchool}
                            onChange={(e) => setSelectedSchool(e.target.value)}
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        >
                            <option value="">Select a school</option>
                            {schools.map((school, index) => (
                                <option key={index} value={school._id}>
                                    {school.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="postSubject" className="block text-sm font-medium text-gray-700">
                            Post Subject
                        </label>
                        <input
                            type="text"
                            id="postSubject"
                            value={postSubject}
                            onChange={(e) => setPostSubject(e.target.value)}
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="grade" className="block text-sm font-medium text-gray-700">
                            Grade
                        </label>
                        <input
                            type="text"
                            id="grade"
                            value={grade}
                            onChange={(e) => setGrade(e.target.value)}
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="button"
                            onClick={onClose}
                            className="bg-gray-500 text-white py-2 px-4 rounded-md mr-2"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-indigo-500 text-white py-2 px-4 rounded-md"
                        >
                            Add
                        </button>
                    </div>
                </form>
                {showAlert && (
                    <div className="mt-4 p-2 bg-green-200 text-green-800 rounded-md">
                        Vacancy added successfully!
                    </div>
                )}
            </div>
        </div>
    );
};

export default AddVacancyModal;
