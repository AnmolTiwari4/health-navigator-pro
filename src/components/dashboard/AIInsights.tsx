import { motion } from "framer-motion";
import { Sparkles, TrendingUp, AlertCircle, Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";

const insights = [
  {
    id: 1,
    type: "positive",
    icon: TrendingUp,
    title: "Great Sleep Pattern!",
    description:
      "Your sleep quality has improved by 15% this week. Keep up the consistent bedtime routine.",
    color: "text-health-steps",
    bgColor: "bg-health-steps/10",
  },
  {
    id: 2,
    type: "warning",
    icon: AlertCircle,
    title: "Hydration Alert",
    description:
      "You've been under your water intake goal for 3 days. Try setting hourly reminders.",
    color: "text-health-calories",
    bgColor: "bg-health-calories/10",
  },
  {
    id: 3,
    type: "tip",
    icon: Lightbulb,
    title: "Activity Suggestion",
    description:
      "A 15-minute walk after lunch can help reduce afternoon fatigue and improve digestion.",
    color: "text-health-mental",
    bgColor: "bg-health-mental/10",
  },
];

const AIInsights = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.45 }}
      className="metric-card col-span-2"
    >
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
          <Sparkles className="w-4 h-4 text-primary-foreground" />
        </div>
        <div>
          <h3 className="text-lg font-semibold font-display text-foreground">
            AI Health Insights
          </h3>
          <p className="text-xs text-muted-foreground">
            Personalized recommendations based on your data
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {insights.map((insight, index) => (
          <motion.div
            key={insight.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
            className="p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors"
          >
            <div
              className={cn(
                "w-9 h-9 rounded-lg flex items-center justify-center mb-3",
                insight.bgColor
              )}
            >
              <insight.icon className={cn("w-5 h-5", insight.color)} />
            </div>

            <h4 className="text-sm font-semibold text-foreground mb-1">
              {insight.title}
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {insight.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default AIInsights;
