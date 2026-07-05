import { FaShippingFast, FaStar, FaShieldAlt, FaHeadset } from "react-icons/fa";

function Features() {
  const items = [
    {
      id: 1,
      title: "Fast Delivery",
      desc: "Get your food delivered quickly to your doorstep.",
      icon: <FaShippingFast />,
    },
    {
      id: 2,
      title: "Best Quality",
      desc: "We serve high quality and fresh ingredients.",
      icon: <FaStar />,
    },
    {
      id: 3,
      title: "Secure Payment",
      desc: "Your transactions are safe and protected.",
      icon: <FaShieldAlt />,
    },
    {
      id: 4,
      title: "24/7 Support",
      desc: "We are always here to help you anytime.",
      icon: <FaHeadset />,
    },
  ];

  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Why Choose Us
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-3 shadow-sm hover:shadow-lg transition flex items-start gap-2"
            >
              {/* Icon */}
              <div className="text-3xl text-orange-500 mt-4">{item.icon}</div>

              {/* Text */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
