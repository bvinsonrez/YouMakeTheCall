import React, { useState, useEffect } from 'react';
import { getAi } from '../ai';

interface PredictViewProps {
    onLockPrediction: (prediction: string) => void;
    onUpgradeClick: () => void;
}

const predictionOptions = ['Home Run', 'Single/Double', 'Walk', 'Out'];

const PredictView: React.FC<PredictViewProps> = ({ onLockPrediction, onUpgradeClick }) => {
    const [timeLeft, setTimeLeft] = useState(12);
    const [intel, setIntel] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Exit early if timer is already at 0
        if (timeLeft <= 0) return;

        const timer = setInterval(() => {
            setTimeLeft(prevTime => {
                if (prevTime <= 1) {
                    clearInterval(timer);
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);

        // Cleanup interval on component unmount
        return () => clearInterval(timer);
    }, []); // Run only once on component mount
    
    const handleFetchIntel = async () => {
        setIsLoading(true);
        setError(null);
        
        try {
            const ai = getAi();
            const prompt = `You are an expert MLB scout. Provide a short, exciting, and insightful scouting report for Texas Rangers' Corey Seager batting against the Houston Astros' pitcher in the top of the 3rd with 2 outs. Mention his strengths, what the pitcher might throw, and what to watch for in this specific at-bat. Keep it to 2-3 sentences.`;
            
            const response = await ai.models.generateContent({
                model: 'gemini-3-flash-preview',
                contents: prompt,
            });
    
            if (response.text) {
                setIntel(response.text);
            } else {
                setError("Couldn't generate the report. Please try again.");
            }
        } catch (e) {
            console.error(e);
            setError("An error occurred while fetching scouting intel.");
        } finally {
            setIsLoading(false);
        }
    };


    return (
        <div className="p-4">
             <div className="bg-white rounded-lg p-6 text-center shadow-lg">
                <p className="text-lg text-gray-600">Top 3rd - 2 Outs</p>
                <h2 className="text-3xl font-bold my-2" style={{ color: '#003278' }}>Corey Seager Batting</h2>
                <div className="my-6">
                    <div className={`w-24 h-24 mx-auto rounded-full border-4 ${timeLeft > 5 ? 'border-[#003278]' : 'border-red-500'} flex items-center justify-center text-4xl font-bold transition-colors duration-500`}>
                        {timeLeft}
                    </div>
                    <p className="text-sm text-gray-500 mt-2">seconds remaining</p>
                </div>
                 <div className="relative bg-yellow-100 border border-yellow-400 text-yellow-800 px-4 py-2 rounded-lg mb-4 text-sm">
                    <span className="font-bold">Golden Prediction!</span> Sponsored by <span className="font-bold">Golden Chick</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    {predictionOptions.map(option => (
                         <button 
                            key={option} 
                            onClick={() => onLockPrediction(option)} 
                            className="bg-gray-200 p-4 rounded-lg hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
                            disabled={timeLeft === 0}
                         >
                            {option}
                        </button>
                    ))}
                </div>
                <div className="mt-6 p-4 rounded-lg bg-gray-100 border border-dashed text-center min-h-[110px] flex flex-col justify-center items-center">
                    <p className="font-bold text-gray-700">Scouting Intel:</p>
                    {error ? (
                        <p className="text-red-500 mt-2 text-sm">{error}</p>
                    ) : intel ? (
                        <p className="text-gray-600 mt-2 text-sm italic">"{intel}"</p>
                    ) : (
                        <>
                            <p className="text-gray-500 blur-sm select-none">Seager has a .350 average against curveballs this season.</p>
                            <button 
                                onClick={handleFetchIntel} 
                                disabled={isLoading}
                                className="mt-2 text-sm text-black bg-[#FFD700] font-bold py-1 px-3 rounded-full hover:bg-yellow-400 transition disabled:opacity-75"
                            >
                                {isLoading ? (
                                    <>
                                        <i className="fas fa-spinner fa-spin mr-1"></i>
                                        <span>Unlocking...</span>
                                    </>
                                ) : 'Unlock AI Scout Intel'}
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PredictView;