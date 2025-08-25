"use client"

import { useState } from "react"

interface AuthModalsProps {
  activeModal: string | null
  onCloseModal: () => void
}

export default function AuthModals({ activeModal, onCloseModal }: AuthModalsProps) {
  const [dateOfBirth, setDateOfBirth] = useState("")
  const [selectedPositions, setSelectedPositions] = useState<string[]>([])

  const calculateAge = (dob: string) => {
    if (!dob) return ""
    const today = new Date()
    const birthDate = new Date(dob)
    let age = today.getFullYear() - birthDate.getFullYear()
    const monthDiff = today.getMonth() - birthDate.getMonth()
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--
    }
    return age
  }

  const handlePositionChange = (position: string) => {
    setSelectedPositions((prev) => (prev.includes(position) ? prev.filter((p) => p !== position) : [...prev, position]))
  }

  if (!activeModal) return null

  const modalContent = {
    loginModal: {
      title: "Welcome Back",
      fields: [
        { label: "Email", type: "email", required: true },
        { label: "Password", type: "password", required: true },
      ],
      buttonText: "Login",
    },
    signupModal: {
      title: "Join DiamondConnect",
      fields: [
        {
          label: "Registration Type",
          type: "select",
          required: true,
          options: [
            { value: "", label: "Select Type" },
            { value: "player", label: "Player (Parent)" },
            { value: "coach", label: "Team" },
          ],
        },
        { label: "Full Name", type: "text", required: true },
        { label: "Email", type: "email", required: true },
        { label: "Password", type: "password", required: true },
      ],
      buttonText: "Create Account",
    },
    playerSignupModal: {
      title: "Player Registration",
      fields: [
        { label: "Player First Name", type: "text", required: true },
        { label: "Player Last Name", type: "text", required: true },
        { label: "Date of Birth", type: "date", required: true, id: "dateOfBirth" },
        {
          label: "Positions (Select at least one)",
          type: "multiselect",
          required: true,
          options: [
            { value: "pitcher", label: "Pitcher" },
            { value: "catcher", label: "Catcher" },
            { value: "first-base", label: "First Base" },
            { value: "second-base", label: "Second Base" },
            { value: "third-base", label: "Third Base" },
            { value: "short-stop", label: "Short Stop" },
            { value: "outfield", label: "Outfield" },
          ],
        },
        {
          label: "Sport",
          type: "select",
          required: true,
          options: [
            { value: "", label: "Select Sport" },
            { value: "baseball", label: "Baseball" },
            { value: "softball", label: "Softball" },
          ],
        },
        { label: "City", type: "text", required: true },
        {
          label: "State",
          type: "select",
          required: true,
          options: [
            { value: "", label: "Select State" },
            { value: "AL", label: "AL" },
            { value: "AK", label: "AK" },
            { value: "AZ", label: "AZ" },
            { value: "AR", label: "AR" },
            { value: "CA", label: "CA" },
            { value: "CO", label: "CO" },
            { value: "CT", label: "CT" },
            { value: "DE", label: "DE" },
            { value: "FL", label: "FL" },
            { value: "GA", label: "GA" },
            { value: "HI", label: "HI" },
            { value: "ID", label: "ID" },
            { value: "IL", label: "IL" },
            { value: "IN", label: "IN" },
            { value: "IA", label: "IA" },
            { value: "KS", label: "KS" },
            { value: "KY", label: "KY" },
            { value: "LA", label: "LA" },
            { value: "ME", label: "ME" },
            { value: "MD", label: "MD" },
            { value: "MA", label: "MA" },
            { value: "MI", label: "MI" },
            { value: "MN", label: "MN" },
            { value: "MS", label: "MS" },
            { value: "MO", label: "MO" },
            { value: "MT", label: "MT" },
            { value: "NE", label: "NE" },
            { value: "NV", label: "NV" },
            { value: "NH", label: "NH" },
            { value: "NJ", label: "NJ" },
            { value: "NM", label: "NM" },
            { value: "NY", label: "NY" },
            { value: "NC", label: "NC" },
            { value: "ND", label: "ND" },
            { value: "OH", label: "OH" },
            { value: "OK", label: "OK" },
            { value: "OR", label: "OR" },
            { value: "PA", label: "PA" },
            { value: "RI", label: "RI" },
            { value: "SC", label: "SC" },
            { value: "SD", label: "SD" },
            { value: "TN", label: "TN" },
            { value: "TX", label: "TX" },
            { value: "UT", label: "UT" },
            { value: "VT", label: "VT" },
            { value: "VA", label: "VA" },
            { value: "WA", label: "WA" },
            { value: "WV", label: "WV" },
            { value: "WI", label: "WI" },
            { value: "WY", label: "WY" },
          ],
        },
      ],
      buttonText: "Register Player",
    },
    teamSignupModal: {
      title: "Team Registration",
      fields: [
        { label: "Team/Organization Name", type: "text", required: true },
        { label: "Coach Name", type: "text", required: true },
        {
          label: "Age Group",
          type: "select",
          required: true,
          options: [
            { value: "", label: "Select Age Group" },
            { value: "8u", label: "8U" },
            { value: "10u", label: "10U" },
            { value: "12u", label: "12U" },
            { value: "14u", label: "14U" },
            { value: "16u", label: "16U" },
            { value: "18u", label: "18U" },
          ],
        },
        {
          label: "Sport",
          type: "select",
          required: true,
          options: [
            { value: "", label: "Select Sport" },
            { value: "baseball", label: "Baseball" },
            { value: "softball", label: "Softball" },
          ],
        },
        { label: "Location", type: "text", placeholder: "City, State", required: true },
      ],
      buttonText: "Register Team",
    },
  }

  const currentModal = modalContent[activeModal as keyof typeof modalContent]
  const playerAge = calculateAge(dateOfBirth)
  const isMinor = playerAge !== "" && playerAge < 18
  \
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto border border-teal-400/30 relative animate-fade-in-up">
        <button
          onClick={onCloseModal}
          className="absolute top-4 right-4 text-2xl text-teal-400 hover:scale-125 hover:rotate-90 transition-all duration-200"
        >
          ×
        </button>

        <h2 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          {currentModal.title}
        </h2>

        <form className="space-y-6">
          {currentModal.fields.map((field, index) => (
            <div key={index}>
              <label className="block text-sm font-medium mb-2 text-teal-400">{field.label}</label>
              {field.type === "multiselect" ? (
                <div className="space-y-2">
                  {field.options?.map((option, optIndex) => (
                    <label key={optIndex} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedPositions.includes(option.value)}
                        onChange={() => handlePositionChange(option.value)}
                        className="w-4 h-4 text-blue-600 bg-white/5 border-teal-400/30 rounded focus:ring-blue-500 focus:ring-2"
                      />
                      <span className="text-white text-sm">{option.label}</span>
                    </label>
                  ))}
                  {selectedPositions.length === 0 && (
                    <p className="text-red-400 text-xs mt-1">Please select at least one position</p>
                  )}
                </div>
              ) : field.type === "select" ? (
                <select
                  required={field.required}
                  className="w-full p-3 border-2 border-teal-400/30 rounded-lg bg-white/5 text-white focus:border-teal-400 focus:outline-none focus:shadow-lg focus:shadow-teal-400/20 transition-all"
                >
                  {field.options?.map((option, optIndex) => (
                    <option key={optIndex} value={option.value} className="bg-slate-800">
                      {option.label}
                    </option>
                  ))}
                </select>
              ) : (
                <div>
                  <input
                    type={field.type}
                    required={field.required}
                    min={field.min}
                    max={field.max}
                    placeholder={field.placeholder}
                    value={field.id === "dateOfBirth" ? dateOfBirth : undefined}
                    onChange={field.id === "dateOfBirth" ? (e) => setDateOfBirth(e.target.value) : undefined}
                    className="w-full p-3 border-2 border-teal-400/30 rounded-lg bg-white/5 text-white placeholder-gray-400 focus:border-teal-400 focus:outline-none focus:shadow-lg focus:shadow-teal-400/20 transition-all"
                  />
                  {field.id === "dateOfBirth" && dateOfBirth && (
                    <p className="text-teal-400 text-sm mt-1">Age: {calculateAge(dateOfBirth)} years old</p>
                  )}
                </div>
              )}
            </div>
          ))}

          {activeModal === "playerSignupModal" && dateOfBirth && (
            <>
              {!isMinor ? (
                <div>
                  <label className="block text-sm font-medium mb-2 text-teal-400">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full p-3 border-2 border-teal-400/30 rounded-lg bg-white/5 text-white placeholder-gray-400 focus:border-teal-400 focus:outline-none focus:shadow-lg focus:shadow-teal-400/20 transition-all"
                  />
                </div>
              ) : (
                <>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-teal-400">Parent First Name</label>
                    <input
                      type="text"
                      required
                      className="w-full p-3 border-2 border-teal-400/30 rounded-lg bg-white/5 text-white placeholder-gray-400 focus:border-teal-400 focus:outline-none focus:shadow-lg focus:shadow-teal-400/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-teal-400">Parent Last Name</label>
                    <input
                      type="text"
                      required
                      className="w-full p-3 border-2 border-teal-400/30 rounded-lg bg-white/5 text-white placeholder-gray-400 focus:border-teal-400 focus:outline-none focus:shadow-lg focus:shadow-teal-400/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-teal-400">Parent Email</label>
                    <input
                      type="email"
                      required
                      className="w-full p-3 border-2 border-teal-400/30 rounded-lg bg-white/5 text-white placeholder-gray-400 focus:border-teal-400 focus:outline-none focus:shadow-lg focus:shadow-teal-400/20 transition-all"
                    />
                  </div>
                </>
              )}
            </>
          )}

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg font-semibold hover:scale-105 hover:shadow-lg hover:shadow-blue-600/30 transition-all duration-300"
          >
            {currentModal.buttonText}
          </button>
        </form>
      </div>
    </div>
  )
}
