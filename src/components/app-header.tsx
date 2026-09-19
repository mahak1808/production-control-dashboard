export function AppHeader({ children }: React.ComponentProps<"div">) {
  return (
    <>
      <div className="w-full h-14 bg-amber-400 flex items-center px-2">
        {children}
        <p className="text-lg font-medium">Production Control Dashboard</p>
      </div>
    </>
  );
}
