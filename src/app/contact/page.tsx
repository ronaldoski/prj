"use client";
import React, { useState } from 'react'
import Button from '../composant/Button'

export default function page() {
  const [showCv, setShowCv] = useState(false);

  return (
    <div>
      <main className="flex-1 flex justify-center items-start p-8">
        <section className="bg-white shadow-md rounded-lg p-8 w-full max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Job Offer 🙋</h2>
          <p className="text-gray-700 mb-2">
            <strong>Subject:</strong> Application for Industrial Automation and Software Development Internship
          </p>
          <p className="text-gray-700 mb-2">
            Dear Hiring Manager,
          </p>
          <p className="text-gray-700 mb-2">
            My name is Bilal Drabo, a 22-year-old student specializing in Industrial Informatics at HELHa Charleroi. My journey into technology began with curiosity, triggered by a friend's introduction to programming. Over the years, I have developed a passion for IT, automation, and application development. Despite initial challenges balancing academics and family responsibilities, I persevered and improved my skills in software development, industrial automation, and creative problem-solving.
          </p>
          <p className="text-gray-700 mb-2">
            I am excited about the opportunity to contribute to SpaceX as an intern. The prospect of working on innovative projects in industrial automation and software aligns perfectly with my interests and academic background. From creating autonomous systems like a ball-sorting mechanism to designing real-time interactive HMI interfaces, my hands-on experiences have equipped me to innovate and adapt in high-stakes environments. The idea of supporting space exploration through robust APIs or streamlining operations with advanced systems energizes my aspirations for impactful contributions.
          </p>
          <p className="text-gray-700 mb-2">
            Through my portfolio, I’ve demonstrated a blend of technical expertise and creativity. Whether developing web applications in React, programming industrial systems with Siemens and Schneider tools, or tackling interdisciplinary projects like a defence turret simulation, I bring dedication, technical skills, and teamwork. My prior exposure to professional environments has enhanced my ability to collaborate effectively and deliver quality solutions under pressure. I am confident my blend of academic achievements and practical experience makes me a strong candidate for this internship.
          </p>
          <p className="text-gray-700 mb-2">
            Thank you for considering my application. I look forward to the opportunity to discuss how my background and skills can contribute to the success of SpaceX's projects.
          </p>
          <p className="text-gray-700 mb-2">
            Sincerely,<br />
            Drabo Bilal
          </p>
        </section>
      </main>
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


