import { useRef } from "react";
import { motion } from "framer-motion";
import html2canvas from "html2canvas";
import { Download, Share2, Clock, Sparkles, Star, Heart, History } from "lucide-react";
import { Button } from "./ui/button";
import { toast } from "sonner";

interface ShareableResultCardProps {
  birthDate: Date;
  ageData: {
    years: number;
    months: number;
    days: number;
  };
  daysUntilBirthday: number;
  conversions: {
    weeks: number;
    days: number;
    hours: number;
  };
  weton: {
    weton: string;
    pasaran: string;
    watak?: string;
  };
  zodiac: {
    name: string;
    traits: string;
  };
  historical: {
    era: string;
    events: string[];
  };
  userName?: string;
}

export default function ShareableResultCard({
  birthDate,
  ageData,
  daysUntilBirthday,
  conversions,
  weton,
  zodiac,
  historical,
  userName,
}: ShareableResultCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Dynamic Background Mapping
  const zodiacBg = `/src/app/assets/images/Zodiac/${zodiac.name}.png`;

  const handleDownloadImage = async () => {
    if (!cardRef.current) return;

    try {
      const promise = new Promise(async (resolve, reject) => {
        try {
          const canvas = await html2canvas(cardRef.current!, {
            backgroundColor: null,
            scale: 3, // High-res export
            logging: false,
            useCORS: true,
            allowTaint: true,
            imageTimeout: 0,
            onclone: (clonedDoc) => {
              const element = clonedDoc.getElementById('story-capture-container');
              if (element) {
                element.style.borderRadius = '0px';
              }
            }
          });

          const link = document.createElement("a");
          link.href = canvas.toDataURL("image/png", 1.0);
          link.download = `AgeInfo-${userName || 'Member'}-${zodiac.name}.png`;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          resolve(true);
        } catch (err) {
          reject(err);
        }
      });

      toast.promise(promise, {
        loading: 'Menghasilkan gambar kualitas premium...',
        success: 'Gambar berhasil disimpan!',
        error: 'Gagal mengunduh gambar.',
      });
    } catch (error) {
      console.error("Error generating image:", error);
    }
  };

  const handleShare = async () => {
    const nameText = userName ? `untuk ${userName}` : "saya";
    const shareText = `🎂 Cek hasil kalkulator umur ${nameText} di AgeInfo.online!\n✨ Usia: ${ageData.years} th, ${ageData.months} bln, ${ageData.days} hr\n🌙 Weton: ${weton.weton}\n♈ Zodiak: ${zodiac.name}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: `Hasil AgeInfo - ${userName || 'Kawan'}`,
          text: shareText,
          url: window.location.href,
        });
      } catch (err) {
        console.log("Sharing cancelled", err);
      }
    } else {
      navigator.clipboard.writeText(shareText);
      toast.success("Teks hasil disalin ke clipboard!");
    }
  };

  const birthDateStr = birthDate.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  // Reusable text shadow for WCAG AA compliance on bright/busy backgrounds
  const textShadowStyle = {
    textShadow: '0 2px 4px rgba(0,0,0,0.5), 0 4px 12px rgba(0,0,0,0.3)'
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-sm mx-auto p-4"
    >
      {/* Story Container (Capture Area) */}
      <div
        id="story-capture-container"
        className="relative shadow-[0_32px_64px_-15px_rgba(0,0,0,0.5)] rounded-[3rem] overflow-hidden group border border-white/5"
        style={{ aspectRatio: "9 / 16" }}
      >
        <div
          ref={cardRef}
          className="absolute inset-0 w-full h-full flex flex-col text-white"
        >
          {/* Background Template */}
          <div
            className="absolute inset-0 bg-[#0a0a0f] z-0 bg-cover bg-center transition-opacity duration-1000"
            style={{
              backgroundImage: `url('${zodiacBg}')`,
            }}
          >
            {/* TAMBAHAN: Overlay Gradient Transparan agar teks putih selalu terbaca (Kontras Profesional) */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70 pointer-events-none" />
          </div>

          {/* Overlay Content Hierarchy (Optimized Hierarchy & Contrast) */}
          <div className="relative z-10 flex flex-col h-full p-6 md:p-8 pt-16">

            {/* Combined Hero Section (Name + Years/Month/Day) */}
            <div className="flex flex-col items-center justify-center py-4">
              {/* 1. Nama Lengkap (Directly above the row) */}
              <header className="text-center mb-4">
                <h2
                  className="text-2xl md:text-[1.5rem] font-serif font-black text-white leading-tight tracking-tight drop-shadow-xl"
                  style={textShadowStyle}
                >
                  {userName || "Your Name"}
                </h2>
              </header>

              {/* 2. Horizontal Layout (Years on Left, Month/Day on Right) */}
              <div className="flex items-center gap-8 mb-6">
                {/* Years (Left Focus) */}
                <div className="text-center">
                  <div
                    className="text-[5rem] md:text-[6rem] font-black text-white leading-none select-none drop-shadow-2xl"
                    style={textShadowStyle}
                  >
                    {ageData.years}
                  </div>
                  <div
                    className="text-lg md:text-xl font-black text-white/90 uppercase tracking-[0.3em] mt-1"
                    style={textShadowStyle}
                  >
                    Tahun
                  </div>
                </div>

                {/* Vertical Divider */}
                <div className="w-[2px] h-20 bg-white/20 rounded-full" />

                {/* 3. Detil Waktu (Bulan & Hari - Right Focus) */}
                <div className="flex flex-col gap-4 py-1">
                  <div className="text-left group">
                    <div className="text-2xl md:text-3xl font-black text-white drop-shadow-md leading-none">{ageData.months}</div>
                    <div className="text-[10px] font-black text-white/60 uppercase tracking-widest mt-1">Bulan</div>
                  </div>
                  <div className="text-left group">
                    <div className="text-2xl md:text-3xl font-black text-white drop-shadow-md leading-none">{ageData.days}</div>
                    <div className="text-[10px] font-black text-white/60 uppercase tracking-widest mt-1">Hari</div>
                  </div>
                </div>
              </div>

              {/* Birth Date Label (Centered Underneath) */}
              <div
                className="text-[10px] font-black text-white/80 tracking-[0.2em] uppercase drop-shadow-md bg-white/5 px-6 py-1 rounded-full border border-white/10 backdrop-blur-sm"
                style={textShadowStyle}
              >
                Lahir: {birthDateStr}
              </div>
            </div>

            {/* Bottom Grid Info */}
            {/* UBAH: pb-12 jadi pb-4, space-y-4 jadi space-y-3 agar masuk ke frame */}
            <div className="mt-auto space-y-3 pb-4">

              {/* Ulang Tahun Berikutnya */}
              <div className="bg-white/20 border border-white/30 rounded-2xl p-4 backdrop-blur-xl flex items-center justify-between shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-400/30 rounded-xl flex items-center justify-center">
                    <Clock className="w-5 h-5 text-blue-200" />
                  </div>
                  <div>
                    <div className="text-[9px] font-black text-blue-200 uppercase tracking-widest">Ulang Tahun Berikutnya</div>
                    <div className="text-sm font-black text-white drop-shadow-md">Wujudkan Mimpimu</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-black text-white drop-shadow-md">{daysUntilBirthday}</div>
                  <div className="text-[8px] font-black text-white/80 uppercase">Hari</div>
                </div>
              </div>

              {/* Grid (Weton & Horoskop) */}
              <div className="grid grid-cols-2 gap-3">
                {/* Weton - DISAMAKAN UKURANNYA DENGAN HOROSKOP */}
                <div className="bg-white/20 border border-white/30 rounded-2xl p-4 backdrop-blur-xl shadow-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-4 h-4 text-amber-300" />
                    <span className="text-[9px] font-black text-amber-300 uppercase tracking-widest">Weton</span>
                  </div>
                  <div className="text-lg md:text-xl font-black text-white leading-tight drop-shadow-md">{weton.weton}</div>
                  <div className="text-[9px] text-white/80 mt-1 line-clamp-1 italic">{weton.watak || weton.pasaran}</div>
                </div>

                {/* Horoskop */}
                <div className="bg-white/20 border border-white/30 rounded-2xl p-4 backdrop-blur-xl shadow-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="w-4 h-4 text-purple-300" />
                    <span className="text-[9px] font-black text-purple-300 uppercase tracking-widest">Horoskop</span>
                  </div>
                  <div className="text-lg md:text-xl font-black text-white leading-tight drop-shadow-md">{zodiac.name}</div>
                  <div className="text-[9px] text-white/80 mt-1 line-clamp-1 italic">{zodiac.traits}</div>
                </div>
              </div>

              {/* Time Capsule */}
              <div className="bg-indigo-900/40 border border-indigo-400/30 rounded-2xl p-4 backdrop-blur-xl flex items-center gap-4 shadow-xl">
                <div className="w-12 h-12 bg-indigo-500/40 rounded-xl flex items-center justify-center">
                  <History className="w-6 h-6 text-indigo-200" />
                </div>
                <div className="flex-1">
                  <div className="text-[9px] font-black text-indigo-200 uppercase tracking-widest mb-1">Time Capsule</div>
                  <div className="text-base font-black text-white leading-tight drop-shadow-md">
                    {historical.era}
                  </div>
                  <p className="text-[9px] text-white/80 mt-1 italic line-clamp-1">
                    {historical.events && historical.events[0]}
                  </p>
                </div>
              </div>

              {/* Clean Footer */}
              <div className="pt-2 text-center">
                <div className="text-[8px] font-black text-white/40 tracking-[0.8em] uppercase">ageinfo.online</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Control Buttons (Bounce Interaction & Mobile Height) */}
      <div className="flex flex-col sm:flex-row gap-4 mt-8 px-2">
        <motion.div className="flex-1" whileTap={{ scale: 0.9 }}>
          <Button
            onClick={handleDownloadImage}
            className="w-full h-14 rounded-3xl bg-white text-slate-950 font-black hover:bg-slate-50 shadow-[0_10px_30px_rgba(255,255,255,0.1)] transition-colors text-sm uppercase tracking-widest"
          >
            <Download className="w-5 h-5 mr-3" />
            Download Gambar
          </Button>
        </motion.div>

        <motion.div whileTap={{ scale: 0.9 }}>
          <Button
            onClick={handleShare}
            variant="outline"
            className="w-14 h-14 rounded-3xl border-white/20 text-white bg-white/5 backdrop-blur-md hover:bg-white/10 p-0 shadow-lg transition-colors"
          >
            <Share2 className="w-6 h-6" />
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
}
