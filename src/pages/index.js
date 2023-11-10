import ResumeIcon from '../Components/resume';
import Contact from '../Components/Contact.jsx';

export default function Index(){
    const onButtonClick = () => {
        const pdfUrl = `${process.env.PUBLIC_URL}/Resume.pdf`;
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
    return(
      <>
      
        <div className='wrapper'>
        <div className='line'></div>
        <div className='container'>

          <h1 className='homeh1p'>Lets Work Together</h1>
          <p className='homeh1p'>
            Hi, I'm Panha Sim, a passionate Software Engineer
            I bring idea to life. Specializing in React, Spring Boot, 
            ASP.NET, Express.js, MongoDB, and PostgreSQL
            let’s connect and explore how we can collaborate 
            on your next project.
            </p>
          <div>
            <button className='downloadButton' onClick={onButtonClick}>
              <ResumeIcon/>
              Download Resume
            </button>      
            <Contact/>   
          </div>
        </div>
        
      </div>
      </>
    )
}