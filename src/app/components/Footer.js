// app/components/Footer.js
import Icon from "./Icon";
import { siteInfo, services } from "../../constants/siteInfo";

const Footer = () => {
  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Service Times", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-gray-800 pt-16 pb-8 text-white">
      <div className="container mx-auto px-4">
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Church Info */}
          <div>
            <h3 className="mb-4 text-xl font-semibold">
              Wesley Methodist Church
            </h3>
            <p className="mb-4 text-gray-400">
              A place of worship, community, and spiritual growth where everyone
              is welcome.
            </p>
            {/* <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 transition-colors hover:text-white"
              >
                <Icon name="facebook-fill" className="ri-lg" />
              </a>
              <a
                href="#"
                className="text-gray-400 transition-colors hover:text-white"
              >
                <Icon name="instagram-line" className="ri-lg" />
              </a>
              <a
                href="#"
                className="text-gray-400 transition-colors hover:text-white"
              >
                <Icon name="youtube-line" className="ri-lg" />
              </a>
              <a
                href="#"
                className="text-gray-400 transition-colors hover:text-white"
              >
                <Icon name="twitter-x-line" className="ri-lg" />
              </a>
            </div> */}
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Service Time */}
          <div>
            <h3 className="mb-4 text-xl font-semibold">Service Time</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                Sunday: {services.sundayService.time}
              </li>
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-xl font-semibold">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start text-gray-400">
                <Icon name="map-pin-line" className="ri-lg mt-1 mr-2" />
                <a href="#location">
                  {siteInfo.address}
                  <br />
                  {siteInfo.addressLine2}
                </a>
              </li>
              <li className="flex items-center text-gray-400">
                <Icon name="phone-line" className="ri-lg mr-2" />
                <a href={`tel:${siteInfo.phone}`}>{siteInfo.phone}</a>
              </li>
              <li className="flex items-center text-gray-400">
                <Icon name="mail-line" className="ri-lg mr-2" />
                <a href={`mailto:${siteInfo.email}`}>{siteInfo.email}</a>
              </li>
            </ul>
          </div>
        </div>
        {/* <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <p className="mb-4 text-sm text-gray-400 md:mb-0">
              © 2025 Wesley Methodist Church. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="/privacy-policy"
                className="text-sm text-gray-400 transition-colors hover:text-white"
              >
                Privacy Policy
              </a>
              <a
                href="/terms-of-service"
                className="text-sm text-gray-400 transition-colors hover:text-white"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-sm text-gray-400 transition-colors hover:text-white"
              >
                Accessibility
              </a>
            </div>
          </div>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
