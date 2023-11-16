import { Link } from "react-router-dom"
import "./Nav.css"
import Burger from "./Burger"



export default function NavBar(){
    const list = [
        {name: "Home", to: "/", burger:"burger1"},
        {name: "About", to: "/about", burger:"burger2"},
        {name: "Projects", to: "/projects", burger:"burger3"}
    ]
  

    return(
        <>
        
        <nav className="nav">
            <img className="logo" alt="Logo" src={`${process.env.PUBLIC_URL}/LogoNew.png`}></img>
            <Burger/>
            <div className="navList">
                {list.map(list => {
                    return(
                        <Link to={list.to}>{list.name}</Link>
                    )
                })}
                <button className="contactButton"><Link>Contact</Link></button>
            </div>
            
            
        </nav>
        </>
    )
}