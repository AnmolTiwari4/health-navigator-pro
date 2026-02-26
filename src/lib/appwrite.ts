import { Client, Account, Databases, Storage } from 'appwrite';

const client = new Client();

client
<<<<<<< HEAD
  .setEndpoint('https://sgp.cloud.appwrite.io/v1') // Your Singapore Endpoint
  .setProject('698756a3003cbcd2e370');             // Your Project ID

// Export the tools
=======
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('698313030019e3392b1c');

>>>>>>> a66d32426c554a0d9380557ccf4f4c5ec76dacc8
export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);

<<<<<<< HEAD
// Database Config
export const DATABASE_ID = 'health_db';

export const COLLECTIONS = {
  USER_PROFILE: 'user_profile',
  AI_PLANS: 'ai_plans',
  // --- ADDED THESE TO FIX CRASHES ---
=======
export const DATABASE_ID = 'health_db';
export const COLLECTIONS = {
>>>>>>> a66d32426c554a0d9380557ccf4f4c5ec76dacc8
  HEALTH_METRICS: 'health_metrics',
  MEDICATIONS: 'medications',
  WATER_INTAKE: 'water_intake',
  SLEEP_RECORDS: 'sleep_records',
  ACTIVITIES: 'activities',
<<<<<<< HEAD
  NUTRITION: 'nutrition'
} as const;
=======
  NUTRITION: 'nutrition',
} as const;

export { client };

import { Client, Account, Databases, Storage } from 'appwrite';

const client = new Client();

client
  .setEndpoint('https://cloud.appwrite.io/v1') // Your Appwrite endpoint
  .setProject('69807385001a83727711'); // Your Appwrite project ID

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);

export { client };
>>>>>>> a66d32426c554a0d9380557ccf4f4c5ec76dacc8
