import { FaHeartPulse } from "react-icons/fa6";
import { MdWaterDrop, MdBloodtype } from "react-icons/md";

//navbar
export const nav_items = [
  { href: "/", key: "home", label: "Home" },
  { href: "/about", key: "about", label: "About Us" },
  { href: "/contact", key: "search", label: "Contact Us" },
];

export const services = [
  {
    title: "Search Doctor",
    desc: "Choose your doctor from thousands of specialist, general, and trusted hospitals",
    img: "/search.png",
  },
  {
    title: "Online Pharmacy",
    desc: "Buy your medicines with our mobile application with a simple delivery system",
    img: "/pharmacy.png",
  },
  {
    title: "Conslutation",
    desc: "Free consultation with our trusted doctors and get the best recommendations",
    img: "/consultation.png",
  },
  {
    title: "Details Info",
    desc: "Free consultation with our trusted doctors and get the best recommendations",
    img: "/details.png",
  },
  {
    title: "Emergency Care",
    desc: "You can get 24/7 urgent care for yourself or your children and your lovely family",
    img: "/emergency.png",
  },
  {
    title: "Tracking",
    desc: "Track and save your meical history and health data",
    img: "/tracking.png",
  },
];

export const testimonials = [
  {
    img: "/1.png",
    name: "Edw Newgate",
    position: "Founder",
    desc: "The JeevanCare app is a game-changer! It's like having a personal healthcare assistant in your pocket. I highly recommend it to everyone.",
  },
  {
    img: "/2.png",
    name: "Alice Johnson",
    position: "Lead Developer",
    desc: "JeevanCare has revolutionized the way we connect with healthcare providers. It's user-friendly, efficient, and has made finding doctors a breeze.",
  },
  {
    img: "/3.png",
    name: "Grace Smith",
    position: "Marketing Specialist",
    desc: "I've been using JeevanCare's mobile app for a year now. It's incredibly convenient and has helped me manage my health and appointments seamlessly.",
  },
];

export const postdata = [
  {
    img: "/injection.png",
    title: "Disease Detection, check up in the laboratory",
    desc: "In this case, the role of the health laboratory is very important to do a disease detection...",
  },
  {
    img: "/heart.png",
    title: "Cardiovascular Diseases: causes, symptoms, and prevention",
    desc: "Learn about the various cardiovascular diseases, their causes, symptoms, and effective prevention...",
  },
  {
    img: "/nutrition.png",
    title: "Nutrition and wellness for a balanced lifestyle",
    desc: "Discover the importance of proper nutrition and wellness practices for achieving and maintaining...",
  },
];

export const healthchart = [
  {
    icon: (
      <MdWaterDrop
        size={52}
        className="bg-yellow-500/50 text-yellow-600 p-2 rounded-xl"
      />
    ),
    title: "Blood Sugar",
    value: "80",
    deb: "mg/dL",
    color: "bg-yellow-500/50",
  },
  {
    icon: (
      <FaHeartPulse
        size={52}
        className="bg-red-500/50 text-red-600 p-2 rounded-xl"
      />
    ),
    title: "Heart Rate",
    value: "98",
    deb: "bpm",
    color: "bg-red-500/50",
  },
  {
    icon: (
      <MdBloodtype
        size={52}
        className="bg-sky-500/50 text-sky-600 p-2 rounded-xl"
      />
    ),
    title: "Blood Sugar",
    value: "102",
    deb: "/ 72 mmhg",
    color: "bg-sky-500/50",
  },
];

// Sample data for the chart
export const chartData = [
  {
    labels: ["1", "2", "3", "4", "5", "6"],
    datasets: [
      {
        label: "",
        data: [79, 75, 73, 82, 76, 80],
        borderColor: "rgba(255, 255, 0)",
        borderWidth: 2,
        fill: true,
        backgroundColor: "rgba(255, 213, 79 , 0.4)",
        lineTension: 0.5,
      },
    ],
  },
  {
    labels: ["1", "2", "3", "4", "5", "6"],
    datasets: [
      {
        label: "",
        data: [70, 75, 73, 82, 76, 80],
        borderColor: "red",
        borderWidth: 2,
        fill: true,
        backgroundColor: "rgba(255, 0, 0, 0.2)",
        lineTension: 0.5,
      },
    ],
  },
  {
    labels: ["1", "2", "3", "4", "5", "6"],
    datasets: [
      {
        label: "",
        data: [90, 85, 98, 94, 110, 102],
        borderColor: "blue",
        borderWidth: 2,
        fill: true,
        backgroundColor: "rgba(137, 207, 240, 0.2)",
        lineTension: 0.5,
      },
    ],
  },
];


export const chartOptions = {
  scales: {
    x: {
      display: false,
    },
    y: {
      display: false,
      min: 65,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
  elements: {
    point: {
      radius: 0,
    },
  },
  layout: {
    padding: {
      top: 20,
    },
  },
};

export const barChart = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Yoga",
      data: [80, 75, 78, 90, 88, 85, 92, 82, 87, 83, 85, 80],
      borderColor: "blue", // Tailwind CSS class
      backgroundColor: "blue", // Adjust opacity as needed
      borderWidth: 2,
      barThickness: 6,
      fill: true,
    },
    {
      label: "Meditation",
      data: [65, 70, 68, 82, 76, 80, 90, 85, 88, 80, 78, 75],
      borderColor: "green", // Tailwind CSS class
      backgroundColor: "green", // Adjust opacity as needed
      borderWidth: 2,
      barThickness: 6,
      fill: true,
    },
    {
      label: "Aerobics",
      data: [50, 55, 53, 65, 60, 62, 70, 65, 68, 63, 60, 55],
      borderColor: "red", // Tailwind CSS class
      backgroundColor: "red", // Adjust opacity as needed
      borderWidth: 2,
      barThickness: 6,
      fill: true,
    },
  ],
};

export const chartOptions1 = {
  scales: {
    x: {
      stacked: true,
      grid: {
        display: false,
      },
    },
    y: {
      beginAtZero: true,
      stacked: true,
      gap: true,
      grid: {
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

export const persons = [
  {
    img: "/luffy.png",
    name: "Monkey D Luffy",
    relation: "Brother",
    number: "919009009099",
  },
  {
    img: "/dragon.png",
    name: "Dragon D Monkey",
    relation: "Father",
    number: "919009009099",
  },
  {
    img: "/garp.png",
    name: "Monkey D Garp",
    relation: "Grand Father",
    number: "919009009099",
  },
];