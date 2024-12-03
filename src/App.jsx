// import { useState } from 'react'
import useSound from 'use-sound'
import './App.css'
import {useEffect, useState} from "react";

function App() {
    const [message, setMessage] = useState('');

    const [play1] = useSound('https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3', {volume: 0.15});
    const [play2] = useSound("https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3", {volume: 0.15})
    const [play3] = useSound("https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3", {volume: 0.15});
    const [play4] = useSound("https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3", {volume: 0.15});
    const [play5] = useSound("https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3", {volume: 0.15});
    const [play6] = useSound("https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3", {volume: 0.15});
    const [play7] = useSound("https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3", {volume: 0.15});
    const [play8] = useSound("https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3", {volume: 0.15});
    const [play9] = useSound("https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3", {volume: 0.15});

    const handlePlay1 = (event) => {
        const id = event.currentTarget.id;
        setMessage(id);
        play1();
    };

    const handlePlay2 = (event) => {
        const id = event.currentTarget.id;
        setMessage(id);
        play2();
    };

    const handlePlay3 = (event) => {
        const id = event.currentTarget.id;
        setMessage(id);
        play3();
    };

    const handlePlay4 = (event) => {
        const id = event.currentTarget.id;
        setMessage(id);
        play4();
    };

    const handlePlay5 = (event) => {
        const id = event.currentTarget.id;
        setMessage(id);
        play5();
    };

    const handlePlay6 = (event) => {
        const id = event.currentTarget.id;
        setMessage(id);
        play6();
    };

    const handlePlay7 = (event) => {
        const id = event.currentTarget.id;
        setMessage(id);
        play7();
    };

    const handlePlay8 = (event) => {
        const id = event.currentTarget.id;
        setMessage(id);
        play8();
    };

    const handlePlay9 = (event) => {
        const id = event.currentTarget.id;
        setMessage(id);
        play9();
    };

    useEffect(() => {
        const globalPlaySoundByKey = (e, key, soundFn, id) => {
            if (e.key.toLowerCase() === key.toLowerCase()) {
                setMessage(id);
                soundFn()
            }
        }

        const globalKeydownQ = (e) => globalPlaySoundByKey(e, 'q', play1, "heater-1")
        const globalKeydownW = (e) => globalPlaySoundByKey(e, 'w', play2, "heater-2")
        const globalKeydownE = (e) => globalPlaySoundByKey(e, 'e', play3, "heater-3")
        const globalKeydownA = (e) => globalPlaySoundByKey(e, 'a', play4, "heater-4")
        const globalKeydownS = (e) => globalPlaySoundByKey(e, 's', play5, "clap")
        const globalKeydownD = (e) => globalPlaySoundByKey(e, 'd', play6, "open-hh")
        const globalKeydownZ = (e) => globalPlaySoundByKey(e, 'z', play7, "kick-n-hat")
        const globalKeydownX = (e) => globalPlaySoundByKey(e, 'x', play8, "kick")
        const globalKeydownC = (e) => globalPlaySoundByKey(e, 'c', play9, "closed-hh")

        document.addEventListener("keydown", globalKeydownQ);
        document.addEventListener("keydown", globalKeydownW);
        document.addEventListener("keydown", globalKeydownE);
        document.addEventListener("keydown", globalKeydownA);
        document.addEventListener("keydown", globalKeydownS);
        document.addEventListener("keydown", globalKeydownD);
        document.addEventListener("keydown", globalKeydownZ);
        document.addEventListener("keydown", globalKeydownX);
        document.addEventListener("keydown", globalKeydownC);

        return () => {
            document.removeEventListener("keydown", globalKeydownQ);
            document.removeEventListener("keydown", globalKeydownW);
            document.removeEventListener("keydown", globalKeydownE);
            document.removeEventListener("keydown", globalKeydownA);
            document.removeEventListener("keydown", globalKeydownS);
            document.removeEventListener("keydown", globalKeydownD);
            document.removeEventListener("keydown", globalKeydownZ);
            document.removeEventListener("keydown", globalKeydownX);
            document.removeEventListener("keydown", globalKeydownC);
        }
    }, [play1, play2, play3, play4, play5, play6, play7, play8, play9]);

    return (
        <>
            <div id={"drum-machine"}>

                <div id={"name-container"}>
                    {message}
                </div>

                <div id={"display"}>
                    <div id={"heater-1"} className={"drum-pad name"} onClick={handlePlay1}>
                        Q
                    </div>

                    <div id={"heater-2"} className={"drum-pad"} onClick={handlePlay2}>
                    W
                    </div>
                    <div id={"heater-3"} className={"drum-pad"} onClick={handlePlay3}>
                        E
                    </div>
                    <div id={"heater-4"} className={"drum-pad"} onClick={handlePlay4}>
                        A
                    </div>
                    <div id={"clap"} className={"drum-pad"} onClick={handlePlay5}>
                        S
                    </div>
                    <div id={"open-hh"} className={"drum-pad"} onClick={handlePlay6}>
                        D
                    </div>
                    <div id={"kick-n-hat"} className={"drum-pad"} onClick={handlePlay7}>
                        Z
                    </div>
                    <div id={"kick"} className={"drum-pad"} onClick={handlePlay8}>
                        X
                    </div>
                    <div id={"closed-hh"} className={"drum-pad"} onClick={handlePlay9}>
                        C
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
