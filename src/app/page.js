// app/page.js
"use client"; // This is a Client Component because it uses hooks for form state.

import { Send } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import Button from "./components/Button";
import Icon from "./components/Icon";
import ServiceCard from "./components/ServiceCard";
import ContactInfo from "./components/ContactInfo";
// import SocialLink from "./components/SocialLink";
import FormField from "./components/FormField";
import { siteInfo, services, about, contact } from "../constants/siteInfo";

// Page Sections
const Hero = () => (
  <section
    id="home"
    className="relative flex h-[600px] w-full items-center justify-center overflow-hidden"
  >
    <div className="absolute inset-0 h-full w-full bg-[url(/background.jpg)] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-black/70"></div>
    </div>

    <div className="relative z-10 container mx-auto px-4 text-center">
      <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl">
        {siteInfo.nameVasco}
      </h1>
      <p className="mx-auto mb-8 max-w-2xl text-lg text-white">
        {siteInfo.pastor}
      </p>

      <div className="mb-8 flex flex-col items-center justify-center gap-6 md:flex-row">
        <a
          href="#services"
          className="border-primary transform rounded-lg border-l-4 bg-white/30 px-8 py-6 shadow-lg backdrop-blur-sm transition-transform duration-300 hover:scale-105"
        >
          <div className="flex items-center gap-4">
            <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-full">
              <Icon name="time-line" className="ri-lg text-primary" />
            </div>
            <div>
              <h3 className="mb-1 text-sm font-semibold text-white">
                {services.sundayService.title}
              </h3>
              <p className="text-base font-bold text-white">
                {services.sundayService.time}
              </p>
            </div>
          </div>
        </a>

        <a
          href="#location"
          className="border-primary transform rounded-lg border-l-4 bg-white/30 px-8 py-6 shadow-lg backdrop-blur-sm transition-transform duration-300 hover:scale-105"
        >
          <div className="flex items-center gap-4">
            <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-full">
              <Icon name="map-pin-line" className="ri-lg text-primary" />
            </div>
            <div>
              <h3 className="mb-1 text-sm font-semibold text-white">
                Location
              </h3>
              <p className="text-base font-bold text-white">
                {siteInfo.addressShort}
              </p>
            </div>
          </div>
        </a>
      </div>

      <Button href="#services">Join Us This Sunday</Button>
    </div>
  </section>
);

const Services = () => (
  <section id="services" className="bg-gray-50 py-20">
    <div className="container mx-auto px-4">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-4xl font-bold text-gray-800">Service Times</h2>
        <p className="mx-auto max-w-2xl text-gray-600">
          Join us for worship and fellowship. All are welcome to our services.
        </p>
      </div>

      <div className="mx-auto max-w-2xl">
        <ServiceCard
          icon="sun-line"
          title={services.sundayWorship.title}
          description={services.sundayWorship.description}
          time={services.sundayWorship.time}
        />
      </div>
    </div>
  </section>
);

const Location = () => (
  <section id="location" className="py-20">
    <div className="container mx-auto px-4">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-4xl font-bold text-gray-400">Find Us</h2>
      </div>

      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
        <div className="rounded bg-white p-8 shadow-md">
          <h3 className="mb-6 text-2xl font-semibold text-gray-800">
            Our Location
          </h3>

          <ContactInfo icon="map-pin-line" title="Address">
            {siteInfo.address}
            <br />
            {siteInfo.addressLine2}
          </ContactInfo>

          <div className="mt-8">
            <Button
              href={siteInfo.directionsUrl}
              className="inline-flex items-center"
              target="_blank"
            >
              <Icon name="direction-line" className="ri-sm mr-2" />
              <span>Get Directions</span>
            </Button>
          </div>
        </div>

        <div className="h-[400px] overflow-hidden rounded shadow-md">
          <iframe
            src="https://maps.google.com/maps?q=2,+Belmira+Plaza,+opp.+Laxmi+Petrol+pump,+Mundvel,+Mormugao,+New+Vaddem,+Goa+403802@15.3996435,73.8225495&z=19&output=embed&disableDefaultUI=true&zoomControl=false&mapTypeControl=false&streetViewControl=false&fullscreenControl=false"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="bg-gray-50 py-20">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div>
          <h2 className="mb-6 text-4xl font-bold text-gray-800">
            {about.title}
          </h2>
          <p className="mb-4 text-gray-600">{about.description1}</p>
          <p className="mb-4 text-gray-600">{about.description2}</p>
          <p className="mb-6 text-gray-600">{about.description3}</p>

          <div className="flex flex-wrap gap-4">
            <Button href="#services">Our Services</Button>
            <Button href="#contact" variant="secondary">
              Contact Us
            </Button>
          </div>
        </div>

        <div className="overflow-hidden rounded-lg shadow-md">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={about.imageUrl}
            alt={about.imageAlt}
            className="h-full w-full object-cover object-top"
          />
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
    if (errors[e.target.id]) {
      setErrors({
        ...errors,
        [e.target.id]: false,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = true;
    if (!formData.email.trim() || !formData.email.includes("@"))
      newErrors.email = true;
    if (!formData.message.trim()) newErrors.message = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const { name, email, subject, message } = formData;
    const recipientEmail = contact.email; // Assuming contact.email holds the church's email
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;

    window.open(mailtoLink, "_blank");

    alert(
      "Your email client will open with your message. Please send it from there.",
    );
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-400">Contact Us</h2>
          <p className="mx-auto max-w-2xl text-gray-400">
            Have questions or need prayer? Reach out to us and we&apos;ll get
            back to you as soon as possible.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <div className="rounded bg-white p-8 shadow-md">
              <h3 className="mb-6 text-2xl font-semibold text-gray-800">
                Get in Touch
              </h3>

              <ContactInfo icon="phone-line" title="Phone">
                <a href={`tel:${contact.phone}`}>{contact.phone}</a>
              </ContactInfo>

              <ContactInfo icon="mail-line" title="Email">
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </ContactInfo>

              <ContactInfo icon="time-line" title="Office Hours">
                {contact.officeHours}
              </ContactInfo>
            </div>
          </div>

          <div>
            <form
              className="rounded bg-white p-8 shadow-md"
              onSubmit={handleSubmit}
            >
              <h3 className="mb-6 text-2xl font-semibold text-gray-800">
                Send a Message
              </h3>

              <FormField
                label="Name"
                id="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
              />

              <FormField
                label="Email"
                type="email"
                id="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
              />

              <FormField
                label="Subject"
                id="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
              />

              <FormField
                label="Message"
                type="textarea"
                id="message"
                rows={4}
                placeholder="Your message"
                value={formData.message}
                onChange={handleChange}
                error={errors.message}
              />

              <Button type="submit" className="w-full">
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// Main Page Component
export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Location />
      <About />
      <Contact />
      {/* <Newsletter /> */}
    </>
  );
}
