import React from "react"

import { Link } from "react-router-dom";
import { Logo } from "./Logo";

import { useNavbar } from "../hooks/useNavbar";

export const Navbar = ({ isLogged }: any) => {

    const { onHandleSignOut } = useNavbar();

    return (
        <div className="flex items-center justify-between px-6 border-b">
            <Link to="/">
                <Logo />
            </Link>
            <div className="flex">
                {isLogged && <>
                    <Link to="/todos">
                        <button className="p-2 bg-primary rounded-md hover:opacity-75">Home</button>
                    </Link>
                    <button className="p-2 bg-primary rounded-md hover:opacity-75" onClick={() => onHandleSignOut()}>Sign out</button>
                </>}
            </div>
        </div>
    )
}
