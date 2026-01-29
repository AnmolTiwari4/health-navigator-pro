import { motion } from "framer-motion";
import { Clock, Pill, Droplets, Footprints, Bell } from "lucide-react";
import { cn } from "@/lib/utils";

const reminders = [
  {
    id: 1,
    title: "Morning Medication",
    time: "8:00 AM",
    icon: Pill,
    color: "text-health-heart",
    bgColor: "bg-health-heart/10",
    completed: true,
  },
  {
    id: 2,
    title: "Drink Water",
    time: "10:30 AM",
    icon: Droplets,
    color: "text-health-water",
    bgColor: "bg-health-water/10",
    completed: true,
  },
  {
    id: 3,
    title: "Take a Walk",
    time: "2:00 PM",
    icon: Footprints,
    color: "text-health-steps",
    bgColor: "bg-health-steps/10",
    completed: false,
  },
  {
    id: 4,
    title: "Evening Medication",
    time: "8:00 PM",
    icon: Pill,
    color: "text-health-heart",
    bgColor: "bg-health-heart/10",
    completed: false,
  },
];

const UpcomingReminders = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.5 }}
      className="metric-card"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold font-display text-foreground">
          Today's Reminders
        </h3>
        <Bell className="w-5 h-5 text-muted-foreground" />
      </div>

      <div className="space-y-3">
        {reminders.map((reminder, index) => (
          <motion.div
            key={reminder.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, delay: 0.6 + index * 0.05 }}
            className={cn(
              "flex items-center gap-3 p-3 rounded-xl transition-all",
              reminder.completed ? "bg-muted/30 opacity-60" : "bg-muted/50 hover:bg-muted"
            )}
          >
            <div
              className={cn(
                "w-10 h-10 rounded-xl flex items-center justify-center",
                reminder.bgColor
              )}
            >
              <reminder.icon className={cn("w-5 h-5", reminder.color)} />
            </div>

            <div className="flex-1">
              <p
                className={cn(
                  "text-sm font-medium text-foreground",
                  reminder.completed && "line-through"
                )}
              >
                {reminder.title}
              </p>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="w-3 h-3" />
                <span>{reminder.time}</span>
              </div>
            </div>

            <div
              className={cn(
                "w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors",
                reminder.completed
                  ? "border-primary bg-primary"
                  : "border-muted-foreground"
              )}
            >
              {reminder.completed && (
                <svg
                  className="w-3 h-3 text-primary-foreground"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default UpcomingReminders;
