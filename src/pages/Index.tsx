import { motion } from "framer-motion";
import { Heart, Footprints, Flame, Moon } from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import MetricCard from "@/components/dashboard/MetricCard";
import ActivityChart from "@/components/dashboard/ActivityChart";
import HealthOverview from "@/components/dashboard/HealthOverview";
import QuickActions from "@/components/dashboard/QuickActions";
import UpcomingReminders from "@/components/dashboard/UpcomingReminders";
import WaterIntake from "@/components/dashboard/WaterIntake";
import AIInsights from "@/components/dashboard/AIInsights";

const Index = () => {
  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold font-display text-foreground">
            Good morning, John! 👋
          </h1>
          <p className="text-muted-foreground mt-1">
            Here's your health overview for today, January 29th
          </p>
        </motion.div>

        {/* Main Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <MetricCard
            title="Heart Rate"
            value={72}
            unit="bpm"
            change={-2}
            icon={Heart}
            gradient="bg-gradient-heart"
            delay={0}
          />
          <MetricCard
            title="Steps Today"
            value="8,432"
            unit="steps"
            change={12}
            icon={Footprints}
            gradient="bg-gradient-steps"
            delay={0.05}
          />
          <MetricCard
            title="Calories Burned"
            value="1,847"
            unit="kcal"
            change={8}
            icon={Flame}
            gradient="bg-gradient-calories"
            delay={0.1}
          />
          <MetricCard
            title="Sleep"
            value="7.5"
            unit="hrs"
            change={5}
            icon={Moon}
            gradient="bg-gradient-sleep"
            delay={0.15}
          />
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
          <ActivityChart />
          <HealthOverview />
        </div>

        {/* Third Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <WaterIntake />
          <QuickActions />
          <UpcomingReminders />
        </div>

        {/* AI Insights */}
        <div className="grid grid-cols-1 gap-4">
          <AIInsights />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
