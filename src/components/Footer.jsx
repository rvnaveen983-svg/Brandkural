import { Mail, MessageCircle } from "lucide-react";

const Footer = () => {
  const whatsappUrl = `https://wa.me/916382700550?text=${encodeURIComponent(
    "Hi, I'd like to know more about your services!"
  )}`;

  const brandText = "BRAND KURAL";

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-black via-neutral-950 to-black text-white">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0d_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0d_1px,transparent_1px)] bg-[size:80px_80px] opacity-30" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Big Brand Text */}
        <div className="py-12 md:py-16 border-b border-white/10">
          <h2 className="flex flex-wrap items-center justify-center md:justify-between gap-x-2 md:gap-x-4 font-black uppercase leading-none tracking-tight text-[clamp(3.2rem,11vw,10rem)]">
            {brandText.split("").map((letter, index) => (
              <span
                key={index}
                className={`inline-block text-white transition-all duration-300 ease-out hover:text-gray-400 hover:-translate-y-2 hover:scale-110 hover:[text-shadow:0_0_25px_rgba(255,255,255,0.45)] ${
                  letter === " " ? "w-6 md:w-10" : ""
                }`}
              >
                {letter === " " ? "\u00A0" : letter}
              </span>
            ))}
          </h2>
        </div>

        {/* Footer Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-12">
          {/* Brand */}
          <div>
      

            <p className="text-white/60 text-sm leading-relaxed max-w-sm">
              Helping businesses scale through powerful digital marketing
              strategies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-sm text-white uppercase tracking-widest">
              Quick Links
            </h4>

            <ul className="space-y-3 text-sm text-white/60">
              {["About", "Services", "Why Us", "Contact"].map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase().replace(" ", "-")}`}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-sm text-white uppercase tracking-widest">
              Contact Us
            </h4>

            <div className="space-y-4 text-sm text-white/60">
              <a
                href="mailto:rvnaveen983@gmail.com"
                className="flex items-center gap-3 hover:text-white transition-colors duration-200"
              >
                <span className="w-9 h-9 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center">
                  <Mail size={16} />
                </span>
                rvnaveen983@gmail.com
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-white transition-colors duration-200"
              >
                <span className="w-9 h-9 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center">
                  <MessageCircle size={16} />
                </span>
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6 text-center text-xs text-white/45">
          © {new Date().getFullYear()} BRANDKURAL. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
