import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
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
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;