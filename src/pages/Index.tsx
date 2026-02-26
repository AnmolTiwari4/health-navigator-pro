import { useState, useEffect } from "react";
import { databases, DATABASE_ID, COLLECTIONS } from "@/lib/appwrite";
import { useAuth } from "@/contexts/AuthContext";
import { Query, ID } from "appwrite";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Droplets, Utensils, Moon, CheckCircle, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const Index = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // Form State
  const [formData, setFormData] = useState({
    age: "",
    gender: "Male",
    height: "",
    weight: "",
    goal: "Weight Loss",
    activity_level: "Moderate",
    conditions: "None"
  });

  // 1. FETCH PROFILE
  useEffect(() => {
    if (!user) {
      navigate("/auth");
      return;
    }
    const fetchProfile = async () => {
      try {
        const response = await databases.listDocuments(
          DATABASE_ID,
          COLLECTIONS.USER_PROFILE,
          [Query.equal("user_id", user.$id)]
        );
        if (response.documents.length > 0) {
          setProfile(response.documents[0]);
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, [user, navigate]);

  // 2. CREATE PROFILE (✅ FIXED COLUMN NAMES HERE)
  const handleCreateProfile = async () => {
    if (!formData.height || !formData.weight) {
      toast.error("Please fill in all fields");
      return;
    }

    try {
      const newProfile = await databases.createDocument(
        DATABASE_ID,
        COLLECTIONS.USER_PROFILE,
        ID.unique(),
        {
          user_id: user?.$id,
          name: user?.name,
          age: parseInt(formData.age),
          gender: formData.gender,
          height: parseInt(formData.height), // Integer per your DB
          weight_kg: parseFloat(formData.weight), // ✅ MATCHES DB NAME
          goal: formData.goal,
          // activity_level: formData.activity_level, // Remove if column missing
          medical_conditions: formData.conditions, // ✅ MATCHES DB NAME
        }
      );
      setProfile(newProfile);
      toast.success("Profile created! Generating Plan...");
    } catch (error) {
      console.error("Error creating profile", error);
      toast.error("Failed to save profile. Check console for details.");
    }
  };

  // 3. UPDATE GOAL (✅ FIXED COLUMN NAMES HERE TOO)
  const updateGoal = async (newGoal: string) => {
    if (!profile) return;

    const updatedProfile = { ...profile, goal: newGoal };
    setProfile(updatedProfile);
    toast.success(`Plan updated for ${newGoal}`);

    try {
      await databases.updateDocument(
        DATABASE_ID,
        COLLECTIONS.USER_PROFILE,
        profile.$id,
        { goal: newGoal }
      );
    } catch (error) {
      console.error("Failed to update goal", error);
      toast.error("Failed to save changes");
    }
  };

  // 4. AI LOGIC
  const calculatePlan = (goal: string, weight: number, condition: string) => {
    const safeWeight = weight > 0 ? weight : 70;

    let calories = 2000;
    let water = 2.5;
    let workout = "Moderate Cardio";
    let steps = "8,000";

    if (goal === "Weight Loss") {
      calories = safeWeight * 22;
      workout = "HIIT & Cardio (45 mins)";
      steps = "10,000";
    } else if (goal === "Muscle Gain") {
      calories = safeWeight * 35;
      workout = "Heavy Lifting (60 mins)";
      water += 1.0;
      steps = "6,000";
    }

    // Check against 'medical_conditions' or 'conditions'
    if (condition && condition.includes("Diabetes")) {
      calories -= 200;
    }

    return { calories: Math.round(calories), water: water.toFixed(1), workout, steps };
  };

  if (loading) return <div className="flex h-screen items-center justify-center">Loading Health Data...</div>;

  // --- FORM VIEW ---
  if (!profile) {
    return (
      <DashboardLayout>
        <div className="max-w-2xl mx-auto mt-10 animate-in fade-in zoom-in duration-500">
          <Card className="border-primary/20 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Let's set up your AI Health Plan 🤖</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Age</Label>
                  <Input type="number" placeholder="20" onChange={(e) => setFormData({ ...formData, age: e.target.value })} />
                </div>
                <div className="space-y-2">
                  <Label>Gender</Label>
                  <Select onValueChange={(v) => setFormData({ ...formData, gender: v })} defaultValue="Male">
                    <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Male">Male</SelectItem>
                      <SelectItem value="Female">Female</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Height (cm)</Label>
                  <Input type="number" placeholder="175" onChange={(e) => setFormData({ ...formData, height: e.target.value })} />
                </div>
                <div className="space-y-2">
                  <Label>Weight (kg)</Label>
                  <Input type="number" placeholder="70" onChange={(e) => setFormData({ ...formData, weight: e.target.value })} />
                </div>
              </div>

              <div className="space-y-2 p-4 bg-muted/50 rounded-xl border border-dashed border-primary/30">
                <Label className="text-primary font-bold text-lg">What is your Main Goal?</Label>
                <Select onValueChange={(v) => setFormData({ ...formData, goal: v })} defaultValue="Weight Loss">
                  <SelectTrigger className="h-12 text-lg"><SelectValue placeholder="Select Goal" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Weight Loss">🔥 Weight Loss (Burn Fat)</SelectItem>
                    <SelectItem value="Muscle Gain">💪 Muscle Gain (Build Mass)</SelectItem>
                    <SelectItem value="Maintenance">🧘 Maintenance (Stay Fit)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button onClick={handleCreateProfile} className="w-full h-12 text-lg shadow-glow">Generate My Plan 🚀</Button>
            </CardContent>
          </Card>
        </div>
      </DashboardLayout>
    );
  }

  // --- DASHBOARD VIEW ---
  // Note: We use 'weight_kg' and 'medical_conditions' to read data back
  const plan = calculatePlan(profile.goal, profile.weight_kg, profile.medical_conditions);

  return (
    <DashboardLayout>
      <div className="space-y-8 animate-in fade-in duration-500">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b pb-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              Hello, {profile.name} 👋
            </h1>
            <p className="text-muted-foreground mt-1 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              AI Plan Active
            </p>
          </div>
          <div className="flex items-center gap-3 bg-card p-2 rounded-xl border shadow-sm">
            <TrendingUp className="w-5 h-5 text-primary ml-2" />
            <span className="text-sm font-medium hidden sm:block">Current Goal:</span>
            <Select value={profile.goal} onValueChange={updateGoal}>
              <SelectTrigger className="w-[180px] border-none bg-muted/50 focus:ring-0 font-bold text-primary">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Weight Loss">Weight Loss</SelectItem>
                <SelectItem value="Muscle Gain">Muscle Gain</SelectItem>
                <SelectItem value="Maintenance">Maintenance</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <MetricCard title="Calories" value={`${plan.calories} kcal`} sub={profile.goal === "Weight Loss" ? "Deficit Target" : "Surplus Target"} icon={<Utensils className="h-4 w-4 text-orange-500" />} />
          <MetricCard title="Hydration" value={`${plan.water} L`} sub="Daily Target" icon={<Droplets className="h-4 w-4 text-blue-500" />} />
          <MetricCard title="Steps" value={plan.steps} sub="Movement Goal" icon={<Activity className="h-4 w-4 text-green-500" />} />
          <MetricCard title="Sleep" value="7-8 hrs" sub="Recovery" icon={<Moon className="h-4 w-4 text-purple-500" />} />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card className="h-full border-primary/20 bg-gradient-to-br from-primary/5 to-transparent relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Activity className="w-24 h-24" />
            </div>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">🏃 Recommended Workout</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-foreground">{plan.workout}</p>
              <div className="flex items-center gap-2 mt-3 text-sm text-muted-foreground bg-background/50 p-2 rounded-lg w-fit">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Optimized for <strong>{profile.goal}</strong></span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

const MetricCard = ({ title, value, sub, icon }: any) => (
  <Card className="hover:shadow-md transition-shadow cursor-default">
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
      {icon}
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{value}</div>
      <p className="text-xs text-muted-foreground mt-1">{sub}</p>
    </CardContent>
  </Card>
);

export default Index;