import '../App.css'
const Header = "Hi, I'm Kevin Mongare."
const Header1 = "I Build clean, fast, and functional web experiences."
// const Header2 ="I'm a junior full-stack developer passionate about creating modern web apps with React, Tailwind, and Python Let’s build something impactful together."
const CTA = 'Check Projects'

const Hero = () =>{
    return(
        <>
        <section className="bg-[#0f172a] text-white min-h-[90vh] flex items-center justify-center px-6">
  <div className="max-w-3xl text-center space-y-6">
    <h1 className="text-4xl md:text-7xl font-bold font-stretch-120%">{Header}</h1>
    <p className="text-lg md:text-xl text-slate-300">
      {Header1}
    </p>
    <div className="flex justify-center space-x-4">
      <a href="#projects" className="bg-white text-[#0f172a] px-6 py-2 rounded-full font-semibold hover:bg-slate-200 transition">
        {CTA}
      </a>
      <a href="#contact" className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-[#0f172a] transition">
        Get in Touch
      </a>
    </div>
  </div>
</section>
        </>
    )

}
export default Hero