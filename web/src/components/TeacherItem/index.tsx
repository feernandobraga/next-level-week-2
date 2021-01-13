import React from "react";

import "./styles.css";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

const TeacherItem = () => {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://i.ytimg.com/vi/evBZFdgjXWg/maxresdefault.jpg" alt="Diego" />
        <div>
          <strong>Diego Tequila</strong>
          <span>Bartending</span>
        </div>
      </header>

      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        <br />
        <br />
        Perspiciatis officiis dolore ea vitae amet deserunt alias explicabo consectetur
        pariatur culpa excepturi recusandae porro, odit consequuntur, cupiditate earum
        expedita! Distinctio, enim.
      </p>

      <footer>
        <p>
          Hourly rate:
          <strong>$51.00</strong>
        </p>

        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Send a message
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
