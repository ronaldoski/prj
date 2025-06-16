import React from "react";
import Card from "../composant/Card";

export default function page() {
  return (
    <main className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-1 p-1">
    

     
        <Card
          title="Présentation🙋"
          content="I am Bilal, I am 22 years old, student in industrial informatics at Helha Charleroi. I am actively looking for an traineeship in IT, industrial automation, or web/application development."
        />
        <Card
          title="Objectif🎯"
          content="I would like to find a traineeship in IT, web or mobile programming, in industrial automation on machines such as Schneider or Siemens."
        />
        <Card
          title="Hobbies⚽"
          content="When I'm not busy, I like to participate in group sports like football or individual gym. I also enjoy reading books."
        />
        <Card
          title="Video Editing🎥"
          content="I have notions of Adobe Suite, such as Premiere Pro and Photoshop, learned by myself."
        />
        <Card
          title="Automation 🤖"
          content="During my studies, I learned to use Schneider and Siemens software. I also learned to make electronic plans and use automation systems through a firewall like Flexy or in a network with eCatcher."
        />
        <Card
          title="Mobile Development 📱"
          content="I can code web applications in React Native or Java."
        />
        <Card
          title="student job 🧑‍🔧"
          content="I was a production worker in my holidays .IT allowed me to see automata working in a professional work environment which helped me greatly for my automate test . I also improved my ability to work in a coordinated team."
        />
     
    </main>
  );
}