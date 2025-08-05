import '../App.css'
import Logo from "../assets/Kevin_Mongare_Developer_projects.png"
const Header = 'My Works And Projects'

const projects =[
    {
        name: "Tour Website",
        img: Logo,
        description: "A website for a tour company, its main goal its to showcase the serviceces and offer help through Whatsapp and email",
        link: "https://safaris-nine.vercel.app/",
        stackUsed: [
            
                "TypeScript",
                "React",
                "AppScript"
            
        ]
    },
    {
        name: "Future Project",
        img: Logo,
        link: "https://safaris-nine.vercel.app/"
    },
    {
        name: "Data Science",
        img: Logo,
        link: "https://safaris-nine.vercel.app/"
    },
    {
        name: "Tour Website",
        img: Logo,
        link: "https://safaris-nine.vercel.app/"
    }
]

const Projects = () => {
    return(
        <>
        <div>
            <h1 className="">{Header}</h1>
            <div className='grid grid-cols-2 p-10 max-w-7xl mx-auto space-x-2 space-y-2 border-t'>
            
               {projects.map((project, index) => (
                <div className='bg-[var(--cardPrimary)] hover:scale-102 hover:shadow-lg shadow-white/10 pb-5'>
                    
                    <img key={index} src={project.img} alt="" className=''/>
                    <h2 key={index} className='pb-2 ml-2'>{project.name}</h2>
                    <p key={index} className='text-left pb-5'>{project.description}</p>
                    <ul key={index} className=' grid grid-cols-3 space-x-2 text-white mb-5'>
                        {project.stackUsed?.map((stack, index) => 
                        (
                            <li key={index} className='bg-[var(--buttonPrimary)] py-2 rounded-sm mx-2 text-center text-white'>{stack}</li>

                        ))

                        }
                    </ul>
                    <a href={project.link} key={index} className='underline py-2 px-4 rounded-sm mt-5 mx-5 '>Check Site</a>
                </div>
               ))
               }
               </div>
            
        </div>
        </>
    )


}
export default Projects