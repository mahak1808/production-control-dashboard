"use client";

import { createColumnHelper } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Badge } from "@/components/ui/badge"; // Adjust path if needed
import { type DataTableFeatures } from "./data-table-features";
import { JobDetailsDrawer } from "./job-details-drawer";
import { Button } from "../ui/button";

// 1. Define your TypeScript interface for the data
export type ProductionJob = {
  id: string;
  product: string;
  customer: string;
  quantity: number;
  dueDate: string;
  status: "IN PROGRESS" | "DELAYED" | "PENDING" | "COMPLETED";
  isOverdue?: boolean;
  assignedMachine: string;
};

// Use `accessor` for data columns and `display` for columns without one.
const columnHelper = createColumnHelper<DataTableFeatures, ProductionJob>();

export const columns = columnHelper.columns([
  columnHelper.accessor("id", {
    header: "JOB ID",
    cell: ({ row }) => (
      <span className="font-semibold text-blue-600">{row.getValue("id")}</span>
    ),
  }),

  columnHelper.accessor("product", {
    header: "PRODUCT",
  }),

  columnHelper.accessor("customer", {
    header: "CUSTOMER",
  }),

  columnHelper.accessor("quantity", {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="-ml-4 text-xs font-semibold text-slate-500 hover:bg-slate-100"
        >
          QUANTITY
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <span className="font-bold">{row.getValue("quantity")}</span>
    ),
  }),

  columnHelper.accessor("dueDate", {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="-ml-4 text-xs font-semibold text-slate-500 hover:bg-slate-100"
        >
          DUE DATE
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const isOverdue = row.original.isOverdue;
      return (
        <span className={isOverdue ? "font-semibold text-red-600" : ""}>
          {row.getValue("dueDate")}
        </span>
      );
    },
  }),

  columnHelper.accessor("status", {
    header: "STATUS",
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      let badgeClass = "";
      let dotClass = "";

      switch (status) {
        case "IN PROGRESS":
          badgeClass = "bg-blue-100 text-blue-700 hover:bg-blue-100";
          dotClass = "bg-blue-500";
          break;
        case "DELAYED":
          badgeClass = "bg-red-100 text-red-700 hover:bg-red-100";
          dotClass = "bg-red-500";
          break;
        case "COMPLETED":
          badgeClass = "bg-green-100 text-green-700 hover:bg-green-100";
          dotClass = "bg-green-500";
          break;
        default:
          badgeClass = "bg-slate-100 text-slate-700 hover:bg-slate-100";
          dotClass = "bg-slate-500";
      }

      return (
        <Badge
          className={`px-2 py-0.5 rounded-sm flex w-fit items-center gap-1.5 ${badgeClass}`}
        >
          <span className={`w-1.5 h-1.5 rounded-full ${dotClass}`}></span>
          {status}
        </Badge>
      );
    },
  }),

  columnHelper.accessor("assignedMachine", {
    header: "ASSIGNED MACHINE",
  }),

  // Use `display` for columns that don't directly map to a data accessor (like action buttons)
  columnHelper.display({
    id: "actions",
    header: "ACTION",
    cell: ({ row }) => {
      // Optional: You can eventually pass row.original (the job data)
      // into the drawer as a prop to make the drawer content dynamic!
      const jobData = row.original;

      return <JobDetailsDrawer job={jobData} />;
    },
  }),
]);
