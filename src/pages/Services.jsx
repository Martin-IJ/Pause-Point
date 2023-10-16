import React from "react";
import "../styles/accordion.css";
import d from "../assets/images/Frame 48.svg";
import image1 from "../assets/images/image1.jpeg";
import image2 from "../assets/images/image2.jpeg";
import image3 from "../assets/images/image3.jpeg";
import image4 from "../assets/images/image4.jpeg";
import Accordion from "../compments/Accordion";
import Download from "../compments/Download";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Services = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <div className="service-con">
      <header>
        <div className="" style={{ height: "309px" }}>
          <img
            src={d}
            alt=""
            className="img-fluid tire"
            style={{ height: "100%", objectFit: "cover" }}
          />
        </div>
      </header>

      <section style={{ backgroundColor: "#FFFDE4" }} className="py-5">
        <main className="container-lg d-flex flex-column gap-5">
          <div className="d-flex flex-column gap-3">
            <h3 className="fs-2 fw-semibold pt-5 text-center">What We Offer</h3>
            <p className="offset-1 col-10 text-center fw-normal fs-5">
              Lorem ipsum dolor sit amet consectetur. Orci diam curabitur a
              congue. Nulla et lobortis vel ut orci iaculis erat cras amet.
              Senectus ultricies interdum aliquam euismod purus ornare. Blandit
              risus tincidunt leo ornare. Sed phasellus lectus urna habitant
              odio amet ultrices molestie. Auctor leo leo vestibulum sit sed
              fames arcu interdum enim. Semper quis pulvinar venenatis eget
              lobortis amet. Sit viverra luctus praesent mauris et lectus.
              Scelerisque massa scelerisque nulla dis vel gravida. Donec lacus
              nisl suscipit elit consequat mi curabitur egestas. Ornare egestas
              tortor tincidunt massa elit lacus egestas sem laoreet. Lorem ipsum
              dolor sit amet consectetur. Lacus aliquam lobortis non cursus urna
              accumsan elit. Id ipsum quisque arcu enim dignissim sem egestas
              adipiscing.
            </p>
          </div>

          <div className="container gap-5 d-flex justify-content-between flex-wrap">
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="d-flex flex-column  justify-content-center align-items-center col-12 col-md-5 py-md-5"
            >
              <div className="col-10">
                <img
                  src={image1}
                  alt=""
                  style={{ borderRadius: "20px 20px 0 0" }}
                  className="img-fluid"
                />
              </div>
              <div
                style={{
                  backgroundColor: "rgba(4, 151, 60, 0.40)",
                  width: "100%",
                  borderRadius: " 0 0 40px 40px",
                }}
                className="border border-dark border-3"
              >
                <div className="d-flex flex-column py-4 px-4 gap-3">
                  <h3 className="fs-2 fw-semibold text-center">
                    Vistor Management
                  </h3>
                  <p className="fw-normal fs-5 pb-2">
                    Lorem ipsum dolor sit amet consectetur. Orci diam curabitur
                    a congue. Nulla et lobortis vel ut orci iaculis erat cras
                    amet. Senectus ultricies interdum aliquam euismod purus
                    ornare. Blandit risus tincidunt leo ornare. Sed phasellus
                    lectus urna habitant odio amet ultrices molestie. Auctor leo
                    leo vestibulum sit sed fames arcu interdum enim. Semper quis
                    pulvinar venenatis eget lobortis amet.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn("down", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="d-flex flex-column  justify-content-center align-items-center col-12 col-md-5 py-md-5"
            >
              <div className="col-10">
                <img
                  src={image2}
                  alt=""
                  style={{ borderRadius: "20px 20px 0 0" }}
                  className="img-fluid"
                />
              </div>
              <div
                style={{
                  backgroundColor: "rgba(4, 151, 60, 0.40)",
                  width: "100%",
                  borderRadius: " 0 0 40px 40px",
                }}
                className="border border-dark border-3"
              >
                <div className="d-flex flex-column py-4 px-4 gap-3">
                  <h3 className="fs-2 fw-semibold text-center">
                    Community Management
                  </h3>
                  <p className="fw-normal fs-5 pb-2">
                    Lorem ipsum dolor sit amet consectetur. Orci diam curabitur
                    a congue. Nulla et lobortis vel ut orci iaculis erat cras
                    amet. Senectus ultricies interdum aliquam euismod purus
                    ornare. Blandit risus tincidunt leo ornare. Sed phasellus
                    lectus urna habitant odio amet ultrices molestie. Auctor leo
                    leo vestibulum sit sed fames arcu interdum enim. Semper quis
                    pulvinar venenatis eget lobortis amet.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn("right", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="d-flex flex-column  justify-content-center align-items-center col-12 col-md-5 py-md-5"
            >
              <div className="col-10">
                <img
                  src={image3}
                  alt=""
                  style={{ borderRadius: "20px 20px 0 0" }}
                  className="img-fluid"
                />
              </div>
              <div
                style={{
                  backgroundColor: "rgba(4, 151, 60, 0.40)",
                  width: "100%",
                  borderRadius: " 0 0 40px 40px",
                }}
                className="border border-dark border-3"
              >
                <div className="d-flex flex-column py-4 px-4 gap-3">
                  <h3 className="fs-2 fw-semibold text-center">
                    Community Management
                  </h3>
                  <p className="fw-normal fs-5 pb-2">
                    Lorem ipsum dolor sit amet consectetur. Orci diam curabitur
                    a congue. Nulla et lobortis vel ut orci iaculis erat cras
                    amet. Senectus ultricies interdum aliquam euismod purus
                    ornare. Blandit risus tincidunt leo ornare. Sed phasellus
                    lectus urna habitant odio amet ultrices molestie. Auctor leo
                    leo vestibulum sit sed fames arcu interdum enim. Semper quis
                    pulvinar venenatis eget lobortis amet.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn("left", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="d-flex flex-column  justify-content-center align-items-center col-12 col-md-5 py-md-5"
            >
              <div className="col-10">
                <img
                  src={image4}
                  alt=""
                  style={{ borderRadius: "20px 20px 0 0" }}
                  className="img-fluid"
                />
              </div>
              <div
                style={{
                  backgroundColor: "rgba(4, 151, 60, 0.40)",
                  width: "100%",
                  borderRadius: " 0 0 40px 40px",
                }}
                className="border border-dark border-3"
              >
                <div className="d-flex flex-column py-4 px-4 gap-3">
                  <h3 className="fs-2 fw-semibold text-center">
                    Community Management
                  </h3>
                  <p className="fw-normal fs-5 pb-2">
                    Lorem ipsum dolor sit amet consectetur. Orci diam curabitur
                    a congue. Nulla et lobortis vel ut orci iaculis erat cras
                    amet. Senectus ultricies interdum aliquam euismod purus
                    ornare. Blandit risus tincidunt leo ornare. Sed phasellus
                    lectus urna habitant odio amet ultrices molestie. Auctor leo
                    leo vestibulum sit sed fames arcu interdum enim. Semper quis
                    pulvinar venenatis eget lobortis amet.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="pb-5">
            <h3 className="fs-2 fw-semibold pt-5 text-center pb-4">
              Frequently Asked Questions
            </h3>
            <Accordion />
          </div>
        </main>
        <br />
        <br />
        <br />
        <br />
        <br />
      </section>
      <div className="">
        <Download />
      </div>
    </div>
  );
};

export default Services;
