import React from 'react';
import { View } from '../types';

interface HomeViewProps {
    onNavigate: (view: View) => void;
    onUpgradeClick: () => void;
    isProMember: boolean;
}

const HomeView: React.FC<HomeViewProps> = ({ onNavigate, onUpgradeClick, isProMember }) => {
    return (
        <div>
            <header className="flex justify-between items-center p-4">
                <div className="flex items-center space-x-3">
                    <div id="user-avatar" className={`relative ${isProMember ? 'border-4 border-[#FFD700] rounded-full' : ''}`}>
                         <div className="avatar-placeholder w-12 h-12 bg-gray-600 text-lg">
                            <span>JC</span>
                        </div>
                    </div>
                    <div>
                        <p className="font-bold text-lg text-gray-800">Level 12</p>
                        <p className="text-sm text-gray-500">Rookie</p>
                    </div>
                </div>
                <button onClick={onUpgradeClick} className="bg-[#FFD700] text-black font-bold py-2 px-4 rounded-full text-sm shadow-md hover:bg-yellow-400 transition">Upgrade</button>
            </header>
            <div className="p-4 text-center bg-[#003278] text-white">
                <h1 className="text-4xl font-extrabold tracking-tight">TONIGHT'S GAME</h1>
                <div className="flex justify-center items-center space-x-4 my-4">
                    <img src="https://www.mlbstatic.com/team-logos/140.svg" alt="Rangers" className="w-16 h-16"/>
                    <span className="text-4xl font-bold">vs</span>
                    <img src="https://www.mlbstatic.com/team-logos/117.svg" alt="Astros" className="w-16 h-16"/>
                </div>
                <p className="font-semibold">GLOBE LIFE FIELD</p>
            </div>
            <div className="p-4">
                <div className="text-center mb-4">
                    <h2 className="text-lg font-bold text-gray-800">We'll track the best for you. <span className="text-[#C0111F]">▼</span></h2>
                     <p className="text-xs text-gray-400 mt-2">Game Stats Sponsored by <span className="font-bold">Energy Transfer</span></p>
                </div>
                <div className="grid grid-cols-3 gap-3 mb-6">
                    <div className="stat-card-red rounded-lg p-4 text-center text-white">
                        <p className="text-xs font-semibold opacity-80">Fastest Pitch</p>
                        <p className="text-3xl font-bold">98.9</p>
                        <p className="text-xs font-semibold opacity-80">MPH</p>
                    </div>
                    <div className="bg-[#003278] rounded-lg p-4 text-center text-white">
                        <p className="text-xs font-semibold opacity-80">Hardest Hit</p>
                        <p className="text-3xl font-bold">110.5</p>
                        <p className="text-xs font-semibold opacity-80">MPH</p>
                    </div>
                    <div className="stat-card-red rounded-lg p-4 text-center text-white">
                        <p className="text-xs font-semibold opacity-80">Farthest Hit</p>
                        <p className="text-3xl font-bold">398'</p>
                        <p className="text-xs font-semibold opacity-80">FEET</p>
                    </div>
                </div>
                <button onClick={() => onNavigate(View.Predict)} className="w-full bg-[#003278] text-white font-bold py-4 px-4 rounded-lg text-xl shadow-lg hover:bg-blue-800 transition">Make the Call</button>
            </div>
        </div>
    );
};

export default HomeView;
