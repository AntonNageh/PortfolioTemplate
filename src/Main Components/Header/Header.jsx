import  {useState}  from 'react'
import './Header.css'
const Header = () => {
  
  const [isActive, setIsActive] = useState(true);
  const handleClick = () => {
    setIsActive(current => !current);
  }

  return (
    <header className="mt-10 pb-10 md:-mt-10 mb:pb-0 flex flex-wrap md:justify-center md:flex-nowrap w-full text-sm">
      <nav className="relative max-w-7xl w-full border-gray-200 rounded-[36px] mx-2 py-3 px-4 md:flex md:items-center md:py-0 md:px-6 lg:px-8 xl:mx-auto dark:bg-transparent dark:border-gray-100" aria-label="Global">
        <div className="flex items-center justify-between">
          <a className="flex-none text-xl font-semibold dark:text-white md:mt-16" href='/' aria-label="Brand">Anttonov</a>
          <div className="md:hidden">
            <button type="button" onClick={()=>handleClick()} className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-full border font-medium bg-transparent text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-white transition-all text-sm dark:bg-black-900 dark:hover:bg-slate-500 dark:border-gray-100 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
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
          <div className="p-3 md:p-0 Navbar_body items-center flex flex-col gap-y-4 gap-x-0  mr-[35vw] -mt-3 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-10 md:mr-10 md:mt-0 md:pt-14 md:pl-7">
            <a href='/about' className="cursor-pointer w-fit font-medium md:py-6 dark:text-white dark:hover:text-gray-500" aria-current="page">About</a>
            <a href='/#page-2' className="cursor-pointer w-fit font-medium md:py-6 dark:text-white dark:hover:text-gray-500">Works</a>
            <a href='/contact' className="cursor-pointer w-fit font-medium md:py-6 dark:text-white dark:hover:text-gray-500">Contact</a>
          </div>
        </div>
      </nav>
</header>
  )
}
export default Header