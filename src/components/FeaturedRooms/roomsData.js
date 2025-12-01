import room1 from "../../assets/reisetopia-pSDe7ePo0Tc-unsplash.jpg";
import room2 from "../../assets/rex_ADL1162_01_AMB.jpg";
import room3 from "../../assets/rune-enstad-ayzkAUNfsDI-unsplash.jpg";
import room4 from "../../assets/غرفة-نوم-باللون-الأسود-1024x650.jpg";

export const rooms = [
  {
    id: 1,
    title: "Deluxe Ocean View",
    description: "Spacious room with stunning ocean views, marble bathroom, and private balcony overlooking the coastline",
    price: 299,
    originalPrice: 399,
    image: room1,
    size: "45 m²",
    guests: 2,
    bed: "King Bed",
    features: ["Ocean View", "Private Balcony", "Marble Bathroom", "Mini Bar", "Free WiFi"],
    rating: 4.9,
    reviews: 156
  },
  {
    id: 2,
    title: "Executive Suite",
    description: "Luxurious suite with separate living area, work desk, and premium city views perfect for business travelers",
    price: 459,
    originalPrice: 599,
    image: room2,
    size: "65 m²",
    guests: 3,
    bed: "King + Sofa Bed",
    features: ["Living Area", "Work Desk", "City View", "Premium Amenities", "Butler Service"],
    rating: 4.8,
    reviews: 203
  },
  {
    id: 3,
    title: "Premium Double",
    description: "Elegant double room featuring modern design, premium facilities, and contemporary furnishings",
    price: 199,
    originalPrice: 249,
    image: room3,
    size: "35 m²",
    guests: 2,
    bed: "Double Bed",
    features: ["Modern Design", "Premium Bath", "Smart TV", "Air Conditioning", "Room Service"],
    rating: 4.7,
    reviews: 89
  },
  {
    id: 4,
    title: "Presidential Suite",
    description: "Ultimate luxury experience with exclusive amenities, private terrace, and personalized concierge service",
    price: 899,
    originalPrice: 1199,
    image: room4,
    size: "120 m²",
    guests: 4,
    bed: "Master + Guest Room",
    features: ["Private Terrace", "Butler Service", "Spa Access", "Dining Area", "Premium Location"],
    rating: 5.0,
    reviews: 67
  }
];
