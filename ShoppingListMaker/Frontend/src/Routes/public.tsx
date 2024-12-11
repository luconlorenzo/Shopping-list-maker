import { Navigate } from 'react-router-dom';
import { useAuthStore } from '@/store/authStore';


const PublicRoute = ({ children }) => {
    const auth = useAuthStore();

    if (auth.user) {
        return <Navigate to="/" replace />;
    }

    return children; 
};

export default PublicRoute;
