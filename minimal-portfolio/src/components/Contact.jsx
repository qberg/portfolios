import React from "react";
import {
  FiGithub,
  FiTwitter,
  FiLinkedin,
  FiGlobe,
  FiYoutube,
} from "react-icons/fi";

import Title from "./Title";
import Button from "./ui/Button";

const socialLinks = [
  {
    id: 1,
    icon: <FiGlobe />,
    url: "/",
  },
  {
    id: 2,
    icon: <FiGithub />,
    url: "https://github.com/naveen015",
  },
  {
    id: 3,
    icon: <FiTwitter />,
    url: "https://twitter.com/example",
  },
  {
    id: 4,
    icon: <FiLinkedin />,
    url: "https://www.linkedin.com/in/naveen015",
  },
];

const Contact = () => {
  return (
    <section id="contact">
      <Title>Get in Touch</Title>
      <div className="flex flex-col items-center justify-center text-center">
        <p className="text-sm max-w-xl mb-6">
          I’m excited to continue my journey in the field of artificial
          intelligence and intelligent systems, aiming to contribute
          meaningfully to this rapidly evolving landscape. Whether you know of
          an opportunity or just want to say hello, feel free to drop a message.
          Please be sure to checkout my social media profiles as well.
        </p>
        <div className="mb-4">
          <Button href="#" text="Say Hello" />
        </div>
        <ul className="flex p-4 gap-4 sm:gap-8">
          {socialLinks.map((link) => (
            <a
              href={link.url}
              target="__blank"
              key={link.id}
              className="text-gray-500 hover:text-the-blue cursor-pointer rounded-lg bg-gray-50 shadow-sm p-4 duration-300"
            >
              <i className="text-xl sm:text-2xl md:text-3xl">{link.icon}</i>
            </a>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Contact;
