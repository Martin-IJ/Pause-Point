import React, { useState } from "react";
import Img from "../assets/contactImg.png";
import Download from "../compments/Download";
import Modal from "../compments/Modal";

const Contact = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setTimeout(() => {
      setIsModalVisible(true);
    }, 2000);
  };

  return (
    <div className="bg-[#FFFDE4]">
      <div className="">
        <img src={Img} alt="" />

        <div className="lg:flex items-center justify-between gap-20 space-y-10 lg:space-y-0 lg:pt-28 lg:pb-48 m-auto max-w-[85%] w-[100%]">
          <div className="w-full lg:w-[30%] space-y-5 pt-5">
            <h3 className="text-[24px] font-semibold">
              Get In Touch With Us If You Need Help Or Have Questions
            </h3>
            <p>
              <span className="font-semibold">Phone Numbers</span>
              <br />
              +2349098776430 <br />
              +2349098776430
            </p>
            <p>
              <span className="font-semibold">Email Address</span>
              <br />
              support@pausepoint.com
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="w-full lg:w-[70%] border-4 border-black space-y-10 rounded-[20px] text-center mb-5 px-10 py-10"
          >
            <h3 className="text-[32px] font-semibold">Need Help?</h3>
            <input
              type="text"
              className="w-full p-2 rounded-[10px] bg-inherit border-1 border-[#00000099] placeholder:text-[#00000080]"
              placeholder="Full Name"
            />
            <input
              type="email"
              className="w-full p-2 rounded-[10px] bg-inherit border-1 border-[#00000099] placeholder:text-[#00000080]"
              placeholder="Email Address"
            />
            <input
              type="text"
              className="w-full p-2 rounded-[10px] bg-inherit border-1 border-[#00000099] placeholder:text-[#00000080]"
              placeholder="Phone Number"
            />
            <textarea
              cols="30"
              rows="5"
              className="w-full p-2 rounded-[10px] bg-inherit border-1 border-[#00000099] placeholder:text-[#00000080]"
              placeholder="Type your Message"
            ></textarea>
            <button type="submit" className="seeMoreBtn">
              Submit
            </button>
          </form>
        </div>
        {isModalVisible && <Modal />}
        <Download />
      </div>
    </div>
  );
};

export default Contact;
