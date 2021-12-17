import React from 'react';
import Card from '../Card/Card';
import "./home.css";
import Particles from "react-tsparticles";
export default function Home({ btnTxt, getAccount }) {
    console.log("Here in HHome btnTxt = ", btnTxt);
    const particlesInit = (main) => {
        console.log(main);
    };
    const particlesLoaded = (container) => {
        console.log(container);
    };
    return (
        <div className='myhomemainDiv'>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    background: {
                        color: {
                            value: "",
                        },
                    },
                    fpsLimit: 110,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: false,
                                mode: "push",
                            },
                            onHover: {
                                enable: false,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            bubble: {
                                distance: 400,
                                duration: 2,
                                opacity: 0.8,
                                size: 40,
                            },
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#ffffff",
                        },
                        links: {
                            color: "#F7A524",
                            distance: 170,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outMode: "bounce",
                            random: false,
                            speed: 1,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                value_area: 800,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.2,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            random: true,
                            value: 5,
                        },
                    },
                    detectRetina: true,
                }}
            />
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <p className="questtxt">
                            Stable & Profitable Yield Farming
                            Dapp on <p className='myspcltxt'>Binance Smart Chain
                            </p>
                        </p>
                        <div className="myline1" />
                        <div>
                            <p className="anstxt">
                                Stake Flafel And Earn it with A
                                <br /> Higher Profit Range
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className='mycardmainDiv'>
                            <Card btnTxt={btnTxt} getAccount={getAccount} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
