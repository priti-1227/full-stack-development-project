export default function Navbar() {
  return (
    
    <header className="w-full fixed top-0  bg-transparent backdrop-blur-md z-50">
      <div className="max-w-7xl mx-4 sm:mx-8  lg:mx-52  flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <img src="src/assets/logo.png" alt="Next-Gen Logo" className="h-8" />
          
        </a>
<div className="flex items-center gap-4">
        {/* Nav Links */}
         <nav className="hidden md:flex items-center  border-1 rounded-xl p-1 gap-1 text-white bg-[#264C9280]">
                    <a href="/" className="px-4 py-2 rounded-full hover:bg-primary-600 transition-colors duration-300 text-sm">Home</a>
                    <a href="#story" className="px-4 py-2 rounded-full hover:bg-primary-600 transition-colors duration-300 text-sm">Our Story</a>
                    <a href="#solution" className="px-4 py-2 rounded-full hover:bg-primary-600 transition-colors duration-300 text-sm">Solution</a>
                    <a href="/contact" className="px-4 py-2 rounded-full hover:bg-primary-600 transition-colors duration-300 text-sm">Contact</a>
                    <a href="#more" className="flex items-center gap-1 px-4 py-2 rounded-full hover:bg-primary-600 transition-colors duration-300 text-sm">
                        <span>More</span>
                       
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                    </a>
                </nav>

        {/* CTA */}
        <button className="border-1 bg-[#264C9280]  text-white rounded-lg px-5 py-3 text-sm">
          Let&apos;s Transform
        </button>
      </div>
      </div>
    </header>
  );
}
