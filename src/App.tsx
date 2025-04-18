import React, { useEffect } from "react"
import About from "./components/About"
import Contact from "./components/Contact"
import Experience from "./components/Experience"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Technologies from "./components/Technologies"
import Certifications from "./components/certifications"
import { scroller } from "react-scroll"

const App: React.FC = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      {/* Background */}
      <div className="fixed inset-0 -z-10 w-screen h-screen overflow-hidden">
        <div className="absolute inset-0 bg-neutral-950 [background-image:radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-8">
        <Navbar />
        <section id="home"><Hero /></section>
        <section id="about"><About /></section>
        <section id="tech"><Technologies /></section>
        <section id="projects"><Projects /></section>
        <section id="certifications"><Certifications /></section>
        <section id="experiences"><Experience /></section>
        <section id="contact"><Contact /></section>
      </div>
    </div>
  )
}

export default App;