import React, { useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import api from '../components/api';


const Request = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        schoolName: '',
        experience: '',
        city: '',
        cnic: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Make a POST request to the backend endpoint
            const response = await api.post('/teachers/transfer-request', formData);

            // Handle the response from the backend
            console.log('Transfer request submitted successfully', response.data);

            // Reset form after submission
            setFormData({
                fullName: '',
                schoolName: '',
                experience: '',
                city: '',
                cnic: '',
                email: '',
                message: ''
            });
        } catch (error) {
            // Handle error
            console.error('Failed to submit transfer request', error);
        }
    };

    return (
        <>
            <Navbar />
            <div className="max-w-md mx-auto">
                <h2 className="text-2xl font-bold mb-12 mt-12 text-center text-[#165371]">Employee Transfer Request</h2>
                <form onSubmit={handleSubmit} className='shadow-2xl p-12 mb-8'>
                    <div className="mb-4">
                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
                        <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} className="mt-1 p-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="schoolName" className="block text-sm font-medium text-gray-700">School Name</label>
                        <input type="text" id="schoolName" name="schoolName" value={formData.schoolName} onChange={handleChange} className="mt-1 p-3  focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="experience" className="block text-sm font-medium text-gray-700">Experience (in years)</label>
                        <input type="number" id="experience" name="experience" value={formData.experience} onChange={handleChange} className="mt-1 p-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                        <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} className="mt-1 p-3  focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="cnic" className="block text-sm font-medium text-gray-700">CNIC</label>
                        <input type="text" id="cnic" name="cnic" value={formData.cnic} onChange={handleChange} className="mt-1 p-3  focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 p-3  focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Reason for Migration</label>
                        <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="4" className="mt-1 p-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"></textarea>
                    </div>
                    <div className="mt-4">
                        <button type="submit" className="mb-12 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#165371] hover:bg-[#165371] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:[#165371]">
                            Submit Request
                        </button>
                    </div>
                </form>
            </div>

            <Footer />
        </>
    );
};

export default Request;