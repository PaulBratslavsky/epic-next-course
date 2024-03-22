export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-200 bg-opacity-50">
      <div className="animate-spin h-12 w-12 border-t-4 border-pink-600 rounded-full" />
    </div>
  );
}