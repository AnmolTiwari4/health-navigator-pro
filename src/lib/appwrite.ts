import { Client, Account, Databases, Storage } from 'appwrite';

const client = new Client();

client
  .setEndpoint('https://sgp.cloud.appwrite.io/v1') // Your Singapore Endpoint
  .setProject('698756a3003cbcd2e370');             // Your Project ID

// Export the tools
export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);

// Database Config
export const DATABASE_ID = 'health_db';

export const COLLECTIONS = {
  USER_PROFILE: 'user_profile',
  AI_PLANS: 'ai_plans',
  // --- ADDED THESE TO FIX CRASHES ---
  HEALTH_METRICS: 'health_metrics',
  MEDICATIONS: 'medications',
  WATER_INTAKE: 'water_intake',
  SLEEP_RECORDS: 'sleep_records',
  ACTIVITIES: 'activities',
  NUTRITION: 'nutrition'
} as const;