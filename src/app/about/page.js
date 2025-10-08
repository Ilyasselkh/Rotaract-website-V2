"use client";

import React, { useState, useEffect, useRef } from 'react';
import { 
  Calendar, MapPin, Users, Award, Heart, Globe, 
  ChevronLeft, ChevronRight, Sparkles, Target,
  TrendingUp, BookOpen, Handshake, Star, MessageSquare, Quote
} from 'lucide-react';

export default function AboutPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [statsVisible, setStatsVisible] = useState(false);
  const [comments, setComments] = useState([]);
  const statsRef = useRef(null);

  // Charger les commentaires depuis le localStorage
  useEffect(() => {
    const loadComments = () => {
      const savedComments = JSON.parse(localStorage.getItem('clubComments') || '[]');
      setComments(savedComments);
    };

    loadComments();

    // Écouter les changements dans localStorage
    const handleStorageChange = () => {
      loadComments();
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  // Événements du carousel
  const events = [
    {
      id: 1,
      title: "Journée de Reboisement",
      date: "15 Mars 2024",
      location: "Forêt de Maâmora",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=600&fit=crop",
      participants: 120,
      description: "Une initiative écologique majeure avec plantation de 500 arbres",
      category: "Environnement"
    },
    {
      id: 2,
      title: "Collecte de Sang",
      date: "22 Février 2024",
      location: "Hôpital Central",
      image: "https://images.unsplash.com/photo-1615461066159-fea0960485d5?w=800&h=600&fit=crop",
      participants: 85,
      description: "Campagne de don de sang ayant sauvé plus de 200 vies",
      category: "Santé"
    },
    {
      id: 3,
      title: "Formation Leadership",
      date: "10 Janvier 2024",
      location: "Centre de Formation",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      participants: 60,
      description: "Workshop intensif sur le développement des compétences de leadership",
      category: "Formation"
    },
    {
      id: 4,
      title: "Aide aux Enfants",
      date: "5 Décembre 2023",
      location: "Orphelinat Al Amal",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=600&fit=crop",
      participants: 45,
      description: "Distribution de fournitures scolaires et activités récréatives",
      category: "Social"
    },
    {
      id: 5,
      title: "Conférence Innovation",
      date: "18 Novembre 2023",
      location: "Auditorium Universitaire",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
      participants: 200,
      description: "Conférence sur l'innovation sociale et l'entrepreneuriat jeune",
      category: "Innovation"
    }
  ];

  // Auto-play du carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % events.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, events.length]);

  // Observer pour les stats
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % events.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + events.length) % events.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  // Animation pour les nombres
  const useCountUp = (end, duration = 2000, shouldStart = false) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!shouldStart) return;

      let startTime;
      let animationFrame;

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / duration, 1);
        
        const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
        const currentCount = Math.floor(easeOutQuart * end);
        
        setCount(currentCount);

        if (percentage < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      };
    }, [end, duration, shouldStart]);

    return count;
  };

  const membersCount = useCountUp(500, 2000, statsVisible);
  const projectsCount = useCountUp(150, 2000, statsVisible);
  const hoursCount = useCountUp(5000, 2500, statsVisible);
  const awardsCount = useCountUp(25, 2000, statsVisible);

  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Service",
      description: "Nous plaçons le service communautaire au cœur de nos actions"
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "Intégrité",
      description: "L'honnêteté et l'éthique guident toutes nos décisions"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Diversité",
      description: "Nous célébrons et respectons toutes les cultures"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Leadership",
      description: "Développer les leaders de demain est notre mission"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Background Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full mb-6 animate-fade-in-up">
            <span className="text-sm font-semibold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              À PROPOS DE NOUS
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-gray-900 mb-6 animate-fade-in-up animation-delay-200">
            Notre <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Histoire</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
            Une communauté de jeunes passionnés, unis par une vision commune : créer un impact positif durable dans nos communautés et au-delà
          </p>
        </div>
      </div>

      {/* Club Presentation Section */}
      <div className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="backdrop-blur-xl bg-white/60 border border-white/50 rounded-3xl p-12 md:p-16 shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-4xl font-black text-gray-900">
                    Le Club <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Rotaract</span>
                  </h2>
                </div>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  Fondé sur les principes du Rotary International, le Rotaract est bien plus qu&apos;une organisation de jeunes. 
                  C&apos;est une famille mondiale de leaders engagés qui transforment leurs communautés à travers le service, 
                  l&apos;amitié et le développement personnel.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  Notre club rassemble des jeunes professionnels et étudiants âgés de 18 à 30 ans qui partagent 
                  une passion commune pour le service communautaire. Chaque membre apporte ses compétences uniques, 
                  créant ainsi une synergie extraordinaire qui multiplie notre impact.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-6">
                  {values.map((value, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-br from-pink-50 to-purple-50 border border-pink-100">
                      <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-500 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        {value.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">{value.title}</h4>
                        <p className="text-sm text-gray-600">{value.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Content - Image Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg bg-pink-200"></div>
                  <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg bg-purple-200"></div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg bg-blue-200"></div>
                  <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg bg-pink-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div ref={statsRef} className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-900 mb-4">
              Notre <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Impact</span>
            </h2>
            <p className="text-xl text-gray-600">Des chiffres qui témoignent de notre engagement</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="backdrop-blur-xl bg-white/60 border border-white/50 rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <Users className="w-12 h-12 text-pink-500 mx-auto mb-4" />
              <p className="text-5xl font-black bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {membersCount}+
              </p>
              <p className="text-gray-600 font-semibold">Membres Actifs</p>
            </div>

            <div className="backdrop-blur-xl bg-white/60 border border-white/50 rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <Target className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <p className="text-5xl font-black bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {projectsCount}+
              </p>
              <p className="text-gray-600 font-semibold">Projets Réalisés</p>
            </div>

            <div className="backdrop-blur-xl bg-white/60 border border-white/50 rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <Heart className="w-12 h-12 text-pink-500 mx-auto mb-4" />
              <p className="text-5xl font-black bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {hoursCount}+
              </p>
              <p className="text-gray-600 font-semibold">Heures de Service</p>
            </div>

            <div className="backdrop-blur-xl bg-white/60 border border-white/50 rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <Award className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <p className="text-5xl font-black bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {awardsCount}+
              </p>
              <p className="text-gray-600 font-semibold">Prix Obtenus</p>
            </div>
          </div>
        </div>
      </div>

      {/* Events Carousel Section */}
      <div className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full mb-6">
              <span className="text-sm font-semibold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                NOS RÉALISATIONS
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
              Événements <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Récents</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Découvrez nos dernières initiatives et les moments forts de notre action
            </p>
          </div>

          {/* Carousel */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl">
              <div 
                className="flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {events.map((event) => (
                  <div key={event.id} className="min-w-full px-4">
                    <div className="backdrop-blur-xl bg-white/60 border border-white/50 rounded-3xl overflow-hidden shadow-2xl">
                      <div className="grid lg:grid-cols-2">
                        {/* Image */}
                        <div className="relative h-96 lg:h-auto bg-gradient-to-br from-pink-200 to-purple-200">
                          <div className="absolute top-6 left-6">
                            <span className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-bold text-pink-600">
                              {event.category}
                            </span>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-12 flex flex-col justify-center">
                          <div className="flex items-center gap-4 mb-6">
                            <div className="flex items-center gap-2 text-gray-600">
                              <Calendar className="w-5 h-5" />
                              <span className="font-medium">{event.date}</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-600">
                              <MapPin className="w-5 h-5" />
                              <span className="font-medium">{event.location}</span>
                            </div>
                          </div>

                          <h3 className="text-4xl font-black text-gray-900 mb-4">
                            {event.title}
                          </h3>

                          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            {event.description}
                          </p>

                          <div className="flex items-center gap-3">
                            <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full">
                              <Users className="w-5 h-5 text-pink-600" />
                              <span className="font-bold text-pink-600">{event.participants} participants</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 w-14 h-14 bg-white rounded-full shadow-xl flex items-center justify-center text-pink-600 hover:bg-pink-50 transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 w-14 h-14 bg-white rounded-full shadow-xl flex items-center justify-center text-pink-600 hover:bg-pink-50 transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots Indicators */}
            <div className="flex justify-center gap-3 mt-8">
              {events.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentSlide
                      ? 'w-12 h-3 bg-gradient-to-r from-pink-500 to-purple-500'
                      : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Comments Section */}
      {comments.length > 0 && (
        <div className="relative py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block px-6 py-3 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full mb-6">
                <span className="text-sm font-semibold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  TÉMOIGNAGES
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
                Ce que <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">nos membres</span> disent
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Découvrez les témoignages de ceux qui font vivre notre communauté
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {comments.slice(0, 6).map((comment) => (
                <div
                  key={comment.id}
                  className="backdrop-blur-xl bg-white/60 border border-white/50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative"
                >
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                    <Quote className="w-6 h-6 text-white" />
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < comment.rating
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                    &quot;{comment.message}&quot;
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div>
                      <p className="font-bold text-gray-900">{comment.name}</p>
                      <p className="text-sm text-gray-500">{comment.date}</p>
                    </div>
                    <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {comment.name.charAt(0).toUpperCase()}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mission Statement */}
      <div className="relative py-28 px-6 overflow-hidden">
  {/* Background gradient with moving shapes */}
  <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-purple-500 to-fuchsia-600 animate-gradient-x"></div>
  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>

  {/* Floating icons */}
  <div className="absolute top-10 left-10 text-white/20 animate-float-slow">
    <Star className="w-12 h-12" />
  </div>
  <div className="absolute bottom-16 right-16 text-white/20 animate-float">
    <Heart className="w-14 h-14" />
  </div>
  <div className="absolute top-1/2 left-1/4 text-white/20 animate-float-delay">
    <Globe className="w-10 h-10" />
  </div>

  <div className="relative z-10 max-w-5xl mx-auto text-center text-white">
    <div className="inline-block px-8 py-3 bg-white/10 backdrop-blur-xl rounded-full mb-8 shadow-lg">
      <span className="text-sm uppercase tracking-widest font-semibold">
        Ensemble pour un monde meilleur
      </span>
    </div>

    <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight drop-shadow-lg">
      Notre <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-white to-pink-200">Mission</span>
    </h2>

    <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-10">
      Inspirer, connecter et transformer nos communautés à travers des actions concrètes.
      Nous croyons au pouvoir du leadership, de la solidarité et de l’innovation
      pour bâtir un avenir meilleur.
    </p>

    <div className="grid md:grid-cols-3 gap-8 mt-12">
      {[
        {
          icon: <Target className="w-10 h-10 text-yellow-300" />,
          title: "Leadership",
          desc: "Former les leaders de demain grâce à des projets à fort impact."
        },
        {
          icon: <Handshake className="w-10 h-10 text-pink-200" />,
          title: "Service",
          desc: "Servir notre communauté avec bienveillance et engagement."
        },
        {
          icon: <Globe className="w-10 h-10 text-purple-200" />,
          title: "Solidarité",
          desc: "Favoriser la compréhension internationale et l’amitié entre les peuples."
        }
      ].map((item, i) => (
        <div
          key={i}
          className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2 shadow-lg"
        >
          <div className="flex justify-center mb-4">{item.icon}</div>
          <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
          <p className="text-white/80">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
        }
        
        @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-20px); }
    }
    @keyframes float-slow {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }
    @keyframes gradient-x {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }
    .animate-float { animation: float 6s ease-in-out infinite; }
    .animate-float-slow { animation: float-slow 9s ease-in-out infinite; }
    .animate-float-delay { animation: float 7s ease-in-out infinite 2s; }
    .animate-gradient-x {
      background-size: 200% 200%;
      animation: gradient-x 10s ease infinite;
    }
      `}</style>
    </div>
  );
}