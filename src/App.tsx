import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import HeartHealth from "./pages/HeartHealth";
import ActivityPage from "./pages/ActivityPage";
import NutritionPage from "./pages/NutritionPage";
import MedicationsPage from "./pages/MedicationsPage";
import SleepPage from "./pages/SleepPage";
import HydrationPage from "./pages/HydrationPage";
import MentalHealthPage from "./pages/MentalHealthPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
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
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
