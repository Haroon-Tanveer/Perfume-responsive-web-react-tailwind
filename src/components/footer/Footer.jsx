import { FaFacebook, FaIcons, FaInstagram, FaTwitch, FaTwitter } from "react-icons/fa";
import { SiApplepay, SiMastercard, SiPaypal, SiVisa } from "react-icons/si";

const Footer = () => {
  const sections = [
    {
      title: "Quick link",
      links: ["Home", "Shop", "New Arrivals", "Best Sellers", "Gift Sets"],
    },
    {
      title: "Customer Services",
      links: [
        "Contact Us",
        "FAQs",
        "Shipping Policy",
        "Returns & Exchange",
        "Privacy Policy",
      ],
    },
  ];

  const socialIcons = [FaFacebook, FaTwitter, FaInstagram];
  const paymentIcon = [SiVisa, SiMastercard, SiPaypal, SiApplepay];
  return (
    <footer className="bg-gray-950 text-gray-300 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Scent Haven</h3>
            <p className="mb-4">
              Lorem ipsum dolor sit amet consectetur. Itaque delectus eius.
            </p>
            <div className="flex space-x-4">
              {socialIcons.map((Icon, i) => (
                <a
                  href="#"
                  key={i}
                  className="text-gray-400 hover:text-white transition"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          {sections.map(({ title, links }, i) => (
            <div key={i}>
              <h3 className="text-lg font-semibold text-white m-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link, j) => (
                  <li key={j}>
                    <a href="#" className="hover:text-white transition">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Newsletter
            </h3>
            <p className="mb-4">
              Lorem ipsum dolor Doloribus animi libero explicabo veritatis
              sapiente
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 w-full rounded-l focus:outline-none text-gray-200"
                required
              />
              <button
                type="submit"
                className="bg-pink-700 hover:bg-pink-700 text-white px-4 py-2 rounded-r transition"
              >
                Subscribe
              </button>
            </form>
            <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
              <p>
                &copy; {new Date().getFullYear()} Scent Haven. All rights
                reserved.
              </p>
              {/* <div className='flex space-x-6 mt-4 md:mt-0'>
                {paymentIcons.map((FaIcons, i)=>(
                  <FaIcons key={i} className='h-6 w-8' />
                ))}
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
