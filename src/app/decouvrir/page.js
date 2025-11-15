"use client";
import React, { useState } from "react";
import { Calendar, MapPin, Clock, X, ArrowRight, Sparkles, Bell, Zap, Star } from "lucide-react";

const upcomingEvents = [
  {
    id: 7,
    title: "Atelier IA & Machine Learning",
    date: "5 Novembre 2025",
    time: "09:00 - 12:00",
    location: "Salle de conférence A",
    description:
      "Découvrez les bases de l'intelligence artificielle et du machine learning avec nos experts.",
    image: "/images/Jeunes.jpg",
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
    image: "/images/marwa.jpg",
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
    image: "/images/QiuRotaract.jpg",
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
      "Cette sortie a permis à nos membres de se retrouver dans un cadre naturel, propice à la relaxation et aux échanges authentiques. Entre activités agricoles, balades et moments de partage, chacun a pu profiter d’une parenthèse loin du quotidien. Cette journée a renforcé l’esprit d’équipe, favorisé la cohésion du groupe et créé de nouveaux souvenirs communs, le tout dans une atmosphère chaleureuse et pleine de bonne humeur. Une expérience simple, naturelle et riche en convivialité.",
    images: ["/images/Interne1.jpg", "/images/Interne1.jpg", "/images/Interne1.jpg"],
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
    images: ["/images/Interne1.jpg", "/images/Interne1.jpg", "/images/Interne1.jpg"],
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
      "Nos membres se sont mobilisés pour cuisiner ensemble, chacun apportant son énergie, son soutien et sa bonne humeur afin de préparer des repas chauds et équilibrés. Cette initiative a été l’occasion de partager un vrai moment de convivialité tout en travaillant pour une cause essentielle : offrir un peu de réconfort à ceux qui traversent des moments difficiles. Grâce à cet esprit d’équipe et à l’engagement de tous, nous avons pu apporter non seulement de la nourriture, mais aussi un geste de compassion et de proximité humaine à notre communauté.",
    images: ["/images/Externe4.jpg", "/images/.jpg", "/images/.jpg"],
    gradient: "from-orange-500 to-red-500",
  },
  {
    id: 5,
    title: "Journée de sensibilisation au cancer du sein – Octobre Rose 🎀",
    date: "27 Octobre 2024",
    time: "16:00",
    location: "Villa Sbihi - salé",
    description:
      "À travers cette action, nous avons rappelé l’importance du dépistage précoce et du soutien aux personnes touchées par la maladie. Nos bénévoles se sont mobilisés pour informer, accompagner et encourager la communauté à adopter les bons réflexes de prévention. Ce moment d’échange et de solidarité a permis de renforcer la conscience collective autour de cette cause qui touche tant de familles. Une initiative forte et engagée, empreinte d’humanité, de soutien et d’espoir.",
    images: ["/images/octobre1.jpg", "/images/octobre2.jpg", "/images/octobre3.jpg"],
    gradient: "from-pink-500 to-rose-500",
  },
  {
    id: 6,
    title: "Journée de mobilisation pour le don de sang – Ensemble pour sauver des vies ❤️",
    date: "5 Novembre 2024",
    time: "09:00 - 16:00",
    location: "Centres de transfusion locaux",
    description:
      "Cette initiative a permis de rappeler que le don de sang reste un acte essentiel et accessible à tous, capable d’apporter une seconde chance aux personnes en situation d’urgence. Grâce à la mobilisation de nos bénévoles, nous avons pu informer, accompagner et rassurer les donneurs tout au long de la collecte. Ce moment de solidarité a renforcé notre engagement envers la santé publique et a démontré une fois de plus que, lorsqu’une communauté se mobilise, elle peut réellement faire la différence. Une action humaine, porteuse d’espoir et de vie.",
    images: ["/images/.jpg", "/images/.jpg", "/images/.jpg"],
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
      className="group relative overflow-hidden cursor-pointer"
      onClick={() => openModal(event)}
    >
      {/* Glassmorphism Card */}
      <div className="relative h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden transition-all duration-700 hover:scale-[1.02] hover:border-white/30">
        {/* Animated Gradient Border */}
        <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700`}>
          <div className={`absolute inset-0 bg-gradient-to-r ${event.gradient} opacity-20 blur-xl`}></div>
        </div>

        {/* Image Section */}
        <div className="relative h-64 overflow-hidden">
          <img 
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = `https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop`;
            }}
          />
          
          {/* Gradient Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-t ${event.gradient} opacity-60 mix-blend-multiply`}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
          
          {/* Floating Badge */}
          {event.daysLeft && (
            <div className="absolute top-6 right-6 backdrop-blur-2xl bg-white/10 border border-white/20 rounded-2xl px-4 py-2.5 shadow-2xl">
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Bell className="w-4 h-4 text-yellow-400 animate-bounce" />
                  <div className="absolute inset-0 bg-yellow-400/30 rounded-full blur-md animate-pulse"></div>
                </div>
                <span className="text-white font-bold text-sm">{event.daysLeft} jours</span>
              </div>
            </div>
          )}

          {/* Category Badge */}
          <div className="absolute top-6 left-6">
            <div className={`backdrop-blur-xl bg-gradient-to-r ${event.gradient} px-4 py-2 rounded-full border border-white/30 shadow-2xl`}>
              <span className="text-white font-bold text-xs tracking-wider uppercase flex items-center gap-2">
                <Zap className="w-3 h-3" />
                À venir
              </span>
            </div>
          </div>

          {/* Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-2xl font-black text-white mb-2 line-clamp-2 drop-shadow-2xl">
              {event.title}
            </h3>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 space-y-4">
          {/* Info Pills */}
          <div className="flex flex-wrap gap-2">
            <div className="flex items-center gap-2 px-3 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
              <Calendar className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-xs text-gray-300 font-medium">{event.date}</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
              <Clock className="w-3.5 h-3.5 text-purple-400" />
              <span className="text-xs text-gray-300 font-medium">{event.time}</span>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-start gap-3">
            <div className={`p-2 rounded-xl bg-gradient-to-br ${event.gradient} bg-opacity-20 border border-white/10 flex-shrink-0`}>
              <MapPin className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm text-gray-400 font-medium line-clamp-2">{event.location}</span>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-400 leading-relaxed line-clamp-2">
            {event.description}
          </p>

          {/* CTA Button */}
          <div className="pt-4">
            <div className={`group/btn relative overflow-hidden bg-gradient-to-r ${event.gradient} rounded-2xl p-[2px] transition-all duration-300 hover:shadow-2xl hover:shadow-${event.gradient.split('-')[1]}-500/50`}>
              <div className="bg-gray-900 rounded-2xl px-6 py-3 flex items-center justify-between group-hover/btn:bg-transparent transition-all duration-300">
                <span className="text-white font-bold text-sm">Découvrir</span>
                <ArrowRight className="w-5 h-5 text-white group-hover/btn:translate-x-2 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const EventCard = ({ event, isInternal }) => (
    <div
      className="group relative cursor-pointer"
      onClick={() => openModal(event)}
      onMouseEnter={() => setHoveredCard(event.id)}
      onMouseLeave={() => setHoveredCard(null)}
    >
      {/* Card Container */}
      <div className="relative h-full bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden transition-all duration-700 hover:scale-[1.02] hover:border-white/30">
        {/* Animated Background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${event.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-700`}></div>
        
        {/* Mesh Gradient Effect */}
        <div className="absolute inset-0 opacity-30">
          <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${event.gradient} rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-700`}></div>
          <div className={`absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr ${event.gradient} rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-700`}></div>
        </div>

        {/* Content */}
        <div className="relative p-8 space-y-6">
          {/* Header */}
          <div className="flex justify-between items-start">
            <div className={`backdrop-blur-xl bg-gradient-to-r ${event.gradient} px-4 py-2 rounded-full border border-white/30 shadow-xl`}>
              <span className="text-white font-bold text-xs tracking-wider uppercase flex items-center gap-2">
                <Star className="w-3 h-3" />
                {isInternal ? "Interne" : "Externe"}
              </span>
            </div>
            <Sparkles className={`w-6 h-6 text-white/60 transition-all duration-500 ${hoveredCard === event.id ? 'rotate-180 scale-125 text-white' : ''}`} />
          </div>

          {/* Title */}
          <h3 className="text-2xl font-black text-white line-clamp-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
            {event.title}
          </h3>

          {/* Info Cards */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-2xl p-3 border border-white/10 group-hover:bg-white/10 transition-all">
              <div className={`p-2 rounded-xl bg-gradient-to-br ${event.gradient} shadow-lg`}>
                <Calendar className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm text-gray-300 font-medium">{event.date}</span>
            </div>
            
            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-2xl p-3 border border-white/10 group-hover:bg-white/10 transition-all">
              <div className={`p-2 rounded-xl bg-gradient-to-br ${event.gradient} shadow-lg`}>
                <Clock className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm text-gray-300 font-medium">{event.time}</span>
            </div>
            
            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-2xl p-3 border border-white/10 group-hover:bg-white/10 transition-all">
              <div className={`p-2 rounded-xl bg-gradient-to-br ${event.gradient} shadow-lg`}>
                <MapPin className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm text-gray-300 font-medium line-clamp-1">{event.location}</span>
            </div>
          </div>

          {/* Photos Badge */}
          <div className="flex items-center justify-between pt-4 border-t border-white/10">
            <div className="flex items-center gap-2 text-gray-400">
              <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                  <circle cx="8.5" cy="8.5" r="1.5"/>
                  <path d="M21 15l-5-5L5 21"/>
                </svg>
              </div>
              <span className="text-sm font-medium">3 photos</span>
            </div>
            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:translate-x-2 transition-all duration-300" />
          </div>
        </div>

        {/* Shine Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 transform translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Advanced Background */}
      <div className="absolute inset-0">
        {/* Gradient Mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950/20 via-black to-blue-950/20"></div>
        
        {/* Animated Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]"></div>
      </div>

      <main className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Header */}
          <div className="text-center mb-20 space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl">
              <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
              <span className="text-purple-300 text-sm font-bold tracking-wider uppercase">Nos Événements</span>
              <Sparkles className="w-4 h-4 text-purple-400" />
            </div>

            {/* Main Title */}
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black">
              <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 animate-gradient pb-4">
                Rejoignez-nous
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-gray-400 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
              Découvrez nos événements exclusifs et participez à des{" "}
              <span className="text-white font-semibold">expériences inoubliables</span>
            </p>

            {/* Decorative Line */}
            <div className="flex items-center justify-center gap-3">
              <div className="h-[2px] w-12 bg-gradient-to-r from-transparent to-purple-500"></div>
              <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
              <div className="h-[2px] w-12 bg-gradient-to-l from-transparent to-pink-500"></div>
            </div>
          </div>

          {/* Upcoming Events */}
          <section className="mb-32">
            <div className="flex items-center gap-4 mb-12">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-gradient-to-r from-cyan-500 to-yellow-500 rounded-full animate-pulse"></div>
                <h2 className="text-4xl lg:text-5xl font-black text-white">Événements à Venir</h2>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-yellow-500/10 backdrop-blur-sm border border-yellow-500/20 rounded-full">
                <Bell className="w-4 h-4 text-yellow-400 animate-bounce" />
                <span className="text-yellow-400 text-sm font-bold">Nouveaux</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event) => (
                <UpcomingEventCard key={event.id} event={event} />
              ))}
            </div>
          </section>

          {/* Internal Events */}
          <section className="mb-32">
            <div className="flex items-center gap-3 mb-12">
              <div className="w-3 h-3 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full animate-pulse"></div>
              <h2 className="text-4xl lg:text-5xl font-black">
                <span className="text-white">Événements </span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-rose-500">Internes</span>
              </h2>
            </div>
            <p className="text-gray-400 text-lg mb-12 max-w-3xl">
              Des activités dédiées au{" "}
              <span className="text-white font-semibold">développement et à la cohésion</span>{" "}
              de notre équipe
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {internalEvents.map((event) => (
                <EventCard key={event.id} event={event} isInternal={true} />
              ))}
            </div>
          </section>

          {/* External Events */}
          <section>
            <div className="text-center mb-12 space-y-6">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-pink-500/10 backdrop-blur-xl border border-pink-500/20 rounded-full">
                <span className="text-2xl">🎀</span>
                <span className="text-pink-300 text-sm font-bold tracking-wider uppercase">Pour la communauté</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <div className="w-3 h-3 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full animate-pulse"></div>
                <h2 className="text-4xl lg:text-5xl font-black">
                  <span className="text-white">Événements </span>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-rose-500">Externes</span>
                </h2>
              </div>
            </div>
            <p className="text-gray-400 text-lg mb-12 max-w-3xl mx-auto text-center">
              Nos actions au service de la{" "}
              <span className="text-white font-semibold">communauté et de l&apos;environnement</span>
            </p>
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
          className="fixed inset-0 bg-black/90 backdrop-blur-2xl z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={closeModal}
        >
          <div
            className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-2xl rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto border border-white/20 shadow-2xl animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Background Effects */}
            <div className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-br ${selectedEvent.gradient} opacity-20 blur-3xl rounded-full`}></div>
            
            <div className="relative p-8 lg:p-12">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-6 right-6 z-10 p-3 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:rotate-90 transition-all duration-300"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Header */}
              <div className="mb-8 space-y-6">
                <div className={`inline-flex items-center gap-3 px-5 py-2.5 bg-gradient-to-r ${selectedEvent.gradient} rounded-full border border-white/30 shadow-xl`}>
                  <Sparkles className="w-4 h-4 text-white" />
                  <span className="text-white font-bold text-sm tracking-wider uppercase">
                    Détails de l&apos;événement
                  </span>
                </div>

                <h2 className="text-4xl lg:text-5xl font-black text-white">
                  {selectedEvent.title}
                </h2>

                {/* Info Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="flex items-center gap-3 p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${selectedEvent.gradient} shadow-lg`}>
                      <Calendar className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 font-medium mb-1">Date</div>
                      <div className="text-white font-bold text-sm">{selectedEvent.date}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${selectedEvent.gradient} shadow-lg`}>
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 font-medium mb-1">Horaire</div>
                      <div className="text-white font-bold text-sm">{selectedEvent.time}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${selectedEvent.gradient} shadow-lg`}>
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 font-medium mb-1">Lieu</div>
                      <div className="text-white font-bold text-sm line-clamp-1">{selectedEvent.location}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Images Gallery */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                  <div className={`w-1.5 h-8 rounded-full bg-gradient-to-b ${selectedEvent.gradient}`}></div>
                  Galerie Photos
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {(selectedEvent.images || [selectedEvent.image]).map((image, index) => (
                    <div 
                      key={index} 
                      className="group relative aspect-video rounded-2xl overflow-hidden border border-white/10 bg-gray-800/50"
                    >
                      <img
                        src={image}
                        alt={`${selectedEvent.title} - Photo ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = `https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop`;
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className={`relative bg-gradient-to-br ${selectedEvent.gradient} bg-opacity-10 backdrop-blur-xl rounded-2xl p-8 border border-white/10 overflow-hidden`}>
                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${selectedEvent.gradient} opacity-20 blur-3xl rounded-full`}></div>
                
                <div className="relative">
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <div className={`w-2 h-10 rounded-full bg-gradient-to-b ${selectedEvent.gradient}`}></div>
                    Description
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {selectedEvent.description}
                  </p>
                </div>
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
          animation: gradient 5s ease infinite;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        @keyframes scaleIn {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-scaleIn {
          animation: scaleIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        /* Scrollbar Styling */
        *::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        *::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.1);
          border-radius: 10px;
        }
        *::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 10px;
        }
        *::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </div>
  );
}