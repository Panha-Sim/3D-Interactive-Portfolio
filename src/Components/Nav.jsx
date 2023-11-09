import { Link } from "react-router-dom"


export default function NavBar(){
    const list = [
        {name: "Home", to: "/"},
        {name: "About", to: "/about"},
        {name: "Projects", to: "/projects"}
    ]
    
    return(
        <nav className="nav">
            <ul>
                {list.map(list=>{
                    return(
                        <li><Link to={list.to}>{list.name}</Link></li>
                    )
                })}
                <button className="contactButton"><li><Link to="/contact">Contact</Link></li></button>
                
            </ul>
        </nav>
    )
}