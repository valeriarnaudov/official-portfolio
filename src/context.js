import { createContext, useReducer } from "react";

export const ThemeContext = createContext();

const INITIAL_STATE = { lightMode: false };

const themeReducer = (state, action) => {
    switch (action.type) {
        case "TOGGLE":
            return { lightMode: !state.lightMode };

        default:
            return state;
    }
};

export const ThemeProvider = (props) => {
    const [state, dispatch] = useReducer(themeReducer, INITIAL_STATE);

    return (
        <ThemeContext.Provider value={{ state, dispatch }}>
            {props.children}
        </ThemeContext.Provider>
    );
};
