import { useState } from "react";

const initialState = {
    user_id: null
}

const useInitialState = () => {
    const [state, setState] = useState(initialState);

    const setUser = (payload) => {
        setState({
            user_id: payload
        });
        sessionStorage.setItem('user_id', payload);
    }

    return {
        state,
        setUser
    };
}

export default useInitialState;