import { Layers, RefreshCcw, CheckCheck } from "lucide-react";
import { type ProductionJob } from "./data-table/columns";

interface JobMetricsProps {
  data: ProductionJob[];
}

export function JobMetrics({ data }: JobMetricsProps) {
  // Calculate metrics dynamically from your data
  const totalJobs = data.length;
  const inProgressJobs = data.filter(
    (job) => job.status === "IN PROGRESS",
  ).length;
  const delayedJobs = data.filter((job) => job.status === "DELAYED").length;
  const completedJobs = data.filter((job) => job.status === "COMPLETED").length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      {/* 1. Total Jobs Card */}
      <div className="bg-white border rounded-md flex flex-col overflow-hidden shadow-sm">
        <div className="p-4 flex-1">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-[11px] font-bold text-slate-500 tracking-wider">
              TOTAL JOBS
            </h3>
            <Layers className="h-4 w-4 text-slate-400" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-extrabold text-slate-900">
              {totalJobs}
            </span>
            <span className="text-xs font-bold text-slate-600">Active POs</span>
          </div>
        </div>
        <div className="bg-slate-50 px-4 py-2.5 flex justify-between items-center text-xs border-t">
          <span className="text-slate-600 font-medium">
            Across all active lines
          </span>
          <span className="text-slate-700 font-bold">100% cap</span>
        </div>
      </div>

      {/* 2. In Progress Card */}
      <div className="bg-white border rounded-md flex flex-col overflow-hidden shadow-sm">
        <div className="p-4 flex-1">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-[11px] font-bold text-blue-700 tracking-wider">
              IN PROGRESS
            </h3>
            <RefreshCcw className="h-4 w-4 text-blue-700" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-extrabold text-slate-900">
              {inProgressJobs}
            </span>
            <span className="text-xs font-bold text-blue-700">37.5% Load</span>
          </div>
        </div>
        <div className="bg-slate-50 px-4 py-2.5 flex justify-between items-center text-xs border-t">
          <span className="text-slate-600 font-medium">Active processing</span>
          {/* Progress Bar Graphic */}
          <div className="w-16 h-1.5 bg-blue-200 rounded-full overflow-hidden">
            <div className="w-[37.5%] bg-blue-700 h-full"></div>
          </div>
        </div>
      </div>

      {/* 3. Delayed Card */}
      <div className="bg-white border rounded-md border-t-4 border-t-red-600 flex flex-col overflow-hidden shadow-sm">
        <div className="p-4 flex-1">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-[11px] font-bold text-red-700 tracking-wider">
              DELAYED
            </h3>
            <span className="bg-red-100 text-red-800 text-[10px] font-bold px-1.5 py-0.5 rounded">
              CRITICAL
            </span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-extrabold text-red-600">
              {delayedJobs}
            </span>
            <span className="text-xs font-bold text-red-600">Action req.</span>
          </div>
        </div>
        <div className="bg-red-50 px-4 py-2.5 flex justify-between items-center text-xs border-t border-red-100">
          <span className="text-red-800 font-bold">
            Requires supervisor review
          </span>
          <span className="text-red-700 font-black text-sm">!</span>
        </div>
      </div>

      {/* 4. Completed Card */}
      <div className="bg-white border rounded-md border-t-4 border-t-emerald-700 flex flex-col overflow-hidden shadow-sm">
        <div className="p-4 flex-1">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-[11px] font-bold text-emerald-800 tracking-wider">
              COMPLETED
            </h3>
            <span className="bg-emerald-700 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
              PASSED
            </span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-extrabold text-slate-900">
              {completedJobs}
            </span>
            <span className="text-xs font-bold text-emerald-700">
              +4 vs target
            </span>
          </div>
        </div>
        <div className="bg-emerald-50/50 px-4 py-2.5 flex justify-between items-center text-xs border-t border-emerald-100">
          <span className="text-slate-600 font-medium">Past 24 hours</span>
          <CheckCheck className="h-4 w-4 text-emerald-700" />
        </div>
      </div>
    </div>
  );
}
