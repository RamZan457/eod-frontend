import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5001/teachers',
});

// Request interceptor to add JWT token to requests
// ...

// Response interceptor to handle authentication errors
// ...

// Function to register a new teacher
export const registerTeacher = async (teacherData) => {
    try {
        const response = await api.post('/register', teacherData);
        return response.data;
    } catch (error) {
        throw new Error('Failed to register teacher');
    }
};

// Function to login a teacher
export const loginTeacher = async (credentials) => {
    try {
        const response = await api.post('/login', credentials);
        return response.data;
    } catch (error) {
        throw new Error('Failed to login teacher');
    }
};

// Function to update a teacher
export const updateTeacher = async (teacherId, teacherData) => {
    try {
        const response = await api.put(`/${teacherId}`, teacherData);
        return response.data;
    } catch (error) {
        throw new Error('Failed to update teacher');
    }
};

// Function to delete a teacher
export const deleteTeacher = async (teacherId, ethAddress) => {
    try {
        const response = await api.delete(`/${teacherId}`, { data: { ethAddress } });
        return response.data;
    } catch (error) {
        throw new Error('Failed to delete teacher');
    }
};

// Function to request a school change
export const requestSchoolChange = async (newSchool) => {
    try {
        const response = await api.post('/requestChange', { newSchool });
        return response.data;
    } catch (error) {
        throw new Error('Failed to request school change');
    }
};

// Function to approve a school change
export const approveSchoolChange = async (teacherId) => {
    try {
        const response = await api.post(`/approveChange/${teacherId}`);
        return response.data;
    } catch (error) {
        throw new Error('Failed to approve school change');
    }
};

// Function to reject a school change
export const rejectSchoolChange = async (teacherId) => {
    try {
        const response = await api.post(`/rejectChange/${teacherId}`);
        return response.data;
    } catch (error) {
        throw new Error('Failed to reject school change');
    }
};

// Function to search for a teacher by CNIC
export const searchTeacherByCNIC = async (cnic) => {
    try {
        const response = await api.get(`/search/${cnic}`);
        return response.data;
    } catch (error) {
        throw new Error('Failed to search for teacher');
    }
};

// Function to get all teachers
export const getAllTeachers = async () => {
    try {
        const response = await api.get('/getTeachers');
        return response.data;
    } catch (error) {
        throw new Error('Failed to get teachers');
    }
};

// Function to add a new school
export const addSchool = async (schoolData) => {
    try {
        const response = await api.post('/addSchool', schoolData);
        return response.data;
    } catch (error) {
        throw new Error('Failed to add school');
    }
};

// Function to update a school
export const updateSchool = async (schoolId, schoolData) => {
    try {
        const response = await api.put(`/updateSchool/${schoolId}`, schoolData);
        return response.data;
    } catch (error) {
        throw new Error('Failed to update school');
    }
};

// Function to delete a school
export const deleteSchool = async (schoolId) => {
    try {
        const response = await api.delete(`/deleteSchool/${schoolId}`);
        return response.data;
    } catch (error) {
        throw new Error('Failed to delete school');
    }
};

// Function to get all schools
export const getAllSchools = async () => {
    try {
        const response = await api.get('/getSchools');
        return response.data;
    } catch (error) {
        throw new Error('Failed to get schools');
    }
};
export const getSchoolChangeRequests = async () => {
    try {
        const response = await api.get('/getSchoolChangeRequests');
        return response.data;
    } catch (error) {
        throw new Error('Failed to get school change requests');
    }
};

export default api;