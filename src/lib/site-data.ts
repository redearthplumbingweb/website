const unsplash = (photoId: string, width = 1200) =>
  `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=${width}&q=80`;

const img = (name: string) => `/client-images/${name}.webp`;

export const clientImages = {
  newBuildStormwaterTrench: img("new-build-stormwater-trench"),
  bathroomRoughInPipes: img("bathroom-rough-in-pipes"),
  showerMixerRoughIn: img("shower-mixer-rough-in"),
  drainageFabricTrench: img("drainage-fabric-trench"),
  commercialInteriorPipes: img("commercial-interior-pipes"),
  rainwaterTank: img("rainwater-tank"),
  houseDrainageGravel: img("house-drainage-gravel"),
  siteDrainageOverview: img("site-drainage-overview"),
  drainageExcavators: img("drainage-excavators"),
  backyardDrainageRetaining: img("backyard-drainage-retaining"),
  backyardDrainagePit: img("backyard-drainage-pit"),
  siteRedEarthTruck: img("site-red-earth-truck"),
  bathroomEnsuiteBayView: img("bathroom-ensuite-bay-view"),
  ensuiteDoubleVanity: img("ensuite-double-vanity"),
  copperPipeRoughIn: img("copper-pipe-rough-in"),
  stoneBathtubCourtyard: img("stone-bathtub-courtyard"),
  vanityArchedMirrorsGold: img("vanity-arched-mirrors-gold"),
  drainageCatchBasins: img("drainage-catch-basins"),
  drainageExcavatorSite: img("drainage-excavator-site"),
  carportDrainGrate: img("carport-drain-grate"),
  waterFiltrationPuretec: img("water-filtration-puretec"),
  walkInShowerBlack: img("walk-in-shower-black"),
  freestandingTubGrey: img("freestanding-tub-grey"),
  rinnaiHotWaterTank: img("rinnai-hot-water-tank"),
  framingRoughIn: img("framing-rough-in"),
  sewerManhole: img("sewer-manhole"),
  sewerMainTrench: img("sewer-main-trench"),
  bathroomVesselSinkTub: img("bathroom-vessel-sink-tub"),
  stormwaterPitExcavator: img("stormwater-pit-excavator"),
  bathroomDoubleVanityShower: img("bathroom-double-vanity-shower"),
  bathroomBlackTub: img("bathroom-black-tub"),
  newBuildCladdingPipes: img("new-build-cladding-pipes"),
  undergroundTank: img("underground-tank"),
  oakVanityInstall: img("oak-vanity-install"),
  heatPumpHotWater: img("heat-pump-hot-water"),
  gravelPadRetaining: img("gravel-pad-retaining"),
  outdoorConcreteSink: img("outdoor-concrete-sink"),
  bathroomGoldFixtures: img("bathroom-gold-fixtures"),
  powderRoomVanity: img("powder-room-vanity"),
  bathroomWetRoom: img("bathroom-wet-room"),
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
    link: "https://www.google.com/maps/search/?api=1&query=Batemans+Bay+NSW",
    embed:
      "https://maps.google.com/maps?q=Batemans+Bay,+NSW,+Australia&hl=en&z=13&output=embed",
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
    src: clientImages.bathroomEnsuiteBayView,
    alt: "Modern ensuite bathroom with freestanding bath and coastal views",
  },
} as const;

export const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/#contact" },
] as const;

export const services = [
  {
    title: "New Build Plumbing & Gas",
    description:
      "Plumbing and gas rough-in, fit-off, and compliance work for new home builds — from slab stage through to final fixtures.",
    image: {
      src: clientImages.newBuildStormwaterTrench,
      alt: "Stormwater and utility pipes laid in trench beside new masonry wall with excavator on site",
    },
  },
  {
    title: "General Plumbing",
    description:
      "Repairs, maintenance, and installations for homes and small commercial properties across the South Coast.",
    image: {
      src: clientImages.waterFiltrationPuretec,
      alt: "Puretec whole-house water filtration and UV sterilisation system installed with copper pipework",
    },
  },
  {
    title: "Gas Fitting",
    description:
      "Safe, compliant gas fitting for appliances, heaters, and pipework by a licensed gas fitter.",
    image: {
      src: clientImages.copperPipeRoughIn,
      alt: "Copper and insulated pipe rough-in through timber framing and insulation",
    },
  },
  {
    title: "Hot Water Systems",
    description:
      "Repairs, replacements, and new installations for electric, gas, and continuous flow hot water units.",
    image: {
      src: clientImages.heatPumpHotWater,
      alt: "Mitsubishi heat pump and Thermann hot water tank installed against brick wall",
    },
  },
  {
    title: "Emergency Plumbing",
    description:
      "Burst pipes, major leaks, and urgent plumbing issues — call us when you need help fast.",
    image: {
      src: clientImages.sewerMainTrench,
      alt: "Sewer main trench excavation with buried sewer warning tape on residential site",
    },
  },
  {
    title: "Bathroom & Kitchen",
    description:
      "Plumbing for renovations, new fixtures, tapware, and complete fit-outs with a quality finish.",
    image: {
      src: clientImages.bathroomDoubleVanityShower,
      alt: "Modern bathroom with timber double vanity, black vessel sinks and glass walk-in shower",
    },
  },
  {
    title: "Blocked Drains",
    description:
      "Clearing blocked drains and diagnosing drainage issues to get your plumbing flowing again.",
    image: {
      src: clientImages.drainageCatchBasins,
      alt: "Drainage catch basins and channel installed in excavated trench beside building",
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
    title: "Bathroom rough-in",
    alt: "PEX and copper plumbing rough-in in timber wall framing during bathroom renovation",
    src: clientImages.bathroomRoughInPipes,
  },
  {
    title: "Shower mixer rough-in",
    alt: "Shower mixer valve and black pipe rough-in behind timber studs",
    src: clientImages.showerMixerRoughIn,
  },
  {
    title: "Drainage trench install",
    alt: "Fabric-lined drainage trench with white PVC pipe on hillside site",
    src: clientImages.drainageFabricTrench,
  },
  {
    title: "Commercial pipe install",
    alt: "PVC and copper pipework in concrete block commercial interior under construction",
    src: clientImages.commercialInteriorPipes,
  },
  {
    title: "Rainwater tank",
    alt: "Slimline grey rainwater tank installed beside house cladding",
    src: clientImages.rainwaterTank,
  },
  {
    title: "House drainage & gravel",
    alt: "Sub-soil drainage pipes in gravel trench beside timber-framed house",
    src: clientImages.houseDrainageGravel,
  },
  {
    title: "Drainage excavation",
    alt: "Fabric-lined trench with PVC risers and excavators on residential site",
    src: clientImages.drainageExcavators,
  },
  {
    title: "Backyard drainage & retaining",
    alt: "PVC drainage pipes in gravel trench beside concrete block retaining wall",
    src: clientImages.backyardDrainageRetaining,
  },
  {
    title: "Drainage pit install",
    alt: "Black drainage pit and PVC pipe network in backyard excavation",
    src: clientImages.backyardDrainagePit,
  },
  {
    title: "Ensuite double vanity",
    alt: "Long ensuite with double vessel sinks, arched mirrors and walk-in shower",
    src: clientImages.ensuiteDoubleVanity,
  },
  {
    title: "Stone bathtub courtyard",
    alt: "Natural stone bathtub in indoor-outdoor courtyard with pendant lighting",
    src: clientImages.stoneBathtubCourtyard,
  },
  {
    title: "Vanity with gold fixtures",
    alt: "Timber double vanity with arched mirrors and gold tapware",
    src: clientImages.vanityArchedMirrorsGold,
  },
  {
    title: "Drainage excavator site",
    alt: "Mini excavator beside gravel drainage trench with catch basins",
    src: clientImages.drainageExcavatorSite,
  },
  {
    title: "Carport drain grate",
    alt: "Black drainage grate across concrete carport entry",
    src: clientImages.carportDrainGrate,
  },
  {
    title: "Walk-in shower",
    alt: "Modern walk-in shower with grey tiles and matte black fixtures",
    src: clientImages.walkInShowerBlack,
  },
  {
    title: "Freestanding bath",
    alt: "White freestanding bathtub on dark grey tiles with floor-mounted mixer",
    src: clientImages.freestandingTubGrey,
  },
  {
    title: "Rinnai hot water tank",
    alt: "Outdoor Rinnai hot water storage tank installed against brick wall",
    src: clientImages.rinnaiHotWaterTank,
  },
  {
    title: "Framing rough-in",
    alt: "Electrical and plumbing rough-in through timber wall and ceiling framing",
    src: clientImages.framingRoughIn,
  },
  {
    title: "Sewer manhole",
    alt: "Concrete sewer manhole and PVC pipe connection in excavated pit",
    src: clientImages.sewerManhole,
  },
  {
    title: "Bathroom with vessel sink",
    alt: "Minimalist bathroom with vessel sink, toilet and freestanding bath",
    src: clientImages.bathroomVesselSinkTub,
  },
  {
    title: "Stormwater pit & excavator",
    alt: "Concrete stormwater pit and PVC pipe trench with mini excavator",
    src: clientImages.stormwaterPitExcavator,
  },
  {
    title: "Black freestanding bath",
    alt: "Contemporary bathroom with matte black freestanding tub and timber vanity",
    src: clientImages.bathroomBlackTub,
  },
  {
    title: "New build cladding & pipes",
    alt: "Dark cladding new build with PVC service pipes at foundation",
    src: clientImages.newBuildCladdingPipes,
  },
  {
    title: "Underground tank",
    alt: "Blue underground utility tank being set in excavated pit",
    src: clientImages.undergroundTank,
  },
  {
    title: "Oak vanity install",
    alt: "Light oak bathroom vanity with integrated sink and mirrored cabinet",
    src: clientImages.oakVanityInstall,
  },
  {
    title: "Site prep gravel pad",
    alt: "Levelled gravel pad with rock retaining wall and garden mulch",
    src: clientImages.gravelPadRetaining,
  },
  {
    title: "Outdoor concrete sink",
    alt: "Double outdoor concrete sink with copper tapware on timber deck",
    src: clientImages.outdoorConcreteSink,
  },
  {
    title: "Gold fixture ensuite",
    alt: "Modern ensuite with floating vanity, gold fixtures and glass shower",
    src: clientImages.bathroomGoldFixtures,
  },
  {
    title: "Powder room vanity",
    alt: "Compact powder room with timber vanity, vessel sink and gold tapware",
    src: clientImages.powderRoomVanity,
  },
  {
    title: "Wet room bathroom",
    alt: "Bright bathroom with freestanding bath, floating vanity and walk-in shower",
    src: clientImages.bathroomWetRoom,
  },
] as const;
