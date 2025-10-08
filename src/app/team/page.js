"use client";
import React, { useState } from "react";
import { Users, Crown, Shield, Star, Mail, Linkedin, Github, Award, Search, Filter } from "lucide-react";

export default function MembersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRole, setFilterRole] = useState("all");

  const members = [
    {
      id: 1,
      name: "Sarah El Amrani",
      role: "Président",
      status: "president",
      email: "sarah.elamrani@club.ma",
      linkedin: "#",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      bio: "Passionnée par le leadership et l'impact social",
      joinDate: "2022"
    },
    {
      id: 2,
      name: "Youssef Bennani",
      role: "Vice-Président",
      status: "vice-president",
      email: "youssef.bennani@club.ma",
      linkedin: "#",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      bio: "Expert en gestion de projets communautaires",
      joinDate: "2022"
    },
    {
      id: 3,
      name: "Amina Fassi",
      role: "Secrétaire Générale",
      status: "secretary",
      email: "amina.fassi@club.ma",
      linkedin: "#",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      bio: "Organisation et coordination des événements",
      joinDate: "2023"
    },
    {
      id: 4,
      name: "Mehdi Alaoui",
      role: "Trésorier",
      status: "treasurer",
      email: "mehdi.alaoui@club.ma",
      linkedin: "#",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      bio: "Gestion financière et budgétaire du club",
      joinDate: "2023"
    },
    {
      id: 5,
      name: "Sofia Idrissi",
      role: "Responsable Communication",
      status: "board",
      email: "sofia.idrissi@club.ma",
      linkedin: "#",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
      bio: "Marketing digital et réseaux sociaux",
      joinDate: "2023"
    },
    {
      id: 6,
      name: "Omar Chraibi",
      role: "Responsable Projets",
      status: "board",
      email: "omar.chraibi@club.ma",
      linkedin: "#",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
      bio: "Coordination et suivi des projets",
      joinDate: "2023"
    },
    {
      id: 7,
      name: "Leila Mansouri",
      role: "Membre Actif",
      status: "member",
      email: "leila.mansouri@club.ma",
      linkedin: "#",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
      bio: "Bénévolat et actions de terrain",
      joinDate: "2024"
    },
    {
      id: 8,
      name: "Karim Tazi",
      role: "Membre Actif",
      status: "member",
      email: "karim.tazi@club.ma",
      linkedin: "#",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      bio: "Développement et innovation",
      joinDate: "2024"
    }
  ];

  const roleConfig = {
    president: {
      icon: Crown,
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-500/10",
      borderColor: "border-yellow-500/30",
      label: "Président"
    },
    "vice-president": {
      icon: Shield,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30",
      label: "Vice-Président"
    },
    secretary: {
      icon: Award,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30",
      label: "Secrétaire"
    },
    treasurer: {
      icon: Award,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/30",
      label: "Trésorier"
    },
    board: {
      icon: Star,
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-500/10",
      borderColor: "border-pink-500/30",
      label: "Bureau"
    },
    member: {
      icon: Users,
      color: "from-slate-500 to-gray-500",
      bgColor: "bg-slate-500/10",
      borderColor: "border-slate-500/30",
      label: "Membre"
    }
  };

  const filteredMembers = members.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.role.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterRole === "all" || member.status === filterRole;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none"></div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl mb-6 shadow-lg shadow-purple-500/50">
            <Users className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-6xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-4">
            Notre Équipe
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Découvrez les membres passionnés qui font vivre notre club
          </p>
        </div>

        {/* Search and Filter */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="grid md:grid-cols-2 gap-4">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher un membre..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border-2 border-slate-700 rounded-xl text-white placeholder-gray-500 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 outline-none transition-all duration-300"
              />
            </div>

            {/* Filter Dropdown */}
            <div className="relative">
              <Filter className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <select
                value={filterRole}
                onChange={(e) => setFilterRole(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border-2 border-slate-700 rounded-xl text-white focus:border-pink-500 focus:ring-4 focus:ring-pink-500/20 outline-none transition-all duration-300 appearance-none cursor-pointer"
              >
                <option value="all">Tous les membres</option>
                <option value="president">Président</option>
                <option value="vice-president">Vice-Président</option>
                <option value="secretary">Secrétaire</option>
                <option value="treasurer">Trésorier</option>
                <option value="board">Bureau</option>
                <option value="member">Membres Actifs</option>
              </select>
            </div>
          </div>
        </div>

        {/* Members Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {filteredMembers.map((member) => {
            const config = roleConfig[member.status];
            const Icon = config.icon;

            return (
              <div
                key={member.id}
                className="group relative bg-slate-900/80 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${config.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                {/* Card Content */}
                <div className="relative p-6">
                  {/* Image & Status Badge */}
                  <div className="relative mb-4">
                    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden ring-4 ring-slate-800 group-hover:ring-purple-500/50 transition-all duration-300">
                      <div className="w-full h-full bg-gradient-to-br from-purple-400 to-pink-400"></div>
                    </div>
                    
                    {/* Role Badge */}
                    <div className={`absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 ${config.bgColor} border ${config.borderColor} rounded-full flex items-center gap-1`}>
                      <Icon className={`w-4 h-4 bg-gradient-to-br ${config.color} bg-clip-text text-transparent`} style={{ WebkitTextFillColor: 'transparent' }} />
                      <span className="text-xs font-bold text-white">{config.label}</span>
                    </div>
                  </div>

                  {/* Member Info */}
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-sm text-gray-400 mb-2">{member.role}</p>
                    <p className="text-xs text-gray-500 italic">{member.bio}</p>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-center gap-4 mb-4 pb-4 border-b border-slate-700">
                    <div className="text-center">
                      <p className="text-xs text-gray-500">Membre depuis</p>
                      <p className="text-sm font-bold text-purple-400">{member.joinDate}</p>
                    </div>
                  </div>

                  {/* Contact Links */}
                  <div className="flex items-center justify-center gap-3">
                    <a
                      href={`mailto:${member.email}`}
                      className="w-10 h-10 bg-slate-800/50 hover:bg-purple-500 border border-slate-700 hover:border-purple-500 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                    <a
                      href={member.linkedin}
                      className="w-10 h-10 bg-slate-800/50 hover:bg-blue-500 border border-slate-700 hover:border-blue-500 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* No Results */}
        {filteredMembers.length === 0 && (
          <div className="text-center py-20">
            <Users className="w-20 h-20 text-gray-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-400 mb-2">Aucun membre trouvé</h3>
            <p className="text-gray-500">Essayez de modifier vos critères de recherche</p>
          </div>
        )}

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div className="bg-slate-900/60 backdrop-blur-xl rounded-2xl p-6 border border-white/10 text-center">
            <div className="w-12 h-12 bg-yellow-500/10 rounded-xl flex items-center justify-center mx-auto mb-3">
              <Crown className="w-6 h-6 text-yellow-400" />
            </div>
            <p className="text-3xl font-black bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-1">1</p>
            <p className="text-sm text-gray-400">Président</p>
          </div>

          <div className="bg-slate-900/60 backdrop-blur-xl rounded-2xl p-6 border border-white/10 text-center">
            <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mx-auto mb-3">
              <Shield className="w-6 h-6 text-purple-400" />
            </div>
            <p className="text-3xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1">1</p>
            <p className="text-sm text-gray-400">Vice-Président</p>
          </div>

          <div className="bg-slate-900/60 backdrop-blur-xl rounded-2xl p-6 border border-white/10 text-center">
            <div className="w-12 h-12 bg-pink-500/10 rounded-xl flex items-center justify-center mx-auto mb-3">
              <Star className="w-6 h-6 text-pink-400" />
            </div>
            <p className="text-3xl font-black bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent mb-1">4</p>
            <p className="text-sm text-gray-400">Bureau</p>
          </div>

          <div className="bg-slate-900/60 backdrop-blur-xl rounded-2xl p-6 border border-white/10 text-center">
            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mx-auto mb-3">
              <Users className="w-6 h-6 text-blue-400" />
            </div>
            <p className="text-3xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-1">2</p>
            <p className="text-sm text-gray-400">Membres Actifs</p>
          </div>
        </div>
      </div>
    </div>
  );
}