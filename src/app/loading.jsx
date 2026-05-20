export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-orange-50">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-orange-400 border-t-transparent rounded-full animate-spin mx-auto"></div>
        <p className="mt-4 text-lg font-semibold text-gray-600">
          Loading Recipe...
        </p>
      </div>
    </div>
  );
}