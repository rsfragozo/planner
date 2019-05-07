export const signIn = (credentials) => {
    return (dispatch, state, {getFirebase}) => {
        const fireabse = getFirebase();

        fireabse.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({ type: 'LOGIN_SUCCESS' });
        }).catch(() => {
            dispatch({ type: 'LOGIN_ERROR' });
        });
    }
}

export const signOut = () => {
    return (dispatch, state, { getFirebase }) => {
        const fireabse = getFirebase();

        fireabse.auth().signOut().then(() => {
            dispatch({ type: 'LOGOUT_SUCCESS' });
        });
    }
}