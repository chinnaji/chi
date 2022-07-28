import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { BsFillCheckCircleFill } from "react-icons/bs";
import confetti from "../../images/fetti.png";
import Image from "next/image";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleContactForm = (e) => {
    e.preventDefault();
    const contactData = {
      name,
      email,
      phoneNumber,
      subject,
      message,
    };

    // console.log(contactData);
    setIsLoading(true);
    fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contactData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.success === true) {
          setIsSent(true);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <section
      id="contact"
      className={`w-full bg-zinc-50 dark:bg-dark-600 relative text-zinc-50  md:mt-0 mt-12 py-10`}
    >
      {isSent ? (
        <section className="my-10 py-10  px-2 max-w-6xl	mx-auto flex flex-wrap flex-col justify-center items-center">
          <span className="w-32 h-32 shadow-lg shadow-lime-500/40  bg-lime-500 flex items-center justify-center rounded-full">
            <BsFillCheckCircleFill className="text-zinc-100 text-4xl" />
          </span>
          <h3 className="text-xl mt-5">Message Successfully Sent!</h3>

          <div className="rounded-lg   w-fit  relative ">
            <Image
              src={confetti}
              // layout="fill"
              objectFit="cover"
              // priority
              loading="eager"
              alt="my avatar"
              className="rounded z-[5]"
              placeholder="blur"
            />
          </div>
        </section>
      ) : (
        <form
          onSubmit={handleContactForm}
          className="px-2 my-5 max-w-6xl	 mx-auto flex flex-wrap "
        >
          <div className="w-full text-center pt-3 mb-6">
            <h2 className="text-4xl">Let&apos;s Connect</h2>
          </div>

          <div className="w-full p-2 md:w-1/2">
            <input
              required
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Name"
              className="w-full dark:bg-white py-3 bg-black bg-opacity-10 dark:bg-opacity-10 p-2 outline-none border-0 border-b-2 focus:border-b-lime-500 rounded border-b-zinc-400 dark:border-b-lime-600"
            />
          </div>
          <div className="w-full p-2 md:w-1/2">
            <input
              required
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              className="w-full dark:bg-white py-3 bg-black bg-opacity-10 dark:bg-opacity-10 p-2 outline-none border-0 border-b-2 focus:border-b-lime-500 rounded border-b-zinc-400 dark:border-b-lime-600"
            />
          </div>
          <div className="w-full p-2 md:w-1/2">
            <input
              required
              onChange={(e) => setPhoneNumber(e.target.value)}
              type="tel"
              placeholder="Phone Number"
              className="w-full dark:bg-white py-3 bg-black bg-opacity-10 dark:bg-opacity-10 p-2 outline-none border-0 border-b-2 focus:border-b-lime-500 rounded border-b-zinc-400 dark:border-b-lime-600"
            />
          </div>
          <div className="w-full p-2 md:w-1/2">
            <input
              required
              onChange={(e) => setSubject(e.target.value)}
              type="text"
              placeholder="Subject"
              className="w-full px-2 py-3 dark:bg-white bg-black bg-opacity-10 dark:bg-opacity-10 outline-none border-0 border-b-2 focus:border-b-lime-500 rounded border-b-zinc-400 dark:border-b-lime-600"
            />
          </div>

          <div className="w-full p-2 ">
            <textarea
              required
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message"
              cols="4"
              rows="5"
              className=" dark:bg-white bg-black bg-opacity-10 dark:bg-opacity-10 w-full p-2 outline-none border-0 border-b-2 focus:border-b-lime-500 rounded border-b-zinc-400 dark:border-b-lime-600"
            ></textarea>
          </div>
          <div className="w-full p-2 ">
            <button className=" mb-12 mt-5 md:w-fit text-center w-full  mx-auto  flex justify-center items-center px-12 text-sm py-4  bg-lime-500 hover:bg-lime-600 cursor-pointer rounded transition duration-100 ease-out hover:ease-in">
              {isLoading ? (
                <span className="mr-2 font-semibold">Loading...</span>
              ) : (
                <>
                  <span className="mr-2 font-semibold">SEND</span>
                  <span>
                    <FaPaperPlane className="text-xl" />
                  </span>
                </>
              )}
            </button>
          </div>
        </form>
      )}

      <p className="px-5 mt-10 max-w-[1000px] mx-auto text-center">
        <i>
          {" "}
          “You mustn’t allow yourself to be chained to fate, to be ruled by your
          genes. Human beings can choose the kind of life that they want to
          live. What’s important is that you choose life… and then live.”{" "}
        </i>{" "}
        – <b>Metal Gear Solid</b>
      </p>
    </section>
  );
}

export default Contact;
