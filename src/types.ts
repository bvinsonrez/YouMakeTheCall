export enum View {
    Home = 'home',
    Predict = 'predict',
    Leaderboard = 'leaderboard',
    Profile = 'profile',
    PredictionLocked = 'prediction-locked'
}

export enum PredictionStatus {
    Correct = 'Correct!',
    Incorrect = 'Incorrect',
    InProgress = 'In Progress...'
}

export interface Prediction {
    description: string;
    status: PredictionStatus;
    points: number | null;
}

export interface LeaderboardUser {
    rank: number;
    name: string;
    initials: string;
    points: string;
    isPro: boolean;
    isYou: boolean;
    avatarBg: string;
}
