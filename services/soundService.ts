export const playSound = (filename: string): Promise<void> => {
    const src = `/sounds/${filename}`;
    const audio = new Audio(src);
    return audio.play();
};
