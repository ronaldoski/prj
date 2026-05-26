import React from "react";
import Image from "next/image";
import Card from "../composant/Card";

export default function page() {
  return (
    <main className="flex-1 grid  md:grid-cols-2 gap-8 p-8">
      <section className="md:col-span-2 bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
        <Image
          src="/logos/helha.png"
          alt="HELHa logo"
          width={260}
          height={160}
          className="h-auto w-56 object-contain"
          priority
        />
        <p className="text-gray-700 mt-3">
          Industrial IT student at HELHa Charleroi.
        </p>
      </section>

     
        <Card
          title="Presentation🙋"
          content="I am Bilal, I am 22 years old, a student in industrial informatics at HELHa Charleroi.
I am actively looking for a traineeship in IT, industrial automation, or web/application development.
When I finished high school, I did not know what I would learn for my future.
I was very undecided until a friend told me about programming, and I discovered IT.
I did a lot of research during my holidays and quickly loved it. My first bachelor's was complicated because of a lack of organization. Indeed, I am the eldest son of a family where nobody had gone to a city school, so I didn’t expect the level of organization needed for such graduation.
"
        />
        <Card
          title="Objective🎯"
          content="I would like to find a traineeship in IT, web or mobile programming, in industrial automation on machines such as Schneider or Siemens."
        />
        <Card
          title="Hobbies⚽"
          content="I like sports. I think it’s important for balance with the informatics profession, where we move less. I practise individual sports like fitness or walking, but I also like team sports such as football. In addition I a like long formats such as podcasts or reading."/>
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