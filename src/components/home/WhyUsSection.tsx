import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export function WhyUsSection() {
    const benefits = [
        "99.9% SLA Guaranteed",
        "India-based 24/7 Team",
        "Cost-Optimized Solutions",
        "Enterprise-Grade Security",
    ];

    return (
        <section className="relative w-full overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">

                {/* Left Content */}
                <div className="bg-[#1A1A1A] py-20 px-8 md:px-16 lg:px-24 flex flex-col justify-center border-r-[12px] border-primary">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Why DevOpsMinders?</h2>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            6+ years of experience since 2021. We build robust, secure, and scalable
                            cloud engines tailored for your business growth.
                        </p>
                    </div>

                    <ul className="space-y-4">
                        {benefits.map((benefit, i) => (
                            <li key={i} className="flex items-center gap-3 text-lg text-white font-medium">
                                <CheckCircle2 className="w-5 h-5 text-red-600" />
                                {benefit}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right Content - Interactive Red Section */}
                <div className="bg-primary py-20 px-8 md:px-16 lg:px-24 flex items-center justify-center relative overflow-hidden group">
                    {/* Subtle Dotted Pattern Overlay */}
                    <div className="absolute bottom-10 right-10 opacity-30 grid grid-cols-5 gap-2">
                        {[...Array(25)].map((_, i) => (
                            <div key={i} className="w-1 h-1 bg-white rounded-full"></div>
                        ))}
                    </div>

                    {/* Glassmorphism Card */}
                    <motion.div
                        whileHover="hover"
                        className="relative w-full max-w-sm aspect-square bg-gradient-to-tr from-black/40 to-black/10 border border-white/20 rounded-3xl flex flex-col items-center justify-center text-center p-8 cursor-pointer overflow-hidden group shadow-2xl"
                    >
                        {/* 10x Circle with Infinite Fade-out Effect */}
                        <div className="relative mb-8">
                            {/* The Inner 10x Circle */}
                            <div className="w-24 h-24 rounded-full border-2 border-white flex items-center justify-center text-2xl font-bold relative z-10">
                                10x
                            </div>

                            {/* The 1s Infinite White Fade-out Pulse */}
                            <motion.div
                                animate={{ scale: 1.8, opacity: 0 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "easeOut" }}
                                className="absolute inset-0 rounded-full border-2 border-white/50"
                            />
                            {/* Secondary background pulse for depth */}
                            <div className="absolute -inset-4 bg-white/5 rounded-full blur-xl"></div>
                        </div>

                        {/* Faster Deployments Text with Hover Slide-in Effect */}
                        <div className="space-y-2 overflow-hidden">
                            <h3 className="text-2xl text-white font-bold mb-2">Faster Deployments</h3>
                            <p className="text-white/80">
                                Average ROI experienced by our clients.
                            </p>
                        </div>

                        {/* Decorative Background Glow */}
                        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-red-500/20 rounded-full blur-3xl -z-10"></div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};