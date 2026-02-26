<<<<<<< HEAD
import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { account } from "@/lib/appwrite";
import { ID, Models } from "appwrite";

interface AuthContextType {
  user: Models.User<Models.Preferences> | null;
  login: (email: string, pass: string) => Promise<void>;
  signup: (email: string, pass: string, name: string) => Promise<void>;
  logout: () => Promise<void>;
  loading: boolean;
=======
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { account } from '@/lib/appwrite';
import { ID, Models } from 'appwrite';
import { User } from '@/types/health';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string) => Promise<void>;
  logout: () => Promise<void>;
>>>>>>> a66d32426c554a0d9380557ccf4f4c5ec76dacc8
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
<<<<<<< HEAD
  const [user, setUser] = useState<Models.User<Models.Preferences> | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      try {
        // Try to get the current user session
        const session = await account.get();
        setUser(session);
      } catch (error) {
        // If we get a 401 (Unauthorized), it just means no one is logged in.
        // We set user to null and continue.
        console.log("No active session found (User is logged out)");
        setUser(null);
      } finally {
        // ✅ CRITICAL: This MUST run to turn off the "Loading..." screen
        setLoading(false);
      }
    };

    checkUser();
  }, []);

  const login = async (email: string, pass: string) => {
    await account.createEmailPasswordSession(email, pass);
    const session = await account.get();
    setUser(session);
  };

  const signup = async (email: string, pass: string, name: string) => {
    await account.create(ID.unique(), email, pass, name);
    await login(email, pass);
  };

  const logout = async () => {
    await account.deleteSession("current");
    setUser(null);
  };

  // If we are still checking, show the loading text
  if (loading) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-background text-foreground">
        <div className="flex flex-col items-center gap-4">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
          <p className="font-medium">Loading Health Data...</p>
        </div>
      </div>
    );
  }

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, loading }}>
=======
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    try {
      const session = await account.get();
      setUser(session as unknown as User);
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    await account.createEmailPasswordSession(email, password);
    await checkUser();
  };

  const register = async (email: string, password: string, name: string) => {
    await account.create(ID.unique(), email, password, name);
    await login(email, password);
  };

  const logout = async () => {
    await account.deleteSession('current');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
>>>>>>> a66d32426c554a0d9380557ccf4f4c5ec76dacc8
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
<<<<<<< HEAD
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
=======
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
>>>>>>> a66d32426c554a0d9380557ccf4f4c5ec76dacc8
