"use client"
import React from 'react'
import Dcard from '../composant/Dcard'
import { ZoomCard } from '../composant/Zoom-card'

const page = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 justify-center items-start p-8">
      {/* Exemple Dcard */}
      

      {/* Exemple ZoomCard */}
      <div className='flex items-center justify-center space-x-2 mb-8'> </div>
      <ZoomCard
        id="zoom1"
        title="Projet Zoom"
        description="Clique sur 'View Details' pour voir plus d'informations sur ce projet."
        buttonText="View Details"
        detailedInfo={{
          subtitle: "Détails du projet Zoom",
          fullDescription: "Voici la description complète de ce projet. Il utilise React, Next.js et Tailwind CSS.",
          features: [
            "Fonctionnalité 1",
            "Fonctionnalité 2",
            "Fonctionnalité 3"
          ],
          additionalContent: (
            <div>
              <p>Tu peux ajouter ici du contenu JSX personnalisé.</p>
            </div>
          )
        }}
      />
    </div>
  )
}

export default page
