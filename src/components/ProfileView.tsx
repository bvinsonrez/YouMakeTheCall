import React, { useState } from 'react';
import { getAi } from '../ai';

const ProfileView: React.FC = () => {
    const [memory, setMemory] = useState<string>('');
    const [isGenerating, setIsGenerating] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleGenerateMemory = async () => {
        setIsGenerating(true);
        setError(null);
    
        try {
            const ai = getAi();
            const prompt = `You are a warm, nostalgic sports journalist for the Texas Rangers. Write a short, exciting paragraph (3-4 sentences) celebrating a loyal fan named John Collins. He's attended 4 games this year, seen 24 home runs, and his personal favorite moment was seeing a 414 ft blast. Frame this as a cherished ballpark memory he'll never forget.`;
            
            const response = await ai.models.generateContent({
                model: 'gemini-3-flash-preview',
                contents: prompt,
            });
    
            if (response.text) {
                setMemory(response.text);
            } else {
                setError("Couldn't create your memory. Please try again.");
            }
        } catch (e) {
            console.error(e);
            setError("An error occurred while creating your memory.");
        } finally {
            setIsGenerating(false);
        }
    };


    return (
        <div className="p-4">
             <header className="text-center mb-6">
                 <h1 className="text-3xl font-extrabold text-[#003278]">2025 BALLPARK MEMORIES</h1>
                 <p className="font-semibold text-gray-700">FOR JOHN COLLINS</p>
             </header>
             <div className="text-center mb-6">
                 <p className="text-lg text-gray-800">HERE'S A RECAP OF WHAT HAPPENED AT THE <span className="font-bold text-2xl text-[#C0111F]">4</span> RANGERS GAMES YOU ATTENDED THIS YEAR.*</p>
             </div>
             <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="memory-box">
                    <p className="font-bold text-3xl text-[#003278]">15-6</p>
                    <p className="text-xs font-semibold uppercase text-gray-600">Your Home Record</p>
                </div>
                 <div className="memory-box">
                    <p className="font-bold text-3xl text-[#003278]">71%</p>
                    <p className="text-xs font-semibold uppercase text-gray-600">Your Home Win %</p>
                </div>
                <div className="memory-box">
                    <p className="font-bold text-3xl text-[#003278]">24</p>
                    <p className="text-xs font-semibold uppercase text-gray-600">Home Runs Seen</p>
                </div>
                <div className="memory-box">
                    <p className="font-bold text-3xl text-[#003278]">414 FT</p>
                    <p className="text-xs font-semibold uppercase text-gray-600">Farthest Hit Ball</p>
                </div>
             </div>
             
            <div className="bg-white rounded-lg p-4 shadow">
                <div className="flex justify-between items-center mb-2">
                     <h2 className="font-bold text-xl text-gray-800">Trophy Case</h2>
                     <p className="text-xs text-gray-400">Sponsored by <span className="font-bold">Whataburger</span></p>
                </div>
                <ul className="space-y-3">
                    <li className="flex items-center justify-between p-3 rounded-lg bg-green-100 border border-green-300">
                        <div>
                            <p className="font-bold text-gray-800">Free Whataburger</p>
                            <p className="text-sm text-green-700">Unlocked at Level 10</p>
                        </div>
                        <i className="fas fa-check-circle text-green-500 text-2xl"></i>
                    </li>
                    <li className="p-3 rounded-lg bg-gray-100 border border-gray-300 opacity-80">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-bold text-[#003278]">VIP Batting Practice</p>
                                <p className="text-sm text-gray-600">See 30 Home Runs</p>
                            </div>
                            <i className="fas fa-lock text-gray-400 text-2xl"></i>
                        </div>
                        <div className="mt-3">
                            <div className="flex justify-between text-sm font-bold text-gray-700 mb-1">
                                <span>Progress</span>
                                <span>24 / 30</span>
                            </div>
                            <div className="w-full bg-gray-300 rounded-full h-2.5">
                                <div className="bg-[#003278] h-2.5 rounded-full" style={{ width: '80%' }}></div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

            <div className="mt-6 bg-white rounded-lg p-4 shadow">
                <div className="flex justify-between items-center mb-2">
                    <h2 className="font-bold text-xl text-gray-800">Memory Maker</h2>
                    <p className="text-xs text-gray-400">Powered by Gemini</p>
                </div>
                {memory ? (
                    <div className="p-4 bg-blue-50 border border-dashed border-[#003278] rounded-lg">
                        <p className="text-gray-700 italic">"{memory}"</p>
                    </div>
                ) : error ? (
                    <p className="text-red-500 text-center py-4">{error}</p>
                ) : (
                    <div className="text-center py-4">
                        <p className="text-gray-600 mb-4">Let AI create a unique story about your season so far!</p>
                        <button 
                            onClick={handleGenerateMemory} 
                            disabled={isGenerating}
                            className="bg-[#003278] text-white font-bold py-2 px-5 rounded-full hover:bg-blue-800 transition disabled:opacity-50"
                        >
                            {isGenerating ? (
                                <>
                                    <i className="fas fa-spinner fa-spin mr-2"></i>
                                    <span>Writing...</span>
                                </>
                            ) : (
                                "✨ Create My Memory"
                            )}
                        </button>
                    </div>
                )}
            </div>

        </div>
    );
};

export default ProfileView;