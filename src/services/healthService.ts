import { databases, DATABASE_ID, COLLECTIONS } from '@/lib/appwrite';
import { ID, Query } from 'appwrite';
import { 
  HealthMetric, 
  Medication, 
  WaterIntake, 
  SleepRecord, 
  Activity, 
  NutritionEntry 
} from '@/types/health';

// Health Metrics
export const createHealthMetric = async (data: Omit<HealthMetric, '$id' | '$collectionId' | '$databaseId' | '$createdAt' | '$updatedAt' | '$permissions'>) => {
  return databases.createDocument(DATABASE_ID, COLLECTIONS.HEALTH_METRICS, ID.unique(), data);
};

export const getHealthMetrics = async (userId: string, limit = 50) => {
  const response = await databases.listDocuments(DATABASE_ID, COLLECTIONS.HEALTH_METRICS, [
    Query.equal('userId', userId),
    Query.orderDesc('timestamp'),
    Query.limit(limit),
  ]);
  return response.documents as unknown as HealthMetric[];
};

// Medications
export const createMedication = async (data: Omit<Medication, '$id' | '$collectionId' | '$databaseId' | '$createdAt' | '$updatedAt' | '$permissions'>) => {
  return databases.createDocument(DATABASE_ID, COLLECTIONS.MEDICATIONS, ID.unique(), data);
};

export const getMedications = async (userId: string) => {
  const response = await databases.listDocuments(DATABASE_ID, COLLECTIONS.MEDICATIONS, [
    Query.equal('userId', userId),
    Query.orderAsc('time'),
  ]);
  return response.documents as unknown as Medication[];
};

export const updateMedication = async (id: string, data: Partial<Medication>) => {
  return databases.updateDocument(DATABASE_ID, COLLECTIONS.MEDICATIONS, id, data);
};

export const deleteMedication = async (id: string) => {
  return databases.deleteDocument(DATABASE_ID, COLLECTIONS.MEDICATIONS, id);
};

// Water Intake
export const createWaterIntake = async (data: Omit<WaterIntake, '$id' | '$collectionId' | '$databaseId' | '$createdAt' | '$updatedAt' | '$permissions'>) => {
  return databases.createDocument(DATABASE_ID, COLLECTIONS.WATER_INTAKE, ID.unique(), data);
};

export const getWaterIntakeByDate = async (userId: string, date: string) => {
  const response = await databases.listDocuments(DATABASE_ID, COLLECTIONS.WATER_INTAKE, [
    Query.equal('userId', userId),
    Query.equal('date', date),
    Query.orderDesc('timestamp'),
  ]);
  return response.documents as unknown as WaterIntake[];
};

// Sleep Records
export const createSleepRecord = async (data: Omit<SleepRecord, '$id' | '$collectionId' | '$databaseId' | '$createdAt' | '$updatedAt' | '$permissions'>) => {
  return databases.createDocument(DATABASE_ID, COLLECTIONS.SLEEP_RECORDS, ID.unique(), data);
};

export const getSleepRecords = async (userId: string, limit = 30) => {
  const response = await databases.listDocuments(DATABASE_ID, COLLECTIONS.SLEEP_RECORDS, [
    Query.equal('userId', userId),
    Query.orderDesc('date'),
    Query.limit(limit),
  ]);
  return response.documents as unknown as SleepRecord[];
};

// Activities
export const createActivity = async (data: Omit<Activity, '$id' | '$collectionId' | '$databaseId' | '$createdAt' | '$updatedAt' | '$permissions'>) => {
  return databases.createDocument(DATABASE_ID, COLLECTIONS.ACTIVITIES, ID.unique(), data);
};

export const getActivities = async (userId: string, limit = 50) => {
  const response = await databases.listDocuments(DATABASE_ID, COLLECTIONS.ACTIVITIES, [
    Query.equal('userId', userId),
    Query.orderDesc('timestamp'),
    Query.limit(limit),
  ]);
  return response.documents as unknown as Activity[];
};

// Nutrition
export const createNutritionEntry = async (data: Omit<NutritionEntry, '$id' | '$collectionId' | '$databaseId' | '$createdAt' | '$updatedAt' | '$permissions'>) => {
  return databases.createDocument(DATABASE_ID, COLLECTIONS.NUTRITION, ID.unique(), data);
};

export const getNutritionByDate = async (userId: string, date: string) => {
  const response = await databases.listDocuments(DATABASE_ID, COLLECTIONS.NUTRITION, [
    Query.equal('userId', userId),
    Query.equal('date', date),
    Query.orderAsc('timestamp'),
  ]);
  return response.documents as unknown as NutritionEntry[];
};
