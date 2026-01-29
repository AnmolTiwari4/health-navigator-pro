import { motion } from "framer-motion";
import { Plus, Droplets, Utensils, Moon, Pill, Dumbbell } from "lucide-react";
import { cn } from "@/lib/utils";

const actions = [
  { icon: Droplets, label: "Log Water", color: "bg-gradient-water" },
  { icon: Utensils, label: "Log Meal", color: "bg-gradient-calories" },
  { icon: Moon, label: "Log Sleep", color: "bg-gradient-sleep" },
  { icon: Pill, label: "Take Meds", color: "bg-health-heart" },
  { icon: Dumbbell, label: "Log Workout", color: "bg-gradient-steps" },
];

const QuickActions = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.4 }}
      className="metric-card"
    >
      <h3 className="text-lg font-semibold font-display text-foreground mb-4">
        Quick Actions
      </h3>

      <div className="grid grid-cols-3 gap-3">
        {actions.map((action, index) => (
          <motion.button
            key={action.label}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.5 + index * 0.05 }}
            className="flex flex-col items-center gap-2 p-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
          >
            <div
              className={cn(
                "w-10 h-10 rounded-xl flex items-center justify-center text-white",
                action.color
              )}
            >
              <action.icon className="w-5 h-5" />
            </div>
            <span className="text-xs text-muted-foreground font-medium">
              {action.label}
            </span>
          </motion.button>
        ))}

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.75 }}
          className="flex flex-col items-center gap-2 p-3 rounded-xl border-2 border-dashed border-border hover:border-primary/50 transition-colors"
        >
          <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-muted text-muted-foreground">
            <Plus className="w-5 h-5" />
          </div>
          <span className="text-xs text-muted-foreground font-medium">Add More</span>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default QuickActions;
