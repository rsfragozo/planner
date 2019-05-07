const initState = {
    authError: null
};

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            console.log('login successful!');

            return {
                ...state,
                authError: null
            };
        case 'LOGIN_ERROR':
            return {
                ...state,
                authError: 'LOGIN FAILED!'
            };
        case 'LOGOUT_SUCCESS':
            console.log('log out success');
            return state;
        default:
            return state;
    }
}

export default authReducer;