import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import Accordion from "../components/Accordion";

const Pricing = () => {
  const location = useLocation();
  const [isYearly, setYearly] = useState(false);

  const handleToggle = () => {
    setYearly((prev) => !prev);
  };

  const monthlyPlans = [
    {
      name: "Unlimited",
      description: "Below all are for Unlimited Plan",
      price: 0,
      points: [
        "Syndicated Listings",
        "Background Screening",
        "Online Rent Collection",
        "State-Specific Leases",
        "Maintenance Tracking",
        "Tenant Portals",
        "Property Accounting"
      ],
    },
    {
      name: "Unlimited Plus",
      description: "Includes everything in Unlimited, plus these premium features:",
      price: 9 ,
      points: [
        "FastPay Rent Payments",
        "Waived ACH Fees",
        "Customizable Applications",
        "Customizable Leases",
        "Clone and Reuse Lease Agreements",
        "Create Property Websites",
        "2x Faster Response Time from Customer Care"  
      ],
    },
  ];

  const getButtonColor = (planName) => {
    switch (planName) {
      case "Unlimited":
        return "text-[#CD7F32]";
      case "Unlimited Plus":
        return "text-gray-600";
      default:
        return "text-red-500";
    }
  };

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <div>
      <Navbar />

      <div className="mt-28">
        <div className="relative">
          <div className="w-full">
            <div className="w-full px-4 mx-auto max-w-[1400px] pb-8">
              <div className="space-y-2">
                <div className="md:text-4xl text-3xl font-bold text-headingColor text-center">
                  <h1>Find your perfect plan</h1>
                </div>

                <div className="text-center">
                  <p className="text-sideHeading">
                    No matter which level you choose, you’re instantly connected
                    to a powerful network group and the rewards are AMAZING!
                  </p>
                </div>
              </div>

              <div className="text-center my-6">
                <div className="flex items-center justify-center gap-4">
                  {/* Monthly Text */}
                  <span
                    className={`font-semibold ${
                      !isYearly ? "text-mainColor" : "text-gray-500"
                    }`}
                  >
                    Monthly
                  </span>

                  {/* Toggle Button */}
                  <div
                    className={`relative w-16 h-8 bg-gray-300 rounded-full p-1 cursor-pointer flex items-center ${
                      isYearly ? "bg-green-500" : "bg-gray-300"
                    }`}
                    onClick={handleToggle}
                  >
                    {/* Toggle Slider */}
                    <div
                      className={`w-6 h-6 bg-white rounded-full shadow-md transform duration-300 ease-in-out ${
                        isYearly ? "translate-x-8" : "translate-x-0"
                      }`}
                    ></div>
                  </div>

                  {/* Yearly Text */}
                  <span
                    className={`font-semibold ${
                      isYearly ? "text-mainColor" : "text-gray-500"
                    }`}
                  >
                    Yearly
                  </span>
                </div>
              </div>

              <section className="bg-white ">
                <div className="py-8 px-4 lg:px-6">
                  <div className=" grid xl:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4">
                    {monthlyPlans.map((plan) => (
                      <div
                        id="pricing_bronze"
                        key={plan.name}
                        className="flex flex-col text-center p-4 text-gray-900 bg-white rounded border border-gray-300 shadow"
                      >
                        <h3
                          // className="mb-4 text-2xl font-extrabold text-[#CD7F32]"
                          className={`mb-4 text-2xl font-extrabold ${getButtonColor(
                            plan.name
                          )}`}
                        >
                          {plan.name}
                        </h3>
                        <p className="font-light text-gray-500 sm:text-lg">
                          {plan.description}
                        </p>
                        <div className="flex justify-center items-baseline my-8">
                          <span className="mr-2 text-5xl font-extrabold">
                            ${isYearly ? plan.price * 12 : plan.price} / Unit
                          </span>
                          <span className="text-gray-500 ">
                            /{isYearly ? "year" : "month"}
                          </span>
                        </div>

                        <ul role="list" className="mb-8 space-y-4 text-left">
                          {plan.points.map((point, index) => (
                            <li class="flex items-center space-x-3">
                              <svg
                                class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clip-rule="evenodd"
                                ></path>
                              </svg>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                        <a
                          href="/login"
                          class="text-white bg-mainColor font-medium rounded-full text-sm px-5 py-2.5 my-3 text-center "
                        >
                          Get started
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <div className="pt-12 pb-12" id="faq">
                <div className="space-y-2">
                  <div className="md:text-4xl text-3xl font-bold text-headingColor text-center">
                    <h1>Frequently Asked Questions</h1>
                  </div>
                </div>

                <div className="max-w-[1000px] mx-auto pt-12 ">
                  <Accordion
                    title="What information is gathered in an online rental application?"
                    answer="Our online rental application forms request the following information from prospective tenants:
                          Their personal and contact information

                          If they own pets

                          Five to 10 years of work history

                          Income verification documents (i.e., W2 forms, paystubs)

                          Standard questions on smoking, declaring for bankruptcy, previous convictions, evictions, and refusal to pay rent

                          With Unlimited Plus, you can also add five custom questions as well as tenant screening reports to ensure you have all the information you need to make a decision."
                  />
                  <Accordion
                    title="Can you edit the settings on an Rentals. online rental application?"
                    answer="Yes, you can change the default settings of Rentals. rental applications to suit your needs. Examples include requiring one to 10 years of residence history, one to 10 years of work history, income verification, our standard questions, and adding tenant screening reports."
                  />
                  <Accordion
                    title="Does Rentals. conduct automated landlord reference checks?"
                    answer="Yes. When prospective tenants submit their previous landlords' contact information, our system automatically performs landlord reference checks to gather information on their renting experience with them. If we cannot contact their previous landlords due to their policies, you can still reach out to them directly with the provided contact information."
                  />
                  <Accordion
                    title="Do landlords or tenants have to cover the application fee?"
                    answer="There are no fees for rental applications, only the screening reports that can be added to the application. Landlords can choose to pay the application fee or have the prospective tenant cover the fee."
                  />
                  <Accordion
                    title="Can I request the rental application without tenant screening reports?"
                    answer="Yes, you can request a rental application without tenant screening reports."
                  />
                  <Accordion
                    title="What tenant screening reports can I add to a rental application?"
                    answer="You can add a TransUnion credit report, a criminal background check, and an eviction history report to an Avail rental application. If you prefer to purchase one or two screening reports to abide by local landlord-tenant laws, you have the option to request separate reports as well."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
