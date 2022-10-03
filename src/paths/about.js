import { useEffect, useRef, useState } from "react"
import "../styles/about.css"


const About  = ()=>{

    const pictureAnim = useRef()
    const textAnim = useRef()
    const smallTextAnim = useRef()

    const [anim,setAnim]= useState(false)
    const [animText,setAnimText]= useState(false)
    const [animSmallText,setSmallAnimText]= useState(false)

    useEffect(()=>{
        var OberverImg = new IntersectionObserver((entries)=>{
            const entry = entries[0]
            setAnim(entry.isIntersecting)
            
        },{
            threshold: 0.5
        })
        var OberverText = new IntersectionObserver((entries)=>{
            const entry = entries[0]
            setAnimText(entry.isIntersecting)
        })
        var OberverText = new IntersectionObserver((entries)=>{
            const entry = entries[0]
            setSmallAnimText(entry.isIntersecting)
        })
        OberverText.observe(smallTextAnim.current)
        OberverImg.observe(pictureAnim.current)
        OberverText.observe(textAnim.current)
    },[])


    //classes for image overlay
    var initialClass = "overlay"
    var animatedClass = "overlay animate"
    const animatedTexClass = "animateText"


    return(
        <section className="about">
            <div className="textarea" >
                <div className="real---text">
                    <h1 className={animText ? "": animatedTexClass } ref={textAnim}><sub>&lt;/h1&gt;</sub>About<sub>&lt;/h1&gt;</sub><span></span>
                    <span className="buttom-line"></span>
                    </h1>
                    <p className={animSmallText ? "":"animateSmallText"} ref={smallTextAnim}>A professional and goal oriented Software Developer, willing to go extra miles to meetup with timelines and build well optimized and scale-able projects. <br/>
    
                        I am well versed in a diverse set of skills, ranging from Microsoft Applications,JavaScript and Dart and their frameworks (React and Flutter), HTML, CSS all the way to photo and video editing softwares. Want to know how I may help your project? learn more below.</p>
                </div>
            </div>
            <div className="imagearea">
                <div className={anim ? animatedClass :initialClass} ref={pictureAnim} ></div>
                <img src="./images/usejpg.jpg" alt="" />
            </div>
        </section>
    )
}
export default About