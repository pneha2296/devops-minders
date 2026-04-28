import { services } from '../../constants/services';
import { ServiceCard } from './ServiceCard';
export function ServicesSection() {
    return (
        <section className="py-24 [#121212] relative" id="services">
            <div className="container mx-auto px-4">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 relative inline-block" >
                        Our Expertise
                        <div className="absolute -bottom-2 left-0 w-full h-1 bg-primary origin-left scale-x-0 transition-transform duration-700 data-[inview=true]:scale-x-100"></div>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto mt-6">
                        Comprehensive DevOps solutions designed to optimize your workflow, enhance security, and scale your business effortlessly.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            title={service.title}
                            description={service.description}
                            icon={service.icon}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};