const partners = [
  {
    name: "NSA Softball",
    logo: "/nsa-softball-logo.png",
    website: "https://www.playnsa.com",
    color: "slate",
  },
  {
    name: "USSSA",
    logo: "/usssa-logo.png",
    website: "https://www.usssa.com",
    color: "slate",
  },
  {
    name: "Perfect Game",
    logo: "/perfect-game-logo.png",
    website: "https://www.perfectgame.org",
    color: "slate",
  },
]

export default function Partners() {
  return (
    <section className="py-8 px-8 bg-white/2 text-center" id="partners">
      <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-slate-300 to-slate-100 bg-clip-text text-transparent">
        Trusted Partners
      </h2>
      <p className="text-xl mb-8 opacity-90">Collaborating with leading youth baseball and softball organizations</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {partners.map((partner, index) => {
          const colorClasses = {
            green: "hover:border-green-400 hover:shadow-green-400/20 text-green-400",
            orange: "hover:border-orange-400 hover:shadow-orange-400/20 text-orange-400",
            slate: "hover:border-slate-400 hover:shadow-slate-400/20 text-slate-300",
          }

          const colors = colorClasses[partner.color as keyof typeof colorClasses]

          return (
            <a
              key={index}
              href={partner.website}
              target="_blank"
              rel="noopener noreferrer"
              className={`block bg-white/5 backdrop-blur-md rounded-2xl p-8 border-2 border-transparent ${colors} transition-all duration-300 hover:scale-105 hover:shadow-xl`}
            >
              <div className="flex flex-col items-center">
                <img
                  src={partner.logo || "/placeholder.svg"}
                  alt={`${partner.name} logo`}
                  className="h-20 w-auto mb-4 object-contain"
                />
                <h3 className="text-xl font-semibold">{partner.name}</h3>
              </div>
            </a>
          )
        })}
      </div>
    </section>
  )
}
