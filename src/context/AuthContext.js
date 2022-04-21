import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
    user: {
        _id: "621e6532d2cf1c00ab443448",
        username:"test",
        email:"test@gmail.com",
        password:"$2b$10$MTUmUsh0uQVNLt/08J6Yk.tP5IbTqqo8LZ8uwU8WfSlk7DqV5e.XG",
        profilePicture:"",
        coverPicture:"",
        followers: [],
        followings: [],
    },
    isFetching: false,
    error: false
};



export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
    return (
        <AuthContext.Provider value= {{
            user:state.user, 
            isFetching:state.isFetching,
            error: state.error,
            dispatch,

        }}
        > {children} 
        </AuthContext.Provider>
    )
}