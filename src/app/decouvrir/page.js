"use client";
import React, { useState } from "react";
import { Calendar, MapPin, Clock, X, Image, ArrowRight, Sparkles, Bell } from "lucide-react";

const upcomingEvents = [
  {
    id: 7,
    title: "Atelier IA & Machine Learning",
    date: "5 Novembre 2025",
    time: "09:00 - 12:00",
    location: "Salle de conférence A",
    description:
      "Découvrez les bases de l'intelligence artificielle et du machine learning avec nos experts.",
    image: "/events/ai1.jpg",
    gradient: "from-cyan-500 to-blue-500",
    daysLeft: 8,
  },
  {
    id: 8,
    title: "Innovation Summit 2025",
    date: "12 Novembre 2025",
    time: "10:00 - 18:00",
    location: "Centre des Congrès, Casablanca",
    description:
      "Le plus grand événement tech de l'année. Conférences, networking et démonstrations.",
    image: "/events/summit1.jpg",
    gradient: "from-yellow-500 to-orange-500",
    daysLeft: 15,
  },
  {
    id: 9,
    title: "Webinaire Cybersécurité",
    date: "18 Novembre 2025",
    time: "14:00 - 16:00",
    location: "En ligne",
    description:
      "Protégez votre infrastructure avec les meilleures pratiques en cybersécurité.",
    image: "/events/cyber1.jpg",
    gradient: "from-red-500 to-pink-500",
    daysLeft: 21,
  },
];

const internalEvents = [
  {
    id: 1,
    title: "Sortie à la ferme – Moment de convivialité et d'échange 🌾",
    date: "15 Juin 2024",
    time: "09:00 - 17:00",
    location: "Ferme écologique",
    description:
      "Une journée conviviale à la ferme pour renforcer les liens entre membres et partager un moment de détente en plein air. 🌱",
    images: ["/events/farm1.jpg", "/events/farm2.jpg", "/events/farm3.jpg"],
    gradient: "from-green-500 to-emerald-500",
  },
  {
    id: 2,
    title: "Assemblée Générale",
    date: "20 Septembre 2024",
    time: "14:00 - 17:00",
    location: "Salle de conférence principale",
    description:
      "Réunions mensuelles pour planifier nos actions, partager nos idées et voter les projets à venir.",
    images: ["/events/assembly1.jpg", "/events/assembly2.jpg", "/events/assembly3.jpg"],
    gradient: "from-blue-500 to-indigo-500",
  },
];

const externalEvents = [
  {
    id: 4,
    title: "Préparation pour la distribution des repas – Action solidaire du Rotaract 🤝",
    date: "10 Décembre 2024",
    time: "08:00 - 14:00",
    location: "Centre communautaire",
    description:
      "Préparation des repas dans une ambiance solidaire et joyeuse avant leur distribution aux personnes dans le besoin. 🍲",
    images: ["/events/rotaract1.jpg", "/events/rotaract2.jpg", "/events/rotaract3.jpg"],
    gradient: "from-orange-500 to-red-500",
  },
  {
    id: 5,
    title: "Journée de sensibilisation au cancer du sein – Octobre Rose 🎀",
    date: "15 Octobre 2024",
    time: "10:00 - 18:00",
    location: "Place publique",
    description:
      "Nos membres se sont réunis pour soutenir la lutte contre le cancer du sein et promouvoir la sensibilisation à cette cause importante. 💗",
    images: ["/events/octobre1.jpg", "/events/octobre2.jpg", "/events/octobre3.jpg"],
    gradient: "from-pink-500 to-rose-500",
  },
  {
    id: 6,
    title: "Collecte de Sang",
    date: "5 Novembre 2024",
    time: "09:00 - 16:00",
    location: "Centres de transfusion locaux",
    description:
      "Organisation de campagnes de don de sang en partenariat avec les centres de transfusion locaux.",
    images: ["/events/blood1.jpg", "/events/blood2.jpg", "/events/blood3.jpg"],
    gradient: "from-red-600 to-rose-600",
  },
];

export default function EventsPage() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  const openModal = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  const UpcomingEventCard = ({ event }) => (
    <div
      className="group relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transform transition-all duration-500 hover:scale-105 cursor-pointer"
      onClick={() => openModal(event)}
    >
      {/* Image */}
      <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${event.gradient} opacity-30`}></div>
        <div className="w-full h-full flex items-center justify-center text-gray-400 bg-gray-100">
          <Image className="w-16 h-16 sm:w-20 sm:h-20" />
        </div>
        
        {/* Days Left Badge */}
        {event.daysLeft && (
          <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-2 bg-white/95 backdrop-blur-sm rounded-full shadow-lg">
            <Bell className="w-4 h-4 text-yellow-500" />
            <span className="text-sm font-bold text-gray-800">{event.daysLeft} jours</span>
          </div>
        )}
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6">
        <span className={`inline-block px-3 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-gradient-to-r ${event.gradient} text-white shadow-md mb-3`}>
          À venir
        </span>
        
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 line-clamp-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-600">
          {event.title}
        </h3>

        {/* Info */}
        <div className="space-y-2.5 mb-4">
          <div className="flex items-center gap-2.5 text-gray-600">
            <Calendar className="w-4 h-4 flex-shrink-0" />
            <span className="text-sm font-medium">{event.date}</span>
          </div>
          <div className="flex items-center gap-2.5 text-gray-600">
            <Clock className="w-4 h-4 flex-shrink-0" />
            <span className="text-sm font-medium">{event.time}</span>
          </div>
          <div className="flex items-center gap-2.5 text-gray-600">
            <MapPin className="w-4 h-4 flex-shrink-0" />
            <span className="text-sm font-medium truncate">{event.location}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 mb-4">
          {event.description}
        </p>

        {/* CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <span className="text-sm font-semibold text-gray-500">En savoir plus</span>
          <ArrowRight className={`w-5 h-5 text-gray-400 group-hover:text-${event.gradient.split('-')[1]}-500 group-hover:translate-x-2 transition-all duration-300`} />
        </div>
      </div>
    </div>
  );

  const EventCard = ({ event, isInternal }) => (
    <div
      className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-105"
      onClick={() => openModal(event)}
      onMouseEnter={() => setHoveredCard(event.id)}
      onMouseLeave={() => setHoveredCard(null)}
    >
      {/* Gradient Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${event.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
      
      {/* Animated Border */}
      <div className="absolute inset-0 rounded-2xl sm:rounded-3xl border-2 border-transparent group-hover:border-white/30 transition-all duration-500"></div>
      
      {/* Content */}
      <div className="relative p-4 sm:p-6 lg:p-8">
        {/* Badge & Days Left */}
        <div className="flex justify-between items-start mb-4 sm:mb-6">
          <span className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-bold tracking-wider uppercase bg-gradient-to-r ${event.gradient} text-white shadow-lg`}>
            {isInternal ? "Interne" : "Externe"}
          </span>
          <Sparkles className={`w-4 h-4 sm:w-5 sm:h-5 text-white/60 transition-all duration-300 ${hoveredCard === event.id ? 'rotate-12 scale-110' : ''}`} />
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-4 sm:mb-6 line-clamp-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
          {event.title}
        </h3>

        {/* Info Grid */}
        <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
          <div className="flex items-center gap-2 sm:gap-3 text-gray-300 group-hover:text-white transition-colors">
            <div className={`p-1.5 sm:p-2 rounded-lg bg-gradient-to-br ${event.gradient} bg-opacity-20`}>
              <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
            </div>
            <span className="text-xs sm:text-sm font-medium truncate">{event.date}</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 text-gray-300 group-hover:text-white transition-colors">
            <div className={`p-1.5 sm:p-2 rounded-lg bg-gradient-to-br ${event.gradient} bg-opacity-20`}>
              <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
            </div>
            <span className="text-xs sm:text-sm font-medium truncate">{event.time}</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 text-gray-300 group-hover:text-white transition-colors">
            <div className={`p-1.5 sm:p-2 rounded-lg bg-gradient-to-br ${event.gradient} bg-opacity-20`}>
              <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
            </div>
            <span className="text-xs sm:text-sm font-medium truncate">{event.location}</span>
          </div>
        </div>

        {/* CTA */}
        <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-gray-700">
          <div className="flex items-center gap-1.5 sm:gap-2 text-gray-400 text-xs sm:text-sm">
            <Image className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>3 photos</span>
          </div>
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-white group-hover:translate-x-2 transition-all duration-300" />
        </div>
      </div>

      {/* Shine Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <main className="relative pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-block mb-4 sm:mb-6">
              <span className="px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-purple-300 text-xs sm:text-sm font-semibold tracking-wider uppercase">
                Nos Événements
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-4 sm:mb-6 px-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 animate-gradient">
                Rejoignez-nous
              </span>
            </h1>
            <p className="text-gray-400 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed px-4">
              Découvrez nos événements exclusifs et participez à des expériences inoubliables
            </p>
          </div>

          {/* Upcoming Events */}
          <section className="mb-16 sm:mb-20 lg:mb-24">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-6 sm:mb-8 lg:mb-10">
              <div className="h-1 w-8 sm:w-12 bg-gradient-to-r from-cyan-500 to-yellow-500 rounded-full"></div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">Événements à Venir</h2>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-yellow-500/20 rounded-full w-fit">
                <Bell className="w-4 h-4 text-yellow-400 animate-bounce" />
                <span className="text-yellow-400 text-xs sm:text-sm font-semibold">Nouveaux</span>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {upcomingEvents.map((event) => (
                <UpcomingEventCard key={event.id} event={event} />
              ))}
            </div>
          </section>

          {/* Internal Events */}
          <section className="mb-16 sm:mb-20 lg:mb-24">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-6 sm:mb-8 lg:mb-10">
              <div className="h-1 w-8 sm:w-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full"></div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                <span className="text-white">Événements </span>
                <span className="text-pink-500">Internes</span>
              </h2>
            </div>
            <p className="text-gray-400 text-sm sm:text-base mb-8 max-w-3xl">
              Des activités dédiées au développement et à la cohésion de notre équipe
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              {internalEvents.map((event) => (
                <EventCard key={event.id} event={event} isInternal={true} />
              ))}
            </div>
          </section>

          {/* External Events */}
          <section>
            <div className="mb-6 sm:mb-8 lg:mb-10">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="px-4 py-2 bg-pink-500/20 backdrop-blur-sm border border-pink-500/30 rounded-full text-pink-300 text-xs font-semibold tracking-wider uppercase">
                  🎀 Pour la communauté
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 justify-center sm:justify-start">
                <div className="h-1 w-8 sm:w-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full mx-auto sm:mx-0"></div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center sm:text-left">
                  <span className="text-white">Événements </span>
                  <span className="text-pink-500">Externes</span>
                </h2>
              </div>
            </div>
            <p className="text-gray-400 text-sm sm:text-base mb-8 max-w-3xl text-center sm:text-left mx-auto sm:mx-0">
              Nos actions au service de la communauté et de l&apos;environnement
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {externalEvents.map((event) => (
                <EventCard key={event.id} event={event} isInternal={false} />
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Modal */}
      {isModalOpen && selectedEvent && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-xl z-50 flex items-center justify-center p-2 sm:p-4 animate-fadeIn"
          onClick={closeModal}
        >
          <div
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl sm:rounded-3xl max-w-5xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto shadow-2xl border border-white/10 animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 sm:p-6 md:p-8 lg:p-12">
              {/* Header */}
              <div className="flex justify-between items-start mb-6 sm:mb-8 gap-4">
                <div className="flex-1 min-w-0">
                  <span className={`inline-block px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-bold tracking-wider uppercase bg-gradient-to-r ${selectedEvent.gradient} text-white shadow-lg mb-3 sm:mb-4`}>
                    Détails de l&apos;événement
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 break-words">
                    {selectedEvent.title}
                  </h2>
                  <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 lg:gap-6 text-gray-300">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className={`p-2 sm:p-3 rounded-xl bg-gradient-to-br ${selectedEvent.gradient} bg-opacity-20 flex-shrink-0`}>
                        <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <span className="font-medium text-sm sm:text-base truncate">{selectedEvent.date}</span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className={`p-2 sm:p-3 rounded-xl bg-gradient-to-br ${selectedEvent.gradient} bg-opacity-20 flex-shrink-0`}>
                        <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <span className="font-medium text-sm sm:text-base truncate">{selectedEvent.time}</span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className={`p-2 sm:p-3 rounded-xl bg-gradient-to-br ${selectedEvent.gradient} bg-opacity-20 flex-shrink-0`}>
                        <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <span className="font-medium text-sm sm:text-base break-words">{selectedEvent.location}</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="p-2 sm:p-3 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all duration-300 hover:rotate-90 flex-shrink-0"
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>

              {/* Images Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
                {(selectedEvent.images || [selectedEvent.image]).map((image, index) => (
                  <div 
                    key={index} 
                    className="aspect-video rounded-xl sm:rounded-2xl overflow-hidden bg-gray-700/50 border border-white/10 group"
                  >
                    <div className="w-full h-full flex items-center justify-center text-gray-500 group-hover:scale-110 transition-transform duration-500">
                      <Image className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Description */}
              <div className={`bg-gradient-to-br ${selectedEvent.gradient} bg-opacity-10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/10`}>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
                  <div className={`w-1.5 sm:w-2 h-6 sm:h-8 rounded-full bg-gradient-to-b ${selectedEvent.gradient} flex-shrink-0`}></div>
                  Description
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg">
                  {selectedEvent.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        @keyframes scaleIn {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}