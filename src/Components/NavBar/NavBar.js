import React from 'react'
import { Button, Navbar } from 'react-bootstrap';
import "./navBar.css"
export default function NavBar({ myAcountAddress, getAccount }) {
    console.log("Here in NavBar myAcountAddress = ", myAcountAddress);
    return (
        <div>
            <Navbar className='mynavbg' >
                <Navbar.Brand href="#home">
                    <img src="fusion logo.png" alt="Logo" width="50px" />
                </Navbar.Brand>
                <p className='myNavtxt'>FLAFEL </p>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <Button onClick={() => getAccount()} className='mybutn'>
                            {myAcountAddress}
                        </Button>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
