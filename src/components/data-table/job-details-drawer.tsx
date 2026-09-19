import {
  X,
  Settings2,
  CheckCircle,
  FileText,
  Tag,
  ChevronRight,
} from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { type ProductionJob } from "./columns";

// 1. Define the props for the drawer
interface JobDetailsDrawerProps {
  job: ProductionJob;
}

// 2. Accept the 'job' prop
export function JobDetailsDrawer({ job }: JobDetailsDrawerProps) {
  const getStatusBadgeStyles = (status: ProductionJob["status"]) => {
    switch (status) {
      case "IN PROGRESS":
        return "bg-blue-100 text-blue-700 hover:bg-blue-100";
      case "DELAYED":
        return "bg-red-100 text-red-700 hover:bg-red-100";
      case "COMPLETED":
        return "bg-green-100 text-green-700 hover:bg-green-100";
      default:
        return "bg-slate-100 text-slate-700 hover:bg-slate-100";
    }
  };

  return (
    // 1. ADD direction="right" HERE
    <Drawer swipeDirection="right">
      <DrawerTrigger
        render={
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-gray-500 hover:bg-slate-100"
          />
        }
      >
        <ChevronRight className="h-4 w-4" />
      </DrawerTrigger>

      {/* 2. ADD fixed inset-y-0 right-0 left-auto HERE */}
      <DrawerContent className="fixed inset-y-0 right-0 left-auto mt-0 h-screen w-112.5 flex flex-col rounded-l-xl border-l bg-white data-[swipe-axis=x]:w-112.5">
        {/* Header Section */}
        <DrawerHeader className="border-b pb-4 text-left">
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-blue-600">{job.id}</span>
              <Badge
                className={`uppercase text-[10px] font-bold px-1.5 py-0 ${getStatusBadgeStyles(job.status)}`}
              >
                {job.status}
              </Badge>
            </div>
            <DrawerClose
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-gray-500"
                />
              }
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </DrawerClose>
          </div>
          <DrawerTitle className="text-2xl font-bold text-slate-900">
            {job.product}
          </DrawerTitle>
          <DrawerDescription className="text-xs font-bold text-slate-500 uppercase mt-1">
            {job.customer}
          </DrawerDescription>
        </DrawerHeader>

        {/* Scrollable Body Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-8 bg-slate-50">
          <section className="bg-white rounded-lg border p-4">
            <div className="flex items-center justify-between mb-4 border-b pb-2">
              <h3 className="text-xs font-bold text-slate-500">
                JOB SPECIFICATIONS
              </h3>
              <Settings2 className="h-4 w-4 text-slate-400" />
            </div>
            <div className="grid grid-cols-2 gap-y-4 gap-x-2 text-sm">
              <div>
                <p className="text-xs text-slate-500 font-semibold mb-1 uppercase">
                  Customer
                </p>
                <p className="font-medium text-slate-900">{job.customer}</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 font-semibold mb-1 uppercase">
                  Quantity
                </p>
                <p className="font-bold text-slate-900">{job.quantity} units</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 font-semibold mb-1 uppercase">
                  Due Date
                </p>
                <p
                  className={`font-medium ${job.isOverdue ? "text-red-600" : "text-slate-900"}`}
                >
                  {job.dueDate}
                </p>
              </div>
              <div>
                <p className="text-xs text-slate-500 font-semibold mb-1 uppercase">
                  Assigned Machine
                </p>
                <p className="font-medium text-slate-900">
                  {job.assignedMachine}
                </p>
              </div>
              <div>
                <p className="text-xs text-slate-500 font-semibold mb-1 uppercase">
                  Batch Number
                </p>
                <p className="font-medium text-slate-900">#B-88219</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 font-semibold mb-1 uppercase">
                  Operator
                </p>
                <p className="font-medium text-slate-900">M. Rodriguez</p>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs font-bold text-slate-500">
                UPDATE STATUS
              </h3>
              <span className="text-xs text-slate-400">Auto-logs to ERP</span>
            </div>
            <Button className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold mt-3">
              <CheckCircle className="mr-2 h-4 w-4" /> Update Status
            </Button>
          </section>
        </div>

        {/* Footer Section */}
        <DrawerFooter className="border-t bg-white flex-row gap-4 p-4 mt-auto">
          <Button
            variant="outline"
            className="flex-1 text-xs font-bold text-slate-600"
          >
            <FileText className="mr-2 h-4 w-4" /> ROUTING SHEET
          </Button>
          <Button
            variant="outline"
            className="flex-1 text-xs font-bold text-slate-600"
          >
            <Tag className="mr-2 h-4 w-4" /> TRAVELER TAG
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
