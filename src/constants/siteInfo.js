// src/constants/siteInfo.js

export const siteInfo = {
  name: "Wesley Methodist Church",
  nameVasco: "Wesley Methodist Church Vasco",
  pastor: "Led by Pastor Pradeep Kumar",
  description:
    "Welcome to Wesley Methodist Church Vasco. Join us for worship, fellowship, and community service.",
  keywords:
    "church, Vasco, Goa, worship, community, Methodist, Protestant Church, spiritual growth, Sunday service, prayer, fellowship",
  url: "https://www.wmcv.in",
  logoUrl: "/church-logo.png",
  address: "Belmira Plaza, opp. Laxmi Petrol pump, Mundvel",
  addressLine2: "Mormugao, New Vaddem, Goa 403802",
  addressShort: "Belmira Plaza, opp. Laxmi Petrol pump, Vasco, Goa",
  phone: null,
  email: "wmcv2025@gmail.com",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=15.3996435,73.8225495",
};

export const services = {
  sundayService: {
    title: "Sunday Service",
    time: "9:00 AM to 11:00 AM",
  },
  sundayWorship: {
    title: "Sunday Worship",
    description:
      "Join us for our main service with worship, prayer, and teaching. Experience the warmth of our community as we gather to praise and learn together.",
    time: "9:00 AM to 11:00 AM",
  },
};

export const about = {
  title: "About Our Church",
  description1:
    "Wesley Methodist Church has been serving our community for over 75 years. We are a welcoming congregation dedicated to sharing God's love through worship, education, and service.",
  description2:
    "Our mission is to create a space where people from all walks of life can grow in their faith journey, build meaningful relationships, and make a positive impact in the world around us.",
  description3:
    "We believe in the power of community and the importance of supporting one another through life's joys and challenges.",
  imageUrl: "/about-us.jpg",
  imageAlt: "Church Community",
};

export const contact = {
  phone: siteInfo.phone,
  email: siteInfo.email,
  officeHours: "Monday - Friday: 9:00 AM - 5:00 PM",
};

export const socialLinks = {
  facebook: "#",
  twitter: "#",
  instagram: "#",
};

export const footer = {
  copyright: `© ${new Date().getFullYear()} Wesley Methodist Church. All Rights Reserved.`,
};
