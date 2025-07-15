import Step1_Tone from "./steps/Step1_Tone";
import Step2_Name from "./steps/Step2_Name";
import Step3_Qualities from "./steps/Step3_Qualities";
import Step4_CustomMessage from "./steps/Step4_CustomMessage";
import { useLoveLetter } from "../LoveLetterContext";
import Step5_FinalLoveLetter from "./steps/Step5_FinalLoveLetter";

export default function LoveLetterBuilder() {
    const { state } = useLoveLetter();
    const { currentStep } = state;


    return (
      <div className="max-w-xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">💌 Love Letter Builder</h1>
        <p className="text-center text-gray-500 mb-8">Step {currentStep} of 5</p>

        {/* Render the correct step component */}
        {currentStep === 1 && <Step1_Tone />}
        {currentStep === 2 && <Step2_Name />}
        {currentStep === 3 && <Step3_Qualities />}
        {currentStep === 4 && <Step4_CustomMessage />}
        {currentStep === 5 && <Step5_FinalLoveLetter />}

        {/* Navigation buttons */}
     </div>
    );
}