import React from "react";

interface ProgressBarProps {
  label: string; // Label for the progress bar
  percentage: number; // Progress percentage (0 to 100)
}

const ProgressBar: React.FC<ProgressBarProps> = ({ label, percentage }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-white font-medium">{label}</span>
        <span className="text-gray-400">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-800 h-2 rounded">
        <div
          className="h-2 bg-green-500 rounded"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
