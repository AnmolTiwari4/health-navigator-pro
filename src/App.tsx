import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import { AuthProvider } from "@/contexts/AuthContext";

// ✅ IMPORTING ALL YOUR ORIGINAL PAGES
import Index from "@/pages/Index";
import AuthPage from "@/pages/AuthPage";
import HeartHealth from "@/pages/HeartHealth";
import ActivityPage from "@/pages/ActivityPage";
import NutritionPage from "@/pages/NutritionPage";
import MedicationsPage from "@/pages/MedicationsPage";
import SleepPage from "@/pages/SleepPage";
import HydrationPage from "@/pages/HydrationPage";
import MentalHealthPage from "@/pages/MentalHealthPage";
import AnalyticsPage from "@/pages/AnalyticsPage";
import ProfilePage from "@/pages/ProfilePage"; // Added this!
import NotFound from "@/pages/NotFound";       // Added this!
=======
import Index from "./pages/Index";
import HeartHealth from "./pages/HeartHealth";
import ActivityPage from "./pages/ActivityPage";
import NutritionPage from "./pages/NutritionPage";
import MedicationsPage from "./pages/MedicationsPage";
import SleepPage from "./pages/SleepPage";
import HydrationPage from "./pages/HydrationPage";
import MentalHealthPage from "./pages/MentalHealthPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import AuthPage from "./pages/AuthPage";
import NotFound from "./pages/NotFound";
import ProfilePage from "./pages/ProfilePage";

>>>>>>> a66d32426c554a0d9380557ccf4f4c5ec76dacc8

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
<<<<<<< HEAD
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            {/* Main Dashboard */}
            <Route path="/" element={<Index />} />

            {/* Authentication */}
            <Route path="/auth" element={<AuthPage />} />

            {/* ✅ YOUR FRIEND'S UI PAGES RESTORED */}
            <Route path="/heart" element={<HeartHealth />} />
            <Route path="/activity" element={<ActivityPage />} />
            <Route path="/nutrition" element={<NutritionPage />} />
            <Route path="/medications" element={<MedicationsPage />} />
            <Route path="/sleep" element={<SleepPage />} />
            <Route path="/hydration" element={<HydrationPage />} />
            <Route path="/mental" element={<MentalHealthPage />} />
            <Route path="/analytics" element={<AnalyticsPage />} />
            <Route path="/profile" element={<ProfilePage />} />

            {/* 404 Page (Better than just redirecting) */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
=======
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/heart" element={<HeartHealth />} />
          <Route path="/activity" element={<ActivityPage />} />
          <Route path="/nutrition" element={<NutritionPage />} />
          <Route path="/medications" element={<MedicationsPage />} />
          <Route path="/sleep" element={<SleepPage />} />
          <Route path="/hydration" element={<HydrationPage />} />
          <Route path="/mental" element={<MentalHealthPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
>>>>>>> a66d32426c554a0d9380557ccf4f4c5ec76dacc8
    </TooltipProvider>
  </QueryClientProvider>
);

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> a66d32426c554a0d9380557ccf4f4c5ec76dacc8
