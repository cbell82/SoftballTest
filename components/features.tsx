const features = [
  {
    icon: "👤",
    title: "Player Profiles",
    description:
      "Create detailed profiles showcasing your skills, stats, and availability. Stand out to recruiters with video highlights and achievements.",
    color: "slate",
  },
  {
    icon: "🏆",
    title: "Team Management",
    description:
      "Post team needs, manage rosters, and find the perfect players for your organization. Track recruitment progress effortlessly.",
    color: "slate",
  },
  {
    icon: "🗓️",
    title: "Event Management",
    description:
      "Organize tryouts, tournaments, and showcases. Manage registrations and communicate with participants seamlessly.",
    color: "slate",
  },
  {
    icon: "💬",
    title: "Message Hub",
    description:
      "Built-in messaging system for coaches, players, and parents. Share updates, schedule meetings, and coordinate activities.",
    color: "slate",
  },
]

export default function Features() {
  return (
    <section className="py-8 px-8 max-w-6xl mx-auto" id="features">
      <h2 className="text-center text-4xl font-bold mb-12 bg-gradient-to-r from-slate-300 to-slate-100 bg-clip-text text-transparent">
        Powerful Features for Everyone
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
        {features.map((feature, index) => {
          const colorClasses = {
            green: {
              gradient: "from-green-600 to-green-800",
              border: "border-green-400/50",
              shadow: "shadow-green-400/20",
              text: "text-green-400",
            },
            orange: {
              gradient: "from-orange-600 to-orange-800",
              border: "border-orange-400/50",
              shadow: "shadow-orange-400/20",
              text: "text-orange-400",
            },
            slate: {
              gradient: "from-slate-600 to-slate-800",
              border: "border-slate-400/50",
              shadow: "shadow-slate-400/20",
              text: "text-slate-300",
            },
          }

          const colors = colorClasses[feature.color as keyof typeof colorClasses]

          return (
            <div
              key={index}
              className={`bg-white/5 backdrop-blur-md rounded-2xl p-4 md:p-8 text-center border border-white/10 hover:${colors.border} transition-all duration-300 hover:transform hover:-translate-y-2 hover:scale-105 hover:shadow-xl hover:${colors.shadow} cursor-pointer group`}
            >
              <div
                className={`w-12 h-12 md:w-20 md:h-20 mx-auto mb-2 md:mb-4 bg-gradient-to-r ${colors.gradient} rounded-full flex items-center justify-center text-xl md:text-3xl group-hover:animate-pulse`}
              >
                <span className={feature.title === "Player Profiles" ? "text-white" : ""}>{feature.icon}</span>
              </div>
              <h3 className={`text-sm md:text-xl font-semibold mb-2 md:mb-4 ${colors.text}`}>{feature.title}</h3>
              <p className="hidden md:block text-gray-300 leading-relaxed text-xs md:text-base">
                {feature.description}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
