"use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import { video } from "framer-motion/client";



const TikTokEmbed: React.FC = () => {
  return (
    <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto" // preload only if it's lightweight
        className="absolute top-0 left-0 w-full h-full object-cover"
        poster="/fallback-image.jpg" // in case video lags
      >
        <source src="/footervid.mov" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

  );
};

export default TikTokEmbed;

// type Campaign = {
//   title: string;
//   subtitle?: string;
//   platform?: string;
//   deliverables?: string;
//   results?: string[];
//   category: string;
// };

// const campaigns: Campaign[] = [
//   {
//     title: "The Lagos Love Festival 1.0",
//     subtitle: "Influencer: Big Bad Reni | Platform: Twitter (X)",
//     deliverables: "6 tweets, 2 Spaces & Event Ticket Giveaway",
//     results: [
//       "695 tuned in for first space",
//       "494 tuned in to second space",
//       "Total tweet impressions: 13,712",
//       "Avg. impressions per tweet: 1,371",
//       "10 free tickets given out",
//     ],
//     category: "Influencer Campaign Coordination",
//   },
//   {
//     title: "Abba's Fine Girl by Tobiloba",
//     subtitle: "Influencer: Omoloto (TikTok & Instagram)",
//     deliverables: "2 UGC-style videos (TikTok + Instagram)",
//     results: [
//       "TikTok (24hr): 5k+ views | 1k+ likes | 11 comments | 14 saves | 11 shares",
//       "TikTok (1 month): 7,448 views",
//       "Instagram (48hr): 16.3k views | 2k+ likes",
//       "Instagram (1 month): 46.1k views | 5k+ likes",
//     ],
//     category: "Influencer Campaign Coordination",
//   },
//   {
//     title: "The Threshold: 2025 Induction Ceremony",
//     deliverables: "Directed a team, managed digital strategy, created TikTok-ready videos",
//     results: [
//       "850,000+ organic views across TikTok and Instagram",
//       "TikTok following grew from 800+ to 1,700+ in 3 months",
//     ],
//     category: "Entertainment Campaign",
//   },
//   {
//     title: "NBJ VIP (Luxury Aviation)",
//     deliverables: "Aspirational videos, LinkedIn thought-leadership, Paid Ads",
//     results: [
//       "3 Reels with 25k–45k views",
//       "Avg. video view: 1k+",
//       "10% engagement rate",
//       "Sales started within 24hrs of launch",
//     ],
//     category: "Social Media Marketing",
//   },
//   {
//     title: "Woodland Lounge (Lead City University)",
//     deliverables: "Relatable TikTok content using trending sounds",
//     results: [
//       "120,000+ organic views in 3 months",
//       "60% follower growth",
//       `"I saw this on TikTok" mentions`,
//     ],
//     category: "Social Media Marketing",
//   },
//   {
//     title: "Fan Critic Show",
//     deliverables: "Scripting, filming, editing of show pilot",
//     category: "Short-Form Video Content Creation",
//   },
//   {
//     title: "Jisola Rebecca Interiors",
//     deliverables: "Editing of provided footage for social",
//     category: "Short-Form Video Content Creation",
//   },
// ];

// const PortfolioSection = () => {
//   const [activeIndex, setActiveIndex] = useState<number | null>(null);

//   return (
//     <section className=" py-20 px-6 lg:px-24">
//       <motion.h2
//         className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#5B1E1B]"
//         initial={{ y: 40, opacity: 0 }}
//         whileInView={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.6 }}
//       >
//         Portfolio Highlights
//       </motion.h2>

//       <div className="space-y-8">
//         {campaigns.map((item, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.4, delay: index * 0.1 }}
//             className="bg-white shadow-sm rounded-xl p-6 hover:shadow-lg transition"
//           >
//             <div
//               onClick={() => setActiveIndex(activeIndex === index ? null : index)}
//               className="cursor-pointer"
//             >
//               <h3 className="text-xl font-semibold text-[#5B1E1B]">
//                 {item.title}
//               </h3>
//               {item.subtitle && <p className="text-sm text-gray-600">{item.subtitle}</p>}
//               <p className="mt-2 text-gray-700">{item.category}</p>
//             </div>
//               <div>
//                 <video src="https://www.tiktok.com/@performingartslcu/video/7509557937363373317" data-video-id="7509557937363373317"></video>
//               </div>
//             {activeIndex === index && (
//               <div className="mt-4 space-y-2 text-sm text-gray-800">
//                 {item.deliverables && (
//                   <p>
//                     <strong>Deliverables:</strong> {item.deliverables}
//                   </p>
//                 )}
//                 {item.results?.length && (
//                   <ul className="list-disc ml-5 mt-2 space-y-1">
//                     {item.results.map((res, i) => (
//                       <li key={i}>{res}</li>
//                     ))}
//                   </ul>
//                 )}
//               </div>
//             )}
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default PortfolioSection;



