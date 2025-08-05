const Logo = 'This Is Kev'
const Menu = [
    'Home',
    'About',
    'Projects',
    'Blog',
    'Contact',    
]

const Header = () =>{
    return(
        <>
        <div className="bg-black/90 p-5 top-0 sticky z-50">
        <div className="max-w-7xl mx-auto justify-between flex">
            <h2>{Logo}</h2>
            <ul className="flex">
                {Menu.map((list,index) => (
                    <a href="#" key={index} className="ml-5 flex">{list}</a>
                ))}
            </ul>
            </div>
        </div>
        </>
    )

}
export default Header