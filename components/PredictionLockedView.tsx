import React from 'react';
import { Prediction, PredictionStatus } from '../types';

interface PredictionLockedViewProps {
    lockedPrediction: string | null;
    predictions: Prediction[];
}

const PredictionItem: React.FC<{ prediction: Prediction }> = ({ prediction }) => {
    const getStatusColor = () => {
        switch (prediction.status) {
            case PredictionStatus.Correct:
                return 'text-green-600';
            case PredictionStatus.Incorrect:
                return 'text-red-600';
            default:
                return 'text-gray-500';
        }
    };

    const getPointsColor = () => {
         switch (prediction.status) {
            case PredictionStatus.Correct:
                return 'text-green-600';
            case PredictionStatus.Incorrect:
                return 'text-red-600';
            default:
                return '';
        }
    }

    return (
        <li className={`flex items-center justify-between bg-white p-3 rounded-lg shadow-sm ${prediction.status === PredictionStatus.InProgress ? 'opacity-60' : ''}`}>
            <div>
                <p className="font-semibold text-gray-800">{prediction.description}</p>
                <p className={`text-sm font-bold ${getStatusColor()}`}>{prediction.status}</p>
            </div>
            {prediction.status === PredictionStatus.InProgress ? (
                 <i className="fas fa-hourglass-half text-gray-500"></i>
            ) : (
                <span className={`font-bold ${getPointsColor()}`}>{prediction.status === PredictionStatus.Correct ? `+${prediction.points}`: '0'} pts</span>
            )}
        </li>
    );
}

const PredictionLockedView: React.FC<PredictionLockedViewProps> = ({ lockedPrediction, predictions }) => {
    return (
        <div className="p-4">
            <div className="bg-white rounded-lg p-6 text-center shadow-lg">
                <i className="fas fa-lock text-4xl text-green-500 mb-3"></i>
                <h2 className="text-2xl font-bold text-[#003278]">Prediction Locked!</h2>
                <p className="text-gray-600 mb-6">You predicted a <span className="font-bold">{lockedPrediction}</span> for Corey Seager.</p>
            </div>

            <div className="mt-6">
                <h3 className="font-bold text-lg mb-3 text-gray-800">Your Game Predictions:</h3>
                <ul className="space-y-3">
                    {predictions.map((p, index) => <PredictionItem key={index} prediction={p} />)}
                </ul>
            </div>
        </div>
    );
};

export default PredictionLockedView;