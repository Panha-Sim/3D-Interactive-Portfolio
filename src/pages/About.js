
export default function About(){
    const curlyBracket = "{"
    const closeCurlyBracket = "}"
    return(
        <>
        <div className="ide">
            <p className="purple">Public Class <span className="yellow">Panha</span> {curlyBracket} </p>
            <br></br>
            <p className="purple">&emsp; constructor <span className="grey">() {curlyBracket}</span> </p>
            <p className="purple">&emsp;&emsp;this.<span className="red">name</span> <span className="grey">=</span> <span className="yellow">"Panha Sim"</span></p>
            <p className="purple">&emsp;&emsp;this.<span className="red">email</span> <span className="grey">=</span> <span className="yellow">"panha.simwestern001@gmail.com"</span></p>
            <p className="grey">&emsp; {closeCurlyBracket}</p>
            <br></br>
            
            <p className="purple">&emsp; Public <span className="yellow">int[]</span> <span className="blue">education</span> <span className="grey">{curlyBracket} </span></p>
            <p className="purple">&emsp;&emsp; return <span className="grey">(</span> </p>
            <p className="grey">&emsp;&emsp;&emsp;&emsp;[{curlyBracket} <span className="yellow">"Grand Canyon University"</span>,<span className="yellow"> "Software Engineering"</span> {closeCurlyBracket}]</p>
            <p className="grey">&emsp;&emsp; )</p>
            <p className="grey">&emsp; {closeCurlyBracket}</p>            

        </div>

        </>
    )
}