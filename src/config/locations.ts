export interface LocationFAQ {
  question: string;
  answer: string;
}

export interface LocationBenefit {
  title: string;
  description: string;
  icon: string;
}

export interface LocationTopicItem {
  title: string;
  description: string;
  icon: string;
}

export interface LocationConfig {
  slug: string;
  name: string;
  state: string;
  fullName: string;
  heroImage: string;
  splitImage: string;
  metaDescription: string;
  heroSubtitle: string;
  overview: string[];
  whyChooseUs: LocationBenefit[];
  services: string[];
  localExpertise: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    items: LocationTopicItem[];
  };
  faqs: LocationFAQ[];
  ctaHeading: string;
  ctaText: string;
}

export const locations: LocationConfig[] = [
  // ===== 1. MUNDELEIN, IL =====
  {
    slug: "mundelein-il",
    name: "Mundelein",
    state: "IL",
    fullName: "Mundelein, IL",
    heroImage: "location-mundelein-hero",
    splitImage: "location-mundelein-split",
    metaDescription:
      "Professional pressure washing in Mundelein, IL by NR Complete Pressure Washing. House washing, concrete cleaning, paver restoration, and more. 30+ years experience. Free estimates. Call (941) 280-9119.",
    heroSubtitle:
      "NR Complete Pressure Washing is proud to call Mundelein, IL home. As our base of operations for over 30 years, Mundelein residents receive priority scheduling, fast response times, and the deepest level of local knowledge for all pressure washing, house washing, and hardscape cleaning needs.",
    overview: [
      "Mundelein, IL is where NR Complete Pressure Washing got its start, and it remains at the heart of everything we do. For more than three decades, we have been the trusted name in exterior cleaning for Mundelein homeowners and business owners. From the tree-lined residential streets near Diamond Lake to the commercial properties along Route 45, we know this community inside and out. Our team understands the specific challenges that Mundelein properties face — the humid summers that breed algae and mold, the harsh winters that leave behind salt stains and grime, and the constant battle against moss and mildew on north-facing surfaces.",
      "As a Mundelein-based pressure washing company, we take enormous pride in the appearance of our hometown. When you drive through a neighborhood and see a driveway that looks freshly poured or a house that gleams like the day it was built, there is a good chance our crew was behind it. We offer the full range of exterior cleaning services including pressure washing, soft wash house cleaning, concrete cleaning and sealing, paver restoration with sanding and sealing, stucco cleaning, deck and patio cleaning, and retaining wall cleaning.",
      "Choosing a local provider means more than just convenience. It means working with a team that has cleaned hundreds of properties in your area, understands the local soil conditions, water quality, and seasonal patterns that affect your exterior surfaces. It means getting a crew that can be at your property quickly, that knows the neighborhoods, and that has a reputation to uphold right here in the community where we live and work. Call NR Complete Pressure Washing today at (941) 280-9119 for your free Mundelein pressure washing estimate.",
    ],
    whyChooseUs: [
      {
        title: "Our Hometown — Priority Service",
        description:
          "Mundelein is our home base. Local residents receive priority scheduling and the fastest response times in our entire service area.",
        icon: "MapPin",
      },
      {
        title: "30+ Years of Local Experience",
        description:
          "We have cleaned hundreds of Mundelein properties over three decades and understand the unique challenges that local surfaces face year-round.",
        icon: "Award",
      },
      {
        title: "Free On-Site Estimates",
        description:
          "We provide detailed, no-obligation estimates at your Mundelein property. We assess every surface and recommend the right cleaning approach before any work begins.",
        icon: "ClipboardCheck",
      },
      {
        title: "Fully Licensed & Insured",
        description:
          "NR Complete Pressure Washing carries comprehensive liability insurance and full licensing. Your Mundelein property is protected on every job.",
        icon: "ShieldCheck",
      },
    ],
    services: [
      "Residential pressure washing for driveways, sidewalks, and patios",
      "Soft wash house cleaning for all siding types",
      "Concrete cleaning and sealing for lasting protection",
      "Paver cleaning, sanding, and sealing restoration",
      "Stucco cleaning with safe soft wash techniques",
      "Deck and patio cleaning for wood, composite, and stone",
      "Retaining wall cleaning and moss removal",
      "Commercial exterior cleaning for Mundelein businesses",
      "Gutter exterior cleaning and black streak removal",
      "Pre-sale property cleaning for real estate listings",
    ],
    localExpertise: {
      eyebrow: "Mundelein Experts",
      heading: "Local Pressure Washing Expertise in Mundelein, IL",
      subtitle:
        "Deep knowledge of Mundelein neighborhoods and properties that only comes from 30+ years of local service.",
      items: [
        {
          title: "Diamond Lake Area Properties",
          description:
            "Specialized cleaning for homes near Diamond Lake where moisture and shade create heavy algae and mold growth on siding, decks, and walkways.",
          icon: "Waves",
        },
        {
          title: "Route 45 Commercial Properties",
          description:
            "Professional exterior cleaning for Mundelein businesses along Route 45 and the surrounding commercial district to maintain a clean, inviting appearance.",
          icon: "Building",
        },
        {
          title: "Mundelein HOA Communities",
          description:
            "Experienced with the exterior maintenance standards of Mundelein HOA communities, providing consistent quality that meets community guidelines.",
          icon: "Home",
        },
        {
          title: "Illinois Weather Protection",
          description:
            "Our cleaning and sealing services protect Mundelein properties from the freeze-thaw cycles, humidity, and seasonal weather patterns unique to northern Illinois.",
          icon: "Thermometer",
        },
        {
          title: "Mature Tree Neighborhoods",
          description:
            "Mundelein has beautiful mature tree canopies that also mean more shade, moisture, and organic debris on roofs, siding, and hardscapes. We address these challenges effectively.",
          icon: "TreePine",
        },
        {
          title: "Historic Property Care",
          description:
            "Gentle, surface-appropriate cleaning for older Mundelein homes that require extra care to preserve original materials while removing years of buildup.",
          icon: "Landmark",
        },
      ],
    },
    faqs: [
      {
        question: "How quickly can you schedule pressure washing in Mundelein?",
        answer:
          "As our home base, Mundelein residents receive priority scheduling. In most cases, we can provide an estimate within 1 to 2 business days and schedule the work within the same week, depending on the season. Call (941) 280-9119 to check our current availability.",
      },
      {
        question: "What areas of Mundelein do you serve?",
        answer:
          "We serve all neighborhoods and commercial areas throughout Mundelein, IL — from the Diamond Lake area and Cambridge Country to the Route 45 corridor, Hawley Lake, and everywhere in between. No Mundelein address is outside our service area.",
      },
      {
        question: "Do you offer annual pressure washing plans for Mundelein homeowners?",
        answer:
          "Yes. Many of our Mundelein clients schedule annual house washes and driveway cleanings to keep their properties looking great year-round. We offer convenient scheduling and can set up a recurring maintenance plan tailored to your property.",
      },
      {
        question: "Are your cleaning products safe for Mundelein landscaping and lawns?",
        answer:
          "Absolutely. We use biodegradable, eco-friendly cleaning solutions on every Mundelein property. Our team takes additional precautions to protect flower beds, shrubs, and lawns during the cleaning process. Your landscaping is safe with us.",
      },
      {
        question: "Can you pressure wash my Mundelein business property?",
        answer:
          "Yes. We provide commercial pressure washing for Mundelein storefronts, office buildings, parking lots, sidewalks, and more. We can work around your business hours to minimize disruption. Contact us for a free commercial estimate.",
      },
    ],
    ctaHeading: "Ready for Pressure Washing in Mundelein, IL?",
    ctaText:
      "As our hometown, Mundelein residents are our top priority. Call NR Complete Pressure Washing today at (941) 280-9119 for a free estimate on any exterior cleaning service.",
  },

  // ===== 2. LIBERTYVILLE, IL =====
  {
    slug: "libertyville-il",
    name: "Libertyville",
    state: "IL",
    fullName: "Libertyville, IL",
    heroImage: "location-libertyville-hero",
    splitImage: "location-libertyville-split",
    metaDescription:
      "Professional pressure washing in Libertyville, IL. House washing, concrete cleaning, paver restoration by NR Complete Pressure Washing. 30+ years experience. Free estimates.",
    heroSubtitle:
      "NR Complete Pressure Washing delivers professional exterior cleaning services to homeowners and businesses throughout Libertyville, IL. From the charming historic downtown to the beautiful residential neighborhoods, we keep Libertyville properties looking their absolute best.",
    overview: [
      "Libertyville, IL is one of the most desirable communities in Lake County, known for its charming downtown, excellent schools, and well-maintained neighborhoods. NR Complete Pressure Washing has been serving Libertyville homeowners and business owners for over 30 years, providing the professional exterior cleaning services that help maintain the high standards this community is known for. Whether your property is a historic home near downtown Libertyville or a newer development on the east side, our team has the experience and equipment to deliver exceptional results.",
      "The beautiful tree-lined streets and mature landscaping that make Libertyville so attractive also create conditions that lead to algae, mold, and organic buildup on home exteriors, driveways, patios, and hardscapes. The Des Plaines River corridor adds moisture to the area, which accelerates biological growth on outdoor surfaces. Our pressure washing and soft wash services are specifically calibrated for these conditions — we do not just clean the surface, we treat the biological growth at its root so your Libertyville property stays cleaner longer.",
      "NR Complete Pressure Washing offers Libertyville residents the full spectrum of exterior cleaning services at competitive prices. Every service begins with a free on-site estimate where we assess your property, explain our recommended approach, and provide transparent pricing with no hidden fees. We bring over three decades of experience, commercial-grade equipment, and eco-friendly cleaning solutions to every Libertyville job. Call us today at (941) 280-9119 to schedule your free estimate.",
    ],
    whyChooseUs: [
      {
        title: "Trusted by Libertyville Homeowners",
        description:
          "Dozens of Libertyville families rely on us year after year for their exterior cleaning needs. Our reputation in this community is built on consistent quality and reliability.",
        icon: "Heart",
      },
      {
        title: "Historic & Modern Property Expertise",
        description:
          "From Libertyville's historic downtown properties to modern subdivisions, we adjust our techniques and pressure levels to match every building material and age.",
        icon: "Home",
      },
      {
        title: "Eco-Friendly Cleaning Solutions",
        description:
          "We use biodegradable products that are safe for Libertyville's beautiful landscaping, the Des Plaines River watershed, and the local environment.",
        icon: "Leaf",
      },
      {
        title: "Competitive Libertyville Pricing",
        description:
          "Premium results at fair prices. We provide detailed line-item estimates so you know exactly what you are paying for before we start any work.",
        icon: "DollarSign",
      },
    ],
    services: [
      "House washing and soft wash for Libertyville homes",
      "Driveway and sidewalk pressure washing",
      "Patio and pool deck cleaning",
      "Paver cleaning, sanding, and sealing",
      "Concrete cleaning and protective sealing",
      "Stucco and brick exterior cleaning",
      "Deck cleaning for wood and composite materials",
      "Retaining wall cleaning and restoration",
      "Commercial storefront and sidewalk cleaning",
      "Pre-listing property cleaning for Libertyville real estate",
    ],
    localExpertise: {
      eyebrow: "Libertyville Specialists",
      heading: "Pressure Washing Expertise for Libertyville, IL Properties",
      subtitle:
        "Local knowledge and proven techniques tailored to Libertyville's unique neighborhoods and property styles.",
      items: [
        {
          title: "Downtown Libertyville Properties",
          description:
            "Expert cleaning for the historic commercial and residential properties in downtown Libertyville, preserving character while removing decades of buildup.",
          icon: "Building",
        },
        {
          title: "Des Plaines River Area Homes",
          description:
            "Properties near the Des Plaines River face elevated moisture levels. Our treatments are specifically formulated to combat the heavy mold and algae growth common in these areas.",
          icon: "Waves",
        },
        {
          title: "Libertyville School District Homes",
          description:
            "Maintaining curb appeal in Libertyville's sought-after school district neighborhoods helps protect your property value. Regular exterior cleaning is one of the smartest investments you can make.",
          icon: "GraduationCap",
        },
        {
          title: "Seasonal Maintenance Programs",
          description:
            "We offer annual cleaning programs for Libertyville homeowners who want consistent, year-round exterior maintenance without the hassle of scheduling each time.",
          icon: "CalendarCheck",
        },
      ],
    },
    faqs: [
      {
        question: "How often should I have my Libertyville home pressure washed?",
        answer:
          "We recommend annual house washing for most Libertyville homes. Properties with heavy tree cover, north-facing surfaces, or proximity to the Des Plaines River may benefit from cleaning every 8 to 12 months. We can assess your specific situation during a free estimate.",
      },
      {
        question: "Do you pressure wash commercial properties in downtown Libertyville?",
        answer:
          "Yes. We provide commercial pressure washing for Libertyville businesses including storefronts, sidewalks, parking areas, and building exteriors. We can work around your business hours and schedule cleaning during off-peak times.",
      },
      {
        question: "Is soft washing safe for older Libertyville homes?",
        answer:
          "Absolutely. Our soft wash method uses low pressure and specialized cleaning solutions that are gentle enough for older building materials including wood siding, historic brick, and delicate trim. It is actually the safest and most effective cleaning method for older properties.",
      },
      {
        question: "What is the cost of pressure washing a driveway in Libertyville?",
        answer:
          "Driveway cleaning costs depend on the size, condition, and material of your driveway. We provide free on-site estimates for all Libertyville properties. Call (941) 280-9119 to schedule yours — there is no obligation.",
      },
      {
        question: "Do you serve all neighborhoods in Libertyville, IL?",
        answer:
          "Yes. We serve every neighborhood in Libertyville from downtown to the outer subdivisions including areas near Adler Park, the Country Club, Butler Lake, and all surrounding residential communities.",
      },
    ],
    ctaHeading: "Get Professional Pressure Washing in Libertyville, IL",
    ctaText:
      "Libertyville homeowners trust NR Complete Pressure Washing for quality exterior cleaning. Call (941) 280-9119 today for your free estimate.",
  },

  // ===== 3. VERNON HILLS, IL =====
  {
    slug: "vernon-hills-il",
    name: "Vernon Hills",
    state: "IL",
    fullName: "Vernon Hills, IL",
    heroImage: "location-vernon-hills-hero",
    splitImage: "location-vernon-hills-split",
    metaDescription:
      "Professional pressure washing in Vernon Hills, IL. Expert house washing, concrete cleaning, paver restoration. NR Complete Pressure Washing — 30+ years experience. Free estimates.",
    heroSubtitle:
      "NR Complete Pressure Washing provides expert exterior cleaning services throughout Vernon Hills, IL. From the upscale residential developments to the bustling commercial centers, we deliver the professional pressure washing results that Vernon Hills property owners expect.",
    overview: [
      "Vernon Hills, IL is a thriving suburban community known for its excellent shopping, top-rated schools, and beautifully maintained residential neighborhoods. NR Complete Pressure Washing has served Vernon Hills homeowners and businesses for over 30 years, and we understand the high standards this community demands. The modern homes, well-planned subdivisions, and commercial developments that define Vernon Hills require professional exterior maintenance to retain their appearance and property values.",
      "The suburban landscape of Vernon Hills features a mix of newer construction, established neighborhoods, and HOA-managed communities — each with different exterior cleaning needs. Newer vinyl and fiber cement siding benefits from our gentle soft wash technique, while concrete driveways and paver patios in established neighborhoods often need deep cleaning to remove years of embedded dirt, oil stains, and organic growth. Our team adjusts our approach for every surface type and property age, delivering customized results across Vernon Hills.",
      "Whether you own a single-family home near Hawthorn Mall, manage a commercial property along Milwaukee Avenue, or maintain an HOA community in Vernon Hills, NR Complete Pressure Washing has the experience and equipment to keep your exterior surfaces in top condition. We offer free estimates, competitive pricing, and the kind of reliable, professional service that has made us a trusted name across Lake County for over three decades. Call (941) 280-9119 today.",
    ],
    whyChooseUs: [
      {
        title: "HOA-Compliant Service",
        description:
          "Many Vernon Hills neighborhoods have HOA exterior maintenance standards. Our work consistently meets or exceeds these requirements, helping you stay compliant.",
        icon: "ClipboardCheck",
      },
      {
        title: "Modern & Established Home Expertise",
        description:
          "Vernon Hills has both new construction and mature neighborhoods. We calibrate our approach for every material and building age for safe, effective cleaning.",
        icon: "Home",
      },
      {
        title: "Commercial Property Specialists",
        description:
          "We serve Vernon Hills commercial properties along Milwaukee Avenue and Route 60 with professional exterior cleaning that protects your business image.",
        icon: "Building",
      },
      {
        title: "Consistent, Reliable Results",
        description:
          "Vernon Hills property owners count on us for dependable scheduling, on-time arrivals, and the consistent quality that comes from 30+ years of experience.",
        icon: "CheckCircle",
      },
    ],
    services: [
      "Soft wash house cleaning for Vernon Hills homes",
      "Driveway and garage floor pressure washing",
      "Paver patio cleaning, sanding, and sealing",
      "Concrete sidewalk and walkway cleaning",
      "Deck and porch cleaning for all materials",
      "Retaining wall and landscape wall cleaning",
      "Stucco and brick exterior soft washing",
      "Concrete sealing for freeze-thaw protection",
      "Commercial building and parking lot cleaning",
      "HOA common area exterior maintenance",
    ],
    localExpertise: {
      eyebrow: "Vernon Hills Specialists",
      heading: "Pressure Washing Expertise for Vernon Hills, IL Properties",
      subtitle:
        "Tailored exterior cleaning services for Vernon Hills residential communities, commercial centers, and mixed-use developments.",
      items: [
        {
          title: "Vernon Hills Subdivisions",
          description:
            "Expert cleaning for the planned subdivisions and townhome communities throughout Vernon Hills, maintaining the consistent appearance residents expect.",
          icon: "Home",
        },
        {
          title: "Milwaukee Avenue Businesses",
          description:
            "Professional commercial cleaning for Vernon Hills businesses along the Milwaukee Avenue and Hawthorn Mall corridor to keep storefronts and walkways spotless.",
          icon: "Building",
        },
        {
          title: "New Construction Maintenance",
          description:
            "Vernon Hills has seen significant development. We help new homeowners maintain the pristine condition of their property from day one with scheduled cleaning programs.",
          icon: "Sparkles",
        },
        {
          title: "Townhome & Condo Exteriors",
          description:
            "Specialized cleaning for multi-unit properties in Vernon Hills including townhomes, condominiums, and attached homes with shared exterior areas.",
          icon: "LayoutGrid",
        },
      ],
    },
    faqs: [
      {
        question: "Do you work with Vernon Hills HOAs for exterior cleaning?",
        answer:
          "Yes. We work with numerous HOA management companies and boards throughout Vernon Hills. We can provide competitive bids for community-wide cleaning projects and schedule work to minimize disruption to residents.",
      },
      {
        question: "Can you clean the exterior of my Vernon Hills townhome?",
        answer:
          "Absolutely. We regularly clean townhome exteriors in Vernon Hills communities. Our soft wash method is safe for all siding types and we coordinate with your HOA or property manager as needed.",
      },
      {
        question: "How do you protect landscaping during pressure washing in Vernon Hills?",
        answer:
          "We pre-wet all landscaping before cleaning and use biodegradable solutions. After cleaning, we rinse all adjacent plants and garden areas. In over 30 years of service, we have never damaged a client's landscaping.",
      },
      {
        question: "What is the best time of year for pressure washing in Vernon Hills?",
        answer:
          "Spring and fall are the most popular times, but we provide pressure washing throughout the season from April through November. Spring cleaning removes winter grime, while fall cleaning prepares surfaces for winter. We recommend scheduling early to secure your preferred date.",
      },
      {
        question: "Do you offer free estimates for Vernon Hills properties?",
        answer:
          "Yes. We provide free, no-obligation on-site estimates for all Vernon Hills residential and commercial properties. Call (941) 280-9119 or fill out our online form to schedule yours.",
      },
    ],
    ctaHeading: "Schedule Pressure Washing in Vernon Hills, IL",
    ctaText:
      "Vernon Hills property owners trust NR Complete Pressure Washing for professional exterior cleaning. Call (941) 280-9119 for your free estimate today.",
  },

  // ===== 4. LAKE COUNTY, IL =====
  {
    slug: "lake-county-il",
    name: "Lake County",
    state: "IL",
    fullName: "Lake County, IL",
    heroImage: "location-lake-county-hero",
    splitImage: "location-lake-county-split",
    metaDescription:
      "Lake County's trusted pressure washing provider. NR Complete Pressure Washing serves all of Lake County, IL with professional exterior cleaning. 30+ years experience. Free estimates.",
    heroSubtitle:
      "NR Complete Pressure Washing is Lake County's most experienced pressure washing provider with over 30 years of service. We deliver professional exterior cleaning to residential and commercial properties throughout every community in Lake County, IL.",
    overview: [
      "Lake County, IL is a diverse and expansive region stretching from the shores of Lake Michigan to the rolling hills of the western suburbs, encompassing dozens of communities and hundreds of thousands of properties. NR Complete Pressure Washing has been the trusted exterior cleaning provider across Lake County for more than three decades, serving homeowners, property managers, and business owners from Waukegan to Barrington, Mundelein to Highland Park, and everywhere in between.",
      "The varied geography and climate of Lake County create unique challenges for exterior surfaces. Properties near the Chain O' Lakes and other waterways face elevated moisture and aggressive biological growth. Homes in wooded areas contend with shade-driven mold and moss. Commercial properties along major corridors like Route 21, Route 45, and Interstate 94 accumulate road grime, exhaust deposits, and salt residue. Our 30+ years of local experience mean we have encountered and resolved every type of exterior cleaning challenge Lake County can present.",
      "No matter where your property is located within Lake County, NR Complete Pressure Washing delivers the same high standard of service: commercial-grade equipment, eco-friendly cleaning solutions, surface-specific techniques, and a satisfaction guarantee backed by three decades of proven results. We offer free estimates throughout Lake County with no travel charges or hidden fees. Call (941) 280-9119 today to schedule your free assessment.",
    ],
    whyChooseUs: [
      {
        title: "County-Wide Coverage",
        description:
          "We serve every community in Lake County, IL with no travel charges or distance limitations. From the lakefront to the western suburbs, we are there.",
        icon: "Map",
      },
      {
        title: "30+ Years Serving Lake County",
        description:
          "Over three decades of experience cleaning Lake County properties means we have seen and solved every exterior cleaning challenge this region presents.",
        icon: "Award",
      },
      {
        title: "Residential & Commercial",
        description:
          "From single-family homes to large commercial complexes, we have the equipment, manpower, and expertise to handle Lake County projects of any size.",
        icon: "Building",
      },
      {
        title: "Climate-Adapted Techniques",
        description:
          "Our cleaning methods are specifically adapted for northern Illinois weather patterns including freeze-thaw cycles, high humidity summers, and salt-heavy winters.",
        icon: "Thermometer",
      },
    ],
    services: [
      "Residential pressure washing throughout Lake County",
      "Commercial building and property cleaning",
      "Soft wash house cleaning for all siding materials",
      "Driveway, sidewalk, and parking lot cleaning",
      "Paver restoration including cleaning, sanding, and sealing",
      "Concrete cleaning and protective sealing",
      "Deck, patio, and outdoor living area cleaning",
      "Retaining wall and hardscape cleaning",
      "Stucco and masonry exterior cleaning",
      "Multi-property and HOA maintenance programs",
    ],
    localExpertise: {
      eyebrow: "Lake County Experts",
      heading: "Pressure Washing Across All of Lake County, IL",
      subtitle:
        "Comprehensive exterior cleaning services for every community, neighborhood, and commercial area in Lake County.",
      items: [
        {
          title: "Lakefront & Waterfront Properties",
          description:
            "Specialized cleaning for Lake County homes near Lake Michigan, the Chain O' Lakes, and other waterways where moisture accelerates biological growth on exterior surfaces.",
          icon: "Waves",
        },
        {
          title: "Suburban Residential Communities",
          description:
            "Expert cleaning for the diverse residential neighborhoods across Lake County, from starter homes to luxury estates, with techniques matched to every property type.",
          icon: "Home",
        },
        {
          title: "Commercial & Industrial Properties",
          description:
            "Professional exterior cleaning for Lake County businesses, office parks, retail centers, and industrial facilities along major transportation corridors.",
          icon: "Building",
        },
        {
          title: "Property Management Services",
          description:
            "Coordinated cleaning programs for Lake County property managers overseeing multiple residential or commercial properties throughout the region.",
          icon: "ClipboardCheck",
        },
        {
          title: "Municipal & Public Properties",
          description:
            "Experienced with cleaning municipal buildings, public walkways, parking structures, and community facilities throughout Lake County communities.",
          icon: "Landmark",
        },
        {
          title: "Seasonal Deep Cleaning",
          description:
            "Spring and fall deep cleaning programs designed for Lake County's four-season climate, addressing winter salt damage and summer biological growth.",
          icon: "CalendarCheck",
        },
      ],
    },
    faqs: [
      {
        question: "Do you charge extra to travel to different parts of Lake County?",
        answer:
          "No. We provide free estimates throughout Lake County with no travel charges or distance surcharges. Whether your property is in Mundelein, Waukegan, Highland Park, or anywhere else in the county, the estimate is free.",
      },
      {
        question: "Can you handle large commercial properties in Lake County?",
        answer:
          "Yes. We have the commercial-grade equipment and crew capacity to handle large-scale projects including multi-building complexes, parking structures, and large commercial properties anywhere in Lake County.",
      },
      {
        question: "Do you offer multi-property discounts in Lake County?",
        answer:
          "Yes. Property managers and homeowners with multiple Lake County properties can take advantage of our multi-property pricing. Contact us to discuss a custom maintenance plan for your portfolio.",
      },
      {
        question: "What communities in Lake County do you serve?",
        answer:
          "We serve every community in Lake County including Mundelein, Libertyville, Vernon Hills, Grayslake, Wauconda, Lake Zurich, Buffalo Grove, Long Grove, Highland Park, Deerfield, Lincolnshire, Lake Forest, Waukegan, North Chicago, and all surrounding areas.",
      },
      {
        question: "How do I schedule pressure washing for my Lake County property?",
        answer:
          "Simply call (941) 280-9119 or fill out our online contact form. We will schedule a free on-site estimate at your Lake County property, provide a detailed quote, and book your cleaning at a time that works for you.",
      },
    ],
    ctaHeading: "Lake County's Trusted Pressure Washing Provider",
    ctaText:
      "NR Complete Pressure Washing has served Lake County, IL for over 30 years. Call (941) 280-9119 for a free estimate anywhere in the county.",
  },

  // ===== 5. GRAYSLAKE, IL =====
  {
    slug: "grayslake-il",
    name: "Grayslake",
    state: "IL",
    fullName: "Grayslake, IL",
    heroImage: "location-grayslake-hero",
    splitImage: "location-grayslake-split",
    metaDescription:
      "Professional pressure washing in Grayslake, IL. House washing, concrete cleaning, paver restoration by NR Complete Pressure Washing. 30+ years experience. Free estimates.",
    heroSubtitle:
      "NR Complete Pressure Washing provides professional exterior cleaning throughout Grayslake, IL. From lakeside properties near Grayslake to the residential neighborhoods and local businesses, we deliver pressure washing results that exceed expectations.",
    overview: [
      "Grayslake, IL is a welcoming community known for its small-town character, excellent parks, and family-friendly neighborhoods. NR Complete Pressure Washing has been serving Grayslake residents and business owners for over 30 years, helping to maintain the clean, well-kept appearance that defines this Lake County community. Whether you own a home near the lake, a property along Center Street, or a business in the commercial district, our experienced team delivers professional exterior cleaning tailored to your specific needs.",
      "The natural beauty surrounding Grayslake — including the lake itself, nearby wetlands, and established tree canopies — contributes to higher moisture levels that can accelerate the growth of algae, mold, and mildew on home exteriors, driveways, patios, and hardscape features. Left untreated, this biological growth not only looks unsightly but can cause long-term damage to surfaces. Our pressure washing and soft wash services address these conditions head-on, killing organic growth at the root and leaving surfaces cleaner for longer than simple pressure-only methods.",
      "At NR Complete Pressure Washing, we believe every Grayslake property deserves professional-quality exterior cleaning at a fair price. That is why we offer free on-site estimates, transparent pricing with no hidden fees, and a satisfaction guarantee on every job. Our crew arrives on time, works efficiently, and treats your property with the same care and respect we would give our own. Call (941) 280-9119 today to schedule your free Grayslake pressure washing estimate.",
    ],
    whyChooseUs: [
      {
        title: "Lakeside Property Expertise",
        description:
          "Properties near Grayslake and surrounding wetlands face elevated moisture levels. We use techniques specifically designed to combat heavy biological growth in these conditions.",
        icon: "Waves",
      },
      {
        title: "Small-Town Service, Professional Results",
        description:
          "We treat every Grayslake customer like a neighbor because that is exactly what you are. Personal attention combined with 30+ years of professional experience.",
        icon: "Heart",
      },
      {
        title: "Flexible Scheduling",
        description:
          "We work around your schedule with morning, afternoon, and Saturday availability. Same-day service is available for Grayslake properties when our schedule allows.",
        icon: "Clock",
      },
      {
        title: "Complete Property Cleaning",
        description:
          "From your roof line to your driveway, we offer every exterior cleaning service your Grayslake property needs — all from one trusted provider.",
        icon: "Sparkles",
      },
    ],
    services: [
      "House washing with safe soft wash technique",
      "Driveway and sidewalk pressure washing",
      "Concrete patio and pool deck cleaning",
      "Paver cleaning and complete restoration",
      "Concrete sealing for weather protection",
      "Wood and composite deck cleaning",
      "Retaining wall and landscape feature cleaning",
      "Stucco and brick exterior soft washing",
      "Fence cleaning for wood and vinyl",
      "Commercial property exterior cleaning",
    ],
    localExpertise: {
      eyebrow: "Grayslake Specialists",
      heading: "Pressure Washing Expertise for Grayslake, IL Properties",
      subtitle:
        "Tailored cleaning solutions for Grayslake's lakeside homes, established neighborhoods, and local businesses.",
      items: [
        {
          title: "Lakeside & Wetland Properties",
          description:
            "Targeted treatments for Grayslake homes near the lake and wetland areas where constant moisture creates persistent algae and mold growth on all exterior surfaces.",
          icon: "Waves",
        },
        {
          title: "Established Neighborhood Homes",
          description:
            "Deep cleaning for the mature, tree-lined neighborhoods of Grayslake where shade and organic debris create heavy buildup on siding, roofs, and hardscapes.",
          icon: "TreePine",
        },
        {
          title: "Center Street & Commercial Areas",
          description:
            "Professional cleaning for Grayslake's commercial corridor including storefronts, restaurant patios, and public walkways to maintain a welcoming downtown appearance.",
          icon: "Building",
        },
        {
          title: "College of Lake County Area",
          description:
            "Exterior cleaning services for residential and commercial properties near the College of Lake County campus and surrounding Grayslake neighborhoods.",
          icon: "GraduationCap",
        },
      ],
    },
    faqs: [
      {
        question: "Do moisture levels near Grayslake make pressure washing more necessary?",
        answer:
          "Yes. Properties near the lake and wetland areas in Grayslake tend to develop algae, mold, and mildew faster than those in drier locations. We recommend annual cleaning for most Grayslake properties, with more frequent service for homes closest to water sources.",
      },
      {
        question: "Can you clean my Grayslake home before I sell it?",
        answer:
          "Absolutely. Pre-sale pressure washing is one of the most cost-effective ways to boost curb appeal and first impressions for Grayslake home listings. We offer quick turnaround for real estate clients and can coordinate with your agent's timeline.",
      },
      {
        question: "How long does a typical house wash take in Grayslake?",
        answer:
          "Most Grayslake homes can be soft washed in 2 to 4 hours depending on size and condition. Driveways and patios typically add 1 to 2 hours. We provide a time estimate during your free consultation so you know what to expect.",
      },
      {
        question: "Do you clean fences in Grayslake?",
        answer:
          "Yes. We clean wood, vinyl, and metal fences throughout Grayslake. Our methods are adjusted for each fence material to deliver thorough cleaning without damage. Fence cleaning can be added to any house wash or scheduled as a standalone service.",
      },
    ],
    ctaHeading: "Ready for Pressure Washing in Grayslake, IL?",
    ctaText:
      "Grayslake homeowners trust NR Complete Pressure Washing for quality exterior cleaning. Call (941) 280-9119 for your free estimate today.",
  },

  // ===== 6. WAUCONDA, IL =====
  {
    slug: "wauconda-il",
    name: "Wauconda",
    state: "IL",
    fullName: "Wauconda, IL",
    heroImage: "location-wauconda-hero",
    splitImage: "location-wauconda-split",
    metaDescription:
      "Professional pressure washing in Wauconda, IL. House washing, concrete cleaning, paver and hardscape restoration. NR Complete Pressure Washing — 30+ years experience. Free estimates.",
    heroSubtitle:
      "NR Complete Pressure Washing serves Wauconda, IL with professional pressure washing, house washing, concrete cleaning, and hardscape restoration services. Our 30+ years of experience and commitment to quality make us Wauconda's trusted exterior cleaning provider.",
    overview: [
      "Wauconda, IL offers a unique blend of suburban convenience and rural character, with larger residential lots, established neighborhoods, and a charming downtown centered around Bangs Lake. NR Complete Pressure Washing has been providing professional exterior cleaning services to Wauconda homeowners and businesses for over 30 years. We understand the specific needs of Wauconda properties — from the lakefront homes along Bangs Lake to the spacious lots along Routes 12 and 176, every property in this community benefits from professional maintenance.",
      "The larger lot sizes common in Wauconda mean more exterior surface area to maintain. Extended driveways, expansive patios, multi-level decks, and lengthy retaining walls are all features we see regularly on Wauconda properties. Combined with the moisture from Bangs Lake and surrounding natural areas, these surfaces are particularly susceptible to algae growth, moss buildup, and weathering. Our commercial-grade equipment handles properties of any size efficiently, and our experienced crew knows exactly how to approach the variety of surfaces found throughout Wauconda.",
      "NR Complete Pressure Washing provides Wauconda residents with a complete exterior cleaning solution. We handle everything from delicate soft wash house cleaning to heavy-duty concrete restoration, paver maintenance, deck cleaning, and retaining wall treatment. Every job begins with a free on-site estimate where we walk the property with you, identify areas of concern, and provide a transparent quote. Our eco-friendly cleaning solutions are safe for Wauconda's natural environment and lakefront properties. Call (941) 280-9119 to schedule your free estimate.",
    ],
    whyChooseUs: [
      {
        title: "Large Property Capability",
        description:
          "Wauconda's spacious lots mean more surface area to clean. Our commercial equipment and experienced crew handle large properties efficiently without cutting corners.",
        icon: "Maximize",
      },
      {
        title: "Lakefront Property Expertise",
        description:
          "Homes near Bangs Lake face accelerated biological growth from moisture exposure. Our treatments target and eliminate this growth at the root for longer-lasting results.",
        icon: "Waves",
      },
      {
        title: "Rural & Suburban Versatility",
        description:
          "Wauconda's mix of property types — from rural homes to suburban developments — requires versatile expertise. We adapt our approach to match every property.",
        icon: "Settings",
      },
      {
        title: "Satisfaction Guaranteed",
        description:
          "We do not consider a job complete until you are completely satisfied. Our final walkthrough ensures every surface meets your expectations before we leave your Wauconda property.",
        icon: "Star",
      },
    ],
    services: [
      "Soft wash house cleaning for all exterior materials",
      "Extended driveway and parking area cleaning",
      "Large patio and outdoor living area restoration",
      "Paver cleaning, sanding, and sealing",
      "Concrete cleaning and protective sealing",
      "Multi-level deck and porch cleaning",
      "Retaining wall and landscape wall cleaning",
      "Fence cleaning for all materials and heights",
      "Barn and outbuilding exterior cleaning",
      "Commercial property maintenance",
    ],
    localExpertise: {
      eyebrow: "Wauconda Specialists",
      heading: "Pressure Washing Expertise for Wauconda, IL Properties",
      subtitle:
        "Specialized cleaning solutions for Wauconda's lakefront homes, large-lot properties, and local businesses.",
      items: [
        {
          title: "Bangs Lake Properties",
          description:
            "Targeted cleaning for homes along Bangs Lake where constant moisture exposure leads to accelerated algae, mold, and mildew growth on all exterior surfaces.",
          icon: "Waves",
        },
        {
          title: "Large Lot Residential Properties",
          description:
            "Efficient, thorough cleaning for Wauconda's spacious residential properties including extended driveways, large patios, and multi-structure estates.",
          icon: "Home",
        },
        {
          title: "Downtown Wauconda",
          description:
            "Professional cleaning for Wauconda's downtown businesses and historic properties along Main Street and the surrounding commercial area.",
          icon: "Building",
        },
        {
          title: "Rural Property Cleaning",
          description:
            "Exterior cleaning for larger rural Wauconda properties including barns, outbuildings, equipment pads, and extended concrete or gravel areas.",
          icon: "Fence",
        },
      ],
    },
    faqs: [
      {
        question: "Can you handle the larger properties typical in Wauconda?",
        answer:
          "Absolutely. Our commercial-grade equipment is designed for high-volume work. We regularly clean properties with 100+ foot driveways, large multi-zone patios, and extensive hardscape features throughout Wauconda. We handle it all efficiently in a single visit.",
      },
      {
        question: "Do you clean homes near Bangs Lake in Wauconda?",
        answer:
          "Yes. Lakefront properties are one of our specialties. We use eco-friendly products that are safe for the Bangs Lake environment and apply targeted treatments for the heavy biological growth common on waterfront homes.",
      },
      {
        question: "Can you pressure wash my barn or outbuilding in Wauconda?",
        answer:
          "Yes. We clean all types of structures including barns, sheds, garages, and outbuildings. We adjust our pressure and technique based on the building material — whether it is wood, metal, vinyl, or concrete block.",
      },
      {
        question: "How do I prepare my Wauconda property for pressure washing?",
        answer:
          "Just move any loose items away from the areas being cleaned, close all windows and doors, and ensure we have access to an outdoor water spigot. We take care of everything else including protecting your landscaping and cleaning up when we are done.",
      },
    ],
    ctaHeading: "Schedule Pressure Washing in Wauconda, IL",
    ctaText:
      "Wauconda property owners trust NR Complete Pressure Washing for professional exterior cleaning. Call (941) 280-9119 for a free estimate.",
  },

  // ===== 7. ARLINGTON HEIGHTS, IL =====
  {
    slug: "arlington-heights-il",
    name: "Arlington Heights",
    state: "IL",
    fullName: "Arlington Heights, IL",
    heroImage: "location-arlington-heights-hero",
    splitImage: "location-arlington-heights-split",
    metaDescription:
      "Professional pressure washing in Arlington Heights, IL. House washing, concrete cleaning, paver restoration. NR Complete Pressure Washing — 30+ years experience. Free estimates.",
    heroSubtitle:
      "NR Complete Pressure Washing delivers professional exterior cleaning services to homeowners and businesses throughout Arlington Heights, IL. With 30+ years of experience and a commitment to quality, we keep Arlington Heights properties looking their best.",
    overview: [
      "Arlington Heights, IL is one of the largest and most established communities in the greater Chicago suburbs, home to tens of thousands of residential properties, a vibrant downtown district, and thriving commercial corridors. NR Complete Pressure Washing brings over 30 years of professional exterior cleaning experience to Arlington Heights, serving homeowners, business owners, and property managers with the full range of pressure washing and soft wash services that keep this distinguished community looking its best.",
      "The well-established neighborhoods of Arlington Heights feature a diverse mix of property styles and ages — from mid-century ranch homes with original brick and concrete to newer construction with modern siding materials. Each requires a different cleaning approach, and our three decades of experience mean we have worked with every material and surface condition found throughout Arlington Heights. Our team knows exactly how much pressure to use, which cleaning solutions to apply, and how to deliver results without risking damage to your property.",
      "Beyond residential service, NR Complete Pressure Washing is a trusted commercial cleaning provider for Arlington Heights businesses. The downtown district, Campbell Street corridor, and commercial areas along Arlington Heights Road and Rand Road all require regular exterior maintenance to maintain a professional, welcoming appearance. We work with business owners and property managers to provide scheduled cleaning that fits their operational needs. Call (941) 280-9119 for your free Arlington Heights estimate.",
    ],
    whyChooseUs: [
      {
        title: "Established Neighborhood Expertise",
        description:
          "Arlington Heights' mature neighborhoods require specialized knowledge. We have cleaned every type of exterior surface found in this community over 30+ years of service.",
        icon: "Home",
      },
      {
        title: "Downtown & Commercial Cleaning",
        description:
          "We serve Arlington Heights businesses from the downtown district to the outer commercial corridors with professional cleaning that protects your brand image.",
        icon: "Building",
      },
      {
        title: "All Material Types",
        description:
          "Brick, vinyl, stucco, wood, fiber cement, concrete, pavers, natural stone — whatever your Arlington Heights property is made of, we know how to clean it safely and effectively.",
        icon: "Layers",
      },
      {
        title: "On-Time, Efficient Service",
        description:
          "We respect your time and your property. Our Arlington Heights crew arrives on schedule, works efficiently, and leaves your property spotless.",
        icon: "Clock",
      },
    ],
    services: [
      "House washing for all siding types and ages",
      "Driveway and sidewalk pressure washing",
      "Brick and masonry exterior cleaning",
      "Concrete cleaning and sealing",
      "Paver restoration with sanding and sealing",
      "Deck and patio cleaning for all materials",
      "Retaining wall and landscape wall cleaning",
      "Stucco and EIFS soft washing",
      "Commercial storefront and building cleaning",
      "Restaurant patio and outdoor dining area cleaning",
    ],
    localExpertise: {
      eyebrow: "Arlington Heights Specialists",
      heading: "Pressure Washing Expertise for Arlington Heights, IL",
      subtitle:
        "Professional cleaning for Arlington Heights' established homes, bustling commercial areas, and growing community.",
      items: [
        {
          title: "Downtown Arlington Heights",
          description:
            "Expert cleaning for the restaurants, shops, and businesses in downtown Arlington Heights, maintaining the vibrant, welcoming atmosphere the district is known for.",
          icon: "Building",
        },
        {
          title: "Mid-Century Home Restoration",
          description:
            "Specialized cleaning techniques for Arlington Heights' many mid-century homes with original brick, concrete, and wood surfaces that need careful, experienced treatment.",
          icon: "Home",
        },
        {
          title: "Arlington Park Area",
          description:
            "Comprehensive exterior cleaning for residential and commercial properties in the Arlington Park area and surrounding neighborhoods.",
          icon: "MapPin",
        },
        {
          title: "Multi-Family Property Cleaning",
          description:
            "Efficient exterior cleaning for Arlington Heights apartment complexes, condominium buildings, and multi-family residential properties.",
          icon: "LayoutGrid",
        },
      ],
    },
    faqs: [
      {
        question: "Do you serve all of Arlington Heights, IL?",
        answer:
          "Yes. We serve every neighborhood and commercial area throughout Arlington Heights — from the northwest residential areas to downtown, the Arlington Park district, and all surrounding communities. No address in Arlington Heights is outside our coverage.",
      },
      {
        question: "Can you clean older brick homes in Arlington Heights?",
        answer:
          "Absolutely. We have extensive experience cleaning older brick exteriors found throughout Arlington Heights. We use gentle pressure and specialized solutions that remove decades of grime without damaging mortar joints or brick surfaces.",
      },
      {
        question: "Do you offer commercial pressure washing in Arlington Heights?",
        answer:
          "Yes. We provide professional commercial cleaning for Arlington Heights businesses including building exteriors, sidewalks, parking areas, dumpster pads, and outdoor dining spaces. We can work around your business hours to minimize disruption.",
      },
      {
        question: "How much does pressure washing cost in Arlington Heights?",
        answer:
          "Pricing depends on the size of the area, condition of surfaces, and specific services needed. We offer free on-site estimates for all Arlington Heights properties with transparent, detailed pricing. Call (941) 280-9119 to schedule yours.",
      },
      {
        question: "Is pressure washing a good investment for my Arlington Heights home?",
        answer:
          "Yes. Regular pressure washing is one of the highest-return home maintenance investments. It protects your surfaces, prevents costly repairs from moisture damage, and can increase curb appeal and property value — particularly important in the competitive Arlington Heights real estate market.",
      },
    ],
    ctaHeading: "Get Pressure Washing in Arlington Heights, IL",
    ctaText:
      "Arlington Heights homeowners and businesses trust NR Complete Pressure Washing for professional exterior cleaning. Call (941) 280-9119 for your free estimate.",
  },

  // ===== 8. LAKE ZURICH, IL =====
  {
    slug: "lake-zurich-il",
    name: "Lake Zurich",
    state: "IL",
    fullName: "Lake Zurich, IL",
    heroImage: "location-lake-zurich-hero",
    splitImage: "location-lake-zurich-split",
    metaDescription:
      "Professional pressure washing in Lake Zurich, IL. Expert house washing, concrete cleaning, paver restoration. NR Complete Pressure Washing — 30+ years experience. Free estimates.",
    heroSubtitle:
      "NR Complete Pressure Washing provides premium exterior cleaning services throughout Lake Zurich, IL. From the beautiful lakefront homes to the well-maintained residential communities, we deliver the exceptional pressure washing results that Lake Zurich homeowners expect.",
    overview: [
      "Lake Zurich, IL is a picturesque community centered around its namesake lake, known for upscale homes, excellent schools, and a strong sense of community pride. NR Complete Pressure Washing has been serving Lake Zurich homeowners and businesses for over 30 years, providing the professional exterior cleaning services that help maintain the beautiful appearance this community is known for. Whether your property overlooks the lake, sits along the Ela Road corridor, or is nestled in one of Lake Zurich's many well-planned subdivisions, our team delivers results that exceed expectations.",
      "The lake environment and wooded areas surrounding Lake Zurich create ideal conditions for algae, mold, and mildew growth on home exteriors, driveways, patios, and hardscapes. Lakefront and near-lake properties are especially susceptible to accelerated biological growth due to elevated humidity and moisture. NR Complete Pressure Washing uses targeted soft wash treatments and professional-grade solutions that kill organic growth at its source — delivering results that last significantly longer than simple surface cleaning.",
      "Lake Zurich homeowners expect premium quality, and that is exactly what NR Complete Pressure Washing delivers. Every job begins with a free on-site assessment where we evaluate your property, discuss your concerns, and provide a detailed, transparent estimate. We use commercial-grade equipment, eco-friendly cleaning solutions, and 30+ years of expertise to deliver flawless results on every surface. Call (941) 280-9119 to schedule your free Lake Zurich pressure washing estimate.",
    ],
    whyChooseUs: [
      {
        title: "Lakefront Property Specialists",
        description:
          "Lake Zurich's lakefront and near-lake homes face unique moisture challenges. Our targeted treatments address heavy biological growth for lasting, beautiful results.",
        icon: "Waves",
      },
      {
        title: "Premium Quality Standards",
        description:
          "We match the high standards Lake Zurich homeowners expect with meticulous attention to detail, premium equipment, and professional-grade cleaning solutions.",
        icon: "Star",
      },
      {
        title: "Property Value Protection",
        description:
          "Regular professional cleaning protects your Lake Zurich property investment by preventing surface damage and maintaining the curb appeal that drives home values.",
        icon: "TrendingUp",
      },
      {
        title: "Eco-Friendly Lake-Safe Products",
        description:
          "Our biodegradable cleaning solutions are safe for Lake Zurich's watershed, landscaping, and the natural environment surrounding your property.",
        icon: "Leaf",
      },
    ],
    services: [
      "Lakefront home soft wash cleaning",
      "Driveway and motor court pressure washing",
      "Paver patio and walkway restoration",
      "Concrete cleaning and premium sealing",
      "Wood and composite deck cleaning",
      "Retaining wall and stone feature cleaning",
      "Stucco and exterior trim cleaning",
      "Pool deck and outdoor living area cleaning",
      "Fence and gate cleaning",
      "Pre-sale property cleaning for maximum curb appeal",
    ],
    localExpertise: {
      eyebrow: "Lake Zurich Specialists",
      heading: "Pressure Washing Expertise for Lake Zurich, IL Properties",
      subtitle:
        "Premium exterior cleaning tailored to Lake Zurich's lakefront homes, upscale neighborhoods, and natural environment.",
      items: [
        {
          title: "Lakefront Home Cleaning",
          description:
            "Specialized soft wash and pressure washing for Lake Zurich's lakefront and near-lake homes where humidity drives aggressive mold, algae, and mildew growth.",
          icon: "Waves",
        },
        {
          title: "Upscale Property Care",
          description:
            "Premium cleaning services for Lake Zurich's higher-end properties, treating every surface with the care and expertise these homes deserve.",
          icon: "Home",
        },
        {
          title: "Outdoor Living Spaces",
          description:
            "Comprehensive cleaning for Lake Zurich's beautiful outdoor living areas including stone patios, pool decks, pergolas, and outdoor kitchen surfaces.",
          icon: "Sun",
        },
        {
          title: "Natural Stone & Hardscaping",
          description:
            "Expert cleaning for the natural stone, flagstone, and premium hardscape materials commonly found in Lake Zurich properties.",
          icon: "Mountain",
        },
      ],
    },
    faqs: [
      {
        question: "Is pressure washing safe for lakefront homes in Lake Zurich?",
        answer:
          "Yes. We use eco-friendly, biodegradable cleaning solutions that are safe for the Lake Zurich watershed. Our soft wash technique for home exteriors uses low pressure that will not damage siding, trim, or landscaping near the waterfront.",
      },
      {
        question: "How often should Lake Zurich lakefront properties be cleaned?",
        answer:
          "Lakefront homes typically benefit from cleaning every 8 to 12 months due to elevated moisture levels. Properties further from the lake may only need annual cleaning. We assess your specific situation during the free estimate.",
      },
      {
        question: "Can you clean natural stone patios and walkways in Lake Zurich?",
        answer:
          "Absolutely. We have extensive experience cleaning flagstone, bluestone, travertine, and other natural stone materials commonly found in Lake Zurich properties. We adjust pressure and solutions specifically for each stone type.",
      },
      {
        question: "Do you offer premium sealing for Lake Zurich driveways and patios?",
        answer:
          "Yes. We offer professional-grade penetrating and topical sealers with wet-look, satin, and matte finish options. Sealing after cleaning provides lasting protection against stains, moisture, and UV damage.",
      },
    ],
    ctaHeading: "Premium Pressure Washing for Lake Zurich, IL",
    ctaText:
      "Lake Zurich homeowners trust NR Complete Pressure Washing for exceptional exterior cleaning. Call (941) 280-9119 for your free estimate.",
  },

  // ===== 9. BUFFALO GROVE, IL =====
  {
    slug: "buffalo-grove-il",
    name: "Buffalo Grove",
    state: "IL",
    fullName: "Buffalo Grove, IL",
    heroImage: "location-buffalo-grove-hero",
    splitImage: "location-buffalo-grove-split",
    metaDescription:
      "Professional pressure washing in Buffalo Grove, IL. House washing, concrete cleaning, paver restoration. NR Complete Pressure Washing — 30+ years experience. Free estimates.",
    heroSubtitle:
      "NR Complete Pressure Washing provides reliable, professional exterior cleaning services throughout Buffalo Grove, IL. With 30+ years of experience, we help Buffalo Grove families maintain beautiful, well-kept properties all year long.",
    overview: [
      "Buffalo Grove, IL is a family-oriented community consistently ranked among the best places to live in Illinois, known for its excellent schools, safe neighborhoods, and strong community spirit. NR Complete Pressure Washing has been serving Buffalo Grove homeowners and businesses for over 30 years, providing the professional exterior cleaning services that help this outstanding community maintain its reputation for well-kept properties and beautiful curb appeal.",
      "The residential neighborhoods of Buffalo Grove feature a wonderful mix of housing styles from multiple decades of development. From the ranch homes and split-levels of the 1960s and 70s to the two-story colonials of the 80s and 90s and newer construction in recent developments, each requires a different cleaning approach. Our team has worked with every building material and style found throughout Buffalo Grove and knows exactly how to clean each one safely and effectively. We also serve the commercial properties along Dundee Road, Lake Cook Road, and the surrounding business districts.",
      "NR Complete Pressure Washing makes it easy to maintain your Buffalo Grove property with free estimates, flexible scheduling, and competitive pricing. We work Monday through Saturday from 7 AM to 5 PM, offering morning and afternoon appointments to fit your family's schedule. Our eco-friendly cleaning solutions are safe for children, pets, and the environment — important considerations in a family community like Buffalo Grove. Call (941) 280-9119 today to schedule your free estimate.",
    ],
    whyChooseUs: [
      {
        title: "Family-Friendly Service",
        description:
          "We use eco-friendly, biodegradable products that are safe for children and pets. Buffalo Grove families can feel confident about our cleaning methods around their homes.",
        icon: "Heart",
      },
      {
        title: "Every Home Style & Age",
        description:
          "From 1960s ranch homes to new construction, we have cleaned every property type in Buffalo Grove. Our 30+ years of experience means safe, effective results on any surface.",
        icon: "Home",
      },
      {
        title: "Flexible Family Scheduling",
        description:
          "We know Buffalo Grove families are busy. We offer flexible scheduling including Saturday appointments and work efficiently to minimize disruption to your routine.",
        icon: "CalendarCheck",
      },
      {
        title: "Neighborhood Reputation",
        description:
          "Many of our Buffalo Grove clients were referred by their neighbors. Our reputation in this community is built one satisfied homeowner at a time.",
        icon: "Star",
      },
    ],
    services: [
      "House washing for all siding types and conditions",
      "Driveway and sidewalk deep cleaning",
      "Patio and backyard hardscape cleaning",
      "Paver cleaning, re-sanding, and sealing",
      "Concrete cleaning and protective sealing",
      "Wood deck cleaning and preparation for staining",
      "Composite deck cleaning (Trex, TimberTech)",
      "Retaining wall and garden wall cleaning",
      "Playground and outdoor recreation area cleaning",
      "Commercial property maintenance for local businesses",
    ],
    localExpertise: {
      eyebrow: "Buffalo Grove Specialists",
      heading: "Pressure Washing Expertise for Buffalo Grove, IL Properties",
      subtitle:
        "Trusted exterior cleaning for Buffalo Grove's family neighborhoods, local businesses, and community spaces.",
      items: [
        {
          title: "Established Neighborhood Care",
          description:
            "Expert cleaning for Buffalo Grove's mature neighborhoods where decades of tree growth, moisture, and weathering have left their mark on siding, driveways, and patios.",
          icon: "Home",
        },
        {
          title: "Dundee Road Businesses",
          description:
            "Professional commercial cleaning for Buffalo Grove businesses along Dundee Road and Lake Cook Road to maintain a clean, professional appearance for customers.",
          icon: "Building",
        },
        {
          title: "Family-Safe Methods",
          description:
            "Our eco-friendly cleaning products and careful techniques are specifically chosen to be safe around Buffalo Grove families, children, pets, and play areas.",
          icon: "ShieldCheck",
        },
        {
          title: "Community Event Preparation",
          description:
            "Quick-turnaround exterior cleaning for Buffalo Grove homeowners hosting events, barbecues, or family gatherings — make your property shine for guests.",
          icon: "PartyPopper",
        },
      ],
    },
    faqs: [
      {
        question: "Are your cleaning products safe for my kids and pets in Buffalo Grove?",
        answer:
          "Yes. We exclusively use biodegradable, eco-friendly cleaning solutions that are safe for children, pets, and plants. After cleaning, we thoroughly rinse all treated areas. Most surfaces are safe to walk on within a few hours of service.",
      },
      {
        question: "Can you clean my Buffalo Grove home before a party or event?",
        answer:
          "Absolutely. We offer quick-turnaround cleaning for Buffalo Grove homeowners preparing for events. A house wash and driveway cleaning can transform your property's appearance in just a few hours. Call ahead to schedule.",
      },
      {
        question: "Do you clean homes in the older Buffalo Grove neighborhoods?",
        answer:
          "Yes. We have extensive experience with the older homes in Buffalo Grove including original brick, aluminum siding, wood trim, and concrete surfaces. We adjust our methods for each material to deliver safe, thorough cleaning.",
      },
      {
        question: "How do I get a pressure washing estimate in Buffalo Grove?",
        answer:
          "Call (941) 280-9119 or fill out our online contact form to schedule a free on-site estimate. We will visit your Buffalo Grove property, assess the work needed, and provide a detailed, no-obligation quote.",
      },
    ],
    ctaHeading: "Schedule Pressure Washing in Buffalo Grove, IL",
    ctaText:
      "Buffalo Grove families trust NR Complete Pressure Washing for safe, professional exterior cleaning. Call (941) 280-9119 for your free estimate.",
  },

  // ===== 10. LONG GROVE, IL =====
  {
    slug: "long-grove-il",
    name: "Long Grove",
    state: "IL",
    fullName: "Long Grove, IL",
    heroImage: "location-long-grove-hero",
    splitImage: "location-long-grove-split",
    metaDescription:
      "Premium pressure washing in Long Grove, IL. Estate property cleaning, house washing, hardscape restoration. NR Complete Pressure Washing — 30+ years experience. Free estimates.",
    heroSubtitle:
      "NR Complete Pressure Washing provides premium exterior cleaning services for the distinguished properties of Long Grove, IL. With over 30 years of experience, we deliver the meticulous attention to detail that Long Grove's estate homes and luxury properties demand.",
    overview: [
      "Long Grove, IL is one of the most unique and prestigious communities in the Chicago suburbs, known for its historic downtown, covered bridge, expansive estate properties, and commitment to preserving its rural character. NR Complete Pressure Washing has been serving Long Grove homeowners for over 30 years, providing the premium-quality exterior cleaning services that these exceptional properties require. From sprawling estate homes on multi-acre lots to the charming shops and restaurants in the historic downtown, we bring the experience and expertise to handle Long Grove's most demanding cleaning projects.",
      "Long Grove properties are characterized by larger homes, extensive hardscaping, natural stone features, multi-structure estates, and beautiful wooded settings. These attributes, while stunning, also create significant maintenance requirements. Wooded lots produce heavy shade that breeds mold and algae. Expansive driveways and patios accumulate years of buildup. Natural stone walls and features develop moss and lichen growth. Horse properties and agricultural structures need periodic exterior cleaning. NR Complete Pressure Washing has the commercial-grade equipment, specialized knowledge, and experienced crew to address all of these needs efficiently and professionally.",
      "We approach every Long Grove property with the care and attention it deserves. Our team understands that these are not average homes — they are significant investments that require expert handling. We use surface-appropriate pressure levels, premium cleaning solutions, and meticulous techniques to deliver flawless results without risking damage to delicate materials or finishes. Every Long Grove project begins with a comprehensive free on-site assessment. Call (941) 280-9119 to schedule yours.",
    ],
    whyChooseUs: [
      {
        title: "Estate Property Specialists",
        description:
          "We have the equipment, crew capacity, and experience to handle Long Grove's large estate properties efficiently, including multi-structure complexes and extensive hardscaping.",
        icon: "Home",
      },
      {
        title: "Premium Material Expertise",
        description:
          "Long Grove homes feature premium materials including natural stone, copper, cedar, slate, and custom masonry. We know how to clean each one safely and effectively.",
        icon: "Layers",
      },
      {
        title: "Meticulous Attention to Detail",
        description:
          "Long Grove properties demand perfection. Our crew takes the time to clean every surface thoroughly, from the front entry to the most remote retaining wall on the property.",
        icon: "Eye",
      },
      {
        title: "Discreet, Professional Service",
        description:
          "We work quietly and efficiently, respect your privacy, and leave your Long Grove property looking immaculate without disrupting your daily routine.",
        icon: "ShieldCheck",
      },
    ],
    services: [
      "Estate home soft wash and exterior cleaning",
      "Extended driveway and motor court cleaning",
      "Natural stone patio and feature cleaning",
      "Paver restoration including cleaning, sanding, and sealing",
      "Cedar and wood siding gentle cleaning",
      "Multi-level deck and outdoor living space cleaning",
      "Retaining wall and stone wall restoration",
      "Pool house and guest house exterior cleaning",
      "Horse barn and equestrian facility cleaning",
      "Historic downtown property maintenance",
    ],
    localExpertise: {
      eyebrow: "Long Grove Specialists",
      heading: "Premium Pressure Washing for Long Grove, IL Properties",
      subtitle:
        "Expert exterior cleaning for Long Grove's estate homes, historic properties, and distinctive architectural features.",
      items: [
        {
          title: "Estate Home Cleaning",
          description:
            "Comprehensive exterior cleaning for Long Grove's large estate homes, addressing every surface from the front facade to the rear patios and all structures in between.",
          icon: "Home",
        },
        {
          title: "Natural Stone & Masonry",
          description:
            "Expert cleaning for the natural stone walls, fireplaces, columns, and masonry features that define Long Grove's distinctive architectural character.",
          icon: "Mountain",
        },
        {
          title: "Wooded Property Specialists",
          description:
            "Targeted treatment for the heavy organic growth — mold, moss, lichen, and algae — that thrives on Long Grove properties surrounded by mature trees and wooded lots.",
          icon: "TreePine",
        },
        {
          title: "Historic Downtown Properties",
          description:
            "Careful, preservation-minded cleaning for the shops, restaurants, and structures in Long Grove's historic downtown and covered bridge area.",
          icon: "Landmark",
        },
        {
          title: "Equestrian Facility Cleaning",
          description:
            "Professional exterior cleaning for Long Grove's horse barns, arenas, fencing, and equestrian facility structures to maintain a clean, professional appearance.",
          icon: "Fence",
        },
        {
          title: "Multi-Structure Estates",
          description:
            "Coordinated cleaning for Long Grove estates with multiple structures including main homes, guest houses, pool houses, garages, and auxiliary buildings.",
          icon: "LayoutGrid",
        },
      ],
    },
    faqs: [
      {
        question: "Can you handle the large estate properties in Long Grove?",
        answer:
          "Yes. We regularly service Long Grove's largest properties. Our commercial equipment and experienced crew are designed for high-volume work, and we can handle multi-structure estates, extensive hardscaping, and properties of any size efficiently.",
      },
      {
        question: "Do you have experience with natural stone and premium materials?",
        answer:
          "Absolutely. Long Grove homes frequently feature natural stone, slate, copper, cedar, and custom masonry. We have 30+ years of experience cleaning these premium materials with techniques and solutions specifically chosen to protect them.",
      },
      {
        question: "Can you clean horse barns and equestrian facilities in Long Grove?",
        answer:
          "Yes. We provide exterior cleaning for barns, arena fencing, wash stalls, and other equestrian structures. We use products that are safe around animals and adjust our approach to the specific materials and conditions of each facility.",
      },
      {
        question: "How do you handle the wooded lots common in Long Grove?",
        answer:
          "Wooded properties face heavier biological growth due to constant shade and moisture. We apply targeted pre-treatments that kill mold, moss, and algae at the root before cleaning, and we use techniques that clear organic debris from surfaces without damaging the surrounding landscape.",
      },
      {
        question: "Do you offer ongoing maintenance plans for Long Grove estates?",
        answer:
          "Yes. Many of our Long Grove clients are on annual or semi-annual cleaning programs that keep their entire property maintained year-round. We customize the schedule and scope to match your property's specific needs and your preferences.",
      },
    ],
    ctaHeading: "Premium Pressure Washing for Long Grove, IL Estates",
    ctaText:
      "Long Grove's finest properties trust NR Complete Pressure Washing for meticulous exterior cleaning. Call (941) 280-9119 for your free estate assessment.",
  },
];
