import React from "react";
import Title from "./Title";
import Button from "./ui/Button";

const Contact = () => {
  return (
    <section id="contact">
      <Title>Get in Touch</Title>
      <div className="flex flex-col items-center justify-center text-center">
        <p className="text-sm max-w-xl mb-6">
          I am looking for this and that job in the field of computer science.
          Whether you know of an opportunity or just want to say hello, feel
          free to drop a message. Please be sure to checkout my social media
          profiles as well.
        </p>
        <div>
          <Button href="#" text="Say Hello" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
