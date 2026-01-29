import { motion } from "framer-motion";
import { Brain, Smile, Frown, Meh, Heart, Sparkles, Calendar } from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import HealthRing from "@/components/dashboard/HealthRing";

const moodData = [
  { day: "Mon", mood: 4, emoji: "😊" },
  { day: "Tue", mood: 3, emoji: "😐" },
  { day: "Wed", mood: 5, emoji: "😄" },
  { day: "Thu", mood: 4, emoji: "😊" },
  { day: "Fri", mood: 2, emoji: "😔" },
  { day: "Sat", mood: 5, emoji: "😄" },
  { day: "Sun", mood: 4, emoji: "😊" },
];

const activities = [
  { name: "Meditation", duration: "15 min", completed: true, icon: Brain },
  { name: "Journaling", duration: "10 min", completed: true, icon: Heart },
  { name: "Deep Breathing", duration: "5 min", completed: false, icon: Sparkles },
];

const MentalHealthPage = () => {
  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold font-display text-foreground flex items-center gap-3">
            <Brain className="w-8 h-8 text-health-mental" />
            Mental Health
          </h1>
          <p className="text-muted-foreground mt-1">
            Track your mood and mental wellness activities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="metric-card"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-sleep flex items-center justify-center">
                <Smile className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm text-muted-foreground">Today's Mood</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl">😊</span>
              <span className="text-lg font-medium text-foreground">Good</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="metric-card"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm text-muted-foreground">Mindful Minutes</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold font-display">25</span>
              <span className="text-sm text-muted-foreground">today</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="metric-card"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-steps flex items-center justify-center">
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm text-muted-foreground">Streak</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold font-display">14</span>
              <span className="text-sm text-muted-foreground">days</span>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="metric-card lg:col-span-2"
          >
            <h3 className="text-lg font-semibold font-display mb-4">Weekly Mood</h3>

            <div className="flex items-end justify-between h-48 px-4">
              {moodData.map((day, i) => (
                <motion.div
                  key={day.day}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.05 }}
                  className="flex flex-col items-center gap-2"
                >
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${day.mood * 30}px` }}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.05 }}
                    className="w-10 rounded-t-lg bg-gradient-sleep"
                  />
                  <span className="text-2xl">{day.emoji}</span>
                  <span className="text-xs text-muted-foreground">{day.day}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="metric-card"
          >
            <h3 className="text-lg font-semibold font-display mb-4">Log Your Mood</h3>

            <div className="flex justify-center gap-4 mb-6">
              {[
                { icon: Frown, label: "Bad", color: "text-health-heart hover:bg-health-heart/10" },
                { icon: Meh, label: "Okay", color: "text-health-calories hover:bg-health-calories/10" },
                { icon: Smile, label: "Good", color: "text-health-steps hover:bg-health-steps/10" },
              ].map((mood) => (
                <motion.button
                  key={mood.label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-4 rounded-xl transition-colors ${mood.color}`}
                >
                  <mood.icon className="w-8 h-8" />
                </motion.button>
              ))}
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-medium text-foreground">Today's Activities</h4>
              {activities.map((activity, i) => (
                <motion.div
                  key={activity.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className={`flex items-center gap-3 p-3 rounded-xl ${
                    activity.completed ? "bg-muted/30" : "bg-muted/50"
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    activity.completed ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"
                  }`}>
                    <activity.icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <p className={`text-sm font-medium ${activity.completed ? "line-through text-muted-foreground" : "text-foreground"}`}>
                      {activity.name}
                    </p>
                    <p className="text-xs text-muted-foreground">{activity.duration}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default MentalHealthPage;
