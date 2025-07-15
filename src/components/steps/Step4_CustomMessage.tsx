import { useLoveLetter } from "../../LoveLetterContext";
import NavigationButtons from "../NavigationButtons";
export default function Step4_CustomMessage() {
        const { state, dispatch } = useLoveLetter();

    const handleSetCustomMessage = (message: string) => {
        dispatch({ type: "SET_CUSTOM_MESSAGE", payload: message });
    };
    console.log("Current Custom Message:", state.customMessage);
    
    return (
        <div>
            <h2>✍️ Step 4: Add a Custom Message</h2>
            <p>Write a personal message to your beloved:</p>
            <textarea
                rows={4}
                placeholder="Type your custom message here..."
                className="w-full p-2 border border-gray-300 rounded"
                onChange={(e)=> handleSetCustomMessage(e.target.value)}
                value={state.customMessage}
            />
            <p>Your custom message will be included in the final letter.</p>
            <p>Feel free to express your feelings and thoughts!</p>

        <NavigationButtons />
        
        </div>
    )
}