import React from 'react';

interface ImageDownloaderProps {
  imagePath: string; // Chemin de l'image à télécharger
  downloadName?: string; // Nom du fichier à télécharger (optionnel)
}

const ImageDownloader: React.FC<ImageDownloaderProps> = ({ imagePath, downloadName = 'image.jpg' }) => {
  const handleDownload = () => {
    // Créer un élément <a> temporaire
    const link = document.createElement('a');
    link.href = imagePath;
    link.download = downloadName;
    document.body.appendChild(link);
    link.click(); // Déclencher le téléchargement
    document.body.removeChild(link); // Supprimer l'élément <a> après le téléchargement
  };

  return (
    <button onClick={handleDownload} className="downloadButton">
      Télécharger image
    </button>
  );
};

export default ImageDownloader;