import React from 'react';
import { ExternalLink } from 'lucide-react';
import InfiniteMarquee from '../ui/InfiniteMarquee';
import { clients } from '../../constants/clients';

const ClientsSection: React.FC = () => {
    return (
        <section className="py-24 bg-black overflow-hidden relative">
            <div className="container mx-auto px-4 mb-12">
                <div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Trusted by the Best</h2>
                    <p className="text-gray-400 text-lg">Delivering robust infrastructure for global brands and fast-growing startups.</p>
                </div>
            </div>

            <InfiniteMarquee speed={50}>
                {clients.map((client, idx) => (
                    <div
                        key={idx}
                        className="
              group w-[300px] bg-[#111111] p-6 rounded-xl border border-white/5 
              flex flex-col justify-between relative
              transition-all duration-500 ease-out 
              hover:scale-[1.05] hover:z-10 hover:border-red-600/30 hover:bg-[#161616]
              cursor-pointer
            "
                    >
                        <div className="flex justify-between items-start mb-8">
                            <div>
                                <h3 className="text-xl font-bold group-hover:text-white transition-colors">
                                    {client.name}
                                </h3>
                                <p className="text-sm text-gray-500 mt-1">{client.url}</p>
                            </div>
                            <ExternalLink className="w-4 h-4 text-gray-600 group-hover:text-red-500 transition-colors" />
                        </div>

                        <div className="mt-auto">
                            <span className="inline-block px-3 py-1 rounded-full bg-red-950/20 border border-red-900/30 text-red-500 text-[10px] tracking-wider font-semibold">
                                {client.tag}
                            </span>
                        </div>
                    </div>
                ))}
            </InfiniteMarquee>
        </section>
    );
};

export default ClientsSection;