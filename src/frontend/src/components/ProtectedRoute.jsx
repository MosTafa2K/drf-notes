import { Navigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import api from '../api';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../constants';
import { useState, useEffect } from 'react';


function ProtectedRoute({ children }) {
    const [isAtuhorized, setIsAuthorized] = useState(null);
    useEffect(() => {
        auth().catch(() => setIsAuthorized(false))
    }, [])

    const refreshToken = async () => {
        const refreshToken = localStorage.getItem(REFRESH_TOKEN);
        try {
            const res = await api.post('/api/token/refresh/', { refresh: refreshToken });
            if (res.status === 200) {
                const { access } = res.data;
                localStorage.setItem(ACCESS_TOKEN, access);
                setIsAuthorized(true);
            } else {
                setIsAuthorized(false);
            }
        } catch (error) {
            console.log(error);
            setIsAuthorized(false)
        }
    }

    const auth = async () => {
        const token = localStorage.getItem(ACCESS_TOKEN);
        if (!token) {
            setIsAuthorized(false)
            return
        }

        const decodedToken = jwtDecode(token);
        const tokenExpiration = decodedToken.exp
        const now = Date.now() / 1000 // Convert to seconds

        if (tokenExpiration < now) {
            await refreshToken()
        } else {
            setIsAuthorized(true)
        }
    }

    if (isAtuhorized === null) {
        return <div>Loading...</div>
    }

    return isAtuhorized ? children : <Navigate to="/login" />;
}
