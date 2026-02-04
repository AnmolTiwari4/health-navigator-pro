import { Models } from 'appwrite';

export interface HealthMetric extends Models.Document {
  userId: string;
  type: 'heart_rate' | 'blood_pressure' | 'weight' | 'temperature';
  value: number;
  unit: string;
  timestamp: string;
  notes?: string;
}

export interface Medication extends Models.Document {
  userId: string;
  name: string;
  dosage: string;
  frequency: 'daily' | 'weekly' | 'monthly' | 'as_needed';
  time: string;
  startDate: string;
  endDate?: string;
  notes?: string;
  taken: boolean;
}

export interface WaterIntake extends Models.Document {
  userId: string;
  amount: number;
  unit: 'ml' | 'oz';
  timestamp: string;
  date: string;
}

export interface SleepRecord extends Models.Document {
  userId: string;
  startTime: string;
  endTime: string;
  duration: number;
  quality: 'poor' | 'fair' | 'good' | 'excellent';
  date: string;
  notes?: string;
}

export interface Activity extends Models.Document {
  userId: string;
  type: 'walking' | 'running' | 'cycling' | 'swimming' | 'gym' | 'yoga' | 'other';
  duration: number;
  calories: number;
  steps?: number;
  distance?: number;
  timestamp: string;
  notes?: string;
}

export interface NutritionEntry extends Models.Document {
  userId: string;
  mealType: 'breakfast' | 'lunch' | 'dinner' | 'snack';
  foodItems: string[];
  calories: number;
  protein?: number;
  carbs?: number;
  fat?: number;
  timestamp: string;
  date: string;
  notes?: string;
}

export interface User {
  $id: string;
  email: string;
  name: string;
  emailVerification: boolean;
  prefs: Record<string, unknown>;
}
