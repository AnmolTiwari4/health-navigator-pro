import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", steps: 6200, calories: 1800, active: 45 },
  { day: "Tue", steps: 8500, calories: 2200, active: 62 },
  { day: "Wed", steps: 7800, calories: 2000, active: 55 },
  { day: "Thu", steps: 9200, calories: 2400, active: 72 },
  { day: "Fri", steps: 6800, calories: 1900, active: 48 },
  { day: "Sat", steps: 11500, calories: 2800, active: 85 },
  { day: "Sun", steps: 5400, calories: 1600, active: 38 },
];

const ActivityChart = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.3 }}
      className="metric-card col-span-2"
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold font-display text-foreground">
            Weekly Activity
          </h3>
          <p className="text-sm text-muted-foreground">
            Your activity overview for this week
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-gradient-steps" />
            <span className="text-xs text-muted-foreground">Steps</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-gradient-calories" />
            <span className="text-xs text-muted-foreground">Calories</span>
          </div>
        </div>
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="stepsGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(174, 72%, 45%)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="hsl(174, 72%, 45%)" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="caloriesGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(25, 95%, 55%)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="hsl(25, 95%, 55%)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="hsl(var(--border))"
              vertical={false}
            />
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
                boxShadow: "var(--shadow-lg)",
              }}
              labelStyle={{ color: "hsl(var(--foreground))" }}
            />
            <Area
              type="monotone"
              dataKey="steps"
              stroke="hsl(174, 72%, 45%)"
              strokeWidth={2}
              fill="url(#stepsGradient)"
            />
            <Area
              type="monotone"
              dataKey="calories"
              stroke="hsl(25, 95%, 55%)"
              strokeWidth={2}
              fill="url(#caloriesGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default ActivityChart;
