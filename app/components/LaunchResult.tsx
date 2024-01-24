const LaunchResult = ({ isSuccess }: { isSuccess: boolean }) => {
  return (
    <div>
      <span className="font-bold text-2xl text-slate-300 mr-2">
        Successful:{" "}
      </span>
      <span
        className={`font-bold text-2xl px-2 border rounded-lg shadow-uniform transition-all duration-500 hover:shadow-sm
                           ${
                             isSuccess
                               ? "text-green-600 border-green-600 shadow-green-500"
                               : "text-red-600 border-red-600 shadow-red-500"
                           }`}
      >
        {isSuccess ? "Yes" : "No"}
      </span>
    </div>
  );
};

export default LaunchResult;
