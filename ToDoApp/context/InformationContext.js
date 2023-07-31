import React, { createContext, useReducer } from "react";
import { Calendar } from 'react-native-calendars';

export const InfoContext = createContext();

const INITIAL_STATE = {
    dates: [], // Dates in the form 'YYYY-MM-DD'
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_LIST_DATES':
            return {
                ...state,
                dates: action.payload,
            };
        default:
            return state;
    }
};

const InfoContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

    const AddAllDatesAction = (data) => {
        dispatch({
            type: "ADD_LIST_DATES",
            payload: data,
        });
        const markedDates = data.reduce((acc, date) => {
            acc[date] = { marked: true };
            return acc;
        }, {});
    };

    // Format the dates in state.dates to be used in markedDates prop
    const markedDates = state.dates.reduce((acc, date) => {
        acc[date] = { marked: true };
        return acc;
    }, {});

    return (
        <InfoContext.Provider value={{ AddAllDatesAction, state, markedDates }}>
            {children}
        </InfoContext.Provider>
    );
};

export default InfoContextProvider;