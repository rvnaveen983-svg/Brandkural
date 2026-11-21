import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";

const Footer = () => {
  const whatsappUrl = `https://wa.me/916382700550?text=${encodeURIComponent(
    "Hi, I'd like to know more about your services!"
  )}`;

  const links = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#why-us", label: "Why us" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.14] bg-ink px-6 font-body text-white md:px-[5vw]">
      <div className="mx-auto max-w-[1669px]">
        {/* Top row */}
        <div className="flex flex-col gap-10 pb-16 pt-24 md:flex-row md:items-start md:justify-between">
          <a
            href="#home"
            className="flex items-center gap-3 no-underline"
          >
            <span className="block h-[25px] w-[25px] -rotate-[35deg] rounded-[12.5px] border-[4.8px] border-brand" />
            <span className="font-heading text-[18.4px] font-extrabold tracking-[-0.04em] text-white">
              BrandKural
              <sup className="ml-0.5 text-[7px] font-bold text-[#8a96a8]">®</sup>
            </span>
          </a>

          <h2 className="max-w-[720px] font-heading text-[clamp(2.2rem,4.6vw,5rem)] font-medium leading-[0.98] tracking-[-0.055em] text-white md:text-right">
            Helping businesses
            <br />
            <span className="text-brand">scale through marketing.</span>
          </h2>

          <a
            href="#home"
            className="inline-flex items-center gap-2 self-start text-[12px] font-semibold uppercase tracking-[0.12em] text-[#abb6c7] no-underline transition-colors duration-200 hover:text-white"
          >
            Back to top
            <ArrowUpRight size={18} />
          </a>
        </div>

        {/* Columns */}
        <div className="grid gap-10 border-t border-white/[0.14] py-12 md:grid-cols-3">
          <p className="max-w-sm text-sm leading-7 text-[#8d95a2]">
            Helping businesses scale through powerful digital marketing
            strategies.
          </p>

          <div>
            <h4 className="mb-4 text-[10px] font-semibold uppercase tracking-[0.17em] text-[#7e8797]">
              Explore
            </h4>
            <ul className="list-none space-y-3 text-sm">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-[#cbd8eb] no-underline transition-colors duration-200 hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-[10px] font-semibold uppercase tracking-[0.17em] text-[#7e8797]">
              Connect
            </h4>
            <div className="space-y-3 text-sm">
              <a
                href="mailto:rvnaveen983@gmail.com"
                className="flex items-center gap-3 text-[#cbd8eb] no-underline transition-colors duration-200 hover:text-white"
              >
                <Mail size={16} className="text-[#4f91ff]" />
                rvnaveen983@gmail.com
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[#cbd8eb] no-underline transition-colors duration-200 hover:text-white"
              >
                <MessageCircle size={16} className="text-[#4f91ff]" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.14] py-6 text-xs text-[#7e8797]">
          © {new Date().getFullYear()} BrandKural. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
