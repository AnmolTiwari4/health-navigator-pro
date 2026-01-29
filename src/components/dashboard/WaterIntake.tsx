import { motion } from "framer-motion";
import { Droplets, Plus } from "lucide-react";

const WaterIntake = () => {
  const currentIntake = 6;
  const goalIntake = 8;
  const percentage = (currentIntake / goalIntake) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.35 }}
      className="metric-card"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-water flex items-center justify-center">
            <Droplets className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground">
              Water Intake
            </h3>
            <p className="text-xs text-muted-foreground">Daily Goal</p>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-8 h-8 rounded-lg bg-health-water/10 hover:bg-health-water/20 flex items-center justify-center text-health-water transition-colors"
        >
          <Plus className="w-4 h-4" />
        </motion.button>
      </div>

      <div className="space-y-3">
        <div className="flex items-baseline gap-1">
          <span className="text-3xl font-bold font-display text-foreground">
            {currentIntake}
          </span>
          <span className="text-lg text-muted-foreground">/ {goalIntake}</span>
          <span className="text-sm text-muted-foreground ml-1">glasses</span>
        </div>

        <div className="relative h-3 bg-muted rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="absolute inset-y-0 left-0 bg-gradient-water rounded-full"
          />
        </div>

        <div className="flex justify-between">
          {Array.from({ length: goalIntake }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.2, delay: 0.6 + i * 0.05 }}
              className={`w-6 h-8 rounded-md flex items-center justify-center ${
                i < currentIntake
                  ? "bg-health-water/20 text-health-water"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              <Droplets className="w-3 h-3" />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default WaterIntake;
