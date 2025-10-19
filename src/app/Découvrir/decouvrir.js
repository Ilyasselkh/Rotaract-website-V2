"use client";
import React, { useState } from "react";
import Navbar from "../../components/Navbar"; // Assurez-vous que le chemin est correct
import Footer from "../../components/Footer";
import { Calendar, MapPin, Clock, X, Image as ImageIcon } from "lucide-react";

// Données des événements (vous pouvez les remplacer par vos vraies données)
const internalEvents = [
  {
    id: 1,
    title: "Hackathon Interne",
    date: "15 Décembre 2023",
    time: "09:00 - 18:00",
    location: "Salle de réunion principale",
    description: "Un hackathon interne pour innover et résoudre des défis techniques. Participez à des équipes pour développer des solutions créatives en 24 heures.",
    images: [
      "https://via.placeholder.com/400x300/00FFFF/000000?text=Image+1",
      "https://via.placeholder.com/400x300/0080FF/FFFFFF?text=Image+2",
      "https://via.placeholder.com/400x300/8000FF/FFFFFF?text=Image+3"
    ]
  },
  {
    id: 2,
    title: "Formation DevOps",
    date: "20 Décembre 2023",
    time: "14:00 - 17:00",
    location: "Salle de formation",
    description: "Apprenez les meilleures pratiques DevOps avec nos experts. Couvre CI/CD, conteneurisation et automatisation.",
    images: [
      "https://via.placeholder.com/400x300/FF8000/000000?text=Image+1",
      "https://via.placeholder.com/400x300/FFFF00/000000?text=Image+2",
      "https://via.placeholder.com/400x300/80FF00/000000?text=Image+3"
    ]
  },
  {
    id: 3,
    title: "Team Building",
    date: "25 Décembre 2023",
    time: "10:00 - 16:00",
    location: "Parc urbain",
    description: "Renforcez les liens d'équipe avec des activités ludiques et collaboratives en plein air.",
    images: [
      "https://via.placeholder.com/400x300/FF0080/FFFFFF?text=Image+1",
      "https://via.placeholder.com/400x300/800080/FFFFFF?text=Image+2",
      "https://via.placeholder.com/400x300/008080/FFFFFF?text=Image+3"
    ]
  }
];

const externalEvents = [
  {
    id: 4,
    title: "Conférence Tech Innovante",
    date: "10 Janvier 2024",
    time: "09:00 - 18:00",
    location: "Centre des Congrès, Ville X",
    description: "Découvrez les dernières tendances en technologie avec des conférenciers renommés du monde entier.",
    images: [
      "https://via.placeholder.com/400x300/00FF80/000000?text=Image+1",
      "https://via.placeholder.com/400x300/FF4000/FFFFFF?text=Image+2",
      "https://via.placeholder.com/400x300/4000FF/FFFFFF?text=Image+3"
    ]
  },
  {
    id: 5,
    title: "Meetup Startup",
    date: "15 Janvier 2024",
    time: "18:00 - 21:00",
    location: "Café Innovateur, Ville Y",
    description: "Rencontrez des entrepreneurs et investisseurs lors de ce meetup dédié aux startups en croissance.",
    images: [
      "https://via.placeholder.com/400x300/80FF80/000000?text=Image+1",
      "https://via.placeholder.com/400x300/FF8080/000000?text=Image+2",
      "https://via.placeholder.com/400x300/8080FF/FFFFFF?text=Image+3"
    ]
  },
  {
    id: 6,
    title: "Salon de l'Innovation",
    date: "20 Janvier 2024",
    time: "10:00 - 19:00",
    location: "Palais des Expositions, Ville Z",
    description: "Explorez les innovations technologiques et rencontrez des exposants de divers secteurs.",
    images: [
      "https://via.placeholder.com/400x300/FFFF80/000000?text=Image+1",
      "https://via.placeholder.com/400x300/80FFFF/000000?text=Image+2",
      "https://via.placeholder.com/400x300/FF80FF/000000?text=Image+3"
    ]
  }
];

export default function EventsPage() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105 border border-white/20"
      onClick={() => openModal(event)}
    >
      <div className="flex items-center gap-2 mb-3">
        <Calendar className="w-5 h-5 text-cyan-400" />
        <span className="text-cyan-400 font-semibold">{event.date}</span>
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
      <div className="flex items-center gap-2 text-gray-300 mb-1">
        <Clock className="w-4 h-4" />
        <span>{event.time}</span>
      </div>
      <div className="flex items-center gap-2 text-gray-300 mb-4">
        <MapPin className="w-4 h-4" />
        <span>{event.location}</span>
      </div>
      <div className="flex items-center gap-2 text-sm">
        <ImageIcon className="w-4 h-4 text-purple-400" />
        <span className="text-purple-400">Cliquez pour voir les détails</span>
      </div>
      {isInternal && (
        <div className="mt-3 inline-block bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm font-medium">
          Interne
        </div>
      )}
      {!isInternal && (
        <div className="mt-3 inline-block bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm font-medium">
          Externe
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-900 via-blue-900 to-purple-900">
      <Navbar />
      
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Événements à Venir
            </h1>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto">
              Découvrez nos événements internes et externes. Cliquez sur un événement pour en savoir plus.
            </p>
          </div>

          {/* Internal Events */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <div className="w-2 h-8 bg-cyan-500 rounded-full"></div>
              Événements Internes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {internalEvents.map((event) => (
                <EventCard key={event.id} event={event} isInternal={true} />
              ))}
            </div>
          </section>

          {/* External Events */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <div className="w-2 h-8 bg-purple-500 rounded-full"></div>
              Événements Externes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {externalEvents.map((event) => (
                <EventCard key={event.id} event={event} isInternal={false} />
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />

      {/* Modal */}
      {isModalOpen && selectedEvent && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={closeModal}>
          <div className="bg-white/10 backdrop-blur-2xl rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/20" onClick={(e) => e.stopPropagation()}>
            <div className="p-6 md:p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">{selectedEvent.title}</h2>
                  <div className="flex flex-wrap gap-4 text-gray-300">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-cyan-400" />
                      <span>{selectedEvent.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-cyan-400" />
                      <span>{selectedEvent.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-cyan-400" />
                      <span>{selectedEvent.location}</span>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={closeModal}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Images Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {selectedEvent.images.map((image, index) => (
                  <div key={index} className="aspect-video rounded-lg overflow-hidden">
                    <image 
                      src={image} 
                      alt={`Image ${index + 1} de ${selectedEvent.title}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>

              {/* Description */}
              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Description</h3>
                <p className="text-gray-300 leading-relaxed">{selectedEvent.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
