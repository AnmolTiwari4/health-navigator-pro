import { motion } from "framer-motion";
import { Utensils, Apple, Beef, Wheat, Droplet, Plus } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import DashboardLayout from "@/components/layout/DashboardLayout";

const macroData = [
  { name: "Protein", value: 120, color: "hsl(var(--health-heart))" },
  { name: "Carbs", value: 180, color: "hsl(var(--health-calories))" },
  { name: "Fat", value: 65, color: "hsl(var(--health-steps))" },
];

const meals = [
  { name: "Breakfast", time: "8:00 AM", calories: 420, items: "Oatmeal, banana, almond butter" },
  { name: "Lunch", time: "12:30 PM", calories: 680, items: "Grilled chicken salad, quinoa" },
  { name: "Snack", time: "3:00 PM", calories: 150, items: "Greek yogurt, berries" },
  { name: "Dinner", time: "7:00 PM", calories: 597, items: "Salmon, vegetables, rice" },
];

const NutritionPage = () => {
  const totalCalories = 1847;
  const goalCalories = 2200;

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
              <Utensils className="w-8 h-8 text-health-nutrition" />
              Nutrition
            </h1>
            <p className="text-muted-foreground mt-1">
              Track your meals and macronutrients
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-xl font-medium text-sm"
          >
            <Plus className="w-4 h-4" />
            Log Meal
          </motion.button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {[
            { label: "Calories", value: totalCalories, goal: goalCalories, icon: Utensils, color: "bg-gradient-calories" },
            { label: "Protein", value: "120g", goal: "140g", icon: Beef, color: "bg-gradient-heart" },
            { label: "Carbs", value: "180g", goal: "220g", icon: Wheat, color: "bg-gradient-sleep" },
            { label: "Water", value: "6", goal: "8 glasses", icon: Droplet, color: "bg-gradient-water" },
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
                <span className="text-sm text-muted-foreground">/ {stat.goal}</span>
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
            <h3 className="text-lg font-semibold font-display mb-4">Today's Meals</h3>
            <div className="space-y-3">
              {meals.map((meal, i) => (
                <motion.div
                  key={meal.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-calories flex items-center justify-center">
                    <Apple className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-foreground">{meal.name}</h4>
                      <span className="text-sm font-semibold text-foreground">{meal.calories} kcal</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{meal.items}</p>
                    <p className="text-xs text-muted-foreground mt-1">{meal.time}</p>
                  </div>
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
            <h3 className="text-lg font-semibold font-display mb-4 text-center">Macros</h3>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={macroData}
                    innerRadius={50}
                    outerRadius={70}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {macroData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-2">
              {macroData.map((macro) => (
                <div key={macro.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: macro.color }}
                    />
                    <span className="text-sm text-muted-foreground">{macro.name}</span>
                  </div>
                  <span className="text-sm font-medium">{macro.value}g</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default NutritionPage;
