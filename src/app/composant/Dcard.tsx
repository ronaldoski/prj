import React, { useState } from 'react';
import Card from './Card';

type DcardProps = {
  title: string; // Titre de la carte
  content: string; // Contenu de la carte
  imagePath: string; // Chemin de l'image à télécharger
  button?: { label: string; onClick?: () => void }; // Bouton optionnel
};

const Dcard: React.FC<DcardProps> = ({ title, content, imagePath, button }) => {
  const [showNewCard, setShowNewCard] = useState(false); // État pour afficher une nouvelle carte

  const handleButtonClick = () => {
    setShowNewCard(true); // Affiche la nouvelle carte
    if (button?.onClick) {
      button.onClick(); // Appelle la fonction onClick si elle est définie
    }
  };

  return (
    <div>
      <Card
        title={title}
        content={content}
        button={{
          label: button?.label || 'Afficher une autre carte',
          onClick: handleButtonClick,
        }}
      />
      <div className="mt-4">
        <a
          href={imagePath}
          download
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Télécharger image
        </a>
      </div>
      {showNewCard && (
        <div className="mt-4">
          <Card
            title="Nouvelle Carte 🎉"
            content="Ceci est une nouvelle carte affichée après avoir cliqué sur le bouton."
          />
        </div>
      )}
    </div>
  );
};

export default Dcard;