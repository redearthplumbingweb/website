const unsplash = (photoId: string, width = 1200) =>
  `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=${width}&q=80`;

export const newImages = {
  fixSink: "/new-images/fix-sink.png",
  newHousePipes: "/new-images/new-house-pipes.png",
  repairLeak: "/new-images/repair-leak-pipe-under-bench.png",
  fixNewPipes: "/new-images/fix-new-pipes-under-bench.png",
  gasInstallation: "/new-images/gas-installation.png",
  hotWaterSystem: "/new-images/hot-water-system.png",
  gasHotWaterSystem: "/new-images/gas-hotwater-system.png",
  mainPipeOutside: "/new-images/main-pipe-outside.png",
  excavatorDigging: "/new-images/excavator-digging-at-house.png",
  houseDrainage: "/new-images/house-drainage-retaining-wall.png",
  newHousePipesUnderground: "/new-images/new-hosue-pipes-underground.png",
  outsidePipeLaying: "/new-images/outside-pipe-laying.png",
} as const;

export const siteConfig = {
  name: "Red Earth Plumbing",
  yearsExperience: 20,
  tagline:
    "Licensed plumbing and gas fitting with over 20 years of experience on the South Coast",
  hero: {
    eyebrow: "20 Years Experience · Batemans Bay & South Coast",
    headline: "Plumbing & gas fitting for new builds, renovations & repairs",
  },
  phone: "0423 764 630",
  phoneHref: "tel:+61423764630",
  email: "redearthplumbing@hotmail.com",
  emailHref: "mailto:redearthplumbing@hotmail.com",
  address: {
    street: "11 Canning Crescent",
    suburb: "Batemans Bay",
    state: "NSW",
    postcode: "2536",
    region: "Batemans Bay",
  },
  serviceArea:
    "Batemans Bay, Sunshine Bay, Batehaven, Surfside, and the wider Eurobodalla region",
  description:
    "Red Earth Plumbing is a locally owned plumbing and gas fitting business with over 20 years of experience, serving Batemans Bay and the surrounding South Coast. From plumbing and gas on new home builds to renovations, maintenance, and emergency call-outs — honest, professional service across the Eurobodalla region.",
  maps: {
    link: "https://www.google.com/maps/search/?api=1&query=11+Canning+Crescent,+Batemans+Bay+NSW+2536",
    embed:
      "https://maps.google.com/maps?q=11+Canning+Crescent,+Batemans+Bay+NSW+2536,+Australia&hl=en&z=15&output=embed",
  },
} as const;

export const fullAddress = `${siteConfig.address.street}, ${siteConfig.address.suburb} ${siteConfig.address.state} ${siteConfig.address.postcode}`;

export const displayAddress = `${siteConfig.address.suburb} ${siteConfig.address.state} ${siteConfig.address.postcode}`;

export const templateImages = {
  hero: {
    src: unsplash("photo-1607472586893-edb57bdc0e39", 1920),
    alt: "Professional plumber working on a residential job",
  },
  about: {
    src: newImages.fixSink,
    alt: "Licensed plumber repairing bathroom sink drainage",
  },
} as const;

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
] as const;

export const services = [
  {
    title: "New Build Plumbing & Gas",
    description:
      "Plumbing and gas rough-in, fit-off, and compliance work for new home builds — from slab stage through to final fixtures.",
    image: {
      src: newImages.excavatorDigging,
      alt: "Mini excavator digging trenches for new home plumbing installation",
    },
  },
  {
    title: "General Plumbing",
    description:
      "Repairs, maintenance, and installations for homes and small commercial properties across the South Coast.",
    image: {
      src: newImages.outsidePipeLaying,
      alt: "External PVC pipework laid in trench with spirit level check",
    },
  },
  {
    title: "Gas Fitting",
    description:
      "Safe, compliant gas fitting for appliances, heaters, and pipework by a licensed gas fitter.",
    image: {
      src: newImages.gasInstallation,
      alt: "Licensed gas fitter testing copper gas pipework with diagnostic equipment",
    },
  },
  {
    title: "Hot Water Systems",
    description:
      "Repairs, replacements, and new installations for electric, gas, and continuous flow hot water units.",
    image: {
      src: newImages.hotWaterSystem,
      alt: "Gas boiler and hot water storage tank installation with pipework and valves",
    },
  },
  {
    title: "Emergency Plumbing",
    description:
      "Burst pipes, major leaks, and urgent plumbing issues — call us when you need help fast.",
    image: {
      src: newImages.repairLeak,
      alt: "Emergency plumbing leak repair under kitchen bench",
    },
  },
  {
    title: "Bathroom & Kitchen",
    description:
      "Plumbing for renovations, new fixtures, tapware, and complete fit-outs with a quality finish.",
    image: {
      src: newImages.fixNewPipes,
      alt: "New pipework installed under kitchen sink",
    },
  },
  {
    title: "Blocked Drains",
    description:
      "Clearing blocked drains and diagnosing drainage issues to get your plumbing flowing again.",
    image: {
      src: newImages.houseDrainage,
      alt: "Large drainage pipes installed in excavated trench at residential site",
    },
  },
] as const;

export const whyChooseUs = [
  {
    title: "20 Years Experience",
    description:
      "Two decades of plumbing and gas fitting experience across new builds, renovations, and residential repairs.",
  },
  {
    title: "Local & Trusted",
    description:
      "A Batemans Bay business that understands local homes, coastal conditions, and community expectations.",
  },
  {
    title: "Licensed Professional",
    description:
      "Qualified plumber and gas fitter delivering compliant, safe work on every job.",
  },
  {
    title: "Quality Workmanship",
    description:
      "Neat, durable results with attention to detail — done properly the first time.",
  },
] as const;

export const galleryItems = [
  {
    title: "Bathroom sink repair",
    alt: "Plumber repairing bathroom sink drainage pipework",
    src: newImages.fixSink,
  },
  {
    title: "New build pipe installation",
    alt: "PVC plumbing pipes installed at a new home build",
    src: newImages.newHousePipes,
  },
  {
    title: "Emergency leak repair",
    alt: "Plumber fixing a leak under a kitchen bench",
    src: newImages.repairLeak,
  },
  {
    title: "Under-sink pipe fit-off",
    alt: "New pipework fitted under a kitchen sink cabinet",
    src: newImages.fixNewPipes,
  },
  {
    title: "Gas fitting & diagnostics",
    alt: "Gas fitter testing copper gas pipework with diagnostic equipment",
    src: newImages.gasInstallation,
  },
  {
    title: "Boiler & hot water tank",
    alt: "Gas boiler and hot water storage tank with pipework and valves",
    src: newImages.hotWaterSystem,
  },
  {
    title: "Outdoor hot water unit",
    alt: "Outdoor heat pump hot water system installed against brick wall",
    src: newImages.gasHotWaterSystem,
  },
  {
    title: "Underground pipe installation",
    alt: "Underground drainage pipework with valve and compression fittings",
    src: newImages.mainPipeOutside,
  },
  {
    title: "Site excavation",
    alt: "Mini excavator digging trenches for new home plumbing",
    src: newImages.excavatorDigging,
  },
  {
    title: "Drainage pipe installation",
    alt: "Large drainage pipes installed in excavated trench",
    src: newImages.houseDrainage,
  },
  {
    title: "Underground pipe rough-in",
    alt: "Insulated underground pipework installed in trench at new build",
    src: newImages.newHousePipesUnderground,
  },
  {
    title: "External pipe laying",
    alt: "PVC pipework laid in red earth trench with fittings ready for connection",
    src: newImages.outsidePipeLaying,
  },
] as const;
