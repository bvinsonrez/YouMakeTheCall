import React from 'react';

interface PremiumModalProps {
    onClose: () => void;
    onStartTrial: () => void;
}

const PremiumModal: React.FC<PremiumModalProps> = ({ onClose, onStartTrial }) => {
    return (
        <div className="premium-modal fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl w-full max-w-sm p-6 shadow-2xl relative">
                <button onClick={onClose} aria-label="Close" className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
                    <i className="fas fa-times text-2xl"></i>
                </button>
                <h2 className="text-3xl font-bold text-center mb-2 text-[#003278]">Become a Rangers Pro</h2>
                <p className="text-center text-gray-500 mb-6">Unlock exclusive features and rewards!</p>
                <div className="space-y-4">
                    <div className="border rounded-lg p-4">
                        <h3 className="font-bold text-lg text-gray-800">Rookie (Free)</h3>
                        <p className="text-sm text-gray-600">Track Stats, Play for Free</p>
                    </div>
                    <div className="border-2 border-[#003278] rounded-lg p-4 bg-blue-50">
                        <h3 className="font-bold text-lg text-[#003278]">Pro ($4.99/mo)</h3>
                        <p className="text-sm text-gray-600">1.5x Points, Scouting Reports, Early Reward Access</p>
                    </div>
                     <div className="relative border-2 border-[#FFD700] rounded-lg p-4 bg-yellow-50">
                         <span className="absolute -top-3 right-4 bg-[#FFD700] text-black text-xs font-bold px-2 py-1 rounded-full">BEST VALUE</span>
                        <h3 className="font-bold text-lg text-[#003278]">Season Pass ($39.99/yr)</h3>
                        <p className="text-sm text-gray-600">2x Points, VIP Entrance Line, Digital 'Captain' Badge</p>
                    </div>
                </div>
                <button onClick={onStartTrial} className="w-full mt-6 bg-[#003278] text-white font-bold py-3 rounded-lg text-lg hover:bg-blue-800 transition">Start 7-Day Free Trial</button>
            </div>
        </div>
    );
};

export default PremiumModal;