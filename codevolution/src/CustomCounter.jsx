import { useReducer } from "react";

const useStateCustom = (intitialValue) =>{
    const reducer = (state, action) => {
        return action;
    };

    const [state, dispacth] = useReducer(reducer, intitialValue);

    const
};

export const CustomCounter = () => {

}