"use client";
import React, { useState, useEffect } from "react";
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, Globe, Facebook, Twitter, Linkedin, Instagram, Star, X, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [commentData, setCommentData] = useState({
    name: "",
    message: "",
    rating: 5,
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [selectedFAQ, setSelectedFAQ] = useState(null);
  const [comments, setComments] = useState([]);

  // Charger les commentaires depuis localStorage au démarrage
  useEffect(() => {
    const storedComments = localStorage.getItem('rotaractComments');
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, []);

  const handleCommentChange = (e) => {
    const { name, value } = e.target;
    setCommentData({ ...commentData, [name]: value });
  };

  const handleRatingChange = (rating) => {
    setCommentData({ ...commentData, rating });
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    
    const newComment = {
      id: Date.now(),
      name: commentData.name,
      message: commentData.message,
      rating: commentData.rating,
      date: new Date().toLocaleDateString('fr-FR', { 
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      }),
    };
    
    const updatedComments = [newComment, ...comments];
    setComments(updatedComments);
    
    // Sauvegarder dans localStorage
    localStorage.setItem('rotaractComments', JSON.stringify(updatedComments));
    
    // Déclencher un événement storage pour notifier les autres onglets/pages
    window.dispatchEvent(new Event('storage'));
    
    setShowSuccess(true);
    setCommentData({ name: "", message: "", rating: 5 });
    
    setTimeout(() => {
      setShowSuccess(false);
    }, 4000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Adresse",
      info: "123 Avenue Mohammed V",
      subInfo: "Rabat 10000, Maroc",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
    },
    {
      icon: Phone,
      title: "Téléphone",
      info: "+212 5XX-XXXXXX",
      subInfo: "Lun - Ven, 9h - 18h",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: Mail,
      title: "Email",
      info: "contact@entreprise.ma",
      subInfo: "Réponse sous 24h",
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-500/10",
    },
    {
      icon: Clock,
      title: "Horaires",
      info: "Lun - Ven: 9h - 18h",
      subInfo: "Sam: 9h - 13h",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10",
    },
  ];

  const socialLinks = [
    { icon: Facebook, url: "#", color: "hover:bg-blue-600" },
    { icon: Twitter, url: "#", color: "hover:bg-sky-500" },
    { icon: Linkedin, url: "#", color: "hover:bg-blue-700" },
    { icon: Instagram, url: "#", color: "hover:bg-pink-600" },
  ];

  const faqData = [
    {
      question: "Comment postuler à une offre ?",
      guide: {
        title: "Guide de candidature",
        steps: [
          "Consultez les offres disponibles sur notre page 'Rejoignez-nous'",
          "Remplissez le formulaire en ligne avec vos informations",
          "Joignez votre CV au format PDF, DOC ou DOCX",
          "Rédigez une lettre de motivation personnalisée",
          "Cliquez sur 'Envoyer candidature' pour soumettre votre dossier"
        ],
        tips: [
          "Assurez-vous que votre CV est à jour",
          "Personnalisez votre lettre de motivation pour le club",
          "Mettez en avant vos expériences associatives"
        ]
      }
    },
    {
      question: "Quels sont vos délais de réponse ?",
      guide: {
        title: "Processus de sélection",
        steps: [
          "Réception de votre candidature : confirmation immédiate par email",
          "Étude du dossier : 5-7 jours ouvrables",
          "Entretien (si sélectionné) : dans les 2 semaines suivant votre candidature",
          "Décision finale : sous 3 jours après l'entretien",
          "Intégration : selon le calendrier du club"
        ],
        tips: [
          "Vérifiez vos spams régulièrement",
          "Restez disponible pour un entretien",
          "N'hésitez pas à nous relancer après 2 semaines"
        ]
      }
    },
    {
      question: "Comment suivre ma candidature ?",
      guide: {
        title: "Suivi de candidature",
        steps: [
          "Vous recevez un email de confirmation avec un numéro de dossier",
          "Recevez des notifications à chaque étape du processus",
          "Contactez-nous par email pour toute question"
        ],
        tips: [
          "Conservez votre numéro de dossier",
          "Mettez à jour vos coordonnées si nécessaire",
          "Soyez patient, nous recevons beaucoup de candidatures"
        ]
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px] sm:bg-[size:40px_40px] lg:bg-[size:50px_50px] pointer-events-none"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-32 pb-8 sm:pb-12">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl mb-4 sm:mb-6 shadow-lg shadow-purple-500/50">
            <MessageSquare className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-3 sm:mb-4 px-4">
            Contactez-nous
          </h1>
          <p className="text-gray-400 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto px-4">
            Une question ? Un projet ? Notre équipe est là pour vous accompagner
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10 sm:mb-12 lg:mb-16">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className="group relative bg-slate-900/60 backdrop-blur-xl rounded-2xl p-5 sm:p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
              <div className={`w-12 h-12 sm:w-14 sm:h-14 ${item.bgColor} rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h3 className="text-white font-bold text-base sm:text-lg mb-2">{item.title}</h3>
              <p className="text-gray-300 font-medium text-sm sm:text-base">{item.info}</p>
              <p className="text-gray-500 text-xs sm:text-sm mt-1">{item.subInfo}</p>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Comment Form */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl blur-xl opacity-30"></div>
            <div className="relative bg-slate-900/80 backdrop-blur-2xl rounded-2xl sm:rounded-3xl shadow-2xl border border-white/10 p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5 sm:mb-6 flex items-center gap-2 sm:gap-3">
                <MessageSquare className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />
                <span className="text-xl sm:text-3xl">Laissez un commentaire</span>
              </h2>
              
              <div className="space-y-4 sm:space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Votre nom
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={commentData.name}
                    onChange={handleCommentChange}
                    placeholder="Entrez votre nom"
                    className="w-full px-3 py-2.5 sm:px-4 sm:py-3 bg-slate-800/50 border-2 border-slate-700 rounded-xl text-white placeholder-gray-500 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 outline-none transition-all duration-300 text-sm sm:text-base"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Évaluation
                  </label>
                  <div className="flex gap-1.5 sm:gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => handleRatingChange(star)}
                        className="transition-all duration-300 hover:scale-110"
                      >
                        <Star
                          className={`w-7 h-7 sm:w-8 sm:h-8 ${
                            star <= commentData.rating
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-gray-600'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Votre message
                  </label>
                  <textarea
                    name="message"
                    value={commentData.message}
                    onChange={handleCommentChange}
                    placeholder="Partagez votre expérience avec le club..."
                    rows="6"
                    className="w-full px-3 py-2.5 sm:px-4 sm:py-3 bg-slate-800/50 border-2 border-slate-700 rounded-xl text-white placeholder-gray-500 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 outline-none transition-all duration-300 resize-none text-sm sm:text-base"
                    required
                  />
                </div>

                <button
                  type="button"
                  onClick={handleCommentSubmit}
                  className="group w-full py-3 sm:py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-xl font-bold text-white text-base sm:text-lg overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/50 active:scale-[0.98] flex items-center justify-center gap-2"
                >
                  Publier le commentaire
                  <Send className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>

          {/* Side Content */}
          <div className="space-y-6 sm:space-y-8">
            {/* Social Media Orbit */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 rounded-2xl sm:rounded-3xl blur-xl opacity-30"></div>
              <div className="relative bg-slate-900/90 backdrop-blur-2xl rounded-2xl sm:rounded-3xl shadow-2xl border border-white/10 p-6 sm:p-8">
                <h4 className="text-white font-bold text-base sm:text-lg mb-5 sm:mb-6 text-center">
                  Rejoignez notre communauté
                </h4>
                <div className="relative h-32 sm:h-40 flex items-center justify-center">
                  {/* Center Hub */}
                  <div className="absolute w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/50 z-10">
                    <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  
                  {/* Orbiting Social Icons */}
                  {socialLinks.map((social, index) => {
                    const angle = (index * 360) / socialLinks.length;
                    const radius = typeof window !== 'undefined' && window.innerWidth < 640 ? 50 : 70;
                    const x = Math.cos((angle * Math.PI) / 180) * radius;
                    const y = Math.sin((angle * Math.PI) / 180) * radius;
                    
                    return (
                      <a
                        key={index}
                        href={social.url}
                        className={`absolute w-10 h-10 sm:w-14 sm:h-14 bg-slate-800 ${social.color} rounded-full flex items-center justify-center transition-all duration-300 hover:scale-125 hover:shadow-xl border-2 border-slate-700 hover:border-white group/social`}
                        style={{
                          left: `calc(50% + ${x}px - ${typeof window !== 'undefined' && window.innerWidth < 640 ? '1.25rem' : '1.75rem'})`,
                          top: `calc(50% + ${y}px - ${typeof window !== 'undefined' && window.innerWidth < 640 ? '1.25rem' : '1.75rem'})`,
                        }}
                      >
                        <social.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover/social:scale-110 transition-transform" />
                      </a>
                    );
                  })}
                  
                  {/* Orbit Ring */}
                  <div className="absolute w-[130px] h-[130px] sm:w-[180px] sm:h-[180px] border-2 border-dashed border-purple-500/20 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
                </div>
              </div>
            </div>

            {/* FAQ Quick Links */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 rounded-2xl sm:rounded-3xl blur-xl opacity-30"></div>
              <div className="relative bg-slate-900/80 backdrop-blur-2xl rounded-2xl sm:rounded-3xl shadow-2xl border border-white/10 p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Questions Fréquentes</h3>
                <div className="space-y-2.5 sm:space-y-3">
                  {faqData.map((faq, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedFAQ(faq)}
                      className="w-full text-left px-3 py-2.5 sm:px-4 sm:py-3 bg-slate-800/50 hover:bg-slate-800 border border-slate-700 hover:border-purple-500 rounded-xl text-gray-300 hover:text-white transition-all duration-300 hover:scale-[1.02] flex items-center gap-2 sm:gap-3 text-sm sm:text-base"
                    >
                      <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"></div>
                      <span className="line-clamp-2">{faq.question}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Notification */}
      {showSuccess && (
        <div className="fixed top-4 sm:top-8 left-1/2 -translate-x-1/2 z-50 animate-slide-down px-4 w-full max-w-md">
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 sm:px-8 py-3 sm:py-4 rounded-2xl shadow-2xl flex items-center gap-2 sm:gap-3 backdrop-blur-sm border border-white/20">
            <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
            <span className="font-semibold text-sm sm:text-lg">Commentaire publié avec succès !</span>
          </div>
        </div>
      )}

      {/* FAQ Modal */}
      {selectedFAQ && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="relative bg-slate-900 rounded-2xl sm:rounded-3xl shadow-2xl border border-white/10 max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
            {/* Close Button */}
            <button
              onClick={() => setSelectedFAQ(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 w-9 h-9 sm:w-10 sm:h-10 bg-slate-800 hover:bg-red-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-10"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </button>

            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 p-6 sm:p-8 rounded-t-2xl sm:rounded-t-3xl pr-14 sm:pr-16">
              <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">{selectedFAQ.guide.title}</h2>
              <p className="text-white/80 text-base sm:text-lg">{selectedFAQ.question}</p>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8 space-y-6 sm:space-y-8">
              {/* Steps */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
                  Étapes à suivre
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  {selectedFAQ.guide.steps.map((step, index) => (
                    <div key={index} className="flex gap-3 sm:gap-4 items-start">
                      <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base">
                        {index + 1}
                      </div>
                      <p className="text-gray-300 text-sm sm:text-lg pt-0.5 sm:pt-1">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tips */}
              <div className="bg-slate-800/50 rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-purple-500/20">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-yellow-400" />
                  Conseils pratiques
                </h3>
                <ul className="space-y-2.5 sm:space-y-3">
                  {selectedFAQ.guide.tips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-2.5 sm:gap-3 text-gray-300 text-sm sm:text-base">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button
                onClick={() => setSelectedFAQ(null)}
                className="w-full py-3 sm:py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-xl font-bold text-white text-base sm:text-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/50"
              >
                J&apos;ai compris !
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slide-down {
          0% {
            transform: translate(-50%, -150%);
            opacity: 0;
          }
          10% {
            transform: translate(-50%, 0);
            opacity: 1;
          }
          90% {
            transform: translate(-50%, 0);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -150%);
            opacity: 0;
          }
        }
        .animate-slide-down {
          animation: slide-down 4s ease-in-out forwards;
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}