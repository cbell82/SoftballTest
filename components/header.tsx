"use client"

interface HeaderProps {
  onOpenModal: (modalId: string) => void
}

export default function Header({ onOpenModal }: HeaderProps) {
  return (
    <header className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-md z-50 transition-all duration-300">
      <nav className="max-w-6xl mx-auto flex justify-between items-center px-4 sm:px-8 py-4">
        <div className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent animate-pulse flex-shrink-0">
          <span className="hidden sm:inline">
            ⚾ DiamondConnect <span className="text-yellow-400">⭐</span>
          </span>
          <span className="sm:hidden">
            ⚾ Diamond Connect <span className="text-yellow-400">⭐</span>
          </span>
        </div>

        <ul className="hidden md:flex space-x-8">
          {["Home", "Features", "Partners", "About"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-white hover:text-blue-400 transition-colors duration-300 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
          ))}
        </ul>

        <div className="flex gap-2 sm:gap-4 flex-shrink-0">
          <button
            onClick={() => onOpenModal("loginModal")}
            className="px-3 sm:px-6 py-2 text-sm sm:text-base border-2 border-blue-400 text-blue-400 rounded-full hover:bg-blue-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
          >
            Login
          </button>
        </div>
      </nav>
    </header>
  )
}
