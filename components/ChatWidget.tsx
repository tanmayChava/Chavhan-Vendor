import React from 'react';
import { MessageCircle } from 'lucide-react';

export const ChatWidget: React.FC = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919422280256', '_blank');
  };

  return (
    <button 
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 group z-50 transition-all duration-300 ease-out hover:-translate-y-1"
      aria-label="Chat on WhatsApp"
    >
      <div className="absolute inset-0 bg-green-500 blur-lg opacity-40 group-hover:opacity-60 transition-opacity rounded-full animate-pulse"></div>
      <div className="relative bg-gradient-to-r from-green-500 to-emerald-600 text-white p-4 rounded-full shadow-xl flex items-center justify-center">
         <MessageCircle className="w-7 h-7" />
         <span className="hidden group-hover:inline-block ml-2 font-bold whitespace-nowrap transition-all duration-300">Chat on WhatsApp</span>
      </div>
    </button>
  );
};