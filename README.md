# Production Control Dashboard

A modern, responsive React application for managing and tracking manufacturing production jobs. Built with React, TypeScript, Tailwind CSS, and TanStack Table, featuring a robust UI component system powered by shadcn/ui.

## 🚀 Features

- **Dashboard Metrics:** Real-time summary cards displaying Total Jobs, In Progress, Delayed (Critical), and Completed jobs.
- **Advanced Data Table:**
  - **Global Search:** Search across Job IDs, Products, and Customers.
  - **Column Filtering:** Filter jobs by their current Status.
  - **Sorting:** Sort jobs by Quantity and Due Date.
  - **Pagination:** Built-in client-side pagination with 10 items per page.

- **Dynamic Side Drawer:** Clicking a job row opens a right-aligned sliding drawer revealing in-depth job specifications, telemetry alerts, and update controls.
- **Global Layout:** Persistent sidebar navigation and top header architecture using React Router.

## 🛠️ Tech Stack

- **Framework:** React (Client-side)
- **Language:** TypeScript
- **Routing:** React Router v6
- **Styling:** Tailwind CSS
- **Components:** shadcn/ui (Base UI / Radix UI primitives)
- **Table Logic:** `@tanstack/react-table` (v8)
- **Icons:** Lucide React

## 📦 Getting Started

### Prerequisites

Ensure you have Node.js (v18+) and npm or pnpm installed.

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd <project-directory>
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

## 🏗️ Component Structure

- `RootLayout.tsx`: The global layout wrapper utilizing React Router's `<Outlet />`. It manages the persistent sidebar and top header navigation.
- `ProductionJobsPage.tsx`: The main view component. It acts as the data container, managing the fetching state and holding the mock API data. It renders the summary metrics and the table.
- `job-metrics.tsx`: A purely presentational component that accepts the job data array and dynamically calculates the top-level KPIs based on the current state.
- `data-table.tsx`: A reusable wrapper around TanStack Table. It manages internal UI state for sorting, column filters (status), global search, and pagination controls.
- `columns.tsx`: Defines the schema for the table. It maps data properties to columns, handles specific cell formatting (such as status badges and conditionally red text for overdue dates), and injects the action drawer.
- `job-details-drawer.tsx`: Uses Base UI (via shadcn) to render a right-aligned side panel. It accepts a single `job` object as a prop to dynamically display detailed specifications and telemetry logs when triggered from a table row.

## 🧠 Architecture Notes & Assumptions

- **Client-Side Data Architecture:** For this prototype, it is assumed the dataset is small enough that filtering, sorting, pagination, and metric calculations can all happen efficiently on the client side.
- **Global Search Implementation:** To maintain strict type safety with TanStack's feature types, the global search is implemented by pre-filtering the data array via standard React state (`useMemo`) before passing it to `useTable`.
- **Mock Data:** Telemetry alerts and operator notes in the drawer are static placeholders, as they were not explicitly defined in the primary `ProductionJob` type.

## 🚀 Future Improvements

1. **Server-Side State Management:** For production at scale, sorting, filtering, and pagination should be moved to the backend API to prevent performance bottlenecks. A data-fetching library like React Query or SWR would be introduced to manage this state and caching.
2. **Responsive Drawer Behavior:** Update the drawer to conditionally render as a bottom sheet on mobile devices and a right-aligned side panel on desktop, improving mobile ergonomics.
3. **Interactive Mutations:** Wire up the "Update Status" buttons inside the `JobDetailsDrawer` to an API mutation function, allowing users to update a job's status and see the table and metrics immediately reflect the change.
4. **Testing:** Add unit tests for the metric calculation logic and component tests for the table sorting/filtering using React Testing Library.
