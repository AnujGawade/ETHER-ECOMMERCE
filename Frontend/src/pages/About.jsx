import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Welcome to Ether, your one-stop destination for EveryDay Fashion.
          </p>
          <p>
            Founded in 2024 by a team of passionate innovators, we’ve grown into
            a trusted online store for customers around the world.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            At Ether, we’re driven by a simple mission: to make your shopping
            experience seamless, enjoyable, and tailored to your needs.
          </p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality You Can Trust:</b>
          <p className="text-gray-600">
            Every product in our catalog is handpicked and rigorously tested to
            meet the highest standards.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Unbeatable Prices:</b>
          <p className="text-gray-600">
            We work directly with manufacturers to bring you the best deals,
            cutting out the middleman.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Fast & Reliable Shipping:</b>
          <p className="text-gray-600">
            With our global logistics network, your order is delivered quickly
            and securely, no matter where you are.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Our friendly support team is here to assist you every step of the
            way, ensuring your satisfaction.
          </p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
};

export default About;
