import Product1 from "../assets/ProductImg/Product_1.jpg";
import Product1_1 from "../assets/ProductImg/Product_1_1.jpg";
import Product2 from "../assets/ProductImg/Product_2.jpg";
import Product2_1 from "../assets/ProductImg/Product_2.1.jpg";
import flexi_skeleton from "../assets/ProductImg/flexi_skeleton.jpg";
import flexi_skeleton_1 from "../assets/ProductImg/flexi_skeleton_1.jpg";


export const portfolioProjects = [
  {
    id: "toy-racing-car",
    title: "3D Printed Racing Car Toy",
    subtitle:
      "Lightweight and durable racing toy designed for smooth movement and high-speed play.",
    category: "Toys",
    image:
      "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?q=80&w=2000&auto=format&fit=crop",
    color: "cyan",
    overview:
      "This toy racing car was designed to be both fun and durable. The model features aerodynamic curves and rotating wheels that allow smooth motion on flat surfaces.",
    fullDescription:
      "Printed using PLA with reinforced wheel joints, the car is optimized for lightweight durability. The modular design allows easy assembly and replacement of parts.",
    specs: {
      technology: "FDM",
      resolution: "100 Microns",
      tolerance: "± 0.1mm",
      material: "PLA",
      infill: "40%",
      postProcessing: "Polished Finish"
    },
    features: [
      "Kid Friendly",
      "Lightweight",
      "Durable Design",
      "Smooth Wheels",
      "Safe Edges",
      "Modular Parts"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1542365887-3b9f0a5e7f44?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517949908110-721b6a64f9b2?q=80&w=2000&auto=format&fit=crop"
    ],
    stats: {
      material: "PLA",
      printTime: "6h 20m"
    }
  },
{
  id: "sonic-toy-model",
  title: "Sonic Toy Model",
  subtitle:
    "A detailed Sonic character toy designed with smooth curves and vibrant features for collectors and kids.",
  category: "Toys",
  image:
   Product2,
  color: "blue",
  overview:
    "This Sonic toy model captures the iconic character design with precise detailing and balanced proportions, making it perfect for display or play.",
  fullDescription:
    "The model was designed to maintain accurate character features while ensuring durability during printing. High-resolution layers were used to preserve the facial details and spikes of the character.",
  specs: {
    technology: "FDM",
    resolution: "80 Microns",
    tolerance: "± 0.08mm",
    material: "PLA+",
    infill: "30%",
    postProcessing: "Hand Painted"
  },
  features: [
    "Character Model",
    "Detailed Design",
    "Smooth Surface",
    "Durable Print",
    "Kid Friendly",
    "Collectible Toy"
  ],
  gallery: [
    Product2,
    Product2_1,
  ],
  stats: {
    material: "PLA+",
    printTime: "7h 30m"
  }
},
  {
  id: "skeleton-dragon",
  title: "Skeleton Dragon",
  subtitle:
    "Fully posable fantasy dragon figurine with flexible joints, designed as a fidget toy and gothic desk decor collectible.",
  category: "Toys",
  image: Product1_1,
  color: "purple",
  overview:
    "This articulated skeleton dragon is a flexible 3D printed fantasy model designed with multiple moving segments that allow natural dragon-like poses.",
  fullDescription:
    "The dragon model features a fully articulated spine, tail, and limbs, allowing smooth movement and dynamic positioning. Printed with durable filament and carefully designed joints, it works both as a decorative collectible and a satisfying fidget toy.",
  specs: {
    technology: "FDM",
    resolution: "100 Microns",
    tolerance: "± 0.1mm",
    material: "PLA",
    infill: "20%",
    postProcessing: "Cleaned & Sanded"
  },
  features: [
    "Fully Articulated Body",
    "Fantasy Dragon Design",
    "Flexible Spine",
    "Fidget Toy",
    "Desk Decor",
    "Collectible Model"
  ],
  gallery: [
   Product1,
   Product1_1 
  ],
  stats: {
    material: "PLA",
    printTime: "11h 20m"
  }
},

 {
  id: "flexi-skeleton-model",
  title: "3D Printed Articulated Flexi Skeleton",
  subtitle:
    "Poseable anatomical skeleton model with flexible joints designed for desk decor, education, and interactive display.",
  category: "Models",
  image: flexi_skeleton,
  color: "cyan",
  overview:
    "This articulated skeleton model is designed with flexible joints that allow natural posing. It serves as both a decorative piece and an educational anatomical reference.",
  fullDescription:
    "The skeleton is printed with precision to maintain anatomical proportions while allowing movable joints. Each segment connects with durable articulation points, making it suitable for study demonstrations, desk display, or creative posing.",
  specs: {
    technology: "FDM",
    resolution: "100 Microns",
    tolerance: "± 0.1mm",
    material: "PLA",
    infill: "20%",
    postProcessing: "Cleaned & Assembled"
  },
  features: [
    "Flexible Joints",
    "Anatomical Design",
    "Educational Model",
    "Poseable Figure",
    "Desk Decoration",
    "Durable Print"
  ],
  gallery: [
    flexi_skeleton,
    flexi_skeleton_1
  ],
  stats: {
    material: "PLA",
    printTime: "10h 30m"
  }
},

  {
    id: "decorative-wall-art",
    title: "3D Printed Wall Art",
    subtitle:
      "Geometric decorative wall art piece designed for modern interior spaces.",
    category: "Home Decor",
    image:
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=2000&auto=format&fit=crop",
    color: "blue",
    overview:
      "A modern geometric wall decoration that adds texture and depth to interior design.",
    fullDescription:
      "Printed using layered patterns to create a visual illusion and elegant shadow play under ambient lighting.",
    specs: {
      technology: "FDM",
      resolution: "100 Microns",
      tolerance: "Visual Only",
      material: "PLA",
      infill: "20%",
      postProcessing: "Matte Finish"
    },
    features: [
      "Interior Decoration",
      "Modern Geometry",
      "Lightweight",
      "Easy Installation",
      "Artistic Pattern",
      "Minimalist"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2000&auto=format&fit=crop"
    ],
    stats: {
      material: "PLA",
      printTime: "9h 15m"
    }
  }
];
