import  {useState}  from 'react'
import './Header.css'
const Header = () => {
  
  const [isActive, setIsActive] = useState(true);
  const handleClick = () => {
    setIsActive(current => !current);
  }

  return (
    <header className="mt-10 pb-10 md:-mt-10 mb:pb-0 flex flex-wrap md:justify-center md:flex-nowrap w-full text-sm">
      <nav className="z-[4] relative max-w-7xl w-full border-gray-200 rounded-[36px] mx-2 py-3 px-4 md:flex md:items-center md:py-0 md:px-6 lg:px-8 xl:mx-auto" aria-label="Global">
        <div className="flex items-center justify-between">
          <a className="flex-none text-xl font-semibold text-white md:mt-16" href='/' aria-label="Brand">Anttonov</a>
          <div className="md:hidden">
            <button type="button" onClick={()=>handleClick()} className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-full border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-white transition-all text-sm" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
              <svg className="hs-collapse-open:hidden w-4 h-4 svg1" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
              </svg>
              <svg className="hs-collapse-open:block hidden w-4 h-4 svg1" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
              </svg>
            </button>
          </div>
        </div>
        <div id="navbar-collapse-with-animation" className={`hs-collapse  overflow-hidden transition-all duration-300 basis-full grow md:flex md:ml-[55vw] ${isActive? 'hidden' : ''}`}>
          <div 
          onClick={
                    isActive?
                    document.documentElement?.classList.add("animate__animated,animate__fadeIn") : undefined
                  }
          className="p-3 md:p-0 Navbar_body items-center flex flex-row gap-y-4 gap-x-5 mr-[3rem] -mt-9 animate__animated animate__zoomIn md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-10 md:mr-10 md:mt-0 md:pt-14 md:pl-7">
            <a href='/about' className="cursor-pointer w-fit md:py-6 text-white text-xs hover:text-white font-bold" aria-current="page">About</a>
            <a href='/contact' className="cursor-pointer w-fit md:py-6 text-white text-xs hover:text-white font-bold">Contact</a>
            <a href='/landing' className="cursor-pointer w-fit md:py-6 px-1 text-white text-xs hover:text-white font-bold">Repeat</a>
          </div>
        </div>
      </nav>
</header>
  )
}
export default Header