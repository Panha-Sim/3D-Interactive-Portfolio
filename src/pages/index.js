import ResumeIcon from '../Components/resume';


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
            Torquent fringilla semper habitant interdum nulla
            nisl. Tortor, ligula erat vestibulum. Quam nisi
            varius purus taciti quisque enim ut turpis. Non
            lacinia eros id interdum sollicitudin rutrum 
            suscipit orci egestas et justo.
            </p>

          <button className='downloadButton' onClick={onButtonClick}>
            <ResumeIcon/>
            Download Resume
          </button>
          
        </div>
      </div>
      </>
    )
}