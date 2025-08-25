"use client"

interface HeroProps {
  onOpenModal: (modalId: string) => void
  onShowDashboard: () => void
}

export default function Hero({ onOpenModal, onShowDashboard }: HeroProps) {
  return (
    <section className="h-[80vh] flex items-center justify-center text-center relative overflow-hidden" id="home">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM0ZWNkYzQiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iNCIvPjwvZz48L2c+PC9zdmc+')] animate-pulse"></div>
      </div>

      <div className="max-w-4xl z-10 px-8">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent animate-fade-in-up">
          Connect. Compete. Conquer.
        </h1>

        <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in-up animation-delay-300">
          The ultimate platform connecting young athletes with teams across baseball and softball. Find your perfect
          match and elevate your game to the next level.
        </p>

        <div className="flex flex-row gap-2 sm:gap-4 justify-center items-center animate-fade-in-up animation-delay-600">
          <button
            onClick={() => onOpenModal("playerSignupModal")}
            className="px-4 py-3 sm:px-8 bg-gradient-to-r from-yellow-500 to-yellow-600 text-slate-900 rounded-full hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/30 transition-all duration-300 font-semibold text-sm sm:text-base"
          >
            Join as Player
          </button>
          <button
            onClick={() => onOpenModal("teamSignupModal")}
            className="px-4 py-3 sm:px-8 border-2 border-blue-400 text-blue-400 rounded-full hover:bg-blue-400 hover:text-slate-900 transition-all duration-300 hover:scale-105 font-semibold text-sm sm:text-base"
          >
            Register Team
          </button>
          <button
            onClick={onShowDashboard}
            className="px-4 py-3 sm:px-8 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full hover:scale-105 hover:shadow-lg hover:shadow-blue-600/30 transition-all duration-300 font-semibold text-sm sm:text-base"
          >
            View Opportunities
          </button>
        </div>
      </div>
    </section>
  )
}
