"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Users, Crown, Shield, Star, Mail, Linkedin, Award, Search, Filter, Sparkles, TrendingUp } from "lucide-react";

export default function MembersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRole, setFilterRole] = useState("all");
  const [hoveredCard, setHoveredCard] = useState(null);

  const members = [
    {
      id: 1,
      name: "Marwa Mellal",
      role: "Présidente",
      status: "president",
      email: "presidente@club.ma",
      linkedin: "#",
      image: "/images/marwa.png",
      bio: "Leadership et vision stratégique du club",
      joinDate: "2024",
      projects: 15,
      achievements: "🏆 Excellence Award"
    },
    {
      id: 2,
      name: "Nada Hassani",
      role: "Vice-Présidente",
      status: "vice-president",
      email: "vp@club.ma",
      linkedin: "#",
      image: "/images/nada.jpg",
      bio: "Soutien et coordination des activités",
      joinDate: "2022",
      projects: 12,
      achievements: "⭐ Innovation Leader"
    },
    {
      id: 3,
      name: "Malak Rhoumi",
      role: "Secrétaire Générale",
      status: "secretary",
      email: "secretaire@club.ma",
      linkedin: "#",
      image: "/images/iness.jpg",
      bio: "Organisation et gestion administrative",
      joinDate: "2023",
      projects: 10,
      achievements: "📋 Best Organizer"
    },
    {
      id: 4,
      name: "Salma Adnane",
      role: "Trésorier",
      status: "treasurer",
      email: "tresorier@club.ma",
      linkedin: "#",
      image: "/images/salma.jpg",
      bio: "Gestion financière et budgétaire",
      joinDate: "2023",
      projects: 8,
      achievements: "💰 Financial Expert"
    },
    {
      id: 5,
      name: "Hiba Ferdioui",
      role: "Responsable Protocole",
      status: "protocol",
      email: "protocole@club.ma",
      linkedin: "#",
      image: "/images/hiba.jpg",
      bio: "Coordination des événements officiels",
      joinDate: "2023",
      projects: 9,
      achievements: "🎭 Event Master"
    },
    {
      id: 6,
      name: "Ilyas El Khyari",
      role: "Responsable Effectif",
      status: "staff",
      email: "effectif@club.ma",
      linkedin: "#",
      image: "/images/ilyas.jpg",
      bio: "Gestion des membres et recrutement",
      joinDate: "2023",
      projects: 7,
      achievements: "👥 Team Builder"
    },
    {
      id: 7,
      name: "Aymen Errabja",
      role: "Responsable Actions",
      status: "communication",
      email: "communication@club.ma",
      linkedin: "#",
      image: "/images/aymane.jpg",
      bio: "Participation active aux projets",
      joinDate: "2023",
      projects: 11,
      achievements: "💡 Innovator"
    }
  ];

  const roleConfig = {
    president: {
      icon: Crown,
      gradient: "from-amber-400 via-yellow-500 to-orange-600",
      glow: "shadow-amber-500/50",
      label: "Présidente"
    },
    "vice-president": {
      icon: Shield,
      gradient: "from-violet-400 via-purple-500 to-fuchsia-600",
      glow: "shadow-purple-500/50",
      label: "Vice-Présidente"
    },
    secretary: {
      icon: Award,
      gradient: "from-sky-400 via-blue-500 to-indigo-600",
      glow: "shadow-blue-500/50",
      label: "Secrétaire Générale"
    },
    treasurer: {
      icon: Award,
      gradient: "from-emerald-400 via-green-500 to-teal-600",
      glow: "shadow-green-500/50",
      label: "Trésorier"
    },
    protocol: {
      icon: Star,
      gradient: "from-indigo-400 via-purple-500 to-pink-600",
      glow: "shadow-indigo-500/50",
      label: "Protocole"
    },
    staff: {
      icon: Users,
      gradient: "from-cyan-400 via-blue-500 to-sky-600",
      glow: "shadow-cyan-500/50",
      label: "Responsable Effectif"
    },
    communication: {
      icon: Sparkles,
      gradient: "from-pink-400 via-rose-500 to-red-600",
      glow: "shadow-pink-500/50",
      label: "Communication"
    }
  };

  const filteredMembers = members.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.role.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterRole === "all" || member.status === filterRole;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-600/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Noise Texture */}
      <div className="fixed inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==')]"></div>

      <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
        {/* Header avec animation */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 backdrop-blur-xl border border-white/10 rounded-full mb-8 animate-pulse">
            <Sparkles className="w-5 h-5 text-yellow-400" />
            <span className="text-sm font-bold text-white">Notre Équipe d&apos;Excellence</span>
            <Sparkles className="w-5 h-5 text-yellow-400" />
          </div>
          
          <h1 className="text-7xl md:text-8xl font-black mb-6">
            <span className="inline-block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
              Rencontrez
            </span>
            <br />
            <span className="inline-block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Les Visionnaires
            </span>
          </h1>
          
          <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
            Une équipe passionnée et engagée qui transforme les idées en réalité ✨
          </p>
        </div>

        {/* Search & Filter - Design Glassmorphism */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
              <div className="relative">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-400" />
                <input
                  type="text"
                  placeholder="Rechercher un membre..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-14 pr-6 py-5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:border-purple-500/50 focus:bg-white/10 outline-none transition-all duration-300"
                />
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
              <div className="relative">
                <Filter className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-pink-400" />
                <select
                  value={filterRole}
                  onChange={(e) => setFilterRole(e.target.value)}
                  className="w-full pl-14 pr-6 py-5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl text-white focus:border-pink-500/50 focus:bg-white/10 outline-none transition-all duration-300 cursor-pointer appearance-none"
                >
                  <option value="all" className="bg-slate-900">🌟 Tous les membres</option>
                  <option value="president" className="bg-slate-900">👑 Présidente</option>
                  <option value="vice-president" className="bg-slate-900">🛡️ Vice-Présidente</option>
                  <option value="secretary" className="bg-slate-900">📋 Secrétaire Générale</option>
                  <option value="treasurer" className="bg-slate-900">💰 Trésorier</option>
                  <option value="protocol" className="bg-slate-900">⭐ Protocole</option>
                  <option value="staff" className="bg-slate-900">👥 Responsable Effectif</option>
                  <option value="communication" className="bg-slate-900">✨ Communication</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Members Grid - Cards Ultra Modernes */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-20">
          {filteredMembers.map((member) => {
            const config = roleConfig[member.status];
            const Icon = config.icon;

            return (
              <div
                key={member.id}
                onMouseEnter={() => setHoveredCard(member.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative"
              >
                {/* Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${config.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-60 transition duration-500 ${config.glow}`}></div>
                
                {/* Card */}
                <div className="relative bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 overflow-hidden transform group-hover:scale-105 transition-all duration-500">
                  {/* Gradient Overlay animé */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${config.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  {/* Content */}
                  <div className="relative p-7">
                    {/* Avatar avec effet 3D */}
                    <div className="relative mb-6">
                      <div className="relative w-36 h-36 mx-auto">
                        <div className={`absolute inset-0 bg-gradient-to-br ${config.gradient} rounded-3xl blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500`}></div>
                        <div className={`relative w-full h-full bg-gradient-to-br ${config.gradient} rounded-3xl p-1`}>
                          <div className="w-full h-full bg-slate-900 rounded-3xl flex items-center justify-center overflow-hidden relative">
                            <Image 
                              src={member.image}
                              alt={member.name}
                              fill
                              className="object-cover"
                              sizes="144px"
                              onError={(e) => {
                                e.currentTarget.style.display = 'none';
                              }}
                            />
                            {/* Fallback avec initiale */}
                            <div className={`absolute inset-0 w-full h-full bg-gradient-to-br ${config.gradient} flex items-center justify-center text-white text-5xl font-black -z-10`}>
                              {member.name.charAt(0)}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Badge Flottant */}
                      <div className={`absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-2 bg-gradient-to-r ${config.gradient} rounded-full flex items-center gap-2 shadow-2xl ${config.glow}`}>
                        <Icon className="w-4 h-4 text-white" />
                        <span className="text-xs font-black text-white">{config.label}</span>
                      </div>
                    </div>

                    {/* Info */}
                    <div className="text-center mb-5 mt-4">
                      <h3 className="text-2xl font-black text-white mb-2">{member.name}</h3>
                      <p className="text-sm font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-3">{member.role}</p>
                      <p className="text-xs text-gray-400 leading-relaxed mb-3">{member.bio}</p>
                      <div className="inline-block px-3 py-1 bg-white/5 rounded-full">
                        <p className="text-xs text-gray-500">{member.achievements}</p>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-center gap-6 mb-5 pb-5 border-b border-white/10">
                      <div className="text-center">
                        <p className="text-xs text-gray-500 mb-1">Depuis</p>
                        <p className={`text-sm font-black bg-gradient-to-r ${config.gradient} bg-clip-text text-transparent`}>{member.joinDate}</p>
                      </div>
                      <div className="w-px h-8 bg-white/10"></div>
                      <div className="text-center">
                        <p className="text-xs text-gray-500 mb-1">Projets</p>
                        <p className={`text-sm font-black bg-gradient-to-r ${config.gradient} bg-clip-text text-transparent`}>{member.projects}</p>
                      </div>
                    </div>

                    {/* Contact Buttons */}
                    <div className="flex items-center justify-center gap-3">
                      <a
                        href={`mailto:${member.email}`}
                        className="flex-1 h-12 bg-white/5 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 border border-white/10 rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50"
                      >
                        <Mail className="w-5 h-5" />
                      </a>
                      <a
                        href={member.linkedin}
                        className="flex-1 h-12 bg-white/5 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 border border-white/10 rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* No Results */}
        {filteredMembers.length === 0 && (
          <div className="text-center py-32">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full mb-6">
              <Users className="w-12 h-12 text-gray-500" />
            </div>
            <h3 className="text-3xl font-black text-gray-400 mb-3">Aucun membre trouvé</h3>
            <p className="text-gray-500">Essayez de modifier vos critères de recherche</p>
          </div>
        )}

        {/* Stats Section - Design Premium */}
        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            { icon: Crown, count: "1", label: "Présidente", gradient: "from-amber-400 to-orange-600", glow: "shadow-amber-500/50" },
            { icon: Shield, count: "1", label: "Vice-Présidente", gradient: "from-violet-400 to-fuchsia-600", glow: "shadow-purple-500/50" },
            { icon: Star, count: "5", label: "Bureau", gradient: "from-pink-400 to-rose-600", glow: "shadow-pink-500/50" },
            { icon: TrendingUp, count: "13", label: "Membres Actifs", gradient: "from-cyan-400 to-blue-600", glow: "shadow-blue-500/50" }
          ].map((stat, idx) => (
            <div key={idx} className="group relative">
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${stat.gradient} rounded-2xl blur-lg opacity-30 group-hover:opacity-75 transition duration-300 ${stat.glow}`}></div>
              <div className="relative bg-white/5 backdrop-blur-2xl rounded-2xl p-8 border border-white/10 text-center transform group-hover:scale-105 transition-all duration-300">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${stat.gradient} rounded-2xl mb-4 shadow-xl ${stat.glow}`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <p className={`text-5xl font-black bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>{stat.count}</p>
                <p className="text-sm font-bold text-gray-400">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}