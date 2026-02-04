import { Client, Account, Databases, Storage } from 'appwrite';

const client = new Client();

client
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);

export const DATABASE_ID = 'health_db';
export const COLLECTIONS = {
  HEALTH_METRICS: 'health_metrics',
  MEDICATIONS: 'medications',
  WATER_INTAKE: 'water_intake',
  SLEEP_RECORDS: 'sleep_records',
  ACTIVITIES: 'activities',
  NUTRITION: 'nutrition',
} as const;

export { client };
