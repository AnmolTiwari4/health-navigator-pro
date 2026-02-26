import { Client, Account, Databases, Storage } from "appwrite";

const client = new Client()
  .setEndpoint("https://fra.cloud.appwrite.io/v1")
  .setProject("698313030019e3392b1c");

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
