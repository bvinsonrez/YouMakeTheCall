
import React from 'react';

interface ConfettiAlertProps {
    isVisible: boolean;
}

const ConfettiAlert: React.FC<ConfettiAlertProps> = ({ isVisible }) => {
    const visibilityClasses = isVisible 
        ? 'opacity-100 transform scale-100' 
        : 'opacity-0 pointer-events-none transform scale-90';

    return (
        <div className={`confetti-alert fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-lg shadow-2xl text-center z-50 ${visibilityClasses}`}>
            <h2 className="text-2xl font-bold text-green-600">Welcome to the Club!</h2>
            <p className="text-gray-700 mt-2">Your Pro membership is now active.</p>
        </div>
    );
};

export default ConfettiAlert;
