import { motion } from "framer-motion";
import { Heart, Activity, TrendingUp, Clock } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import DashboardLayout from "@/components/layout/DashboardLayout";
import HealthRing from "@/components/dashboard/HealthRing";

const heartRateData = [
  { time: "6am", rate: 62 },
  { time: "8am", rate: 75 },
  { time: "10am", rate: 82 },
  { time: "12pm", rate: 78 },
  { time: "2pm", rate: 85 },
  { time: "4pm", rate: 72 },
  { time: "6pm", rate: 88 },
  { time: "8pm", rate: 70 },
  { time: "10pm", rate: 65 },
];

const HeartHealth = () => {
  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold font-display text-foreground flex items-center gap-3">
            <Heart className="w-8 h-8 text-health-heart" />
            Heart Health
          </h1>
          <p className="text-muted-foreground mt-1">
            Monitor your cardiovascular health metrics
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {[
            { label: "Current BPM", value: "72", sub: "Resting", icon: Heart },
            { label: "Average Today", value: "76", sub: "bpm", icon: Activity },
            { label: "Max Today", value: "124", sub: "bpm", icon: TrendingUp },
            { label: "Resting Rate", value: "62", sub: "bpm", icon: Clock },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="metric-card"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-heart flex items-center justify-center">
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
            <h3 className="text-lg font-semibold font-display mb-4">
              Heart Rate Throughout the Day
            </h3>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={heartRateData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis
                    dataKey="time"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                    domain={[50, 100]}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "12px",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="rate"
                    stroke="hsl(var(--health-heart))"
                    strokeWidth={3}
                    dot={{ fill: "hsl(var(--health-heart))", strokeWidth: 2 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="metric-card flex flex-col items-center justify-center"
          >
            <h3 className="text-lg font-semibold font-display mb-6">Heart Health Score</h3>
            <HealthRing
              percentage={88}
              size={160}
              strokeWidth={14}
              color="hsl(var(--health-heart))"
            >
              <div className="text-center">
                <span className="text-4xl font-bold font-display">88</span>
                <p className="text-xs text-muted-foreground">Excellent</p>
              </div>
            </HealthRing>
            <p className="mt-6 text-sm text-muted-foreground text-center">
              Your heart health is in excellent condition. Keep up the good work!
            </p>
          </motion.div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default HeartHealth;
