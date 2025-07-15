import { useLoveLetter } from "../../LoveLetterContext";
import NavigationButtons from "../NavigationButtons";

const toneOptions = ["Romantic", "Cheesy", "Funny", "Spicy"];

export default function Step1_Tone() {

    const { state, dispatch } = useLoveLetter();

    const handleSelectTone = (tone: string) => {
        dispatch({ type: "SET_TONE", payload: tone });
    };

    console.log("Current Tone:", state.tone);
    return (
        <div>
        <h2>💖 Step 1: Choose Your Letter Tone</h2>
        <p>Select the tone you'd like for your love letter:</p>
  
        <div className="flex flex-col gap-2 mt-4">
          {toneOptions.map((tone) => (
            <label key={tone} className="flex items-center gap-2">
              <input
                type="radio"
                name="tone"
                value={tone}
                checked={state.tone === tone}
                onChange={() => handleSelectTone(tone)}
              />
              {tone}
            </label>
          ))}
        </div>

        <NavigationButtons />


      </div>
    );
}