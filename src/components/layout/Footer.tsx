import {
  MapPin,
  Phone,
  Mail
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-white pt-12">
      
      {/* Top border */}
      <div className="bg-primary border-t-4 border-primary" />

      <div className="container mx-auto px-4 py-16 grid md:grid-cols-4 gap-10">
        
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-primary text-white font-bold px-3 py-2 rounded">
              DM
            </div>
            <h2 className="text-xl font-semibold">DevOpsMinders</h2>
          </div>

          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Engineering Reliability. Delivering Excellence. We specialize in
            providing top-tier DevOps and Cloud consulting services to help you
            scale effortlessly.
          </p>

          <div className="flex gap-4 text-gray-400">
            <img src="/assets/icons/linkedin.svg" alt="DevOps Minders" className="w-[18px] h-[18px] invert brightness-0 cursor-pointer" />
            <img src="/assets/icons/twitter.svg" alt="DevOps Minders" className="w-[18px] h-[18px] invert brightness-0 cursor-pointer" />
            <img src="/assets/icons/github.svg" alt="DevOps Minders" className="w-[18px] h-[18px] invert brightness-0 cursor-pointer" />
            <img src="/assets/icons/insta.svg" alt="DevOps Minders" className="w-[18px] h-[18px] invert brightness-0 cursor-pointer" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Portfolio</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Services</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li>Cloud Migration</li>
            <li>CI/CD Automation</li>
            <li>Kubernetes Orchestration</li>
            <li>Infrastructure as Code</li>
            <li>DevSecOps</li>
            <li>24/7 Monitoring</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>

          <div className="space-y-4 text-gray-400 text-sm">
            <div className="flex items-start gap-3">
              <MapPin className="text-primary mt-1" size={18} />
              <p>India-based team serving clients globally.</p>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="text-primary" size={18} />
              <p>+91 88727 81496</p>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="text-primary" size={18} />
              <p>info@devopsminders.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 mt-10 py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center  text-xs text-gray-500">
          <p>© 2026 DevOpsMinders Tech Pvt Ltd. All rights reserved.</p>

          <div className="flex gap-6 mt-3 md:mt-0">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
            <span className="hover:text-white cursor-pointer">GST Registered Company</span>
          </div>
        </div>
      </div>
    </footer>
  );
}


// import { navigation } from '../../constants/navigation'

// export function Footer() {
//   return (
//     <footer className="border-t border-white/10 bg-black text-white">
//       <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
//         <div>
//           <p className="text-lg font-semibold uppercase tracking-[0.2em]">
//             DevOps Minders
//           </p>
//           <p className="mt-4 max-w-md text-sm leading-7 text-white/65">
//             We build dependable AI and DevOps systems that help fast-moving
//             teams automate confidently, scale cleanly, and stay available.
//           </p>
//         </div>

//         <div>
//           <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
//             Navigation
//           </p>
//           <div className="mt-4 flex flex-col gap-3 text-sm text-white/80">
//             {navigation.map((item) => (
//               <a
//                 key={item.href}
//                 href={item.href}
//                 className="transition hover:text-white"
//               >
//                 {item.label}
//               </a>
//             ))}
//           </div>
//         </div>

//         <div id="contact">
//           <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
//             Contact
//           </p>
//           <div className="mt-4 space-y-3 text-sm text-white/80">
//             <p>hello@devopsminders.com</p>
//             <p>Cloud automation, AI workflows, and always-on delivery systems.</p>
//           </div>
//         </div>
//       </div>

//       <div className="border-t border-white/10">
//         <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-xs text-white/55 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
//           <p>© 2026 DevOps Minders. All rights reserved.</p>
//           <p>Built for modern teams that move fast and scale responsibly.</p>
//         </div>
//       </div>
//     </footer>
//   )
// }
