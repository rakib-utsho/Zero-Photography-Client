import {
  FacebookIcon,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import Link from "next/link";

const footerLinks = {
  product: [
    { name: "Home", href: "/" },
    { name: "Gallery", href: "/gallery" },
    { name: "Team", href: "/team" },
    { name: "Contact", href: "#contact" },
  ],
  contactItems: [
    {
      type: "link",
      href: "tel:+8801700000000",
      icon: Phone,
      label: "+880 170 000 0000",
    },
    {
      type: "link",
      href: "mailto:info@zerophotography.com",
      icon: Mail,
      label: "info@zerophotography.com",
    },
    {
      type: "text",
      icon: MapPin,
      label: "Mirpur, Dhaka, Bangladesh",
    },
  ],
};

const socialLinks = [
  { name: "Facebook", href: "#", icon: FacebookIcon },
  { name: "Github", href: "#", icon: Github },
  { name: "LinkedIn", href: "#", icon: Linkedin },
  { name: "Email", href: "#", icon: Mail },
];

export const Footer = () => {
  return (
    // Footer Component
    <footer className="border-t border-[#1e1e1e] bg-badgeColor w-full mx-auto">
      {/* Main Div */}
      <div className="max-w-7xl px-4 mx-auto py-12 md:py-16">
        {/* Logo and description */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-2xl font-bold font-serif">
              <span className="text-3xl font-bold text-[#E6B800]">
                Zero Photography
              </span>
            </Link>
            <p className="mt-4 text-md text-[#f5f5f5]">
              Capturing Stories, Not Just Photos. Professional photography
              services in Dhaka since 2019.
            </p>
            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-[#f5f5f5] hover:text-[#E6B800] transition p-2 rounded-2xl hover:border hover:border-[#E6B800]"
                >
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          <div>
            <h4 className="font-semibold text-lg font-sans text-[#f5f5f5] mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.product.map((productLink) => (
                <li key={productLink.name}>
                  <Link
                    href={productLink.href}
                    className="text-sm text-[#f5f5f5] hover:text-[#E6B800] transition-colors"
                  >
                    {productLink.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-[#f5f5f5] text-lg font-sans font-semibold mb-4">
              Contact Us
            </h4>
            <div className="flex flex-col space-y-4">
              {footerLinks.contactItems.map((item, index) =>
                item.type === "link" ? (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-center gap-3 text-[#f5f5f5] hover:text-[#E6B800] transition-colors"
                  >
                    <item.icon className="h-4 w-4 text-[#E6B800]" />
                    <span className="text-sm">{item.label}</span>
                  </a>
                ) : (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-[#f5f5f5]"
                  >
                    <item.icon className="h-4 w-4 text-[#E6B800]" />
                    <span className="text-sm">{item.label}</span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* copyright  */}
        <div className="mt-12 pt-8 border-t border-[#1e1e1e]">
          <p className="text-center text-sm text-[#f5f5f5] flex flex-col md:flex-row justify-between items-center gap-2 md:gap-4">
            <span>
              © {new Date().getFullYear()} Zero Photography. All rights
              reserved.
            </span>
            <span className="text-[#f5f5f5]/80">
              Design & Develop by Md. Rakibul Islam
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};
