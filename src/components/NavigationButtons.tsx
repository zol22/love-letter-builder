import { useLoveLetter } from "../LoveLetterContext";


export default function NavigationButtons() { 

    const { state, dispatch } = useLoveLetter();
    const { currentStep, tone, name, qualities } = state;

      // Validation for disabling "Next" button
    const isNextDisabled =
    (currentStep === 1 && !tone) ||
    (currentStep === 2 && name.trim() === "") ||
    (currentStep === 3 && qualities.length === 0);

    return (
        <div className="flex justify-between mt-6">
            {/* Back button (not on first step) */}
            {currentStep > 1 && currentStep < 5 && (
                <button
                onClick={() => dispatch({ type: "PREVIOUS_STEP" })}
                className="px-4 py-2 bg-gray-300 rounded"
                >
                ⬅ Back
                </button>
            )}

            {/* Next button (only on steps 1–4), CurrentStep Logic */}
            {currentStep < 5 && (
                <button
                onClick={() => dispatch({ type: "NEXT_STEP" })}
                disabled={isNextDisabled}
                className={`px-4 py-2 rounded ${
                    isNextDisabled ? "bg-gray-200 cursor-not-allowed" : "bg-pink-500 text-white"
                }`}
                >
                Next ➡
                </button>
            )}

             {/* Restart button (only on final step) */}
            {currentStep === 5 && (
                <button
                onClick={() => dispatch({ type: "RESET" })}
                className="px-4 py-2 bg-red-500 text-white rounded"
                >
                🔁 Start Over
                </button>
            )}
            
        </div>    
        )
}