import type { NavItem, FooterGroup } from "@/types";

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Pressure Washing", href: "/services/pressure-washing" },
      { label: "House Washing", href: "/services/house-washing" },
      { label: "Concrete Cleaning", href: "/services/concrete-cleaning" },
      { label: "Concrete Sealing", href: "/services/concrete-sealing" },
      { label: "Paver Cleaning", href: "/services/paver-cleaning" },
      { label: "Paver Sanding", href: "/services/paver-sanding" },
      { label: "Paver Sealing", href: "/services/paver-sealing" },
      { label: "Stucco Cleaning", href: "/services/stucco-cleaning" },
      { label: "Deck & Patio Cleaning", href: "/services/deck-patio-cleaning" },
      {
        label: "Retaining Wall Cleaning",
        href: "/services/retaining-wall-cleaning",
      },
    ],
  },
  {
    label: "Areas",
    href: "/areas",
    children: [
      { label: "Mundelein, IL", href: "/areas/mundelein-il" },
      { label: "Libertyville, IL", href: "/areas/libertyville-il" },
      { label: "Vernon Hills, IL", href: "/areas/vernon-hills-il" },
      { label: "Lake County, IL", href: "/areas/lake-county-il" },
      { label: "Grayslake, IL", href: "/areas/grayslake-il" },
      { label: "Wauconda, IL", href: "/areas/wauconda-il" },
      { label: "Arlington Heights, IL", href: "/areas/arlington-heights-il" },
      { label: "Lake Zurich, IL", href: "/areas/lake-zurich-il" },
      { label: "Buffalo Grove, IL", href: "/areas/buffalo-grove-il" },
      { label: "Long Grove, IL", href: "/areas/long-grove-il" },
    ],
  },
  { label: "Gallery", href: "/gallery" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const footerGroups: FooterGroup[] = [
  {
    title: "Services",
    links: [
      { label: "Pressure Washing", href: "/services/pressure-washing" },
      { label: "House Washing", href: "/services/house-washing" },
      { label: "Concrete Cleaning", href: "/services/concrete-cleaning" },
      { label: "Concrete Sealing", href: "/services/concrete-sealing" },
      { label: "Paver Cleaning", href: "/services/paver-cleaning" },
      { label: "Paver Sanding", href: "/services/paver-sanding" },
      { label: "Paver Sealing", href: "/services/paver-sealing" },
      { label: "Stucco Cleaning", href: "/services/stucco-cleaning" },
      { label: "Deck & Patio Cleaning", href: "/services/deck-patio-cleaning" },
      {
        label: "Retaining Wall Cleaning",
        href: "/services/retaining-wall-cleaning",
      },
    ],
  },
  {
    title: "Service Areas",
    links: [
      { label: "Mundelein, IL", href: "/areas/mundelein-il" },
      { label: "Libertyville, IL", href: "/areas/libertyville-il" },
      { label: "Vernon Hills, IL", href: "/areas/vernon-hills-il" },
      { label: "Lake County, IL", href: "/areas/lake-county-il" },
      { label: "Grayslake, IL", href: "/areas/grayslake-il" },
      { label: "Wauconda, IL", href: "/areas/wauconda-il" },
      { label: "Arlington Heights, IL", href: "/areas/arlington-heights-il" },
      { label: "Lake Zurich, IL", href: "/areas/lake-zurich-il" },
      { label: "Buffalo Grove, IL", href: "/areas/buffalo-grove-il" },
      { label: "Long Grove, IL", href: "/areas/long-grove-il" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Gallery", href: "/gallery" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
    ],
  },
];
