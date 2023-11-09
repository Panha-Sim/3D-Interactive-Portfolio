

export default function NavBar(){
    
    return(
        <nav className="nav">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Projects</a></li>
                <button className="contactButton"><li><a href="#">Contact</a></li></button>
                
            </ul>
        </nav>
    )
}