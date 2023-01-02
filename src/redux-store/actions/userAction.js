
export const INITIALIZE_USERS = "INITIALIZE_USERS";

export const initializeUsers = (payload) =>{
    return{
        type:INITIALIZE_USERS,
        payload
    }
}