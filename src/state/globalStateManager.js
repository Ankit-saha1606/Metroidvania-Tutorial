
export const statePropsEnum={
    playerHp: "playerHp",
    isDoubleJumpUnlocked: "isDoubleJumpUnlocked",
    playerIsINBossFight: "playerIsINBossFight",
    isBossDefeated: "isBossDefeated",
};

function initStateManager() {
    const state={
        playerHp: 3,
        maxPlayerHp: 3,
        isDoubleJumpUnlocked:false,
        playerIsINBossFight:false,
        isBossDefeated:false,
    };

    return {
        current () {
            return{...state};
        },
        set(property, value){
          state[property]=value;
        },
    };
}

export const state=initStateManager();