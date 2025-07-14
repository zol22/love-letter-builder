import { createContext, useReducer, useContext} from "react";
import type { ReactNode } from "react";


interface LoveLetterState{
    currentStep: number;
    tone: string;
    name: string;
    qualities: string[];
    customMessage: string;
}

interface LoveLetterContextType {
    state: LoveLetterState;
    dispatch: React.Dispatch<Action>;
}

const initialState : LoveLetterState = {
    currentStep: 1,
    tone: "",
    name: "",
    qualities: [],
    customMessage: ""
}


type Action =
  | { type: "NEXT_STEP" }
  | { type: "PREVIOUS_STEP" }
  | { type: "GO_TO_STEP"; payload: number }
  | { type: "SET_TONE"; payload: string }
  | { type: "SET_NAME"; payload: string }
  | { type: "TOGGLE_QUALITY"; payload: string }
  | { type: "SET_CUSTOM_MESSAGE"; payload: string }
  | { type: "RESET" }



  function loveLetterReducer ( state: LoveLetterState,action: Action): LoveLetterState { 
    switch (action.type) {
        case "NEXT_STEP":
        return { ...state, currentStep: state.currentStep + 1 };
        case "PREVIOUS_STEP":
        return { ...state, currentStep: state.currentStep - 1 };
        case "GO_TO_STEP":
        return { ...state, currentStep: action.payload };
        case "SET_TONE":
        return { ...state, tone: action.payload };
        case "SET_NAME":
        return { ...state, name: action.payload };
        case "TOGGLE_QUALITY": {
        const qualities = state.qualities.includes(action.payload)
            ? state.qualities.filter((q) => q !== action.payload)
            : [...state.qualities, action.payload];
        return { ...state, qualities };
        }
        case "SET_CUSTOM_MESSAGE":
        return { ...state, customMessage: action.payload };
        case "RESET":
        return initialState;
        default:
        throw new Error("Unknown action type");
     }
}


const LoveLetterContext = createContext<LoveLetterContextType>({
    state: initialState,
    dispatch: () => {}
})


export function LoveLetterProvider( { children} : { children: ReactNode }) { 
    const [state, dispatch] = useReducer(loveLetterReducer, initialState);

    return (
        <LoveLetterContext.Provider value={{ state, dispatch }}>
            {children}
        </LoveLetterContext.Provider>
    );
}

// Custom Hook
export function useLoveLetter() {
    const context = useContext(LoveLetterContext);
    if (!context) {
        throw new Error("useLoveLetter must be used within a LoveLetterProvider");
    }
    return context;
}