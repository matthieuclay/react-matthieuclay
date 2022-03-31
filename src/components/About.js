import React from "react";

const About = () => {
  return (
    <div className="about">
      <div className="title">
        <h1>Hello.</h1>
        <h2>My name is Matthieu Clay.</h2>
      </div>
      <p>
        I am a web developer working for the{" "}
        <a
          href="https://sii-group.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          SII Group
        </a>{" "}
        and the creator of the web agency{" "}
        <a href="https://graap.fr" target="_blank" rel="noreferrer noopener">
          Graap
        </a>
        . Most of my work is open source and publicly available on{" "}
        <a
          href="https://github.com/matthieuclay"
          target="_blank"
          rel="noreferrer noopener"
        >
          GitHub
        </a>
        .
      </p>
      <p>
        You can follow me on{" "}
        <a
          href="https://twitter.com/matthieuclay"
          target="_blank"
          rel="noreferrer noopener"
        >
          Twitter
        </a>{" "}
        where I mostly tweet about frontend technologies and on{" "}
        <a
          href="https://instagram.com/matthieuclay"
          target="_blank"
          rel="noreferrer noopener"
        >
          Instagram
        </a>{" "}
        where I share my life.
      </p>
      <p>
        Having many projects and dreams in my mind, I wish to use my skills and
        my qualities to encourage and enhance various IT projects.
      </p>
    </div>
  );
};

export default About;
