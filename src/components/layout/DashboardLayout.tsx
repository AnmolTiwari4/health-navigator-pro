<<<<<<< HEAD
import { ReactNode, useState } from "react";
=======
import { ReactNode, useState, useEffect } from "react";
>>>>>>> a66d32426c554a0d9380557ccf4f4c5ec76dacc8
import Sidebar from "./Sidebar";
import Header from "./Header";

interface DashboardLayoutProps {
  children: ReactNode;
}

<<<<<<< HEAD
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
=======
const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [sidebarWidth, setSidebarWidth] = useState(260);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const sidebar = document.querySelector("aside");
      if (sidebar) {
        setSidebarWidth(sidebar.offsetWidth);
      }
    });

    const sidebar = document.querySelector("aside");
    if (sidebar) {
      observer.observe(sidebar, { attributes: true, attributeFilter: ["style"] });
      setSidebarWidth(sidebar.offsetWidth);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <div
        className="transition-all duration-300"
>>>>>>> a66d32426c554a0d9380557ccf4f4c5ec76dacc8
        style={{ marginLeft: sidebarWidth }}
      >
        <Header />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
};

<<<<<<< HEAD
// 2. ✅ EXPORT BOTH WAYS (Fixes the crash)
export const DashboardLayout = DashboardLayoutComponent; // For Index.tsx
export default DashboardLayoutComponent;               // For HeartHealth.tsx & others
=======
export default DashboardLayout;
>>>>>>> a66d32426c554a0d9380557ccf4f4c5ec76dacc8
