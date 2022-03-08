import React from "react"

import { Link } from "react-router-dom";
import { Logo } from "./Logo";

import { useNavbar } from "../hooks/useNavbar";
import { BsHouseDoorFill, BsDoorOpenFill } from "react-icons/bs";

export const Navbar = ({ isLogged }: any) => {

    const { onHandleSignOut } = useNavbar();

    return (
        <div className="flex items-center justify-between px-6 border-b">
            <Link to="/">
                <Logo />
            </Link>
            <div className="flex gap-2">
                {isLogged && <>
                    <Link to="/todos">
                        <button className="p-2 bg-primary rounded-md hover:opacity-75 flex items-center gap-2 hover:text-purple-600"><BsHouseDoorFill />Home</button>
                    </Link>
                    <button className="p-2 bg-primary rounded-md hover:opacity-75 flex items-center gap-2 hover:text-purple-600" onClick={() => onHandleSignOut()}><BsDoorOpenFill />Sign out</button>
                </>}
            </div>
        </div>
    )
}
