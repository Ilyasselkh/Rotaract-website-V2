"use client";
import emailjs from '@emailjs/browser';
import React, { useState } from "react";
import { User, Mail, Phone, FileText, Sparkles, Rocket, Check, AlertCircle } from "lucide-react";

export default function JoinPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    motivation: "",
    cv: null,
    motivationLetter: null,
  });
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confettis, setConfettis] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "cv" || name === "motivationLetter") {
      setFormData({ ...formData, [name]: files[0] });
      if (files[0]) {
        setErrors({ ...errors, [name]: "" });
      }
    } else {
      setFormData({ ...formData, [name]: value });
      if (value.trim()) {
        setErrors({ ...errors, [name]: "" });
      }
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Le nom est requis";
    }

    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email invalide";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Le téléphone est requis";
    }

    if (!formData.motivation.trim()) {
      newErrors.motivation = "La lettre de motivation est requise";
    }

    if (!formData.cv) {
      newErrors.cv = "Le CV est requis";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Préparation des données pour l'email
    const emailData = {
      to_email: "ilyaskhyari@gmail.com", // REMPLACEZ PAR VOTRE EMAIL
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      motivation: formData.motivation,
      cv_name: formData.cv ? formData.cv.name : "Aucun fichier"
    };

    try {
      // EmailJS 
       await emailjs.send(
         'YOUR_SERVICE_ID',
         'YOUR_TEMPLATE_ID',
         emailData,
         'YOUR_PUBLIC_KEY'
       );

      // Simulation d'envoi (RETIREZ CETTE LIGNE en production)
      console.log("Candidature envoyée :", emailData);
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSuccess(true);
      setShowPopup(true);
      
      const newConfettis = Array.from({ length: 80 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100 + "%",
        background: `hsl(${Math.random() * 60 + 300}, 100%, ${Math.random() * 20 + 60}%)`,
        size: Math.random() * 12 + 4 + "px",
        delay: Math.random() * 0.5,
      }));
      setConfettis(newConfettis);

      setTimeout(() => {
        setSuccess(false);
        setConfettis([]);
        setShowPopup(false);
        setFormData({ name: "", email: "", phone: "", motivation: "", cv: null, motivationLetter: null });
        setErrors({});
      }, 5000);
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error);
      setErrors({ submit: "Une erreur est survenue. Veuillez réessayer." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex justify-center p-4 pt-32 pb-16 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none"></div>

      <div className="relative w-full max-w-2xl">
        {/* Glowing card effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl blur-xl opacity-30 animate-pulse"></div>
        
        <div className="relative bg-slate-900/80 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/10 p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl mb-6 shadow-lg shadow-purple-500/50">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-3 tracking-tight">
              Rejoignez-nous
            </h1>
            <p className="text-gray-400 text-lg">
              Faites partie de l&apos;aventure 🚀
            </p>
          </div>

          <div className="space-y-6">
            {/* Name Field */}
            <div className="group">
              <label className="block text-sm font-semibold text-gray-300 mb-2 flex items-center gap-2">
                <User className="w-4 h-4 text-purple-400" />
                Nom complet
              </label>
              <div className={`relative transition-all duration-300 ${focusedField === 'name' ? 'scale-[1.02]' : ''}`}>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  required
                  placeholder="Entrez votre nom"
                  className={`w-full px-6 py-4 bg-slate-800/50 border-2 ${errors.name ? 'border-red-500' : 'border-slate-700'} rounded-2xl text-white placeholder-gray-500 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 outline-none transition-all duration-300`}
                />
                {formData.name && !errors.name && (
                  <Check className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-green-400" />
                )}
                {errors.name && (
                  <AlertCircle className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-red-400" />
                )}
              </div>
              {errors.name && (
                <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div className="group">
              <label className="block text-sm font-semibold text-gray-300 mb-2 flex items-center gap-2">
                <Mail className="w-4 h-4 text-pink-400" />
                Email
              </label>
              <div className={`relative transition-all duration-300 ${focusedField === 'email' ? 'scale-[1.02]' : ''}`}>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  required
                  placeholder="votre@email.com"
                  className={`w-full px-6 py-4 bg-slate-800/50 border-2 ${errors.email ? 'border-red-500' : 'border-slate-700'} rounded-2xl text-white placeholder-gray-500 focus:border-pink-500 focus:ring-4 focus:ring-pink-500/20 outline-none transition-all duration-300`}
                />
                {formData.email && !errors.email && (
                  <Check className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-green-400" />
                )}
                {errors.email && (
                  <AlertCircle className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-red-400" />
                )}
              </div>
              {errors.email && (
                <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.email}
                </p>
              )}
            </div>

            {/* Phone Field */}
            <div className="group">
              <label className="block text-sm font-semibold text-gray-300 mb-2 flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400" />
                Téléphone
              </label>
              <div className={`relative transition-all duration-300 ${focusedField === 'phone' ? 'scale-[1.02]' : ''}`}>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('phone')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="+212 XXX XXX XXX"
                  className={`w-full px-6 py-4 bg-slate-800/50 border-2 ${errors.phone ? 'border-red-500' : 'border-slate-700'} rounded-2xl text-white placeholder-gray-500 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 outline-none transition-all duration-300`}
                />
                {formData.phone && !errors.phone && (
                  <Check className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-green-400" />
                )}
                {errors.phone && (
                  <AlertCircle className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-red-400" />
                )}
              </div>
              {errors.phone && (
                <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.phone}
                </p>
              )}
            </div>


            {/* CV Upload */}
            <div className="group">
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                📄 Curriculum Vitae
              </label>
              <div className="relative">
                <input
                  type="file"
                  name="cv"
                  onChange={handleChange}
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                  id="cv-upload"
                />
                <label
                  htmlFor="cv-upload"
                  className={`flex items-center justify-center w-full px-6 py-4 bg-slate-800/50 border-2 border-dashed ${errors.cv ? 'border-red-500' : 'border-slate-700'} rounded-2xl text-gray-400 hover:border-purple-500 hover:text-purple-400 cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:bg-slate-800/70`}
                >
                  {formData.cv ? (
                    <span className="flex items-center gap-2 text-purple-400">
                      <Check className="w-5 h-5" />
                      {formData.cv.name}
                    </span>
                  ) : (
                    <span>Cliquez pour télécharger votre CV</span>
                  )}
                </label>
              </div>
              {errors.cv && (
                <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.cv}
                </p>
              )}
            </div>

            {/* Motivation Letter Upload (Optional) */}
            <div className="group">
              <label className="block text-sm font-semibold text-gray-300 mb-2 flex items-center gap-2">
                📝 Lettre de motivation (fichier)
                <span className="text-xs text-gray-500 font-normal">(Optionnel)</span>
              </label>
              <div className="relative">
                <input
                  type="file"
                  name="motivationLetter"
                  onChange={handleChange}
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                  id="motivation-letter-upload"
                />
                <label
                  htmlFor="motivation-letter-upload"
                  className="flex items-center justify-center w-full px-6 py-4 bg-slate-800/50 border-2 border-dashed border-slate-700 rounded-2xl text-gray-400 hover:border-blue-500 hover:text-blue-400 cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:bg-slate-800/70"
                >
                  {formData.motivationLetter ? (
                    <span className="flex items-center gap-2 text-blue-400">
                      <Check className="w-5 h-5" />
                      {formData.motivationLetter.name}
                    </span>
                  ) : (
                    <span>Cliquez pour télécharger votre lettre de motivation</span>
                  )}
                </label>
              </div>
            </div>

            {/* Submit Error */}
            {errors.submit && (
              <div className="bg-red-500/10 border border-red-500/50 rounded-2xl p-4 flex items-center gap-2 text-red-400">
                <AlertCircle className="w-5 h-5" />
                <span>{errors.submit}</span>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="button"
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="group relative w-full py-5 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-2xl font-bold text-white text-lg overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/50 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative flex items-center justify-center gap-3">
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    Envoyer ma candidature
                    <Rocket className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </>
                )}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Confettis */}
      {success && confettis.map((confetti) => (
        <div
          key={confetti.id}
          className="absolute top-0 animate-fall"
          style={{
            left: confetti.left,
            backgroundColor: confetti.background,
            width: confetti.size,
            height: confetti.size,
            borderRadius: "50%",
            pointerEvents: "none",
            animationDelay: `${confetti.delay}s`,
          }}
        />
      ))}

      {/* Success Popup */}
      {showPopup && (
        <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50 animate-slide-down">
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-2xl shadow-2xl flex items-center gap-3 backdrop-blur-sm border border-white/20">
            <Check className="w-6 h-6" />
            <span className="font-semibold text-lg">Candidature envoyée avec succès !</span>
            <Sparkles className="w-5 h-5" />
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fall {
          0% { 
            transform: translateY(-100vh) rotate(0deg); 
            opacity: 1; 
          }
          100% { 
            transform: translateY(100vh) rotate(720deg); 
            opacity: 0; 
          }
        }
        .animate-fall { 
          animation: fall 4s linear forwards; 
        }

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
          animation: slide-down 5s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
}