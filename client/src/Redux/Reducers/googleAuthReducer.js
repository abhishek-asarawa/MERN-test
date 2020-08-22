let isAuth = false;

const reducer = (state = isAuth, action) => {
    if (action.type === "google auth"){
        return action.payload;
    };

    return state;
};


export default reducer;