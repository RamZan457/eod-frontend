

import React, { useState } from 'react';

const AddSchoolModal = ({ isOpen, onClose, onAddSchool }) => {
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await onAddSchool({ name, city, contactNumber });
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
            onClose();
        }, 2000);
        setName('');    
        setCity('');
        setContactNumber('');
        
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-96">
                <h2 className="text-2xl font-bold mb-4">Add School</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                            City
                        </label>
                        <input
                            type="text"
                            id="city"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700">
                            Contact Number
                        </label>
                        <input
                            type="text"
                            id="contactNumber"
                            value={contactNumber}
                            onChange={(e) => setContactNumber(e.target.value)}
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
                        School added successfully!
                    </div>
                )}
            </div>
        </div>
    );
};

export default AddSchoolModal;
