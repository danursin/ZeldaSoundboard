import Head from "next/head";
import SoundButton from "../components/SoundButton";

const Home: React.FC = () => {
    return (
        <div>
            <Head>
                <title>Zelda Soundboard</title>
                <link rel="icon" href="/favicon.ico" />
          </Head>
          
          <div className="grid">
            <SoundButton imgSrc="eponaPic.png" soundSrc="eponaSound.mp3" />
            <SoundButton imgSrc="ganonLaugh.png" soundSrc="ganondorfLaugh.mp3" />
            <SoundButton imgSrc="linkDying.png" soundSrc="linkDie.mp3" />
            <SoundButton imgSrc="secretSmall.gif" soundSrc="secretOld.mp3" />
            <SoundButton imgSrc="skullKidPic.png" soundSrc="skullKidLaugh.mp3" />
            <SoundButton imgSrc="smallHeart.png" soundSrc="getSmallHeart.mp3" />
            <SoundButton imgSrc="treasureChest.png" soundSrc="box-open.wav" />
            <SoundButton imgSrc="whoawhoa.png" soundSrc="whoawhoa.mp3"/>
          </div>
        </div>
    );
};
export default Home;
