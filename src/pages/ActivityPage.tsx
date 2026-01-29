import { motion } from "framer-motion";
import { Footprints, Flame, Timer, MapPin, Trophy } from "lucide-react";
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
import HealthRing from "@/components/dashboard/HealthRing";

const weeklyData = [
  { day: "Mon", steps: 6200, goal: 10000 },
  { day: "Tue", steps: 8500, goal: 10000 },
  { day: "Wed", steps: 7800, goal: 10000 },
  { day: "Thu", steps: 9200, goal: 10000 },
  { day: "Fri", steps: 6800, goal: 10000 },
  { day: "Sat", steps: 11500, goal: 10000 },
  { day: "Sun", steps: 8432, goal: 10000 },
];

const ActivityPage = () => {
  const stepsProgress = (8432 / 10000) * 100;

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold font-display text-foreground flex items-center gap-3">
            <Footprints className="w-8 h-8 text-health-steps" />
            Activity Tracking
          </h1>
          <p className="text-muted-foreground mt-1">
            Track your daily movement and exercise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {[
            { label: "Steps Today", value: "8,432", sub: "/ 10,000", icon: Footprints, color: "bg-gradient-steps" },
            { label: "Calories", value: "1,847", sub: "kcal burned", icon: Flame, color: "bg-gradient-calories" },
            { label: "Active Time", value: "2h 34m", sub: "today", icon: Timer, color: "bg-gradient-primary" },
            { label: "Distance", value: "6.2", sub: "km", icon: MapPin, color: "bg-gradient-sleep" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="metric-card"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-10 h-10 rounded-xl ${stat.color} flex items-center justify-center`}>
                  <stat.icon className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm text-muted-foreground">{stat.label}</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold font-display">{stat.value}</span>
                <span className="text-sm text-muted-foreground">{stat.sub}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="metric-card lg:col-span-2"
          >
            <h3 className="text-lg font-semibold font-display mb-4">Weekly Steps</h3>
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
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "12px",
                    }}
                  />
                  <Bar
                    dataKey="steps"
                    fill="hsl(var(--health-steps))"
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
            className="metric-card flex flex-col items-center"
          >
            <h3 className="text-lg font-semibold font-display mb-6">Today's Progress</h3>
            <HealthRing
              percentage={stepsProgress}
              size={160}
              strokeWidth={14}
              color="hsl(var(--health-steps))"
            >
              <div className="text-center">
                <span className="text-3xl font-bold font-display">84%</span>
                <p className="text-xs text-muted-foreground">of goal</p>
              </div>
            </HealthRing>

            <div className="mt-6 w-full space-y-3">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/50">
                <Trophy className="w-5 h-5 text-health-calories" />
                <div>
                  <p className="text-sm font-medium">Weekly Streak</p>
                  <p className="text-xs text-muted-foreground">5 days in a row!</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ActivityPage;
