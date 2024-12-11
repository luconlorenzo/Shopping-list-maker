import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import ObjectPage from "./pages/ObjectsPage";
import ScrollToTop from "./lib/ScrollToTop";
import { ThemeProvider } from "./components/ThemeProvider";
import LoginPage from "./pages/LoginPage";
import { useAuthStore } from "./store/authStore";
import { useEffect, useState } from "react";
import { Toaster } from "./components/ui/toaster";
import ListPage from "./pages/ListPage";
import ProtectedRoute from "./Routes/protected.tsx";
import PublicRoute from "./Routes/public.tsx";


function App() {
  const auth = useAuthStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        await auth.fetchUser();
      } catch (error) {
        console.error("Failed to fetch user:", error);
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();
  }, []);

  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <ScrollToTop>
        <Header />
        <Routes>
          <Route path="/login" element={<LoginPage />} />

          <Route
            path="/"
            element={
              <ProtectedRoute>
                <ListPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/:id"
            element={
              <ProtectedRoute>
                <ObjectPage />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Footer />
        <Toaster />
      </ScrollToTop>
    </ThemeProvider>
  );
}

export default App
