import { useState, useEffect } from "react";
import { columns, type ProductionJob } from "./columns";
import { DataTable } from "./data-table";
import { JobMetrics } from "../job-metrics";

// Dummy data extracted from the screenshot
const dummyData: ProductionJob[] = [
  {
    id: "JOB-1042",
    product: "Steel Bracket A",
    customer: "Acme Corp",
    quantity: 500,
    dueDate: "Today, 4:00 PM",
    status: "IN PROGRESS",
    assignedMachine: "CNC-02",
  },
  {
    id: "JOB-1043",
    product: "Aluminum Housing",
    customer: "Nova Industries",
    quantity: 250,
    dueDate: "Today, 6:00 PM",
    status: "DELAYED",
    isOverdue: true, // Marked true to trigger the red text
    assignedMachine: "CNC-01",
  },
  {
    id: "JOB-1044",
    product: "Mounting Plate",
    customer: "Vertex Manufacturing",
    quantity: 800,
    dueDate: "Sep 19",
    status: "PENDING",
    assignedMachine: "CNC-03",
  },
  {
    id: "JOB-1045",
    product: "Drive Shaft",
    customer: "Acme Corp",
    quantity: 120,
    dueDate: "Sep 19",
    status: "COMPLETED",
    assignedMachine: "Lathe-02",
  },
  {
    id: "JOB-1046",
    product: "Gear Assembly",
    customer: "Orion Motors",
    quantity: 350,
    dueDate: "Sep 20",
    status: "IN PROGRESS",
    assignedMachine: "Assembly-01",
  },
  {
    id: "JOB-1047",
    product: "Steel Cover",
    customer: "Nova Industries",
    quantity: 600,
    dueDate: "Sep 20",
    status: "PENDING",
    assignedMachine: "CNC-01",
  },
  {
    id: "JOB-1048",
    product: "Precision Shaft",
    customer: "Acme Corp",
    quantity: 180,
    dueDate: "Sep 21",
    status: "COMPLETED",
    assignedMachine: "Lathe-02",
  },
  {
    id: "JOB-1049",
    product: "Motor Housing",
    customer: "Orion Motors",
    quantity: 400,
    dueDate: "Sep 21",
    status: "DELAYED",
    isOverdue: true, // Marked true to trigger the red text
    assignedMachine: "CNC-03",
  },
  {
    id: "JOB-1050",
    product: "Turbine Flange",
    customer: "AeroDynamics Inc",
    quantity: 150,
    dueDate: "Sep 22",
    status: "IN PROGRESS",
    assignedMachine: "CNC-01",
  },
  {
    id: "JOB-1051",
    product: "Pivot Pin B",
    customer: "Vertex Manufacturing",
    quantity: 1200,
    dueDate: "Sep 22",
    status: "PENDING",
    assignedMachine: "Lathe-01",
  },
  {
    id: "JOB-1052",
    product: "Hydraulic Valve C",
    customer: "Apex Fluidics",
    quantity: 320,
    dueDate: "Sep 23",
    status: "COMPLETED",
    assignedMachine: "Assembly-02",
  },
];

// Mock API call to simulate fetching the data
async function getProductionJobs(): Promise<ProductionJob[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dummyData);
    }, 500); // Simulates a half-second network delay
  });
}

export default function ProductionJobsPage() {
  const [data, setData] = useState<ProductionJob[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getProductionJobs();
        setData(result);
      } catch (error) {
        console.error("Failed to fetch jobs", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div className="p-6">Loading production jobs...</div>;
  }

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      {/* 1. Add the metrics component here, passing the fetched data */}
      <JobMetrics data={data} />

      {/* 2. Render the table directly below it */}
      <DataTable columns={columns} data={data} />
    </div>
  );
}
