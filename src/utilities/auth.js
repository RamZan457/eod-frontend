// Authentication utilities

const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    const teacher = localStorage.getItem('teacher');
    if (token && teacher) {
        return true;
    }
    return false;
};

const isTeacher = () => {
    const teacher = localStorage.getItem('teacher');
    if (teacher && JSON.parse(teacher).role === 'teacher') {
        return true;
    } else{
        return false;
    }
};

const isDEO = () => {
    const teacher = localStorage.getItem('teacher');
    if (teacher && JSON.parse(teacher).role === 'deo') {
        return true;
    } else {
        return false;
    }
};

const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('teacher');
    window.location.href= "/"
}


export { isAuthenticated,handleLogout, isTeacher, isDEO };