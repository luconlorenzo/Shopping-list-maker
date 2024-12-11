import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

const ProtectedRoute = ({ children }) => {
  const auth = useAuthStore();

  if (!auth.user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
