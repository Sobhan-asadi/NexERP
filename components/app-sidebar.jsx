/** @format */

"use client";

import {
  IconBrandSketch,
  IconCalendar,
  IconCamera,
  IconCategory,
  IconDashboard,
  IconFileAi,
  IconFileDescription,
  IconFileWord,
  IconPackage,
  IconReport,
  IconSettings,
  IconShoppingCart,
} from "@tabler/icons-react";

import { NavDocuments } from "@/components/nav-documents";
import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const data = {
  user: {
    name: "Sobhan",
    email: "admin@admincom",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: IconDashboard,
    },
    {
      title: "Categories",
      url: "dashboard/categories",
      icon: IconCategory,
    },
    {
      title: "Products",
      url: "dashboard/product",
      icon: IconPackage,
    },
    {
      title: "Sales",
      url: "dashboard/sale",
      icon: IconShoppingCart,
    },
  ],
  navClouds: [
    {
      title: "Capture",
      icon: IconCamera,
      isActive: true,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Proposal",
      icon: IconFileDescription,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Prompts",
      icon: IconFileAi,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "dashboard/setting",
      icon: IconSettings,
    },
  ],
  documents: [
    {
      name: "Today Sales",
      url: "dashboard/reports/todaysale",
      icon: IconCalendar,
    },
    {
      name: "Weekly Sales",
      url: "dashboard/reports/weeksale",
      icon: IconReport,
    },
    {
      name: "Monthly Sales",
      url: "dashboard/reports/monthsale",
      icon: IconFileWord,
    },
  ],
};

export function AppSidebar({ ...props }) {
  return (
    <Sidebar collapsible='offcanvas' {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className='data-[slot=sidebar-menu-button]:!p-1.5'>
              <a href='#'>
                <IconBrandSketch className='!size-5' />
                <span className='text-base font-semibold'>NexERP</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavDocuments items={data.documents} />
        <NavSecondary items={data.navSecondary} className='mt-auto' />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
