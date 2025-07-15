import { useLoveLetter } from "../../LoveLetterContext";
import NavigationButtons from "../NavigationButtons";
export default function Step2_Name() {
    const { state, dispatch } = useLoveLetter();
    
    const handleSelectName = (name: string) => {
        dispatch({ type: "SET_NAME", payload: name });
    };
    console.log("Current Name:", state.name);
    return(
        <div>
                <h2>💬 Step 2: Enter Their Name</h2>
                <p>Type the name of your beloved below:</p>            
                <input
                type="text"
                name="name"
                value={state.name}
                onChange={(e) => handleSelectName(e.target.value)}
                placeholder="Enter the name of your beloved"
                className="w-full p-2 border border-gray-300 rounded"
              />

            <NavigationButtons />
              
        </div>
    )
}