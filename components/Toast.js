import { useEffect } from "react";
import { X, CheckCircle, AlertCircle, AlertTriangle, Info } from "lucide-react";

const Toast = ({ message, type = "info", onClose, duration = 4000 }) => {
  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [onClose, duration]);

  const getToastStyles = () => {
    switch (type) {
      case "success":
        return {
          bgColor: "bg-green-50",
          borderColor: "border-green-200",
          textColor: "text-green-800",
          icon: <CheckCircle className="h-5 w-5 text-green-600" />,
        };
      case "error":
        return {
          bgColor: "bg-red-50",
          borderColor: "border-red-200",
          textColor: "text-red-800",
          icon: <AlertCircle className="h-5 w-5 text-red-600" />,
        };
      case "warning":
        return {
          bgColor: "bg-yellow-50",
          borderColor: "border-yellow-200",
          textColor: "text-yellow-800",
          icon: <AlertTriangle className="h-5 w-5 text-yellow-600" />,
        };
      default:
        return {
          bgColor: "bg-blue-50",
          borderColor: "border-blue-200",
          textColor: "text-blue-800",
          icon: <Info className="h-5 w-5 text-blue-600" />,
        };
    }
  };

  const { bgColor, borderColor, textColor, icon } = getToastStyles();

  return (
    <div
      className={`fixed top-4 right-4 z-50 max-w-sm w-full ${bgColor} border ${borderColor} rounded-lg shadow-lg transform transition-all duration-300 ease-in-out`}
    >
      <div className="p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0">{icon}</div>
          <div className="ml-3 w-0 flex-1 pt-0.5">
            <p className={`text-sm font-medium ${textColor}`}>{message}</p>
          </div>
          <div className="ml-4 flex-shrink-0 flex">
            <button
              className={`inline-flex ${textColor} hover:opacity-75 transition-opacity duration-200`}
              onClick={onClose}
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toast;
