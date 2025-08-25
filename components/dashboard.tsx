"use client"

import { useState } from "react"

interface DashboardProps {
  onHideDashboard: () => void
}

const opportunities = [
  {
    id: 1,
    type: "team",
    name: "🏆 Elite Thunder Baseball - 14U",
    positions: "Pitcher, Catcher",
    location: "Tampa, FL",
    season: "Spring 2025",
    level: "Elite",
    events: "15+ Events",
    sport: "baseball",
    ageGroup: "14u",
  },
  {
    id: 2,
    type: "team",
    name: "⚡ Lightning Fastpitch - 16U",
    positions: "Shortstop, Outfield",
    location: "Orlando, FL",
    season: "Summer 2025",
    level: "Premier",
    events: "12+ Events",
    sport: "softball",
    ageGroup: "16u",
  },
  {
    id: 3,
    type: "team",
    name: "🔥 Fire Storm Baseball - 12U",
    positions: "Infield, Outfield",
    location: "Jacksonville, FL",
    season: "Fall 2025",
    level: "Competitive",
    events: "10+ Events",
    sport: "baseball",
    ageGroup: "12u",
  },
  {
    id: 4,
    type: "player",
    name: "⭐ Available Player: Sarah Martinez",
    position: "Pitcher/First Base",
    age: "15 (16U eligible)",
    location: "Miami, FL",
    era: "2.15",
    battingAvg: ".385",
    experience: "5 Years",
    sport: "softball",
    ageGroup: "16u",
  },
]

export default function Dashboard({ onHideDashboard }: DashboardProps) {
  const [filters, setFilters] = useState({
    sport: "",
    ageGroup: "",
    position: "",
    location: "",
  })

  const filteredOpportunities = opportunities.filter((opp) => {
    return (
      (!filters.sport || opp.sport === filters.sport) &&
      (!filters.ageGroup || opp.ageGroup === filters.ageGroup) &&
      (!filters.location || opp.location.toLowerCase().includes(filters.location.toLowerCase()))
    )
  })

  return (
    <div className="pt-24 pb-8 px-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-300 to-slate-100 bg-clip-text text-transparent">
          Player & Team Dashboard
        </h2>
        <button
          onClick={onHideDashboard}
          className="px-6 py-2 bg-gradient-to-r from-slate-600 to-slate-700 text-white rounded-full hover:scale-105 transition-all duration-300"
        >
          Back to Home
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 sticky top-24">
            <h3 className="text-xl font-semibold mb-6 text-slate-300">Filters</h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-slate-400">Sport</label>
                <select
                  value={filters.sport}
                  onChange={(e) => setFilters({ ...filters, sport: e.target.value })}
                  className="w-full p-3 border-2 border-slate-500/30 rounded-lg bg-white/5 text-white focus:border-green-400 focus:outline-none transition-colors"
                >
                  <option value="">All Sports</option>
                  <option value="baseball">Baseball</option>
                  <option value="softball">Softball</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-slate-400">Age Group</label>
                <select
                  value={filters.ageGroup}
                  onChange={(e) => setFilters({ ...filters, ageGroup: e.target.value })}
                  className="w-full p-3 border-2 border-slate-500/30 rounded-lg bg-white/5 text-white focus:border-green-400 focus:outline-none transition-colors"
                >
                  <option value="">All Ages</option>
                  <option value="8u">8U</option>
                  <option value="10u">10U</option>
                  <option value="12u">12U</option>
                  <option value="14u">14U</option>
                  <option value="16u">16U</option>
                  <option value="18u">18U</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-slate-400">Location</label>
                <input
                  type="text"
                  placeholder="City, State"
                  value={filters.location}
                  onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                  className="w-full p-3 border-2 border-slate-500/30 rounded-lg bg-white/5 text-white placeholder-gray-400 focus:border-green-400 focus:outline-none transition-colors"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6">
            <h3 className="text-2xl font-semibold mb-6 text-slate-300">Available Opportunities</h3>

            <div className="space-y-4">
              {filteredOpportunities.map((opportunity) => (
                <div
                  key={opportunity.id}
                  className="bg-white/3 rounded-2xl p-6 border border-slate-400/20 hover:border-green-400 hover:transform hover:translate-x-2 hover:shadow-lg hover:shadow-green-400/20 transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-xl font-semibold text-white">{opportunity.name}</h4>
                    {opportunity.type === "team" && opportunity.level === "Elite" && (
                      <span className="px-3 py-1 bg-orange-400/20 text-orange-400 text-sm font-semibold rounded-full border border-orange-400/30">
                        ⭐ Elite
                      </span>
                    )}
                  </div>

                  {opportunity.type === "team" ? (
                    <>
                      <p className="mb-2">
                        <strong className="text-green-400">Positions Needed:</strong> {opportunity.positions}
                      </p>
                      <p className="mb-2">
                        <strong className="text-green-400">Location:</strong> {opportunity.location}
                      </p>
                      <p className="mb-4">
                        <strong className="text-green-400">Season:</strong> {opportunity.season}
                      </p>

                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="text-center p-3 bg-green-600/10 rounded-lg border border-green-400/20">
                          <div className="text-sm text-gray-300">Competitive Level</div>
                          <strong className="text-green-400">{opportunity.level}</strong>
                        </div>
                        <div className="text-center p-3 bg-orange-600/10 rounded-lg border border-orange-400/20">
                          <div className="text-sm text-gray-300">Tournament Schedule</div>
                          <strong className="text-orange-400">{opportunity.events}</strong>
                        </div>
                      </div>

                      <button className="px-6 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full hover:scale-105 hover:shadow-lg hover:shadow-green-500/30 transition-all duration-300 font-semibold">
                        Apply
                      </button>
                    </>
                  ) : (
                    <>
                      <p className="mb-2">
                        <strong className="text-green-400">Position:</strong> {opportunity.position}
                      </p>
                      <p className="mb-2">
                        <strong className="text-green-400">Age:</strong> {opportunity.age}
                      </p>
                      <p className="mb-4">
                        <strong className="text-green-400">Location:</strong> {opportunity.location}
                      </p>

                      <div className="grid grid-cols-3 gap-4 mb-4">
                        <div className="text-center p-3 bg-green-600/10 rounded-lg border border-green-400/20">
                          <div className="text-sm text-gray-300">ERA</div>
                          <strong className="text-green-400">{opportunity.era}</strong>
                        </div>
                        <div className="text-center p-3 bg-orange-600/10 rounded-lg border border-orange-400/20">
                          <div className="text-sm text-gray-300">Batting Avg</div>
                          <strong className="text-orange-400">{opportunity.battingAvg}</strong>
                        </div>
                        <div className="text-center p-3 bg-slate-600/10 rounded-lg border border-slate-400/20">
                          <div className="text-sm text-gray-300">Experience</div>
                          <strong className="text-slate-300">{opportunity.experience}</strong>
                        </div>
                      </div>

                      <button className="px-6 py-2 border-2 border-green-400 text-green-400 rounded-full hover:bg-green-400 hover:text-slate-900 transition-all duration-300">
                        Contact Player
                      </button>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
