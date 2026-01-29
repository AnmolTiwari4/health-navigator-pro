import { motion } from "framer-motion";
import { Activity, TrendingUp, Calendar, BarChart3, Download } from "lucide-react";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";
import DashboardLayout from "@/components/layout/DashboardLayout";

const monthlyTrend = [
  { week: "Week 1", health: 75, activity: 68, nutrition: 82 },
  { week: "Week 2", health: 78, activity: 72, nutrition: 79 },
  { week: "Week 3", health: 82, activity: 78, nutrition: 85 },
  { week: "Week 4", health: 85, activity: 82, nutrition: 88 },
];

const radarData = [
  { metric: "Heart", value: 88, fullMark: 100 },
  { metric: "Activity", value: 84, fullMark: 100 },
  { metric: "Sleep", value: 78, fullMark: 100 },
  { metric: "Nutrition", value: 85, fullMark: 100 },
  { metric: "Hydration", value: 75, fullMark: 100 },
  { metric: "Mental", value: 82, fullMark: 100 },
];

const AnalyticsPage = () => {
  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 flex items-center justify-between"
        >
          <div>
            <h1 className="text-3xl font-bold font-display text-foreground flex items-center gap-3">
              <Activity className="w-8 h-8 text-primary" />
              Analytics
            </h1>
            <p className="text-muted-foreground mt-1">
              Comprehensive health data analysis
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-xl font-medium text-sm"
          >
            <Download className="w-4 h-4" />
            Export Report
          </motion.button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          {[
            { label: "Overall Score", value: "82", change: "+5%", icon: Activity },
            { label: "Goals Met", value: "24", change: "+3", icon: TrendingUp },
            { label: "Active Days", value: "26", change: "+2", icon: Calendar },
            { label: "Insights", value: "12", change: "new", icon: BarChart3 },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="metric-card"
            >
              <div className="flex items-center justify-between mb-2">
                <stat.icon className="w-5 h-5 text-primary" />
                <span className="text-xs font-medium text-health-steps">{stat.change}</span>
              </div>
              <span className="text-3xl font-bold font-display">{stat.value}</span>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="metric-card"
          >
            <h3 className="text-lg font-semibold font-display mb-4">Monthly Progress</h3>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={monthlyTrend}>
                  <defs>
                    <linearGradient id="healthGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="activityGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--health-steps))" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="hsl(var(--health-steps))" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="nutritionGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--health-calories))" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="hsl(var(--health-calories))" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis
                    dataKey="week"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                    domain={[60, 100]}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "12px",
                    }}
                  />
                  <Area type="monotone" dataKey="health" stroke="hsl(var(--primary))" strokeWidth={2} fill="url(#healthGrad)" />
                  <Area type="monotone" dataKey="activity" stroke="hsl(var(--health-steps))" strokeWidth={2} fill="url(#activityGrad)" />
                  <Area type="monotone" dataKey="nutrition" stroke="hsl(var(--health-calories))" strokeWidth={2} fill="url(#nutritionGrad)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="flex items-center justify-center gap-6 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary" />
                <span className="text-xs text-muted-foreground">Health</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-health-steps" />
                <span className="text-xs text-muted-foreground">Activity</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-health-calories" />
                <span className="text-xs text-muted-foreground">Nutrition</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="metric-card"
          >
            <h3 className="text-lg font-semibold font-display mb-4">Health Metrics Overview</h3>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={radarData}>
                  <PolarGrid stroke="hsl(var(--border))" />
                  <PolarAngleAxis
                    dataKey="metric"
                    tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                  />
                  <PolarRadiusAxis
                    angle={30}
                    domain={[0, 100]}
                    tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 10 }}
                  />
                  <Radar
                    name="Score"
                    dataKey="value"
                    stroke="hsl(var(--primary))"
                    fill="hsl(var(--primary))"
                    fillOpacity={0.3}
                    strokeWidth={2}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="metric-card"
        >
          <h3 className="text-lg font-semibold font-display mb-4">Key Insights</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                title: "Best Performing",
                metric: "Heart Health",
                value: "88%",
                description: "Your cardiovascular health is excellent. Keep maintaining your exercise routine.",
                color: "text-health-heart",
              },
              {
                title: "Needs Attention",
                metric: "Hydration",
                value: "75%",
                description: "You've been under your water intake goal. Try setting hourly reminders.",
                color: "text-health-water",
              },
              {
                title: "Most Improved",
                metric: "Sleep Quality",
                value: "+15%",
                description: "Your sleep quality has improved significantly this month. Great job!",
                color: "text-health-sleep",
              },
            ].map((insight, i) => (
              <motion.div
                key={insight.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="p-4 rounded-xl bg-muted/30"
              >
                <p className="text-xs text-muted-foreground mb-1">{insight.title}</p>
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-lg font-semibold ${insight.color}`}>{insight.metric}</span>
                  <span className="text-sm font-bold text-foreground">{insight.value}</span>
                </div>
                <p className="text-xs text-muted-foreground">{insight.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  );
};

export default AnalyticsPage;
