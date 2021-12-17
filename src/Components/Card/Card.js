import React, { useState } from 'react';
import "./Card.css";
import { AiFillCalculator } from 'react-icons/ai';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
export default function Card({ btnTxt, getAccount }) {
    let [details, setdetails] = useState(true);
    const showData = () => {
        console.log("Here : ", details)
        setdetails(!details)
        console.log("Here after : ", details)
    }
    return (
        <div className='mycardmain'>
            <div className="shadow">
                <div className='cardwidth'>
                    <div className="card maincarddiv">
                        <div className="card-header cardheaderdiv">
                            <div className="maindibimg">
                                <img src="fusion logo.png" alt="Logo" width="90px" />
                            </div>
                            <div className="maindivtext">
                                <p>FALFEL-BNB
                                    <br />
                                    LP
                                </p>
                            </div>
                        </div>
                        <div className="card-body cardheaderDiv">
                            <div className='simpbdtxt' >
                                <p style={{ marginTop: '1rem' }}>APY :
                                </p>
                            </div>
                            <div className="mainbodytext">
                                <p style={{ marginTop: '0.7rem' }}>
                                    <AiFillCalculator style={{ color: "#00A0E4", fontSize: "18px" }} />856.98%
                               </p>
                            </div>
                        </div>
                        <div className="card-body cardheaderDiv">
                            <div className='simpleheadttxt' >
                                <p className='simpbdtxt'>
                                    Earn :
                                </p>
                            </div>
                            <div className="simpleheadttxt">
                                <p className='mainbodytext'>FLAFEL
                                </p>
                            </div>
                        </div>
                        <div className="card-body cardheaderDiv">
                            <div className="maindibimg">
                                <p className='myextrasmtxt'>
                                    PSY
                                    EARNED
                                </p>
                            </div>
                        </div>
                        <div className="card-body cardheaderDiv">
                            <div className="maindibimg">
                                <p className='bmJdHb'>0
                                </p>
                            </div>
                            <div>
                                <button disabled type='button' className='mainHarvesttext'>
                                    Harvest
                                </button>
                            </div>
                        </div>
                        <div className="card-body cardheaderDiv">
                            <div className="maindibimg">
                                <p className='myextrasmtxt'>
                                    PSY-BNB LP STAKED
                                </p>
                            </div>
                        </div>
                        <div className="card-body cardUnlockDiv">
                            <button
                                onClick={() => getAccount()}
                                type='button' className='myUnlockBtn'>
                                {btnTxt}
                            </button>
                            <div className="card-footer">
                                {details ?
                                    <div className='mydtltxt'>
                                        <p onClick={() => showData()}>
                                            Details<IoIosArrowDown style={{ marginLeft: "3px" }} />
                                        </p>
                                    </div> :
                                    <div className='mydtltxt'>
                                        <p onClick={() => showData()}>
                                            Hide<IoIosArrowUp style={{ marginLeft: "3px" }} />
                                        </p>
                                        <div className="card-body cardheaderDiv">
                                            <div  >
                                                <p className='simpbdtxt'>
                                                    Deposit :
                                                </p>
                                            </div>
                                            <div>
                                                <p style={{ fontSize: '16px', marginTop: '-6px', fontWeight: 'bold' }}
                                                ><a style={{ color: '#AA8929' }}
                                                    href='https://pancakeswap.finance/swap#/add/ETH/0x8dbc995946ad745dd77186d1ac10019b8ea6694a'>
                                                        FLAFEL-BNB LP
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="card-body cardheaderDiv">
                                            <div className='simpleheadttxt' >
                                                <p className='simpbdtxt'>
                                                    Total Liquidity :
                                                </p>
                                            </div>
                                            <div className="simpleheadttxt">
                                                <p style={{ fontSize: '16px', marginTop: '-6px', fontWeight: 'bold' }}>$2,223
                                                </p>
                                            </div>
                                        </div>
                                        <div className="card-body cardheaderDiv">
                                            <div className='simpleheadttxt' >
                                                <p className='simpbdtxt'>
                                                    <a style={{ color: '#AA8929' }}
                                                        href='https://pancakeswap.finance/swap#/add/ETH/0x8dbc995946ad745dd77186d1ac10019b8ea6694a'>
                                                        View on BscScan
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
