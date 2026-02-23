import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  Sparkles,
  History,
  Star,
  Share2,
  Download,
  Heart,
  TrendingUp,
  Zap,
  Award,
  Crown
} from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { toast } from "sonner";
import { useRef } from "react";

const ZODIAC_EMOJIS: Record<string, string> = {
  Capricorn: "♑",
  Aquarius: "♒",
  Pisces: "♓",
  Aries: "♈",
  Taurus: "♉",
  Gemini: "♊",
  Cancer: "♋",
  Leo: "♌",
  Virgo: "♍",
  Libra: "♎",
  Scorpio: "♏",
  Sagittarius: "♐",
};

const getZodiacEmoji = (name: string) => {
  return ZODIAC_EMOJIS[name] || "✨";
};

interface AgeResultCardProps {
  birthDate: Date;
  ageData: {
    years: number;
    months: number;
    days: number;
    hours?: number;
    minutes?: number;
    seconds?: number;
    totalDays?: number;
  };
  daysUntilBirthday: number;
  conversions: {
    weeks: number;
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    totalDays?: number;
  };
  weton: {
    weton: string;
    hari: string;
    pasaran: string;
    nilai: number;
    watak: string;
  };
  zodiac: {
    name: string;
    symbol: string;
    traits: string;
  };
  milestones: Array<{
    title: string;
    description: string;
    achieved: boolean;
    date?: Date;
  }>;
  historical: {
    era: string;
    events: string[];
  };
  userName?: string;
}

export default function AgeResultCard({
  birthDate,
  ageData,
  daysUntilBirthday,
  conversions,
  weton,
  zodiac,
  milestones,
  historical,
  userName,
}: AgeResultCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleShare = async () => {
    const zodiacEmoji = getZodiacEmoji(zodiac.name);
    const shareText = `🎂 Usia ${userName ? userName : 'saya'}: ${ageData.years} tahun ${ageData.months} bulan ${ageData.days} hari\n🌙 Weton: ${weton.weton}\n${zodiacEmoji} Zodiak: ${zodiac.name}\n\nHitung usia Anda di AgeInfo.online!`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: `Hasil Kalkulator Umur ${userName ? ' - ' + userName : ''} - AgeInfo`,
          text: shareText,
          url: window.location.href,
        });
        toast.success("Berhasil dibagikan!");
      } catch (err) {
        console.error("Error sharing:", err);
      }
    } else {
      navigator.clipboard.writeText(shareText);
      toast.success("Teks disalin ke clipboard!");
    }
  };

  const handleDownload = () => {
    toast.success("Fitur download akan segera hadir!");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      ref={cardRef}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full max-w-5xl mx-auto space-y-6"
    >
      {/* Hero Bento Section */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Main Age Card - Hero */}
        <motion.div
          variants={itemVariants}
          className="md:col-span-8 relative group"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 to-blue-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
          <Card className="relative p-8 md:p-12 bg-white/80 backdrop-blur-xl border-white/20 h-full flex flex-col justify-center overflow-hidden rounded-3xl">
            <div className="absolute top-0 right-0 -transtale-y-1/2 translate-x-1/2 w-64 h-64 bg-violet-100 rounded-full blur-3xl opacity-50"></div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-600 text-white rounded-2xl mb-6 shadow-lg shadow-violet-500/30">
                <Crown className="w-4 h-4" />
                <span className="text-sm font-bold tracking-wide uppercase">Usia Hari Ini</span>
              </div>

              <h2 className="text-4xl md:text-7xl font-black text-slate-900 leading-tight mb-4">
                <span className="block">{ageData.years} <span className="text-2xl md:text-4xl font-bold text-slate-400">Tahun</span></span>
                <span className="block bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
                  {ageData.months} Bulan {ageData.days} Hari
                </span>
              </h2>

              <p className="text-slate-500 text-lg flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Lahir pada era <span className="font-bold text-slate-900">{historical.era}</span>
              </p>
            </div>
          </Card>
        </motion.div>

        {/* Countdown Card */}
        <motion.div
          variants={itemVariants}
          className="md:col-span-4"
        >
          <Card className="p-8 bg-gradient-to-br from-blue-600 to-indigo-700 text-white h-full border-none shadow-2xl shadow-indigo-500/20 relative overflow-hidden rounded-3xl">
            <div className="absolute -bottom-4 -right-4 opacity-10">
              <Zap className="w-48 h-48" />
            </div>

            <div className="relative z-10 flex flex-col h-full">
              <div className="mb-auto">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-1">Momen Berikutnya</h3>
                <p className="text-blue-100 text-sm">Menuju ulang tahun Anda</p>
              </div>

              <div className="mt-8">
                <div className="text-6xl font-black mb-2">{daysUntilBirthday}</div>
                <div className="text-sm font-bold tracking-widest uppercase opacity-80 text-blue-100">Hari Tersisa</div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Zodiac & Weton Section */}
        <motion.div
          variants={itemVariants}
          className="md:col-span-12 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Weton Card */}
          <Card className="p-8 bg-gradient-to-br from-amber-50 to-orange-100 border-amber-200/50 rounded-3xl group hover:shadow-xl transition-all h-full">
            <div className="flex items-start justify-between mb-6">
              <div>
                <span className="text-xs font-bold text-amber-700 tracking-widest uppercase bg-amber-200/50 px-2 py-1 rounded-md">Filosofi Jawa</span>
                <h3 className="text-3xl font-black text-amber-900 mt-2">{weton.weton}</h3>
              </div>
              <div className="w-16 h-16 bg-amber-200 flex items-center justify-center rounded-2xl text-amber-700">
                <Sparkles className="w-8 h-8" />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-6">
              {[
                { label: 'Hari', val: weton.hari },
                { label: 'Pasaran', val: weton.pasaran },
                { label: 'Nilai', val: weton.nilai }
              ].map((item, i) => (
                <div key={i} className="bg-white/60 p-3 rounded-2xl text-center">
                  <div className="text-[10px] font-bold text-amber-600 uppercase mb-1">{item.label}</div>
                  <div className="text-amber-900 font-bold">{item.val}</div>
                </div>
              ))}
            </div>

            <div className="bg-white/80 p-4 rounded-2xl border border-amber-200">
              <span className="text-xs font-bold text-slate-500 uppercase block mb-1">Karakter Dasar</span>
              <p className="text-slate-700 leading-relaxed italic">"{weton.watak}"</p>
            </div>
          </Card>

          {/* Zodiac Card */}
          <Card className="p-8 bg-gradient-to-br from-purple-50 to-indigo-100 border-purple-200/50 rounded-3xl group hover:shadow-xl transition-all h-full">
            <div className="flex items-start justify-between mb-6">
              <div>
                <span className="text-xs font-bold text-purple-700 tracking-widest uppercase bg-purple-200/50 px-2 py-1 rounded-md">Horoskop</span>
                <h3 className="text-3xl font-black text-purple-900 mt-2">{zodiac.name}</h3>
              </div>
              <div className="text-6xl filter drop-shadow-md">
                {getZodiacEmoji(zodiac.name)}
              </div>
            </div>

            <div className="bg-white/80 p-6 rounded-3xl border border-purple-200 h-full">
              <div className="flex items-center gap-2 mb-3">
                <Star className="w-5 h-5 text-purple-600" />
                <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">Sifat Utama</span>
              </div>
              <p className="text-slate-700 text-lg leading-relaxed">{zodiac.traits}</p>
            </div>
          </Card>
        </motion.div>

        {/* Detailed Stats Bento Grid */}
        <motion.div
          variants={itemVariants}
          className="md:col-span-12 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: 'Total Hari', val: conversions.days, icon: TrendingUp, color: 'text-emerald-600', bg: 'bg-emerald-50' },
            { label: 'Total Minggu', val: conversions.weeks, icon: Award, color: 'text-indigo-600', bg: 'bg-indigo-50' },
            { label: 'Jam Kehidupan', val: Math.floor(conversions.hours / 1000) + 'k', icon: Zap, color: 'text-amber-600', bg: 'bg-amber-50' },
            { label: 'Detik Berlalu', val: conversions.seconds.toLocaleString('id-ID'), icon: Clock, color: 'text-rose-600', bg: 'bg-rose-50' }
          ].map((stat, i) => (
            <Card key={i} className="p-6 border-slate-100 rounded-3xl hover:-translate-y-1 transition-transform">
              <div className={`w-12 h-12 ${stat.bg} ${stat.color} rounded-2xl flex items-center justify-center mb-4`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="text-2xl font-black text-slate-900 mb-1">{stat.val}</div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</div>
            </Card>
          ))}
        </motion.div>

        {/* Achievement Timeline Section */}
        <motion.div
          variants={itemVariants}
          className="md:col-span-8"
        >
          <Card className="p-8 border-slate-100 rounded-3xl h-full shadow-lg shadow-slate-200/50">
            <h3 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-3">
              <Award className="w-8 h-8 text-violet-600" />
              Garis Waktu Pencapaian
            </h3>

            <div className="space-y-4">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative p-5 rounded-2xl border-2 transition-all group ${milestone.achieved
                      ? 'bg-emerald-50/50 border-emerald-100 hover:border-emerald-200'
                      : 'bg-slate-50 border-slate-100 hover:border-slate-200'
                    }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${milestone.achieved ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30' : 'bg-slate-200 text-slate-400'
                        }`}>
                        {milestone.achieved ? '✓' : '•'}
                      </div>
                      <div>
                        <h4 className={`font-bold ${milestone.achieved ? 'text-slate-900' : 'text-slate-500'}`}>{milestone.title}</h4>
                        <p className="text-sm text-slate-500">{milestone.description}</p>
                      </div>
                    </div>
                    {milestone.achieved && (
                      <span className="hidden md:block text-[10px] font-black text-emerald-600 uppercase tracking-widest bg-emerald-100 px-2 py-1 rounded-md">UNLOCKED</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Time Capsule Section */}
        <motion.div
          variants={itemVariants}
          className="md:col-span-4"
        >
          <Card className="p-8 bg-slate-900 text-white rounded-3xl h-full flex flex-col relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl group-hover:bg-indigo-500/40 transition-all duration-700"></div>

            <div className="relative z-10 flex flex-col h-full">
              <div className="mb-6">
                <History className="w-10 h-10 text-indigo-400 mb-4" />
                <span className="text-[10px] font-black tracking-[0.2em] text-indigo-400 uppercase">TIME CAPSULE</span>
                <h3 className="text-3xl font-black mt-2 leading-tight">{historical.era}</h3>
              </div>

              <ul className="space-y-4 mt-auto">
                {historical.events.map((event, i) => (
                  <li key={i} className="flex gap-3 text-slate-300 text-sm leading-relaxed border-l-2 border-indigo-500/30 pl-4 py-1">
                    {event}
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Share Actions - Floating feel */}
      <motion.div
        variants={itemVariants}
        className="pt-10 flex flex-col sm:flex-row items-center justify-center gap-4 border-t border-slate-100"
      >
        <Button
          onClick={handleShare}
          className="w-full sm:w-auto px-10 h-16 rounded-2xl bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700 text-white text-lg font-black shadow-2xl shadow-violet-500/30 group active:scale-95 transition-all"
        >
          <Share2 className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform" />
          Bagikan Hasil Ini
        </Button>
        <Button
          onClick={handleDownload}
          variant="outline"
          className="w-full sm:w-auto px-10 h-16 rounded-2xl border-2 border-slate-200 text-slate-600 hover:bg-slate-50 text-lg font-bold group"
        >
          <Download className="w-6 h-6 mr-3 group-hover:bounce" />
          Simpan Gambar
        </Button>
      </motion.div>

      {/* Bottom Love Note */}
      <motion.div variants={itemVariants} className="text-center pt-8 opacity-40">
        <p className="text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2">
          Dibuat dengan <Heart className="w-3 h-3 text-rose-500 fill-rose-500" /> untuk Anda
        </p>
      </motion.div>
    </motion.div>
  );
}
