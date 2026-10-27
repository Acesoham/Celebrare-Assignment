export default function LoadingSpinner() {
  return (
    <div className="flex min-h-64 flex-col items-center justify-center gap-4 text-sm text-[#77727b]" role="status">
      <span className="h-7 w-7 animate-spin rounded-full border-2 border-[#e7e0ed] border-t-[#6d3fa0]" />
      <span>Gathering beautiful moments...</span>
    </div>
  );
}
