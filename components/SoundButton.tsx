import React, { useState } from "react";

import { playSound } from "../services/soundService";

export interface SoundButtonProps {
    imgSrc: string;
    soundSrc?: string;
    clickHandler?: (count: number) => Promise<void>;
    triggerHappyMode: boolean;
}
const SoundButton: React.FC<SoundButtonProps> = ({ imgSrc, soundSrc, clickHandler, triggerHappyMode }) => {
    const [count, setCount] = useState<number>(0);
    const [disabled, setDisabled] = useState<boolean>(false);

    const handleClick = async () => {
        const newCount = count + 1;
        setCount(newCount);

        setDisabled(true);
        if (soundSrc) {
            await playSound(soundSrc);
        }
        if (clickHandler) {
            await clickHandler(newCount);
        }
        setDisabled(false);
    };

    return (
        <button
            type="button"
            className="btn btn-outline-secondary w-100 h-100"
            disabled={disabled && !triggerHappyMode}
            onClick={() => handleClick()}
        >
            <img src={`/img/${imgSrc}`} alt={imgSrc} className="w-100" />
        </button>
    );
};

export default SoundButton;
