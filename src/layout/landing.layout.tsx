import Footer from "@/modules/core/components/footer/Footer";
import AppNavbar from "@/modules/core/components/navbar/AppNavbar";
import { Sidebar } from "@/modules/core/components/sidebar/Sidebar";
import { useState } from "react";

import { Outlet } from "react-router-dom";

export const LandingLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="min-h-screen flex flex-col">
      <AppNavbar onOpenSidebar={() => setSidebarOpen(true)} />
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
