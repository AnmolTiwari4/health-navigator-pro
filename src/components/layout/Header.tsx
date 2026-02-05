import { useAuth } from "../../auth/AuthContext";

import { Bell, Search, Sun, Moon } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";


const Header = () => {
  const [isDark, setIsDark] = useState(false);
  const { user } = useAuth();

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

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

    return "U";
  };

  return (
    <header className="h-16 bg-card/80 backdrop-blur-xl border-b border-border sticky top-0 z-40">
      <div className="h-full px-6 flex items-center justify-between">

        {/* Search */}
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search health data, metrics..."
              className="w-full h-10 pl-10 pr-4 rounded-xl bg-muted/50 border border-transparent focus:border-primary focus:bg-background text-sm placeholder:text-muted-foreground outline-none transition-all"
            />
          </div>
        </div>

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

        </div>
      </div>
    </header>
  );
};

export default Header;
