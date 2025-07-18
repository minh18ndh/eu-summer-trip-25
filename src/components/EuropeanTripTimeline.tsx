import { useState, useEffect, useRef } from "react"
import { MapPin, Clock } from "lucide-react"
import tripData from "../data/tripData"

export default function EuropeanTripTimeline() {
  const [activeDay, setActiveDay] = useState<number>(1)
  const dayRefs = useRef<{ [key: number]: HTMLDivElement | null }>({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const dayId = Number.parseInt(entry.target.getAttribute("data-day-id") || "1")
            setActiveDay(dayId)
          }
        })
      },
      {
        threshold: 0.6,
        rootMargin: "-20% 0px -20% 0px",
      },
    )

    Object.values(dayRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <h1 className="text-lg sm:text-2xl font-bold text-gray-800">European Adventure Summer 2025</h1>
          <p className="text-sm sm:text-base text-gray-600">
            Sept 24 - Oct 13
            <span className="mx-2">•</span>
            Athens → Santorini → Dubrovnik → Kotor → Mostar → Split → Istanbul → Cappadocia
          </p>
        </div>
      </div>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="relative">
          {/* Timeline line - responsive positioning */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-400"></div>

          {tripData.map((day) => (
            <div
              key={day.id}
              ref={(el) => {
                dayRefs.current[day.id] = el
              }}
              data-day-id={day.id}
              className="relative mb-12 sm:mb-16 last:mb-0"
            >
              {/* Day marker - responsive sizing */}
              <div className="flex items-center mb-6 sm:mb-8">
                <div
                  className={`relative z-10 flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full border-4 transition-all duration-500 ${activeDay === day.id
                    ? "border-white bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg shadow-blue-500/50 scale-110"
                    : "border-gray-300 bg-white shadow-md"
                    }`}
                >
                  <img
                    src={day.image || "/placeholder.svg"}
                    alt={day.city}
                    className={`w-6 h-6 sm:w-10 sm:h-10 rounded-full object-cover transition-all duration-500 ${activeDay === day.id ? "brightness-110 contrast-110" : "brightness-75"
                      }`}
                  />
                </div>
                <div className="ml-4 sm:ml-6">
                  <h2
                    className={`text-lg sm:text-xl font-bold transition-colors duration-300 ${activeDay === day.id ? "text-blue-600" : "text-gray-700"
                      }`}
                  >
                    {day.city}, {day.country}
                  </h2>
                  <p className="text-sm sm:text-base text-gray-500 font-medium">{day.date}</p>
                </div>
              </div>

              {/* Activities - responsive margins and spacing */}
              <div className="ml-16 sm:ml-24 space-y-4 sm:space-y-6">
                {day.activities.map((activity, activityIndex) => (
                  <div
                    key={activityIndex}
                    className={`bg-white rounded-lg p-4 sm:p-6 shadow-md border-l-4 transition-all duration-300 hover:shadow-lg ${activeDay === day.id ? "border-l-blue-500 shadow-blue-100" : "border-l-gray-300"
                      }`}
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div
                        className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full transition-colors duration-300 flex-shrink-0 ${activeDay === day.id ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-500"
                          }`}
                      >
                        {activity.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                          <span
                            className={`inline-flex items-center gap-1 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium transition-colors duration-300 w-fit ${activeDay === day.id ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-600"
                              }`}
                          >
                            <Clock className="w-3 h-3" />
                            {activity.time}
                          </span>
                          {activity.location && (
                            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs bg-gray-50 text-gray-500 w-fit">
                              <MapPin className="w-3 h-3" />
                              <span className="truncate">{activity.location}</span>
                            </span>
                          )}
                        </div>
                        <h3 className="font-semibold text-gray-800 mb-1 text-sm sm:text-base">{activity.title}</h3>
                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{activity.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="bg-white border-t border-gray-200 py-6 sm:py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-sm sm:text-base text-gray-500">European Summer Trip ©{new Date().getFullYear()}. Created by NDHM</p>
        </div>
      </div>
    </div>
  )
}
