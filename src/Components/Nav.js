import { click } from "@testing-library/user-event/dist/click"
import { useRef, useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import "../styles/nav.css"

const Nav = ()=>{
    
    const location = useLocation()

    var clicked = useRef()
    var clickedSkill = useRef()
    var clickedPro = useRef()
    var clickedCont = useRef()
    const [position, setPositon] = useState({})
    const [clickedLink,setClickedLink] = useState("home")
    const [isShowingNav,setIsShowingNav] = useState(false)

    useEffect(()=>{
        setClickedLink(location.pathname.replace("/",""))
        let usableNaw
        switch(clickedLink){
            case "home":
                usableNaw = clicked
                break
            case "about":
                usableNaw = clickedSkill
                break
            case "projects":
                usableNaw = clickedPro
                break
            case "contact":
                usableNaw = clickedCont
                break
            default:
                usableNaw = clicked
                break
        }
        window.addEventListener('popstate',()=>{
            setClickedLink(location.pathname.replace("/",""))
        })
        setPositon({"position":usableNaw.current.getBoundingClientRect().x,"width":clicked.current.getBoundingClientRect().width})
        window.addEventListener('resize',()=>{
            setPositon({"position":usableNaw.current.getBoundingClientRect().x,"width":clicked.current.getBoundingClientRect().width})
        })

    },[clickedLink])


    function hamburgerClicked(){
        setIsShowingNav(showing=>!showing)
    }


    function checkToKnow(usable){
        if(!usable) return

        setPositon({"position":usable.current.getBoundingClientRect().x,"width":usable.current.getBoundingClientRect().width})
    }
    var style = {
        marginLeft: `${position.position}px`,
        // width :`${position.width}px`
    }

    return(
        <nav>
            <h1>KS</h1>
            <ul className={isShowingNav ? "links showLinks":"links"}>
                <li ref={clicked} onClick={()=>{
                    setClickedLink("home")
                    checkToKnow(clicked)
                }}><Link to="/">HOME</Link></li>
                <li ref={clickedSkill} onClick={()=>{
                    setClickedLink("about")
                    checkToKnow(clickedSkill)
                }}><Link to="/about">ABOUT</Link></li>
                <li ref={clickedPro} onClick={()=>{
                    setClickedLink("projects")
                    checkToKnow(clickedPro)
                }}><Link to="/projects">PROJECTS</Link></li>
                <li ref={clickedCont} onClick={()=>{
                    setClickedLink("contact")
                    checkToKnow(clickedCont)
                }}><Link to="/contact">CONTACT</Link></li>
                <div className="position" style={style}></div>
            </ul>
            <div onClick={hamburgerClicked} className="hamburger">
                <div className={isShowingNav ? "line animate":"line"} ></div>
                <div className={isShowingNav ? "line animate":"line"} ></div>
                <div className={isShowingNav ? "line animate":"line"}></div>
            </div>
            <h3>Kolawoletamilore1@gmail.com</h3>
        </nav>
        
    )
}
export default Nav