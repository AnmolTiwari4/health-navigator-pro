import { motion } from "framer-motion";
import HealthRing from "./HealthRing";
import { Sparkles } from "lucide-react";

const HealthOverview = () => {
  const healthScore = 82;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className="metric-card"
    >
      <div className="flex flex-col items-center text-center">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="w-5 h-5 text-primary" />
          <h3 className="text-lg font-semibold font-display text-foreground">
            Health Score
          </h3>
        </div>

        <HealthRing
          percentage={healthScore}
          size={140}
          strokeWidth={12}
          color="url(#healthGradient)"
        >
          <svg width="0" height="0">
            <defs>
              <linearGradient id="healthGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(174, 72%, 40%)" />
                <stop offset="100%" stopColor="hsl(190, 80%, 45%)" />
              </linearGradient>
            </defs>
          </svg>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold font-display text-foreground">
              {healthScore}
            </span>
            <span className="text-xs text-muted-foreground">/ 100</span>
          </div>
        </HealthRing>

        <div className="mt-4 space-y-2 w-full">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Activity</span>
            <span className="font-medium text-foreground">Excellent</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Sleep Quality</span>
            <span className="font-medium text-foreground">Good</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Nutrition</span>
            <span className="font-medium text-foreground">Great</span>
          </div>
        </div>

        <p className="mt-4 text-xs text-muted-foreground">
          Based on your data from the last 7 days
        </p>
      </div>
    </motion.div>
  );
};

export default HealthOverview;
