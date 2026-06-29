import { Mail, MessageCircle } from "lucide-react";

const Footer = () => {
  const whatsappUrl = `https://wa.me/916382700550?text=${encodeURIComponent(
    "Hi, I'd like to know more about your services!"
  )}`;

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 py-12 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
              BRANDKURAL
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
              Helping businesses scale through powerful digital marketing
              strategies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3 text-sm text-gray-900 dark:text-white">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              {["About", "Services", "Why Us", "Contact"].map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase().replace(" ", "-")}`}
                    className="hover:text-blue-500 transition-colors duration-200"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-3 text-sm text-gray-900 dark:text-white">
              Contact Us
            </h4>
            <div className="space-y-3 text-sm text-gray-500 dark:text-gray-400">
              <a
                href="mailto:rvnaveen983@gmail.com"
                className="flex items-center gap-2 hover:text-blue-500 transition-colors duration-200"
              >
                <Mail size={16} /> rvnaveen983@gmail.com
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-blue-500 transition-colors duration-200"
              >
                <MessageCircle size={16} /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-gray-800 mt-10 pt-6 text-center text-xs text-gray-400 dark:text-gray-500">
          © {new Date().getFullYear()} BRANDKURAL. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;