import React from "react";
import {
  Building2,
  Globe2,
  LayoutGrid,
  Package,
  ShoppingCart,
  Store,
  Truck,
} from "lucide-react";
import YourPayment from "../assets/yourPayment.png";
import ReactTypingEffect from "react-typing-effect";

const Service1 = () => {
  const services = [
    {
      // icon: <Globe2 className="w-12 h-12" />,
      icon: <ShoppingCart size={50} className="w-12 h-12" />,
      title: "E-Commerce",
      description:
        "We offer a live multi-vendor e-commerce platform empowering engaging business artisans to connect with advanced customer performance and processes.",
      aos: "fade-down-right",
    },
    {
      icon: <Package size={50} className="w-12 h-12" />,
      title: "Consignment & Re-Commerce",
      description:
        "We offer consignment and Re-Commerce partnership helps business artisans resale, buyback, new, and returned products in major USA business chains.",
      aos: "fade-up",
    },
    {
      icon: <LayoutGrid size={50} className="w-12 h-12" />,
      title: "Exhibition",
      description:
        "Our exhibition partnership aids business artisans in the USA with novel consignment, logistics, and storage, creating successful expos.",
      aos: "fade-up-left",
    },
    {
      icon: <Store size={50} className="w-12 h-12" />,
      title: "Brick & Mortar",
      description:
        "Our brick-and-mortar partnership provides business artisans exclusive retail space in premium USA markets.",
      aos: "fade-down",
    },
    {
      icon: <Truck size={50} className="w-12 h-12" />,
      title: "Import Export",
      description:
        "Our Import Export partnership connects business artisans with major USA business chains, creating broad market access and high visibility.",
      aos: "fade-up-right",
    },
    {
      icon: <Building2 size={50} className="w-12 h-12" />,
      title: "Franchise",
      description:
        "Our franchise partnership offers business artisans the opportunity to own and operate stores in premium USA locations.",
      aos: "fade-left",
    },
  ];

  return (
    <>
      <div className="position-relative min-vh-100 w-100 overflow-hidden bg-blue text-white">
        {/* Diagonal lines background */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100 opacity-10"
          // style={{
          //     backgroundImage:
          //         "repeating-linear-gradient(45deg, #f0f0f0 0px, #f0f0f0 1px, transparent 1px, transparent 50px)",
          //     backgroundSize: "70px 70px",
          // }}
        ></div>

        <div className="position-relative container py-5 text-white">
          <div className="text-center mb-5 ">
            <h1 className="display-4 fw-bold">
              {/* <span className="text-orange">YOUR</span> Partnerships */}
              <img src={YourPayment} width={250} alt="" />
            </h1>
            {/* <h2 className="display-5 fw-bold text-inf text-orange mt-2 ">YOURWAY</h2> */}
            <h2 className="fw-bold ">
              Kashmir handicraft business &nbsp;
              <span className=" text-orange">
                <ReactTypingEffect
                  text={["industry", "research"]}
                  speed={100}
                  eraseSpeed={50}
                  eraseDelay={2000}
                  typingDelay={500}
                />
              </span>
            </h2>
            <p className="mt-4 lead text- mx-auto text-white">
              Our complete business structure provides a one-window solution for
              the business/brands/seller sector in the USA, ensuring unified
              operations, enhanced capabilities, comprehensive support for
              business integration, simplified supply, streamlined logistics,
              visibility, and cost-effectiveness & cost efficiency.
            </p>

            <div className="row g-4 mt-4 pb-3 bg-blue">
              {services.map((service, index) => (
                <div
                  className="col-md-6 col-lg-4 bg-blue"
                  data-aos={service.aos}
                  key={index}
                >
                  <div
                    style={{ borderRadius: 30 }}
                    className="card card-hover pb-5   border-0 shadow-sm text-center p-4 h-100"
                  >
                    <div className="mb-5  fs-4">{service.icon}</div>
                    <h3 className="card-title mb-2 fs-5 fw-semibold bg-orange text-red">
                      {service.title}
                    </h3>
                    <p className="card-tex text-muted">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service1;
