import '../App.css'

const Header = "About Kev 💻"
const AboutKev = "I'm a data-focused junior developer with hands-on experience in Python, SQL, Excel, and Power BI. I enjoy working with real-world datasets to uncover insights that drive better decisions—whether in business, hospitality, or social good."
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
    
    <div className='bg-gray-100 p-10'>
        <h1 className="text-black text-4xl text-center p-5 font-extrabold">{Header}</h1>
        <p className='text-center max-w-4xl mx-auto font-light text-gray-700'>{AboutKev}</p>
        <br />
        
        <ul className='text-start mx-auto max-w-4xl'>
            <h2 className='text-3xl font-bold'>{tools}</h2>
            <br />
            <div className='grid grid-cols-3'>
                {TechStack.map((stack,index)=>(
                    <li key={index}
                    className=''>
                        * {stack}
                    </li>
                ))}
            </div>
        
            
        
        </ul>
    </div>
    </>
    );
}