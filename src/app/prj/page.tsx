"use client";
import React from "react";
import { ZoomCard } from "../composant/Zoom-card";

// Importation des images du dossier images
import auto from "../images/auto.jpg";
import auto2 from "../images/auto2.jpg";
import PRJ from "../images/PRJ.jpg";
import prj2 from "../images/prj2.jpg";
import PRJ3 from "../images/PRJ3.jpg";
import PWM from "../images/PWM.jpg";
import SENS from "../images/SENS.jpg";
import INDU from "../images/INDU.jpg";
export default function Page() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
      <ZoomCard
        title="Dyce game"
        description="My initial academic project focused on a dice game that was randomly selected."
        buttonText="More"
        imageSrc={PRJ}
        imageAlt="Dyce game project"
        detailedInfo={{
          subtitle: "Disciplinary Project",
          fullDescription:
            "My initial academic project focused on a dice game that was randomly selected. My team and I had to code an app that randomly throws two dice and displays their values on the computer and an electronic model. As part of our first project, our teachers introduced us to professional organization systems like mind maps, Gantt, and PERT charts. Furthermore, each team had meetings every week to discuss their research, misunderstandings, or improvements. In the middle of the year one of my team left the school so I had to switch beetwen my initial task and other task release by my old teammates. This challenge has really improved my versatile ability. This project has also helped me in managing shy because in different meeting we had to speak a lot.",
        }}
      />

      <ZoomCard
        title="Defense Turret"
        description="The third disciplinary project was a solo endeavor."
        buttonText="More"
        imageSrc={PRJ3}
        imageAlt="Defense Turret project"
        detailedInfo={{
          subtitle: "Defense Turret",
          fullDescription:
            "The third disciplinary project was a solo endeavor. The only requirement was to create an autonomous system where the user could trigger different values with a button. I decided to make a fake defense system. I used a radar sensor mounted on a 360° servo to detect any object in its path, and a solenoid fixed on another 360° servo to shoot an arrow at the target. The system was connected to a React website.",
        }}
      />

      <ZoomCard
        title="Automate Simulation"
        description="First automate project."
        buttonText="More"
    imageSrc={auto}
        imageAlt="automate simulation project"
        
        detailedInfo={{
          subtitle: "Automate Simulation",
          fullDescription:
            "The aim of this automation project was to create a simulation in the Unity Pro XL software that sorts crates on an assembly line. We had three different coloured boxes: grey, green, and blue. When the system is started, a sensor detects the colour of each container and, if it matches, pushes it onto another assembly line, incrementing a counter for the matching crate. If no match is detected, the container moves on to the next sensor or to the end of the line. The line has an external emergency button for safety. We created a GRAFCET diagram and a ladder program, and finally developed an evaluation screen linked to the project.",
        }}
      />

      <ZoomCard
        title="Physic Project Automate"
        description="The second automation project involved wiring an automation system to the current."
        buttonText="More"
        imageSrc={auto2}
        imageAlt="Physical Project Automate"
        detailedInfo={{
          subtitle: "Physical Project",
          fullDescription:
            "The second automation project consisted of wiring an automation system to power. Connecting a button and a lamp. It may seem simple. But it was challenging for beginners. We also had to program a Unity automation system to use two components. My project involved a storage area. When a button was pressed, an assembly line pushed a box into a crane which moved to a selected area. When the area was empty, the crane deposited the box and the lamp light up.",
        }}
      />

      <ZoomCard
        title="Automation with PID and PWM"
        description="As part of this project, we had to turn a heated LED on or off using two buttons (ON and OFF)."
        buttonText="More"
        imageSrc={PWM}
        imageAlt="automate simulation project"
        detailedInfo={{
          subtitle: "Automation with PID and PWM",
          fullDescription:
            "As part of this project, we had to turn a heated LED on or off using two buttons (ON and OFF). Then, we regulated the temperature of the case to prevent it from overheating by operating two fans controlled by PWM (Pulse Width Modulation). We added a PID block (Proportional, Integral, Derivative) to control the fans’ speed based on the temperature. Finally, we configured an HMI for real-time visualization and interaction with the system.",
        }}
      />

      <ZoomCard
        title="Industrial Project"
        description="This is an IT/ET project including embedded, website, and VR part."
        buttonText="More"
        imageSrc={INDU}
        imageAlt="Industrial Project"
        detailedInfo={{
          subtitle: "Technocampus All In One Project",
          fullDescription:
            "We have to carry out a project that consists of sending data from SIF 401 (PLC) in a secure way using an Ewon Flexy 201 and including different communication protocols. This project will be divided into several stages, the first stage is the analysis and understanding of the hardware used, it will take in hand the Ewon and its configuration with talk2me, to then connect with the ECatcher application, It will also be necessary to understand and use the OPC-UA protocol, which is a communication standard used in the field of industrial automation. The second step is the data communication to the web application, because as mentioned above, we will use the OPC-UA protocol, in order to transmit some data from the SIF401 to our Node-RED application. It will be configured to transmit these OPC-UA data in Web Socket to our web application made in react. The web application will have a login page, which will give the choice between an OAuth authentication by Discord or by credential (Authentik). Once authenticated, there will be a home page with the necessary information about the project, a live page containing data of choice sent by OPC-UA and Web Socket and a final administration page in which users who have already logged in will be shown, including the possibility to change the role of each user (user or admin). This last page will only be accessible as an admin role. The last step is the XR headset part, we will also have to display some data of the automaton in the XR headset, for this we will have to use the Unity software.",
        }}
      />

      <ZoomCard
        title="Sensor Traineeship"
        description="Is a technocampus traineeship about different sensors."
        buttonText="More"
        imageAlt="Sensor Traineeship"
        imageSrc={SENS}
        detailedInfo={{
          subtitle: "Sensor Traineeship",
          fullDescription:
            "One of the technocampus training courses that I carried out consisted of identifying sensors, analyzing their sign and searching for the operating point of the PID adjustment. I carried out tests on speed, flow and level sensors.",
        }}
      />

      <ZoomCard
        title="Sorting Balls"
        description="A disciplinary project involving the sorting of yellow and pink balls into three different crates."
        buttonText="More"
        imageSrc={prj2}
        imageAlt="Sorting Balls"
        detailedInfo={{
          subtitle: "Sorting Balls",
          fullDescription:
            "The second disciplinary project involved sorting two types of balls, yellow and pink, into three different crates: one for yellow, one for pink, and one for the others. An embedded system with sensors, motors, and other components was required to display data on a website with access to history and live data, as well as a focus on design and physical structure. After a lot of 3D modeling and research on components, my team came up with the idea of a rollercoaster. An object is thrown into the system, its color is checked by an AI camera named HuskyLens (trained to detect yellow and pink balls). If the camera detects the ball's color correctly, it directs it to the corresponding crate. If the object is unknown, or the crate is full, the ball goes to the 'other' crate. All steps are displayed on an LCD connected via I2C communication and on a website. JavaScript and Twig templates for the frontend, and Bootstrap for the design, were the main components used in the development of the website using the Express.js framework. Our website runs with Node.js. At the end of the project, we were interviewed by Télésambre, who wanted to learn more about our work. I had a lot of difficulty at the start of the project because I’m often distracted, which made teamwork challenging.",
        }}
      />
    </div>
  );
}