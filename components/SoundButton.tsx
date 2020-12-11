import React, { useState } from "react";

import { playSound } from "../services/soundService";

export interface SoundButtonProps {
    imgSrc: string;
    soundSrc?: string;
    clickHandler?: (count: number) => Promise<void>;
}
const SoundButton: React.FC<SoundButtonProps> = ({ imgSrc, soundSrc, clickHandler }) => {
    const [count, setCount] = useState<number>(0);

    const handleClick = async () => {
        const newCount = count + 1;
        setCount(newCount);

        if (soundSrc) {
            return playSound(soundSrc);
        }
        if (clickHandler) {
            return clickHandler(newCount);
        }
    };

    return (
        <button type="button" className="btn btn-outline-secondary w-100 h-100">
            <img src={`/img/${imgSrc}`} alt={imgSrc} onClick={() => handleClick()} className="w-100" />
        </button>
    );
};

export default SoundButton;
