import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { faqs } from '../../constants/faqs';

export function FAQSection () {
    const [activeIdx, setActiveIdx] = useState<number | null>(0); // Default first one open

    const toggleFAQ = (idx: number) => {
        setActiveIdx(activeIdx === idx ? null : idx);
    };

    return (
        <section className="py-24 bg-black relative">
            <div className='container mx-auto px-4 max-w-4xl'>
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Got Questions?</h2>
                <p className="text-gray-400">Everything you need to know about working with us.</p>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
                {faqs.map((item, idx) => (
                    <div
                        key={idx}
                        className="border border-white/10 rounded-lg overflow-hidden bg-[#111111]"
                    >
                        <button
                            onClick={() => toggleFAQ(idx)}
                            className="w-full flex items-center justify-between p-5 text-left"
                        >
                            <span className="font-medium hover:text-primary hover:cursor-pointer hover:underline">{item.question}</span>
                            <ChevronDown
                                className={`w-5 h-5 transition-transform duration-300 ${activeIdx === idx ? 'rotate-180' : ''}`}
                            />
                        </button>

                        <AnimatePresence>
                            {activeIdx === idx && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                                >
                                    <div className="px-5 pb-5 text-gray-400 text-sm leading-relaxed">
                                        {item.answer}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
            </div>
        </section>
    );
};