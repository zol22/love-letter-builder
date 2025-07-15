import { useLoveLetter } from "../../LoveLetterContext";
import NavigationButtons from "../NavigationButtons";

export default function Step3_Qualities() {
    const { state, dispatch } = useLoveLetter();
    
    const qualities = [
        "Kindness",
        "Sense of humor",
        "Intelligence",
        "Adventurous spirit",
        "Supportiveness",
        "Creativity",
        "Passion",
        "Empathy"
    ];
    
    const handleToggleQuality = (quality: string) => {
        dispatch({ type: "TOGGLE_QUALITY", payload: quality });
    };
    
    console.log("Current Qualities:", state.qualities);
    return (
        <div>
        <h2>💖 Step 3: Select Their Qualities</h2>
        <p>Choose the qualities that best describe your beloved:</p>
        <div className="qualities-grid">
            {qualities.map((quality) => (
            <label key={quality} className="quality-label m-2">
                <input
                type="checkbox"
                checked={state.qualities.includes(quality)}
                onChange={() => handleToggleQuality(quality)}
                className="mr-2"
                />
                {quality}
            </label>
            ))}
        </div>
        <p>Selected Qualities: {state.qualities.join(", ")}</p>

        <NavigationButtons />
        
        </div>
    );
}