import { ReactNode, useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

interface DashboardLayoutProps {
  children: ReactNode;
}

// 1. Define the Component
const DashboardLayoutComponent = ({ children }: DashboardLayoutProps) => {
  const [collapsed, setCollapsed] = useState(false);
  // Calculate margin based on state
  const sidebarWidth = collapsed ? 80 : 260;

  return (
    <div className="min-h-screen bg-background">
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

      <div
        className="transition-all duration-300 ease-in-out"
        style={{ marginLeft: sidebarWidth }}
      >
        <Header />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
};

// 2. ✅ EXPORT BOTH WAYS (Fixes the crash)
export const DashboardLayout = DashboardLayoutComponent; // For Index.tsx
export default DashboardLayoutComponent;               // For HeartHealth.tsx & others