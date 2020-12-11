import SoundButton, { SoundButtonProps } from "../components/SoundButton";

import Head from "next/head";
import { playSound } from "../services/soundService";

const sounds: SoundButtonProps[] = [
    {
        imgSrc: "attackPic.png",
        clickHandler: () => {
            const random = Math.floor(5 * Math.random());
            return playSound(`attack${random}.mp3`);
        }
    },
    {
        imgSrc: "eponaPic.png",
        soundSrc: "eponaSound.mp3"
    },
    {
        imgSrc: "ganonLaugh.png",
        soundSrc: "ganondorfLaugh.mp3"
    },
    {
        imgSrc: "goronPic.png",
        clickHandler: (count) => {
            switch (count % 2) {
                case 0:
                    return playSound("goronDown.mp3");
                case 1:
                    return playSound("goronUp.mp3");
                default:
                    throw new Error("Goron click did not hit any case");
            }
        }
    },
    {
        imgSrc: "heartContainer.png",
        clickHandler: async (count) => {
            await playSound("heartContainer.mp3");
            for (let i = 0; i < count; i++) {
                await playSound("getSmallHeart.mp3");
            }
        }
    },
    {
        imgSrc: "linkDying.png",
        soundSrc: "linkDie.mp3"
    },
    {
        imgSrc: "navi.png",
        clickHandler: (count) => {
            switch (count % 5) {
                case 0:
                    return playSound("listenNavi.mp3");
                case 1:
                case 3:
                    return playSound("heyNavi.mp3");
                case 2:
                case 4:
                    return playSound("helloNavi.mp3");
                default:
                    throw new Error("Navi click did not hit any case");
            }
        }
    },
    {
        imgSrc: "secretSmall.gif",
        soundSrc: "secretOld.mp3"
    },
    {
        imgSrc: "skullKidPic.png",
        soundSrc: "skullKidLaugh.mp3"
    },
    {
        imgSrc: "smallHeart.png",
        soundSrc: "getSmallHeart.mp3"
    },
    {
        imgSrc: "treasureChest.png",
        soundSrc: "box-open.wav"
    },
    {
        imgSrc: "whoawhoa.png",
        soundSrc: "whoawhoa.mp3"
    }
];

const Home: React.FC = () => {
    return (
        <div className="container">
            <Head>
                <title>Zelda Soundboard</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <img src="/img/zeldaTopLogo.png" alt="Zelda Logo" className="w-100 px-3 py-2" />
            <hr className="mt-1" />
            <div className="row d-flex align-items-center text-center">
                {sounds.map((sound) => (
                    <div className="col-4 px-1" key={sound.imgSrc}>
                        <SoundButton {...sound} />
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Home;
