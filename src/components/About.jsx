import React from "react";

const message = ` Currently doing Systems Analysis and Development Technologistat Estácio de Sá, fascinated since childhood by technology, having spent mychildhood around computers.
 Looking forward to deepening my knowledge in Front-end Development using  technologies such as HTML, CSS, Javascript/Typescript, and ReactJS.`;

export default function About() {
  return (
    <div className="about">
      <h2>About</h2>
      <p>{message}</p>
    </div>
  );
}
