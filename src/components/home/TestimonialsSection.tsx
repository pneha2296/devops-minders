import { testimonials } from '../../constants/testimonials';
import InfiniteMarquee from '../ui/InfiniteMarquee';

export function TestimonialsSection() {
    return (
        <section className="py-24 bg-[#121212] overflow-hidden">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Hear from Our Clients</h2>
                <div className="w-24 h-1 bg-primary mx-auto"></div>
            </div>

            {/* Usage of the reusable scroll component */}
            <InfiniteMarquee speed={60}>
                {testimonials.map((t, idx) => (
                    <div
                        key={idx}
                        className="w-[400px] bg-[#161616] p-8 rounded-xl border border-white/5 flex flex-col justify-between transition-all duration-500 ease-out 
      hover:scale-[1.03] hover:z-10 hover:border-red-600/30 hover:shadow-2xl hover:shadow-red-900/10
      cursor-default"
                    >
                        <div>
                            <div className="flex gap-1 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className="text-yellow-500 text-lg">★</span>
                                ))}
                            </div>
                            <p className="text-gray-300 text-lg mb-8 relative z-10 italic flex-grow">"{t.quote}"</p>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-red-900/30 border border-red-600/50 flex items-center justify-center text-red-500 font-bold text-xs">
                                {t.name[0]}
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold">{t.name}</h4>
                                <p className="text-xs text-gray-500">{t.role}, {t.company}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </InfiniteMarquee>
        </section>
    );
};