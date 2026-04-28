import RotatingText from "./RotatingText";

export default function HeroSection() {
    return (
        <section className="bg-[#0A0A0A] pt-16 pb-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[100px] rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 blur-[100px] rounded-full"></div>
            <div className="container mx-auto px-4 relative z-10 text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                    Let's Solve Your{" "}
                    <span className="text-primary">DevOps Challenges</span>
                </h1>

                <RotatingText />
            </div>
        </section>
    );
}