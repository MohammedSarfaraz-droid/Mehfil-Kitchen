import { GoGift } from "react-icons/go";
import { HiOutlineCake } from "react-icons/hi";
import { LuPartyPopper } from "react-icons/lu";
import { BiCalendarEvent } from "react-icons/bi";
import { FaUserTie } from "react-icons/fa";
import { FaRunning } from "react-icons/fa";
import Link from 'next/link';

const services = [
    {
        title: 'Birthday Catering',
        desc: 'Celebrate birthdays with rich flavors from our menu – from kabobs to biryanis, curated to impress every guest.',
        icon: <GoGift />,
        link: '/services/birthday'
    },
    {
        title: 'Wedding Catering',
        desc: 'Make your special day memorable with signature Hyderabadi dishes served fresh with elegance and authenticity.',
        icon: <HiOutlineCake />,
        link: '/services/wedding'
    },
    {
        title: 'Party Orders',
        desc: 'Host flavorful parties with our customized menus featuring Chicken 65, Kalimirchi Beef, and more crowd favorites.',
        icon: <LuPartyPopper />,
        link: '/services/party'
    },
    {
        title: 'Event Catering',
        desc: 'From intimate events to large gatherings, we provide flexible catering solutions with consistent quality and taste.',
        icon: <BiCalendarEvent />,
        link: '/services/event'
    },
    {
        title: 'Corporate Meals',
        desc: 'Delight your team or clients with professionally prepared meals that deliver comfort, quality, and Hyderabadi spice.',
        icon: <FaUserTie />,
        link: '/services/corporate'
    },
    {
        title: 'On-Demand Orders',
        desc: 'Call +1 786-763-4000 to place an order for quick pickup or delivery – freshly prepared meals at your convenience.',
        icon: <FaRunning />,
        link: '/services/ondemand'
    },
];

export default function ServicesSection() {
    return (
        <section>
            <div className="w-full py-16 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-[36px] font-semibold text-[#1a3c34] mb-4">Our Services</h2>
                    <p className="text-gray-700 mb-12 max-w-2xl mx-auto">
                        Mehfil Kitchen offers authentic Hyderabadi cuisine for all occasions. Whether it&apos;s a private gathering or a grand celebration.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, idx) => (
                            <Link href={service.link} key={idx} passHref>
                                <div
                                    className="bg-[#e6d38d] text-black border-2 border-[#eee] px-[42px] py-[30px] rounded-[10px] text-center transition-all duration-300 hover:bg-[#1a3c34] hover:text-white cursor-pointer"
                                >
                                    <div className="flex justify-center mb-4">
                                        <span className="text-[50px]">
                                            {service.icon}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                                    <p className="text-[15px]">{service.desc}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            <div className="relative w-full">
                <div className="w-full h-[350px] sm:h-[650px] bg-[url('/services-banner.png')] bg-cover bg-center"></div>
                <div className="absolute top-[-1px] left-0 w-full h-[20px] bg-[url('/zigzag.svg')] bg-cover bg-no-repeat z-[1]"></div>
                <div className="absolute bottom-[-1px] left-0 w-full h-[20px] bg-[url('/zigzag.svg')] bg-cover bg-no-repeat z-[1] rotate-180"></div>    
            </div>
        </section>
    );
}