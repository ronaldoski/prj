import React from 'react'
import Card from "../composant/Card";

export default function SoftskillsPage() {
  return (
    <div className="flex-1 grid md:grid-cols-2 gap-8 p-8">
      {/* Main presentation card */}
      <Card
        title="👋 Introduction"
        content="I am Bilal, 22 years old, a student in industrial informatics at HELHa Charleroi. 
        I am actively looking for a traineeship in IT, industrial automation, or web/application development."
      />

      {/* High-Tech Passion */}
      <Card
        title="💻 High-Tech Passion"
        content="I am very interested in high-tech and regularly conduct research in this field. 
        I am constantly on the lookout for new technologies, innovations, and industry trends."
      />

      {/* Project Management */}
      <Card
        title="📊 Management & Organization"
        content="My first bachelor's degree taught me the crucial importance of organization. 
        As the first in my family to pursue higher education, I had to develop my own 
        management and organizational methods to succeed."
      />

      {/* Creativity */}
      <Card
        title="🚀 Creativity & Innovation"
        content="I enjoy inventing, creating, and finding innovative solutions to technical problems. 
        My journey has taught me to approach challenges with a creative mindset and a willingness to innovate."
      />

      {/* Determination */}
      <Card
        title="💪 Perseverance"
        content="Despite initial challenges due to my lack of family academic experience, 
        I persevered and developed strong adaptability. Each obstacle is an opportunity for learning."
      />

      {/* Vision */}
      <Card
        title="🌟 Vision & Ambition"
        content="I aim to contribute to the technology field through my work and ideas. 
        My goal is to combine my technical knowledge with creativity to develop 
        solutions that have a positive impact."
      />
    </div>
  )
}