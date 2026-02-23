import { Link } from "react-router";
import {
  Calculator,
  Facebook,
  Twitter,
  Instagram,
  Mail,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Zap
} from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Kalkulator Umur", path: "/kalkulator-umur" },
    { label: "Selisih Tanggal", path: "/selisih-tanggal" },
    { label: "Kalender Keagamaan", path: "/kalender-keagamaan" },
    { label: "Hari Penting", path: "/hari-penting" },
  ];

  const upcomingFeatures = [
    { label: "Social Growth", badge: "Coming Soon" },
    { label: "Health Index", badge: "Coming Soon" },
    { label: "Financial Goal", badge: "Coming Soon" },
  ];

  const resources = [
    { label: "Kalkulator Lainnya", path: "/kalkulator" },
    { label: "Blog & Insight", path: "/blog" },
    { label: "Tentang Kami", path: "/tentang" },
    { label: "Hubungi Kami", path: "/kontak" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/ageinfo", label: "Facebook", color: "hover:text-blue-500" },
    { icon: Twitter, href: "https://twitter.com/ageinfo", label: "Twitter", color: "hover:text-sky-400" },
    { icon: Instagram, href: "https://instagram.com/ageinfo", label: "Instagram", color: "hover:text-pink-500" },
  ];

  return (
    <footer className="relative bg-slate-950 text-slate-400 pt-24 pb-12 overflow-hidden">
      {/* Decorative Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          {/* Brand Column */}
          <div className="lg:col-span-4 max-w-sm">
            <Link to="/" className="flex items-center gap-3 mb-8 group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="flex items-center"
              >
                <img
                  src="/src/app/assets/images/logo.png"
                  alt="AgeInfo Logo"
                  className="h-10 w-auto"
                />
              </motion.div>
              <div className="flex flex-col">
                <span className="font-black text-2xl bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent tracking-tighter">
                  AgeInfo
                </span>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] -mt-1">
                  Platform Presisi
                </span>
              </div>
            </Link>
            <p className="text-slate-400 mb-8 leading-relaxed text-sm lg:text-base">
              Platform bedah usia. Kami tidak hanya menghitung angka, tapi menceritakan perjalanan hidup Anda melalui weton, zodiak, dan perspektif sejarah yang mendalam.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4 }}
                  className={`w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center transition-all hover:border-slate-700 hover:bg-slate-800 ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-black text-white uppercase tracking-[0.3em] mb-8">Eksplorasi</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="group flex items-center gap-2 text-sm hover:text-white transition-colors"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-800 group-hover:bg-violet-500 transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Roadmap / Coming Soon */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-black text-white uppercase tracking-[0.3em] mb-8 flex items-center gap-2">
              Roadmap
              <Sparkles className="w-3 h-3 text-amber-400" />
            </h3>
            <ul className="space-y-4">
              {upcomingFeatures.map((f) => (
                <li key={f.label} className="group cursor-default">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500 group-hover:text-slate-400 transition-colors">{f.label}</span>
                    <span className="text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-slate-500">
                      {f.badge}
                    </span>
                  </div>
                </li>
              ))}
              <li className="pt-2">
                <Link to="/kalkulator" className="text-xs font-bold text-violet-400 hover:text-violet-300 flex items-center gap-2 group">
                  Lihat semua rencana
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Stats / Trust Column */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-black text-white uppercase tracking-[0.3em] mb-8">Kualitas & Keamanan</h3>
            <div className="space-y-6">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  <span className="text-sm font-bold text-white">Data Privacy First</span>
                </div>
                <p className="text-[11px] leading-relaxed">Penyimpanan lokal di browser Anda. Kami tidak menyimpan data pribadi Anda di server kami.</p>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-2">
                  <Zap className="w-5 h-5 text-amber-400" />
                  <span className="text-sm font-bold text-white">High Performance</span>
                </div>
                <p className="text-[11px] leading-relaxed">Mesin kalkulasi kami dioptimalkan untuk hasil instan tanpa loading yang lama.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-slate-900 flex flex-col items-center justify-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-12 text-xs font-bold tracking-tight text-center">
            <div className="flex gap-8 order-1 md:order-2">
              <Link to="/privacy" className="hover:text-white transition-colors">Kebijakan Privasi</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Ketentuan Layanan</Link>
            </div>
            <span className="order-2 md:order-1 text-slate-500">
              © {currentYear} AgeInfo. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
