import React, { useState, useEffect, useCallback } from 'react';
import { View, Prediction, PredictionStatus } from './types';
import HomeView from './components/HomeView';
import PredictView from './components/PredictView';
import PredictionLockedView from './components/PredictionLockedView';
import LeaderboardView from './components/LeaderboardView';
import ProfileView from './components/ProfileView';
import BottomNav from './components/BottomNav';
import PremiumModal from './components/PremiumModal';
import ConfettiAlert from './components/ConfettiAlert';

// This is to inform TypeScript about the confetti function from the CDN script
declare global {
    interface Window {
        confetti: (options?: any) => void;
    }
}

const initialPredictions: Prediction[] = [
    {
        description: 'Adolis Garcia to get an RBI',
        status: PredictionStatus.Correct,
        points: 50,
    },
    {
        description: 'Rangers to score first',
        status: PredictionStatus.Incorrect,
        points: 0,
    },
];

const App: React.FC = () => {
    const [currentView, setCurrentView] = useState<View>(View.Home);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isAlertVisible, setIsAlertVisible] = useState(false);
    const [isProMember, setIsProMember] = useState(false);
    const [lockedPrediction, setLockedPrediction] = useState<string | null>(null);
    const [predictions, setPredictions] = useState<Prediction[]>(initialPredictions);

    const showModal = () => setIsModalOpen(true);
    const hideModal = () => setIsModalOpen(false);

    const handleNavigate = (view: View) => {
        if (view === View.Predict && lockedPrediction) {
            setCurrentView(View.PredictionLocked);
        } else {
            setCurrentView(view);
        }
    };

    const handleLockPrediction = (prediction: string) => {
        const newPrediction: Prediction = {
            description: `Corey Seager to hit a ${prediction}`,
            status: PredictionStatus.InProgress,
            points: null,
        };
        setPredictions(prev => [...prev, newPrediction]);
        setLockedPrediction(prediction);
        setCurrentView(View.PredictionLocked);
    };

    const handleStartTrial = () => {
        hideModal();
        setIsProMember(true);
        setIsAlertVisible(true);
        window.confetti({
            particleCount: 150,
            spread: 90,
            origin: { y: 0.6 }
        });

        setTimeout(() => {
            setIsAlertVisible(false);
        }, 3000);
    };

    const renderView = () => {
        switch (currentView) {
            case View.Home:
                return <HomeView onNavigate={handleNavigate} onUpgradeClick={showModal} isProMember={isProMember} />;
            case View.Predict:
                return <PredictView onLockPrediction={handleLockPrediction} onUpgradeClick={showModal} />;
            case View.PredictionLocked:
                return <PredictionLockedView lockedPrediction={lockedPrediction} predictions={predictions} />;
            case View.Leaderboard:
                return <LeaderboardView />;
            case View.Profile:
                return <ProfileView />;
            default:
                return <HomeView onNavigate={handleNavigate} onUpgradeClick={showModal} isProMember={isProMember} />;
        }
    };

    return (
        <div className="phone-border">
            <div className="app-container">
                <main className="flex-grow overflow-y-auto">
                    {renderView()}
                </main>
                <BottomNav currentView={currentView} onNavigate={handleNavigate} isPredictionLocked={!!lockedPrediction} />
                {isModalOpen && <PremiumModal onClose={hideModal} onStartTrial={handleStartTrial} />}
                <ConfettiAlert isVisible={isAlertVisible} />
            </div>
        </div>
    );
};

export default App;