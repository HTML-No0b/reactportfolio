import React from "react";
import Footer from "./components/Footer"
import Header from "./components/Header"
import Navigation from "./components/Navigation"
import Project from "./components/Project"
export default function App(){
    return (
        <main>
            <navbar></navbar>
            <Header />
            <Project />
            <Footer />
            <Navigation />
        </main>
    )
}