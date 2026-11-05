import React from 'react';
import { View } from '../types';

interface NavItem {
    view: View;
    icon: string;
    label: string;
}

const navItems: NavItem[] = [
    { view: View.Home, icon: 'fas fa-home', label: 'Home' },
    { view: View.Predict, icon: 'fas fa-baseball-ball', label: 'Predict' },
    { view: View.Leaderboard, icon: 'fas fa-trophy', label: 'Leaderboard' },
    { view: View.Profile, icon: 'fas fa-user', label: 'Profile' }
];

interface BottomNavProps {
    currentView: View;
    onNavigate: (view: View) => void;
    isPredictionLocked: boolean;
}

const BottomNav: React.FC<BottomNavProps> = ({ currentView, onNavigate, isPredictionLocked }) => {
    return (
        <nav className="bg-white shadow-lg grid grid-cols-4 text-center">
            {navItems.map(item => {
                const isPredictTab = item.view === View.Predict;
                const isActive = currentView === item.view || (currentView === View.PredictionLocked && isPredictTab);

                return (
                    <button 
                        key={item.view}
                        onClick={() => onNavigate(item.view)}
                        className={`nav-icon p-4 text-gray-500 hover:bg-gray-100 relative ${isActive ? 'active' : ''}`}
                    >
                        <i className={`${item.icon} text-2xl`}></i>
                        {isPredictTab && isPredictionLocked && (
                            <i className="fas fa-lock absolute text-yellow-500 lock-pulse" style={{ top: '10px', right: '25px', textShadow: '0 0 5px black' }}></i>
                        )}
                        <span className="text-xs block">{item.label}</span>
                    </button>
                )
            })}
        </nav>
    );
};

export default BottomNav;