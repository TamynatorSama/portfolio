import lottie from "lottie-web"
import { useEffect,useRef, useState } from "react"
import "../styles/contact.css"

import Send from "../lottieFiles/95407-altered-contact-lottie.json"

const Contacts  = ()=>{

    const about = useRef()
    const firstLine = useRef()


    const [animFirst,setAnimFirst]= useState(false)


    useEffect(()=>{
        lottie.loadAnimation({
            container:about.current ,
            animationData: Send,
            renderer: "svg", // "canvas", "html"
            loop: true, // boolean
            autoplay: true,
        });
        var OberverFirst = new IntersectionObserver((entries)=>{
            const entry = entries[0]
            setAnimFirst(entry.isIntersecting)
        })
        OberverFirst.observe(firstLine.current)
    },[])


    return(
        <section className="contact">
            <h1 className="hero--text"><sub>&lt;/h1&gt;</sub>Let's Talk<sub>&lt;/h1&gt;</sub><span className={animFirst ? "": "animateTop"} ref={firstLine}></span>
                <span className={animFirst ? "": "animateTop"}></span>
            </h1>
            <div className="animation--holder" ref={about}></div>
            <div className="form--holder">
                <input placeholder="Name"/>
                <input placeholder="Subject"/>
                <textarea placeholder="message"/>
                <button>Send</button>
            </div>
        </section>
    )
}
export default Contacts