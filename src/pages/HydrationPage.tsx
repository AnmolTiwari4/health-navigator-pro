import { motion } from "framer-motion";
import { Droplets, Plus, Target, TrendingUp, Clock } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import DashboardLayout from "@/components/layout/DashboardLayout";

const weeklyData = [
  { day: "Mon", glasses: 7 },
  { day: "Tue", glasses: 6 },
  { day: "Wed", glasses: 8 },
  { day: "Thu", glasses: 5 },
  { day: "Fri", glasses: 7 },
  { day: "Sat", glasses: 9 },
  { day: "Sun", glasses: 6 },
];

const HydrationPage = () => {
  const currentIntake = 6;
  const goalIntake = 8;

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold font-display text-foreground flex items-center gap-3">
            <Droplets className="w-8 h-8 text-health-water" />
            Hydration
          </h1>
          <p className="text-muted-foreground mt-1">
            Track your daily water intake
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="metric-card"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-water flex items-center justify-center">
                <Droplets className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm text-muted-foreground">Today</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold font-display">{currentIntake}</span>
              <span className="text-sm text-muted-foreground">/ {goalIntake} glasses</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="metric-card"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-steps flex items-center justify-center">
                <Target className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm text-muted-foreground">Weekly Avg</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold font-display">6.9</span>
              <span className="text-sm text-muted-foreground">glasses/day</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="metric-card"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm text-muted-foreground">Streak</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold font-display">5</span>
              <span className="text-sm text-muted-foreground">days</span>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="metric-card lg:col-span-2"
          >
            <h3 className="text-lg font-semibold font-display mb-4">Weekly Hydration</h3>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={weeklyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                  <XAxis
                    dataKey="day"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                    domain={[0, 10]}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "12px",
                    }}
                  />
                  <Bar
                    dataKey="glasses"
                    fill="hsl(var(--health-water))"
                    radius={[6, 6, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="metric-card"
          >
            <h3 className="text-lg font-semibold font-display mb-4">Quick Log</h3>

            <div className="grid grid-cols-4 gap-2 mb-6">
              {Array.from({ length: goalIntake }).map((_, i) => (
                <motion.button
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.2, delay: 0.5 + i * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`aspect-square rounded-xl flex items-center justify-center transition-colors ${
                    i < currentIntake
                      ? "bg-health-water text-white"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  <Droplets className="w-5 h-5" />
                </motion.button>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-water text-white rounded-xl font-medium text-sm"
            >
              <Plus className="w-4 h-4" />
              Add Glass
            </motion.button>

            <div className="mt-6 p-4 rounded-xl bg-muted/50">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-medium text-foreground">Reminder</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Next reminder in 45 minutes. Staying hydrated improves energy and focus!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default HydrationPage;
