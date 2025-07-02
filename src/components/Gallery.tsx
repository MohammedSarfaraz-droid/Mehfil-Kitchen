"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function GallerySection() {
    const [visibleBlocks, setVisibleBlocks] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [animateNewBlock, setAnimateNewBlock] = useState(false);

    const allImages = [
        // Block 1
        '/gallery/1.png', '/gallery/9.png', '/gallery/3.png', '/gallery/4.png', '/gallery/5.png', '/gallery/6.png', '/gallery/7.png',
        // Block 2 (Load more)
        '/gallery/8.png', '/gallery/9.png', '/gallery/10.png', '/gallery/11.png', '/gallery/12.png', '/gallery/13.png', '/gallery/14.png',
        // Add more if needed
    ];

    const loadMore = async () => {
        setIsLoading(true);

        // Simulate loading time for better UX
        await new Promise(resolve => setTimeout(resolve, 800));

        setVisibleBlocks(prev => prev + 1);
        setAnimateNewBlock(true);
        setIsLoading(false);
    };

    // Reset animation state after new block is added
    useEffect(() => {
        if (animateNewBlock) {
            const timer = setTimeout(() => setAnimateNewBlock(false), 1000);
            return () => clearTimeout(timer);
        }
    }, [animateNewBlock]);

    const blocks = [];
    for (let i = 0; i < visibleBlocks; i++) {
        const images = allImages.slice(i * 7, i * 7 + 7);
        if (images.length < 7) break;

        const isNewBlock = i === visibleBlocks - 1 && animateNewBlock;

        blocks.push(
            <div
                key={i}
                className={`w-full flex justify-center px-4 transition-all duration-1000 ease-out ${isNewBlock
                    ? 'opacity-0 translate-y-8 animate-fadeInUp'
                    : 'opacity-100 translate-y-0'
                    }`}
            >
                {/* Desktop Layout (lg and above) */}

                <div className='overflow-x-hidden'>
                    <div className="hidden lg:flex gap-4 mb-12 max-w-[1120px] w-full">
                        {/* Left Column */}
                        <div className="flex flex-col gap-4 w-[458px] flex-shrink-0">
                            <div className="w-full h-[440px] relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                                <Image
                                    src={images[0]}
                                    alt="Gallery image"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-500"
                                    sizes="458px"
                                />
                            </div>
                            <div className="w-full h-[654px] relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                                <Image
                                    src={images[1]}
                                    alt="Gallery image"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-500"
                                    sizes="458px"
                                />
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="flex flex-col gap-4 w-[646px] flex-shrink-0">
                            <div className="flex gap-4">
                                <div className="w-[360px] h-[327px] relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                                    <Image
                                        src={images[2]}
                                        alt="Gallery image"
                                        fill
                                        className="object-cover hover:scale-105 transition-transform duration-500"
                                        sizes="360px"
                                    />
                                </div>
                                <div className="w-[261px] h-[327px] relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                                    <Image
                                        src={images[3]}
                                        alt="Gallery image"
                                        fill
                                        className="object-cover hover:scale-105 transition-transform duration-500"
                                        sizes="261px"
                                    />
                                </div>
                            </div>
                            <div className="w-full h-[408px] relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                                <Image
                                    src={images[4]}
                                    alt="Gallery image"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-500"
                                    sizes="646px"
                                />
                            </div>
                            <div className="flex gap-4">
                                <div className="w-[360px] h-[327px] relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                                    <Image
                                        src={images[5]}
                                        alt="Gallery image"
                                        fill
                                        className="object-cover hover:scale-105 transition-transform duration-500"
                                        sizes="360px"
                                    />
                                </div>
                                <div className="w-[261px] h-[327px] relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                                    <Image
                                        src={images[6]}
                                        alt="Gallery image"
                                        fill
                                        className="object-cover hover:scale-105 transition-transform duration-500"
                                        sizes="261px"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile & Tablet Layout (below lg) */}
                <div className="lg:hidden w-full max-w-4xl">
                    {/* Mobile: Single Column Layout */}
                    <div className="block md:hidden">
                        <div className="flex flex-col gap-4 mb-8">
                            {/* First two images with original proportions */}
                            <div className="w-full aspect-[458/440] relative rounded-lg overflow-hidden shadow-lg">
                                <Image
                                    src={images[0]}
                                    alt="Gallery image"
                                    fill
                                    className="object-cover"
                                    sizes="100vw"
                                />
                            </div>
                            <div className="w-full aspect-[458/654] relative rounded-lg overflow-hidden shadow-lg">
                                <Image
                                    src={images[1]}
                                    alt="Gallery image"
                                    fill
                                    className="object-cover"
                                    sizes="100vw"
                                />
                            </div>

                            {/* Row of two images */}
                            <div className="flex gap-4">
                                <div className="flex-[360] aspect-[360/327] relative rounded-lg overflow-hidden shadow-lg">
                                    <Image
                                        src={images[2]}
                                        alt="Gallery image"
                                        fill
                                        className="object-cover"
                                        sizes="50vw"
                                    />
                                </div>
                                <div className="flex-[261] aspect-[261/327] relative rounded-lg overflow-hidden shadow-lg">
                                    <Image
                                        src={images[3]}
                                        alt="Gallery image"
                                        fill
                                        className="object-cover"
                                        sizes="50vw"
                                    />
                                </div>
                            </div>

                            {/* Wide image */}
                            <div className="w-full aspect-[652/408] relative rounded-lg overflow-hidden shadow-lg">
                                <Image
                                    src={images[4]}
                                    alt="Gallery image"
                                    fill
                                    className="object-cover"
                                    sizes="100vw"
                                />
                            </div>

                            {/* Another row of two images */}
                            <div className="flex gap-4">
                                <div className="flex-[360] aspect-[360/327] relative rounded-lg overflow-hidden shadow-lg">
                                    <Image
                                        src={images[5]}
                                        alt="Gallery image"
                                        fill
                                        className="object-cover"
                                        sizes="50vw"
                                    />
                                </div>
                                <div className="flex-[261] aspect-[261/327] relative rounded-lg overflow-hidden shadow-lg">
                                    <Image
                                        src={images[6]}
                                        alt="Gallery image"
                                        fill
                                        className="object-cover"
                                        sizes="50vw"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tablet: Balanced Two Column Layout */}
                    <div className="hidden md:flex lg:hidden gap-4 mb-8">
                        {/* Left Column */}
                        <div className="flex flex-col gap-4 w-1/2">
                            <div className="w-full aspect-[458/440] relative rounded-lg overflow-hidden shadow-lg">
                                <Image
                                    src={images[0]}
                                    alt="Gallery image"
                                    fill
                                    className="object-cover transition-transform duration-500 hover:scale-105"
                                    sizes="50vw"
                                />
                            </div>
                            <div className="w-full aspect-[458/654] relative rounded-lg overflow-hidden shadow-lg">
                                <Image
                                    src={images[1]}
                                    alt="Gallery image"
                                    fill
                                    className="object-cover transition-transform duration-500 hover:scale-105"
                                    sizes="50vw"
                                />
                            </div>
                            <div className="w-full aspect-[360/327] relative rounded-lg overflow-hidden shadow-lg">
                                <Image
                                    src={images[2]}
                                    alt="Gallery image"
                                    fill
                                    className="object-cover transition-transform duration-500 hover:scale-105"
                                    sizes="50vw"
                                />
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="flex flex-col gap-4 w-1/2">
                            <div className="w-full aspect-[261/327] relative rounded-lg overflow-hidden shadow-lg">
                                <Image
                                    src={images[3]}
                                    alt="Gallery image"
                                    fill
                                    className="object-cover transition-transform duration-500 hover:scale-105"
                                    sizes="50vw"
                                />
                            </div>
                            <div className="w-full aspect-[652/408] relative rounded-lg overflow-hidden shadow-lg">
                                <Image
                                    src={images[4]}
                                    alt="Gallery image"
                                    fill
                                    className="object-cover transition-transform duration-500 hover:scale-105"
                                    sizes="50vw"
                                />
                            </div>
                            <div className="w-full aspect-[360/327] relative rounded-lg overflow-hidden shadow-lg">
                                <Image
                                    src={images[5]}
                                    alt="Gallery image"
                                    fill
                                    className="object-cover transition-transform duration-500 hover:scale-105"
                                    sizes="50vw"
                                />
                            </div>
                            <div className="w-full aspect-[261/327] relative rounded-lg overflow-hidden shadow-lg">
                                <Image
                                    src={images[6]}
                                    alt="Gallery image"
                                    fill
                                    className="object-cover transition-transform duration-500 hover:scale-105"
                                    sizes="50vw"
                                />
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        );
    }

    return (
        <section className="py-8 sm:py-12 lg:py-16 ">
            <div className="w-full">
                <div className="text-center mb-8 sm:mb-12 px-4">
                    <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-semibold text-[#1a3c34] mb-3 sm:mb-4">
                        Gallery
                    </h2>
                    <p className="text-sm sm:text-base text-gray-700 max-w-2xl mx-auto">
                        Cooked with passion, served with love
                    </p>
                </div>

                {/* Gallery Blocks */}
                <div className="w-full">
                    {blocks}
                </div>

                {/* Load More Button */}
                {visibleBlocks * 7 < allImages.length && (
                    <div className="text-center mt-8 sm:mt-12 px-4">
                        <button
                            onClick={loadMore}
                            disabled={isLoading}
                            className="relative bg-[#1a3c34] text-white px-6 sm:px-8 py-3 rounded-lg font-medium hover:bg-[#2a5c54] disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                        >
                            {isLoading ? (
                                <>
                                    <span className="inline-flex items-center">
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Loading...
                                    </span>
                                </>
                            ) : (
                                'Load More Images'
                            )}
                        </button>
                    </div>
                )}
            </div>

            <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out forwards;
        }
      `}</style>
        </section>
    );
}