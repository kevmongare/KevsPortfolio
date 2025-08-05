import '../App.css'

const Header = "About Kev 💻"

const AboutKev = "I'm a data-focused junior developer with hands-on experience in Python, SQL, Excel, and Power BI. I enjoy working with real-world datasets to uncover insights that drive better decisions—whether in business, hospitality, or social good."
const AboutKev1 = 'I’ve recently worked on a full-stack website rebuild at Learnsoft Beliotech Solutions and gained frontend experience using React.js and Tailwind CSS. Through this, I learned to blend technical skill with user empathy.'
const tools = "Tools I use:"
const TechStack =[
    'Python(pandas, matplotlib)',
    'JavaScript',
    'SQL',
    'Power BI',
    'Excel', 
    'React.js', 
    'Git', 
    'REST APIs'
]


export default function AboutUs(){
    return(
    <>
    
    <div className='p-10'>
        <h1 className=" p-5 font-extrabold">{Header}</h1>
        <p className=' pt-5'>{AboutKev}</p>
        <p>{AboutKev1}</p>
        <br />
        
        <ul className='text-start mx-auto max-w-4xl '>
            <h2 className='text-3xl font-bold '>{tools}</h2>
            <br />
            <div className='grid grid-cols-3'>
                {TechStack.map((stack,index)=>(
                    <li key={index}
                    className='text-gray-400'>
                        * {stack}
                    </li>
                ))}
            </div>
        
            
        
        </ul>
    </div>
    </>
    );
}