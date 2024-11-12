import { useEffect, useState } from "react";

export const TypingEffectSync = ({ textPairs, speed, eraseSpeed, delay }) => {
    const [index, setIndex] = useState(0);
    const [text1, setText1] = useState("");
    const [text2, setText2] = useState("");
    const [typing, setTyping] = useState(true);

    useEffect(() => {
        let typingTimer;

        if (typing) {
            let i = 0;
            let j = 0;

            const type = () => {
                // Ensure textPairs[index] exists
                if (textPairs[index]) {
                    if (i < textPairs[index][0].length) {
                        setText1((prev) => prev + textPairs[index][0][i]);
                        i++;
                    } else if (j < textPairs[index][1].length) {
                        setText2((prev) => prev + textPairs[index][1][j]);
                        j++;
                    } else {
                        setTyping(false); // Both texts are fully typed
                        return; // Exit the typing function
                    }
                    typingTimer = setTimeout(type, speed); // Continue typing
                }
            };
            type();
        } else {
            const eraseTimer = setTimeout(() => {
                setText1("");
                setText2("");
                setTyping(true);
                setIndex((prevIndex) => (prevIndex + 1) % textPairs.length); // Cycle to the next pair
            }, delay); // Use the delay prop before erasing

            return () => clearTimeout(eraseTimer); // Cleanup erase timer
        }

        return () => clearTimeout(typingTimer); // Cleanup typing timer
    }, [typing, index, textPairs, speed, delay]);

    return (
        <div className="section-title text-left">
            <h1 className="section-main-title text-2xl">{text1}</h1>
            <h1 className="section-main-title text-2xl text-orange">{text2}</h1>
        </div>
    );
};
