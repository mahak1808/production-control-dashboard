"use client";

import * as React from "react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import {
  TerminalSquareIcon,
  BotIcon,
  BookOpenIcon,
  Settings2Icon,
  RobotArm,
} from "lucide-react";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "MES CONTROL",
      logo: <RobotArm className="text-primary w-20 h-20" />,
      plan: "PLANT OPERATIONS",
    },
  ],
  navMain: [
    {
      title: "Line Overview",
      url: "#",
      icon: <TerminalSquareIcon />,
      isActive: true,
    },
    {
      title: "Work Orders",
      url: "#",
      icon: <BotIcon />,
    },
    {
      title: "Live Telemetry",
      url: "#",
      icon: <BookOpenIcon />,
    },
    {
      title: "Active Alarms",
      url: "#",
      icon: <Settings2Icon />,
    },
    {
      title: "Quality Control",
      url: "#",
      icon: <Settings2Icon />,
    },
    {
      title: "Maintenance",
      url: "#",
      icon: <Settings2Icon />,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
