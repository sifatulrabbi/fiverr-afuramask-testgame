import React from "react";

const RewardContext = React.createContext(null);

export function useReward() {
    return React.useContext(RewardContext);
}

export function RewardProvider({ children }) {
    const [reward, setReward] = React.useState(null);

    function updateReward(num) {
        setReward(num);
    }

    const value = {
        reward,
        updateReward,
    };

    return (
        <RewardContext.Provider value={value}>
            {children}
        </RewardContext.Provider>
    );
}
