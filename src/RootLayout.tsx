// RootLayout.tsx
import { Outlet } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { AppHeader } from "./components/app-header";

export function RootLayout() {
  return (
    <SidebarProvider>
      {/* The Sidebar stays persistent on the left */}
      <AppSidebar />

      {/* The main content area takes up the remaining space */}
      <main className="w-full flex-1">
        {/* Optional: A button to toggle the sidebar on mobile/desktop */}
        <AppHeader>
          <SidebarTrigger className="m-2" />
        </AppHeader>

        <div className="p-4">
          {/* Outlet is where your subpages (Home, Settings, etc.) will render */}
          <Outlet />
        </div>
      </main>
    </SidebarProvider>
  );
}
