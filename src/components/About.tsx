import Image from 'next/image';

export default function AboutSection() {
    return (
        <section className="w-full pt-16 pb-8 px-4">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">

                {/* Left Content */}
                <div className="md:w-1/2 text-center">
                    <h2 className="text-[36px] font-semibold mb-6 text-gray-800">
                        About Mehfil Kitchen
                    </h2>
                    <div className="text-[16px] text-gray-700 space-y-2 leading-relaxed">
                        <p>
                            At Mehfil Kitchen we offer meals of excellent quality and invite you to try our delicious food.
                        </p>
                        <p>
                            The key to our success is simple: providing quality consistent food that taste great every single time.
                            We pride ourselves on serving our customers delicious genuine dishes like: Indian Biryani, Kebabs, and more.
                        </p>
                        <p>
                            Eat delicious food. Grab a drink. But most of all, relax! We thank you from the bottom of our hearts for your continued support
                        </p>
                    </div>
                </div>


                {/* Right Image with Rotation */}
                <div className="md:w-1/2 flex justify-center items-center overflow-hidden">
                    <div className="w-72 sm:w-72 md:w-[400px] aspect-square rounded-full overflow-hidden relative animate-[spin_20s_linear_infinite]">
                        <Image
                            src="/about-biryani.png"
                            alt="About Mehfil"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>


            </div>
        </section>
    );
}
