export const businessConfig = {
  phone: "(941) 280-9119",
  phoneRaw: "+19412809119",
  email: "nrcompletepressurewashing@gmail.com",
  address: {
    street: "",
    city: "Mundelein",
    state: "IL",
    zip: "60060",
    full: "Mundelein, IL 60060",
  },
  hours: {
    display: "Mon-Sat: 7 AM - 5 PM",
    structured: [
      { days: "Mo-Sa", opens: "07:00", closes: "17:00" },
    ],
  },

  // ===== SERVICE AREAS =====
  serviceAreas: [
    "Mundelein",
    "Libertyville",
    "Vernon Hills",
    "Lake County",
    "Grayslake",
    "Wauconda",
    "Arlington Heights",
    "Lake Zurich",
    "Buffalo Grove",
    "Long Grove",
  ],

  serviceAreaCities: [
    { name: "Mundelein, IL", href: "/areas/mundelein-il" },
    { name: "Libertyville, IL", href: "/areas/libertyville-il" },
    { name: "Vernon Hills, IL", href: "/areas/vernon-hills-il" },
    { name: "Lake County, IL", href: "/areas/lake-county-il" },
    { name: "Grayslake, IL", href: "/areas/grayslake-il" },
    { name: "Wauconda, IL", href: "/areas/wauconda-il" },
    { name: "Arlington Heights, IL", href: "/areas/arlington-heights-il" },
    { name: "Lake Zurich, IL", href: "/areas/lake-zurich-il" },
    { name: "Buffalo Grove, IL", href: "/areas/buffalo-grove-il" },
    { name: "Long Grove, IL", href: "/areas/long-grove-il" },
  ],

  serviceAreasHeading: "Serving Mundelein & the Greater Chicago Suburbs",
  serviceAreasSubtitle:
    "and surrounding areas including Libertyville, Vernon Hills, Arlington Heights, Lake Zurich, and all of Lake County.",

  // ===== MAP EMBED =====
  googleBusinessMapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47241.36539505166!2d-88.0033286!3d42.266027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x45117625e73411fd%3A0xb5ce4e7c3f1e7e3a!2sNR%20Complete%20Pressure%20Washing!5e0!3m2!1sen!2sus!4v1776191292010!5m2!1sen!2sus",

  // ===== FORM EMBED =====
  formEmbedUrl: "https://api.leadconnectorhq.com/widget/form/d1E6WGScJcNFJbpSbxb3",
  formEmbedHeight: "695px",

  coordinates: { lat: 42.2631, lng: -87.984 },
  yearEstablished: 1994,
  yearsExperience: "30+",
  projectsCompleted: "500+",
  ownerName: "NR Complete Pressure Washing",
} as const;

// Helper: returns the map embed URL
export function getMapEmbedUrl(): string {
  if (businessConfig.googleBusinessMapEmbed) {
    return businessConfig.googleBusinessMapEmbed;
  }
  const { city, state } = businessConfig.address;
  return `https://www.google.com/maps/embed/v1/place?key=&q=${encodeURIComponent(`${city}, ${state}`)}`;
}
