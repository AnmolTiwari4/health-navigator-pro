import { motion } from "framer-motion";
import { Moon, Sun, Clock, Zap, TrendingUp } from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import DashboardLayout from "@/components/layout/DashboardLayout";

const sleepData = [
  { day: "Mon", hours: 7.5, quality: 85 },
  { day: "Tue", hours: 6.8, quality: 72 },
  { day: "Wed", hours: 8.2, quality: 92 },
  { day: "Thu", hours: 7.0, quality: 78 },
  { day: "Fri", hours: 6.5, quality: 68 },
  { day: "Sat", hours: 9.0, quality: 95 },
  { day: "Sun", hours: 7.5, quality: 88 },
];

const sleepStages = [
  { name: "Deep Sleep", duration: "1h 45m", percentage: 23, color: "bg-health-sleep" },
  { name: "REM Sleep", duration: "1h 30m", percentage: 20, color: "bg-health-mental" },
  { name: "Light Sleep", duration: "4h 15m", percentage: 57, color: "bg-health-water" },
];

const SleepPage = () => {
  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold font-display text-foreground flex items-center gap-3">
            <Moon className="w-8 h-8 text-health-sleep" />
            Sleep Tracking
          </h1>
          <p className="text-muted-foreground mt-1">
            Monitor your sleep patterns and quality
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {[
            { label: "Last Night", value: "7h 30m", sub: "duration", icon: Moon, color: "bg-gradient-sleep" },
            { label: "Sleep Quality", value: "88%", sub: "score", icon: Zap, color: "bg-gradient-primary" },
            { label: "Bedtime", value: "10:30", sub: "PM", icon: Clock, color: "bg-gradient-heart" },
            { label: "Wake Time", value: "6:00", sub: "AM", icon: Sun, color: "bg-gradient-calories" },
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
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold font-display">Weekly Sleep Pattern</h3>
              <div className="flex items-center gap-1 text-sm text-health-steps">
                <TrendingUp className="w-4 h-4" />
                <span>+8% vs last week</span>
              </div>
            </div>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={sleepData}>
                  <defs>
                    <linearGradient id="sleepGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(245, 60%, 60%)" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="hsl(245, 60%, 60%)" stopOpacity={0} />
                    </linearGradient>
                  </defs>
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
                    domain={[0, 12]}
                    tickFormatter={(v) => `${v}h`}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "12px",
                    }}
                    formatter={(value: number) => [`${value} hours`, "Sleep"]}
                  />
                  <Area
                    type="monotone"
                    dataKey="hours"
                    stroke="hsl(var(--health-sleep))"
                    strokeWidth={3}
                    fill="url(#sleepGradient)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="metric-card"
          >
            <h3 className="text-lg font-semibold font-display mb-4">Sleep Stages</h3>
            <p className="text-sm text-muted-foreground mb-6">Last Night</p>

            <div className="space-y-4">
              {sleepStages.map((stage, i) => (
                <motion.div
                  key={stage.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-foreground">{stage.name}</span>
                    <span className="text-sm font-medium text-foreground">{stage.duration}</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${stage.percentage}%` }}
                      transition={{ duration: 1, delay: 0.6 + i * 0.1 }}
                      className={`h-full rounded-full ${stage.color}`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-xl bg-muted/50">
              <p className="text-sm font-medium text-foreground mb-1">Sleep Score: 88/100</p>
              <p className="text-xs text-muted-foreground">
                Your sleep quality is excellent. Keep maintaining your bedtime routine.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default SleepPage;
