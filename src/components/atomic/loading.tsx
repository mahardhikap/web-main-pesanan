import React from "react";

interface LoadingProps {
  className?: string;
  color?: string;
}

const Loading: React.FC<LoadingProps> = ({ className = "", color = "" }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div
        className={`border-gray-300 h-20 w-20 animate-spin rounded-full border-8 ${color}`}
      />
    </div>
  );
};

export default Loading;
