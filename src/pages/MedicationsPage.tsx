import { motion } from "framer-motion";
import { Pill, Clock, Check, AlertCircle, Plus, Calendar } from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import HealthRing from "@/components/dashboard/HealthRing";

const medications = [
  { name: "Vitamin D", dosage: "1000 IU", time: "8:00 AM", taken: true, color: "bg-health-calories" },
  { name: "Omega-3", dosage: "1000mg", time: "8:00 AM", taken: true, color: "bg-health-water" },
  { name: "Multivitamin", dosage: "1 tablet", time: "12:00 PM", taken: true, color: "bg-health-nutrition" },
  { name: "Magnesium", dosage: "400mg", time: "8:00 PM", taken: false, color: "bg-health-sleep" },
  { name: "Probiotic", dosage: "1 capsule", time: "8:00 PM", taken: false, color: "bg-health-steps" },
];

const MedicationsPage = () => {
  const takenCount = medications.filter((m) => m.taken).length;
  const adherence = (takenCount / medications.length) * 100;

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
              <Pill className="w-8 h-8 text-health-heart" />
              Medications
            </h1>
            <p className="text-muted-foreground mt-1">
              Track your medications and supplements
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-xl font-medium text-sm"
          >
            <Plus className="w-4 h-4" />
            Add Medication
          </motion.button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="metric-card"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-heart flex items-center justify-center">
                <Check className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm text-muted-foreground">Taken Today</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold font-display">{takenCount}</span>
              <span className="text-sm text-muted-foreground">/ {medications.length}</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="metric-card"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-steps flex items-center justify-center">
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm text-muted-foreground">Streak</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold font-display">12</span>
              <span className="text-sm text-muted-foreground">days</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="metric-card"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                <AlertCircle className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm text-muted-foreground">Remaining</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold font-display">{medications.length - takenCount}</span>
              <span className="text-sm text-muted-foreground">for today</span>
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
            <h3 className="text-lg font-semibold font-display mb-4">Today's Schedule</h3>
            <div className="space-y-3">
              {medications.map((med, i) => (
                <motion.div
                  key={med.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className={`flex items-center gap-4 p-4 rounded-xl transition-colors ${
                    med.taken ? "bg-muted/30 opacity-70" : "bg-muted/50 hover:bg-muted"
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl ${med.color} flex items-center justify-center`}>
                    <Pill className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className={`font-medium ${med.taken ? "line-through text-muted-foreground" : "text-foreground"}`}>
                        {med.name}
                      </h4>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        {med.time}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{med.dosage}</p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                      med.taken
                        ? "bg-primary text-primary-foreground"
                        : "border-2 border-muted-foreground hover:border-primary"
                    }`}
                  >
                    {med.taken && <Check className="w-4 h-4" />}
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="metric-card flex flex-col items-center"
          >
            <h3 className="text-lg font-semibold font-display mb-6">Weekly Adherence</h3>
            <HealthRing
              percentage={adherence}
              size={160}
              strokeWidth={14}
              color="hsl(var(--primary))"
            >
              <div className="text-center">
                <span className="text-3xl font-bold font-display">{Math.round(adherence)}%</span>
                <p className="text-xs text-muted-foreground">completed</p>
              </div>
            </HealthRing>
            <p className="mt-6 text-sm text-muted-foreground text-center">
              Great job! You're maintaining excellent medication adherence.
            </p>
          </motion.div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default MedicationsPage;
