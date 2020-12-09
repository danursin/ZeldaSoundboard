import Image from "next/image";
import React from "react";
import { playSound } from "../services/soundService";

interface SoundButtonProps {
    imgSrc: string;
    soundSrc: string;
}
const SoundButton: React.FC<SoundButtonProps> = ({ imgSrc, soundSrc }) => {
    return <img src={`/img/${imgSrc}`} alt={imgSrc} onClick={() => playSound(soundSrc)} className="col sound-button" />;
};

export default SoundButton;
