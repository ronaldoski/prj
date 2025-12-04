"use client";
import React, { useState } from 'react';
import Button from '../composant/Button';

export default function ContactPage() {
  const [showCv, setShowCv] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      
      
      <footer className="bg-gray-800 text-white py-4 mt-8 rounded-xl px-4">
        <div className="flex flex-col sm:flex-row gap-4 mb-4 justify-center">
          <Button 
            label={showCv ? "Masquer le CV" : "Afficher le CV"} 
            onClick={() => setShowCv(!showCv)} 
          />
          <a href="/cv.pdf" download className="flex justify-center">
            <Button label="Télécharger" />
          </a>
        </div>
        
        {showCv && (
          <div className="w-full flex justify-center mb-4">
            <iframe
              src="/cv.pdf"
              width="100%"
              height="600px"
              className="rounded-xl bg-white max-w-3xl"
              title="CV de Bilal Drabo"
              aria-label="Curriculum Vitae"
            />
          </div>
        )}
        
        <div className="text-center">
          <h1 className="text-xl font-bold mb-2">Contact me</h1>
          <div className="space-y-1">
            <p>Email: Bilaldrabo35@gmail.com</p>
            <p>Student account: la218086@student.helha.be</p>
            <p>
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/bilal-drabo-a9b5b7222/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-400 hover:text-blue-300 transition-colors"
              >
                Bilal Drabo
              </a>
            </p>
            <p>Phone: 0499251365</p>
          </div>
        </div>
      </footer>
    </div>
  );
}