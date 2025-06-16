"use client";
import React, { useState } from 'react'
import Button from '../composant/Button'

export default function page() {
  const [showCv, setShowCv] = useState(false);

  return (
    <div>
      <footer className="bg-gray-800 text-white py-4 mt-8 rounded-xl">
        <div className="flex gap-4 mb-4">
          <Button label="Afficher le CV" onClick={() => setShowCv(!showCv)} />
          <a href="/cv.pdf" download>
            <Button label="Télécharger" />
          </a>
        </div>
        {showCv && (
          <div className="w-full flex justify-center mb-4">
            <iframe
              src="/cv.pdf"
              width="100%"
              height="600px"
              className="rounded-xl bg-white"
              title="CV"
            />
          </div>
        )}
        <h1>Contact me</h1>
        <div>
          <p>Email: Bilaldrabo35@gmail.com</p>
          <p>Student account: la218086@student.helha.be</p>
          <p>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/bilal-drabo-a9b5b7222/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-400"
            >
              Bilal Drabo
            </a>
          </p>
          <p>Phone: 0499251365</p>
        </div>
      </footer>
    </div>
  )
}


