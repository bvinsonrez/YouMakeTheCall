import React from 'react';
import { LeaderboardUser } from '../types';

const leaderboardData: LeaderboardUser[] = [
    { rank: 1, name: 'RangerRick', initials: 'RR', points: '2,345 pts', isPro: true, isYou: false, avatarBg: 'bg-blue-800' },
    { rank: 2, name: 'You', initials: 'JC', points: '2,100 pts', isPro: false, isYou: true, avatarBg: 'bg-gray-600' },
    { rank: 3, name: 'GlobeLifeGuru', initials: 'GG', points: '1,980 pts', isPro: true, isYou: false, avatarBg: 'bg-red-700' },
    { rank: 4, name: 'SliderFan', initials: 'SF', points: '1,850 pts', isPro: false, isYou: false, avatarBg: 'bg-indigo-500' },
    { rank: 5, name: 'CaptainCrush', initials: 'CC', points: '1,720 pts', isPro: true, isYou: false, avatarBg: 'bg-purple-600' },
];

const LeaderboardView: React.FC = () => {
    return (
        <div className="p-4">
             <header className="text-center mb-4 p-4 bg-white rounded-lg shadow">
                 <h1 className="text-2xl font-bold text-[#003278]">American Airlines High Flyers</h1>
             </header>
            <ul className="space-y-3">
                {leaderboardData.map(user => (
                    <li key={user.rank} className="flex items-center justify-between bg-white p-3 rounded-lg shadow">
                        <div className="flex items-center">
                            <span className="font-bold text-lg mr-4 w-6 text-center">{user.rank}.</span>
                             <div className={`avatar-placeholder w-10 h-10 mr-3 ${user.avatarBg}`}><span>{user.initials}</span></div>
                            <div>
                                <p className="font-bold">{user.name}</p>
                                <p className="text-sm text-gray-500">{user.points}</p>
                            </div>
                        </div>
                        {user.isPro && (
                            <span className="bg-[#FFD700] text-black text-xs font-bold px-2 py-1 rounded-full">Pro <i className="fas fa-crown ml-1"></i></span>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LeaderboardView;