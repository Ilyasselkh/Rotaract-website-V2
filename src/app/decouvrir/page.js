"use client";
import React, { useState } from "react";
import { Calendar, MapPin, Clock, X, Image, ArrowRight, Sparkles } from "lucide-react";

const internalEvents = [
  {
    id: 1,
    title: "Hackathon Interne",
    date: "15 Décembre 2023",
    time: "09:00 - 18:00",
    location: "Salle de réunion principale",
    description:
      "Un hackathon interne pour innover et résoudre des défis techniques. Participez à des équipes pour développer des solutions créatives en 24 heures.",
    images: ["/images/cancer.jpg", "/events/hackathon2.jpg", "/events/hackathon3.jpg"],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: 2,
    title: "Formation DevOps",
    date: "20 Décembre 2023",
    time: "14:00 - 17:00",
    location: "Salle de formation",
    description:
      "Apprenez les meilleures pratiques DevOps avec nos experts. Couvre CI/CD, conteneurisation et automatisation.",
    images: ["/events/devops1.jpg", "/events/devops2.jpg", "/events/devops3.jpg"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    title: "Team Building",
    date: "25 Décembre 2023",
    time: "10:00 - 16:00",
    location: "Parc urbain",
    description:
      "Renforcez les liens d'équipe avec des activités ludiques et collaboratives en plein air.",
    images: ["/events/team1.jpg", "/events/team2.jpg", "/events/team3.jpg"],
    gradient: "from-emerald-500 to-teal-500",
  },
];

const externalEvents = [
  {
    id: 4,
    title: "Conférence Tech Innovante",
    date: "10 Janvier 2024",
    time: "09:00 - 18:00",
    location: "Centre des Congrès, Ville X",
    description:
      "Découvrez les dernières tendances en technologie avec des conférenciers renommés du monde entier.",
    images: ["/events/conference1.jpg", "/events/conference2.jpg", "/events/conference3.jpg"],
    gradient: "from-orange-500 to-red-500",
  },
  {
    id: 5,
    title: "Meetup Startup",
    date: "15 Janvier 2024",
    time: "18:00 - 21:00",
    location: "Café Innovateur, Ville Y",
    description:
      "Rencontrez des entrepreneurs et investisseurs lors de ce meetup dédié aux startups en croissance.",
    images: ["/events/startup1.jpg", "/events/startup2.jpg", "/events/startup3.jpg"],
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    id: 6,
    title: "Salon de l'Innovation",
    date: "20 Janvier 2024",
    time: "10:00 - 19:00",
    location: "Palais des Expositions, Ville Z",
    description:
      "Explorez les innovations technologiques et rencontrez des exposants de divers secteurs.",
    images: ["/events/innovation1.jpg", "/events/innovation2.jpg", "/events/innovation3.jpg"],
    gradient: "from-pink-500 to-rose-500",
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

  const EventCard = ({ event, isInternal }) => (
    <div
      className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-105"
      onClick={() => openModal(event)}
      onMouseEnter={() => setHoveredCard(event.id)}
      onMouseLeave={() => setHoveredCard(null)}
    >
      {/* Gradient Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${event.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
      
      {/* Animated Border */}
      <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-white/30 transition-all duration-500"></div>
      
      {/* Content */}
      <div className="relative p-8">
        {/* Badge */}
        <div className="flex justify-between items-start mb-6">
          <span className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase bg-gradient-to-r ${event.gradient} text-white shadow-lg`}>
            {isInternal ? "Interne" : "Externe"}
          </span>
          <Sparkles className={`w-5 h-5 text-white/60 transition-all duration-300 ${hoveredCard === event.id ? 'rotate-12 scale-110' : ''}`} />
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
          {event.title}
        </h3>

        {/* Info Grid */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-3 text-gray-300 group-hover:text-white transition-colors">
            <div className={`p-2 rounded-lg bg-gradient-to-br ${event.gradient} bg-opacity-20`}>
              <Calendar className="w-4 h-4" />
            </div>
            <span className="text-sm font-medium">{event.date}</span>
          </div>
          <div className="flex items-center gap-3 text-gray-300 group-hover:text-white transition-colors">
            <div className={`p-2 rounded-lg bg-gradient-to-br ${event.gradient} bg-opacity-20`}>
              <Clock className="w-4 h-4" />
            </div>
            <span className="text-sm font-medium">{event.time}</span>
          </div>
          <div className="flex items-center gap-3 text-gray-300 group-hover:text-white transition-colors">
            <div className={`p-2 rounded-lg bg-gradient-to-br ${event.gradient} bg-opacity-20`}>
              <MapPin className="w-4 h-4" />
            </div>
            <span className="text-sm font-medium">{event.location}</span>
          </div>
        </div>

        {/* CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-700">
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <Image className="w-4 h-4" />
            <span>3 photos</span>
          </div>
          <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:translate-x-2 transition-all duration-300" />
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
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <main className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <span className="px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-purple-300 text-sm font-semibold tracking-wider uppercase">
                Événements à venir
              </span>
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 animate-gradient">
                Rejoignez-nous
              </span>
            </h1>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
              Découvrez nos événements exclusifs et participez à des expériences inoubliables
            </p>
          </div>

          {/* Internal Events */}
          <section className="mb-24">
            <div className="flex items-center gap-4 mb-10">
              <div className="h-1 w-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
              <h2 className="text-4xl font-bold text-white">Événements Internes</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {internalEvents.map((event) => (
                <EventCard key={event.id} event={event} isInternal={true} />
              ))}
            </div>
          </section>

          {/* External Events */}
          <section>
            <div className="flex items-center gap-4 mb-10">
              <div className="h-1 w-12 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full"></div>
              <h2 className="text-4xl font-bold text-white">Événements Externes</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
          className="fixed inset-0 bg-black/80 backdrop-blur-xl z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={closeModal}
        >
          <div
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-white/10 animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8 md:p-12">
              {/* Header */}
              <div className="flex justify-between items-start mb-8">
                <div className="flex-1">
                  <span className={`inline-block px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase bg-gradient-to-r ${selectedEvent.gradient} text-white shadow-lg mb-4`}>
                    Détails de l&apos;événement
                  </span>
                  <h2 className="text-4xl md:text-5xl font-black text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                    {selectedEvent.title}
                  </h2>
                  <div className="flex flex-wrap gap-6 text-gray-300">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${selectedEvent.gradient} bg-opacity-20`}>
                        <Calendar className="w-5 h-5" />
                      </div>
                      <span className="font-medium">{selectedEvent.date}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${selectedEvent.gradient} bg-opacity-20`}>
                        <Clock className="w-5 h-5" />
                      </div>
                      <span className="font-medium">{selectedEvent.time}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${selectedEvent.gradient} bg-opacity-20`}>
                        <MapPin className="w-5 h-5" />
                      </div>
                      <span className="font-medium">{selectedEvent.location}</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all duration-300 hover:rotate-90"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Images Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {selectedEvent.images.map((image, index) => (
                  <div 
                    key={index} 
                    className="aspect-video rounded-2xl overflow-hidden bg-gray-700/50 border border-white/10 group"
                  >
                    <div className="w-full h-full flex items-center justify-center text-gray-500 group-hover:scale-110 transition-transform duration-500">
                      <Image className="w-12 h-12" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Description */}
              <div className={`bg-gradient-to-br ${selectedEvent.gradient} bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white/10`}>
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <div className={`w-2 h-8 rounded-full bg-gradient-to-b ${selectedEvent.gradient}`}></div>
                  Description
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg">
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
      `}</style>
    </div>
  );
}