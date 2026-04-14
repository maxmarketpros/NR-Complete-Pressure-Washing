import type { ProcessStep } from "@/types";

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Free Estimate",
    description:
      "Contact us by phone or online to schedule your free, no-obligation estimate. We assess your property and recommend the right cleaning approach for every surface.",
    icon: "MessageSquare",
  },
  {
    step: 2,
    title: "Custom Plan",
    description:
      "We develop a cleaning plan tailored to your property, selecting the right pressure levels, detergents, and techniques for each surface type to deliver safe, effective results.",
    icon: "FileText",
  },
  {
    step: 3,
    title: "Professional Cleaning",
    description:
      "Our experienced crew arrives on schedule with commercial-grade equipment and eco-friendly cleaning solutions. We work efficiently while protecting your landscaping and property.",
    icon: "Droplets",
  },
  {
    step: 4,
    title: "Final Walkthrough",
    description:
      "We inspect every cleaned surface with you to ensure complete satisfaction before we leave. If anything does not meet your expectations, we address it on the spot.",
    icon: "CheckCircle",
  },
];
