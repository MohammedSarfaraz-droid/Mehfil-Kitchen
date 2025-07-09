// 'use client'
// import { useEffect } from 'react';

// export default function ElfsightReviews() {
//   useEffect(() => {
//     if (document.querySelector('script[src*="elfsight.com"]')) return;

//     const script = document.createElement('script');
//     script.src = 'https://static.elfsight.com/platform/platform.js';
//     script.defer = true;
//     script.async = true;
//     document.body.appendChild(script);

//     return () => {
//       const elfsightScript = document.querySelector('script[src*="elfsight.com"]');
//       if (elfsightScript) {
//         document.body.removeChild(elfsightScript);
//       }
//     };
//   }, []);

//   return (
//     <div
//       className="elfsight-app-5a07aabb-6ec1-43bd-bafb-53d227bccd3f bg-cover bg-center bg-no-repeat p-8 text-xl sm:text-2xl"
//       data-elfsight-app-lazy
//       style={{
//         backgroundImage: 'url("/testimonial-banner.png")',
//         overflow: 'hidden',
//         minHeight: '300px'
//       }}
//     >
//       <style>
//         {`
//           @media (max-width: 640px) {
//             .jYSehp {
//               font-size: 25px !important;
//             }
//           }
//         `}
//       </style>
//     </div>
//   );
// }


"use client";

import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

type Review = {
  name: string;
  date: string;
  rating: number;
  text: string;
  detailText: string;
  image: string;
};

const reviews: Review[] = [
  {
    name: "Abdullah Khan",
    date: "5 months ago",
    rating: 5,
    text: "They have over 2000 reviews on Google with a 4.9 rating—obviously doing something right!",
    detailText: "With a 4.9⭐ average from over 2000 Google reviews, Mehfil Kitchen clearly delivers outstanding food and service. Can't wait to try more flavors!",
    image: "/avatar.jpg",
  },
  {
    name: "Vinay Rock Killer",
    date: "Mar 20, 2024",
    rating: 5,
    text: "Oreo thickshake is delicious, my kids loved it.",
    detailText: "Ordered the Oreo thickshake—kids absolutely loved it. Great options for families and delicious desserts to complement the meal.",
    image: "/avatar.jpg",
  },
  {
    name: "Saiabhi Dodla",
    date: "Mar 20, 2024",
    rating: 5,
    text: "Both food and drinks are excellent—great options to choose.",
    detailText: "Both the food and drinks were excellent—enjoyed a wide selection, everything tasted fresh and flavorful. Highly recommend for variety seekers!",
    image: "/avatar.jpg",
  },
  {
    name: "Jason Patel",
    date: "recent review",
    rating: 5,
    text: "Absolutely loved the Chicken 65 and Mehfil Fish Fry!",
    detailText: "Absolutely loved the Chicken 65 and Mehfil Fish Fry! The spices hit just right—best South Indian‑style food I've had in the city.",
    image: "/avatar.jpg",
  },
  {
    name: "Nida Rahman",
    date: "recent review",
    rating: 5,
    text: "The Hyderabadi Mutton Biryani was out of this world!",
    detailText: "The Hyderabadi Mutton Biryani was out of this world! Aromatic, spicy, and absolutely authentic—truly brought me back to Hyderabad.",
    image: "/avatar.jpg",
  },
];


const ReviewSlider = () => {
  const [selectedReview, setSelectedReview] = useState<Review | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setSelectedReview(null);
      }
    };

    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedReview(null);
      }
    };

    if (selectedReview) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeydown);
      modalRef.current?.focus();
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeydown);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeydown);
    };
  }, [selectedReview]);

  return (
    <section className="py-8 bg-[#f9f9f9]" aria-labelledby="overall-rating-heading" style={{
               backgroundImage: 'url("/testimonial-banner.png")',
               overflow: 'hidden',
               minHeight: '300px'
             }}>
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-white">
                        Testimonials
                    </h2>
        <h2 id="overall-rating-heading" className="text-4xl font-bold text-white flex items-center justify-center font-inter">
          4.7
          <span className="ml-2 text-[#FFBB29]" aria-hidden="true">
            ★★★★★
          </span>
          <span className="sr-only">out of 5 stars</span>
        </h2>
        <Link
          href="https://www.google.com/search?sca_esv=2dee1d6b047c2499&sxsrf=AE3TifP0LL7Hv0t_8DQVbOZN9lQHhZfeog:1751890645587&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-Ex253afy6xhITSHq9spx6L2qeBWv2lqpKbDJvDA48T1NbHYFQ3mQquUgAGuEOlIddkETuTze-Jx-bF-DC3b5p55jeu6B&q=MEHFIL+KITCHEN+Reviews&sa=X&ved=2ahUKEwjAgvac3aqOAxWNS2wGHXazHVMQ0bkNegQIJBAE&biw=1920&bih=945&dpr=1#lrd=0x880fcf3ea7599a51:0x88cdb651c9c153f0,3,,,,"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Review us on Google. Opens in a new tab."
        >
          <button className="mt-2 bg-[#e6d38d] text-black px-4 py-2 rounded-full text-sm hover:bg-[#1a3c34] hover:text-white font-inter">
            Review us on Google
          </button>
        </Link>
      </motion.div>

      <div className="px-4 max-w-6xl md:mx-auto" role="region" aria-label="Customer Reviews Slider">
        <Swiper
        className="!pb-10"
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
          aria-live="polite"
          aria-atomic="true"
        >
          {reviews.map((review, idx) => (
            <SwiperSlide
              key={idx}
              className="h-full"
              role="group"
              aria-roledescription="slide"
              aria-label={`Review ${idx + 1} of ${reviews.length}`}
            >
              <motion.div
                className="bg-transparent border-2 border-[#e6d38d] text-white rounded-xl p-4 w-[250px] h-[300px] flex flex-col gap-2 items-start mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                aria-labelledby={`review-name-${idx}`}
                aria-describedby={`review-text-${idx}`}
                tabIndex={0}
              >
                <div className="flex items-center gap-3">
                  <Image
                    src={review.image}
                    alt={`${review.name}'s avatar`}
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-base font-inter" id={`review-name-${idx}`}>
                      {review.name}
                    </p>
                    <p className="text-xs text-gray-300 font-inter">{review.date}</p>
                  </div>
                </div>
                <div className="text-[#FFBB29] text-3xl mt-2" aria-hidden="true">
                  {"★".repeat(review.rating)}
                </div>
                <p className="sr-only">{review.rating} out of 5 stars</p>
                <p className="text-sm text-left mt-2 leading-snug font-bevietnam" id={`review-text-${idx}`}>
                  {review.text}
                </p>
                <button
                  className="text-sm text-white hover:text-[#e63a27] mt-2 cursor-pointer font-bevietnam"
                  onClick={() => setSelectedReview(review)}
                  aria-haspopup="dialog"
                  aria-controls="review-modal"
                  aria-expanded={selectedReview !== null}
                  aria-label={`Read full review by ${review.name}`}
                >
                  Read more
                </button>
                <div className="flex items-center gap-2 text-xs text-gray-300 mt-3">
                  <Image
                    src="/Google_logo.webp"
                    alt="Google Logo"
                    width={16}
                    height={16}
                    className="w-4 h-4"
                  />
                  <span className="font-bevietnam">Posted on</span>
                  <span className="font-semibold text-white font-bevietnam">Google</span>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <AnimatePresence>
        {selectedReview && (
          <motion.div
            className="fixed inset-0 bg-black/40 bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
            id="review-modal"
            tabIndex={-1}
          >
            <motion.div
              ref={modalRef}
              className="bg-white rounded-xl p-6 shadow-lg w-full max-w-md relative"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              tabIndex={0}
            >
              <h2 id="modal-title" className="sr-only">
                Full review by {selectedReview.name}
              </h2>
              <button
                className="absolute top-3 right-3 text-gray-600 hover:text-black text-2xl"
                onClick={() => setSelectedReview(null)}
                aria-label="Close review modal"
              >
                &times;
              </button>
              <div className="flex items-start gap-3 mb-4">
                <Image
                  src={selectedReview.image}
                  alt={`${selectedReview.name}'s avatar`}
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-semibold">{selectedReview.name}</p>
                  <p className="text-sm text-gray-500">{selectedReview.date}</p>
                </div>
              </div>
              <div className="text-[#ffbb29] text-2xl" aria-hidden="true">
                {"★".repeat(selectedReview.rating)}
              </div>
              <p className="sr-only">{selectedReview.rating} out of 5 stars</p>
              <p id="modal-description" className="mt-3 text-gray-700 text-sm text-left whitespace-pre-line">
                {selectedReview.detailText}
              </p>
              <div className="flex items-center gap-2 mt-4 text-sm text-gray-500">
                <Image
                  src="/reviews/Google_logo.png"
                  alt="Google Logo"
                  width={16}
                  height={16}
                />
                <span>Posted on</span>
                <strong>Google</strong>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ReviewSlider;
