import { MapPin, Camera, Utensils, Plane } from "lucide-react"
import type { Day } from "../types/trip"

const tripData: Day[] = [
  {
    id: 1,
    date: "Day 1 - Sept 24",
    city: "Hanoi",
    country: "Vietnam",
    image: "/placeholder.svg?height=80&width=80",
    activities: [
      {
        time: "23:05",
        title: "Flight to Athens",
        description: "Depart from Hanoi to Athens via TK165",
        icon: <Plane className="w-4 h-4" />,
      },
    ],
  },
  {
    id: 2,
    date: "Day 2 - Sept 25",
    city: "Athens",
    country: "Greece",
    image: "/placeholder.svg?height=80&width=80",
    activities: [
      {
        time: "08:55",
        title: "Arrival in Athens",
        description: "Land in Athens, take taxi to hotel and leave luggage",
        icon: <Plane className="w-4 h-4" />,
      },
      {
        time: "14:00",
        title: "Hotel Check-in",
        description: "Check in and freshen up",
        icon: <MapPin className="w-4 h-4" />,
      },
      {
        time: "15:00",
        title: "Explore Athens",
        description: "Visit Acropolis, Zeus Temple, Syntagma Square",
        icon: <Camera className="w-4 h-4" />,
      },
    ],
  },
  {
    id: 3,
    date: "Day 3 - Sept 26",
    city: "Santorini",
    country: "Greece",
    image: "/placeholder.svg?height=80&width=80",
    activities: [
      {
        time: "08:00",
        title: "Ferry to Santorini",
        description: "Go to Piraeus port, ferry to Santorini, rent a car",
        icon: <Plane className="w-4 h-4" />,
      },
      {
        time: "18:30",
        title: "Sunset at Oia",
        description: "Relax and enjoy the famous sunset",
        icon: <Camera className="w-4 h-4" />,
      },
    ],
  },
  {
    id: 4,
    date: "Day 4 - Sept 27",
    city: "Santorini",
    country: "Greece",
    image: "/placeholder.svg?height=80&width=80",
    activities: [
      {
        time: "09:00",
        title: "Island Exploration",
        description: "Explore ancient villages, Red/Black sea, Pyrgos",
        icon: <Camera className="w-4 h-4" />,
      },
    ],
  },
  {
    id: 5,
    date: "Day 5 - Sept 28",
    city: "Santorini",
    country: "Greece",
    image: "/placeholder.svg?height=80&width=80",
    activities: [
      {
        time: "10:00",
        title: "Volcano & Hot Spring Tour",
        description: "Boat tour, hot spring bathing, volcano visit",
        icon: <Camera className="w-4 h-4" />,
      },
    ],
  },
  {
    id: 6,
    date: "Day 6 - Sept 29",
    city: "Santorini",
    country: "Greece",
    image: "/placeholder.svg?height=80&width=80",
    activities: [
      {
        time: "Free Day",
        title: "Sightseeing and Relax",
        description: "Leisure day for photos and scenic spots",
        icon: <Camera className="w-4 h-4" />,
      },
    ],
  },
  {
    id: 7,
    date: "Day 7 - Sept 30",
    city: "Athens",
    country: "Greece",
    image: "/placeholder.svg?height=80&width=80",
    activities: [
      {
        time: "09:50",
        title: "Ferry to Athens",
        description: "Return ferry from Santorini to Athens",
        icon: <Plane className="w-4 h-4" />,
      },
      {
        time: "16:00",
        title: "Check-in and Rest",
        description: "Check in hotel in Athens and relax",
        icon: <MapPin className="w-4 h-4" />,
      },
    ],
  },
  {
    id: 8,
    date: "Day 8 - Oct 1",
    city: "Dubrovnik",
    country: "Croatia",
    image: "/placeholder.svg?height=80&width=80",
    activities: [
      {
        time: "08:45",
        title: "Flight to Dubrovnik",
        description: "Flight from Athens to Dubrovnik",
        icon: <Plane className="w-4 h-4" />,
      },
      {
        time: "11:00",
        title: "Explore Dubrovnik",
        description: "Old Town, City Walls, cable car to Srđ mountain",
        icon: <Camera className="w-4 h-4" />,
      },
    ],
  },
  {
    id: 9,
    date: "Day 9 - Oct 2",
    city: "Kotor",
    country: "Montenegro",
    image: "/placeholder.svg?height=80&width=80",
    activities: [
      {
        time: "Day Trip",
        title: "Drive to Kotor",
        description: "Explore Bay of Kotor, medieval town, scenic drive",
        icon: <Camera className="w-4 h-4" />,
      },
    ],
  },
  {
    id: 10,
    date: "Day 10 - Oct 3",
    city: "Dubrovnik",
    country: "Croatia",
    image: "/placeholder.svg?height=80&width=80",
    activities: [
      {
        time: "All Day",
        title: "Dubrovnik Day",
        description: "Explore more of Dubrovnik and nearby areas",
        icon: <Camera className="w-4 h-4" />,
      },
    ],
  },
  {
    id: 11,
    date: "Day 11 - Oct 4",
    city: "Split",
    country: "Croatia",
    image: "/placeholder.svg?height=80&width=80",
    activities: [
      {
        time: "08:00",
        title: "Drive to Split via Mostar",
        description: "Stop in Mostar for Old Bridge, Ottoman old town, Bosnian lunch",
        icon: <Plane className="w-4 h-4" />,
      },
      {
        time: "19:00",
        title: "Split Old Town",
        description: "Visit Diocletian Palace and dinner",
        icon: <Camera className="w-4 h-4" />,
      },
    ],
  },
  {
    id: 12,
    date: "Day 12 - Oct 5",
    city: "Plitvice",
    country: "Croatia",
    image: "/placeholder.svg?height=80&width=80",
    activities: [
      {
        time: "Day Trip",
        title: "Plitvice Lakes",
        description: "Full-day trip to Plitvice Lakes from Split",
        icon: <Camera className="w-4 h-4" />,
      },
    ],
  },
  {
    id: 13,
    date: "Day 13 - Oct 6",
    city: "Split",
    country: "Croatia",
    image: "/placeholder.svg?height=80&width=80",
    activities: [
      {
        time: "Free Day",
        title: "Relax in Split",
        description: "Free day to rest or explore Split",
        icon: <Camera className="w-4 h-4" />,
      },
    ],
  },
  {
    id: 14,
    date: "Day 14 - Oct 7",
    city: "Istanbul",
    country: "Turkey",
    image: "/placeholder.svg?height=80&width=80",
    activities: [
      {
        time: "18:00",
        title: "Flight to Istanbul",
        description: "Check out and drive to Split airport. 21:10 flight to Istanbul",
        icon: <Plane className="w-4 h-4" />,
      },
    ],
  },
  {
    id: 15,
    date: "Day 15 - Oct 8",
    city: "Istanbul",
    country: "Turkey",
    image: "/placeholder.svg?height=80&width=80",
    activities: [
      {
        time: "10:00",
        title: "Explore Sultanahmet",
        description: "Visit Hagia Sophia, Blue Mosque, Basilica Cistern, Hippodrome",
        icon: <Camera className="w-4 h-4" />,
      },
      {
        time: "17:00",
        title: "Sunset Tea",
        description: "View sunset from Seven Hills rooftop",
        icon: <Utensils className="w-4 h-4" />,
      },
    ],
  },
  {
    id: 16,
    date: "Day 16 - Oct 9",
    city: "Istanbul",
    country: "Turkey",
    image: "/placeholder.svg?height=80&width=80",
    activities: [
      {
        time: "09:00",
        title: "Spice Bazaar & Bosphorus Cruise",
        description: "Morning shopping and 1.5 hr boat ride",
        icon: <Camera className="w-4 h-4" />,
      },
      {
        time: "13:00",
        title: "Galata & Istiklal",
        description: "Visit Galata Tower, walk Istiklal Street",
        icon: <Camera className="w-4 h-4" />,
      },
      {
        time: "16:00",
        title: "Ferry to Kadıköy",
        description: "Asian side stroll through Moda, then return",
        icon: <MapPin className="w-4 h-4" />,
      },
    ],
  },
  {
    id: 17,
    date: "Day 17 - Oct 10",
    city: "Göreme",
    country: "Turkey",
    image: "/placeholder.svg?height=80&width=80",
    activities: [
      {
        time: "05:00",
        title: "Flight to Kayseri",
        description: "Check out and go to IST. 08:30 flight to Kayseri",
        icon: <Plane className="w-4 h-4" />,
      },
      {
        time: "11:00",
        title: "Arrive in Göreme",
        description: "Taxi from Kayseri (75km). Check in, visit open-air museum, sunset",
        icon: <MapPin className="w-4 h-4" />,
      },
    ],
  },
  {
    id: 18,
    date: "Day 18 - Oct 11",
    city: "Göreme",
    country: "Turkey",
    image: "/placeholder.svg?height=80&width=80",
    activities: [
      {
        time: "05:00",
        title: "Hot Air Balloon Ride",
        description: "Optional sunrise balloon ride over valleys",
        icon: <Camera className="w-4 h-4" />,
      },
      {
        time: "09:00",
        title: "Full-Day Tour",
        description: "North or South Cappadocia tour (valleys, pottery, underground city)",
        icon: <Camera className="w-4 h-4" />,
      },
    ],
  },
  {
    id: 19,
    date: "Day 19 - Oct 12",
    city: "Göreme",
    country: "Turkey",
    image: "/placeholder.svg?height=80&width=80",
    activities: [
      {
        time: "Morning",
        title: "Free Time",
        description: "Relax and explore Göreme",
        icon: <MapPin className="w-4 h-4" />,
      },
      {
        time: "18:30",
        title: "Flight to Istanbul",
        description: "Taxi to Kayseri Airport, 22:20 flight to IST",
        icon: <Plane className="w-4 h-4" />,
      },
    ],
  },
  {
    id: 20,
    date: "Day 20 - Oct 13",
    city: "Istanbul",
    country: "Turkey",
    image: "/placeholder.svg?height=80&width=80",
    activities: [
      {
        time: "02:05",
        title: "Flight to Hanoi",
        description: "Flight TK164 from Istanbul to Hanoi. Arrive 15:25",
        icon: <Plane className="w-4 h-4" />,
      },
    ],
  },
]

export default tripData
