<<<<<<< HEAD
import { useAuth } from "../../contexts/AuthContext"; // <--- FIXED IMPORT PATH
import { Bell, Search, Sun, Moon, LogOut, User as UserIcon } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isDark, setIsDark] = useState(false);
  const { user, logout } = useAuth(); // Now we can use logout too!
  const navigate = useNavigate();
=======
import { useAuth } from "../../auth/AuthContext";

import { Bell, Search, Sun, Moon } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";


const Header = () => {
  const [isDark, setIsDark] = useState(false);
  const { user } = useAuth();
>>>>>>> a66d32426c554a0d9380557ccf4f4c5ec76dacc8

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

<<<<<<< HEAD
  const handleLogout = async () => {
    try {
      await logout();
      navigate("/auth");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  // Safe check for user initials
  const getInitials = () => {
    if (!user) return "U";
    if (user.name) {
      return user.name
        .split(" ")
        .map((n: string) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2);
    }
=======
  const getInitials = () => {
    if (!user) return "U";

    if (user.name && user.name.length > 0) {
      return user.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase();
    }

    if (user.email && user.email.length > 0) {
      return user.email[0].toUpperCase();
    }

>>>>>>> a66d32426c554a0d9380557ccf4f4c5ec76dacc8
    return "U";
  };

  return (
<<<<<<< HEAD
    <header className="h-16 bg-card/80 backdrop-blur-xl border-b border-border sticky top-0 z-40 w-full">
      <div className="h-full px-6 flex items-center justify-between">

        {/* Search Bar */}
        <div className="flex-1 max-w-md hidden md:block">
=======
    <header className="h-16 bg-card/80 backdrop-blur-xl border-b border-border sticky top-0 z-40">
      <div className="h-full px-6 flex items-center justify-between">

        {/* Search */}
        <div className="flex-1 max-w-md">
>>>>>>> a66d32426c554a0d9380557ccf4f4c5ec76dacc8
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
<<<<<<< HEAD
              placeholder="Search health data..."
              className="w-full h-10 pl-10 pr-4 rounded-xl bg-muted/50 border border-transparent focus:border-primary focus:bg-background text-sm outline-none transition-all"
=======
              placeholder="Search health data, metrics..."
              className="w-full h-10 pl-10 pr-4 rounded-xl bg-muted/50 border border-transparent focus:border-primary focus:bg-background text-sm placeholder:text-muted-foreground outline-none transition-all"
>>>>>>> a66d32426c554a0d9380557ccf4f4c5ec76dacc8
            />
          </div>
        </div>

<<<<<<< HEAD
        {/* Right Side Actions */}
        <div className="flex items-center gap-2 ml-auto">

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-xl bg-muted/50 hover:bg-muted flex items-center justify-center transition-colors"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          {/* User Profile Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-2 pl-2 pr-4 py-1.5 rounded-xl hover:bg-muted/50 transition-colors">
                <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                  {getInitials()}
                </div>
                <div className="text-left hidden sm:block">
                  <p className="text-sm font-medium leading-none">{user?.name || "User"}</p>
                </div>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => navigate("/profile")}>
                <UserIcon className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout} className="text-red-600 focus:text-red-600">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
=======
        {/* Actions */}
        <div className="flex items-center gap-2">

          {/* Theme Toggle */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className="w-10 h-10 rounded-xl bg-muted/50 hover:bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </motion.button>

          {/* Notifications */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative w-10 h-10 rounded-xl bg-muted/50 hover:bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <Bell className="w-5 h-5" />
            <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-health-heart" />
          </motion.button>

          {/* Profile */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-3 pl-3 pr-4 py-1.5 rounded-xl hover:bg-muted/50 transition-colors"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-semibold text-sm">
              {getInitials()}
            </div>
            <div className="text-left hidden sm:block">
              <p className="text-sm font-medium text-foreground">
                {user?.name || user?.email || "User"}
              </p>
              <p className="text-xs text-muted-foreground">Health Navigator</p>
            </div>
          </motion.div>
>>>>>>> a66d32426c554a0d9380557ccf4f4c5ec76dacc8

        </div>
      </div>
    </header>
  );
};

<<<<<<< HEAD
export default Header;
=======
export default Header;
>>>>>>> a66d32426c554a0d9380557ccf4f4c5ec76dacc8
