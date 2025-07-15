import { useLoveLetter } from "../../LoveLetterContext";
import NavigationButtons from "../NavigationButtons";


type ToneType = "Romantic" | "Cheesy" | "Funny"| "Spicy";

type letterTemplateType = {
    [key in ToneType]: string;
}
const letterTemplate: letterTemplateType = {
    Romantic: "From the very first moment I saw you, I felt something special spark in my soul. Your {qualities} are what make you unforgettable — and every day with you is a dream I never want to wake up from.\n\n Forever yours, 💖",
    Cheesy: "You're the cheese to my macaroni, the peanut butter to my jelly! Your {qualities} are simply out of this world!\n\nLove you tons, 🧀❤️",
    Funny: "You must be a magician because whenever I look at you, everyone else disappears! Your {qualities} are like magic to me.\n\nHugs and giggles, 😂✨",
    Spicy: "You set my heart on fire with your {qualities}. Can't wait to spice things up with you tonight!\n\nYours passionately, 🔥❤️"
}
export default function Step5_FinalLoveLetter() {

        const { state} = useLoveLetter();
        const { tone, name, qualities, customMessage } = state;

        const formattedQualities = qualities.join(", ").replace(/, ([^,]*)$/, " and $1");

        const letter = letterTemplate[tone as ToneType].replace("{qualities}", formattedQualities);

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">💌 Final Love Letter</h2>
            <p className="mb-4">Here is your beautifully crafted love letter:</p>
            <div className="bg-gray-100 p-4 rounded-lg border border-gray-300">
                <p>Dear {name},</p>
                <p>{customMessage}</p>
                <p>{letter}</p>
            </div>


            <NavigationButtons />
            
        </div>
    )
}
