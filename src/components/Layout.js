import React from "react"
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {

    return (
        <div className="layout">
            <Navbar icon={""} title="New Nav"/>
            <div className="content">
                { children }
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    )

}