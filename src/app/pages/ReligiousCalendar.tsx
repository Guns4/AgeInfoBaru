import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Moon, Cross, Heart, Sparkles, Info, ChevronLeft, ChevronRight, Bookmark } from "lucide-react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import SEOHead from "../components/SEOHead";
import { getReligiousHolidays, getDaysUntilHoliday, isComingSoon, getHolidayStatus } from "../utils/calendarUtils";

export default function ReligiousCalendar() {
  const currentActualYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState(2026);
  const [selectedCategory, setSelectedCategory] = useState("Islam");
  const religionData = getReligiousHolidays(selectedYear);

  const years = [2026, 2027, 2028, 2029, 2030];

  const categories = [
    {
      name: "Islam",
      holidays: religionData.islam,
      icon: Moon,
      color: "from-emerald-500 to-teal-600",
      bg: "from-emerald-50/50 to-teal-50/50",
      accent: "teal",
      description: "Daftar hari besar dan hari raya penting umat Islam"
    },
    {
      name: "Kristen",
      holidays: religionData.christian,
      icon: Cross,
      color: "from-blue-500 to-indigo-600",
      bg: "from-blue-50/50 to-indigo-50/50",
      accent: "blue",
      description: "Daftar hari besar dan hari raya penting umat Kristen"
    },
    {
      name: "Hindu",
      holidays: religionData.hindu,
      icon: Heart,
      color: "from-orange-500 to-red-600",
      bg: "from-orange-50/50 to-red-50/50",
      accent: "orange",
      description: "Daftar hari besar dan hari raya penting umat Hindu"
    },
    {
      name: "Buddha",
      holidays: religionData.buddhist,
      icon: Sparkles,
      color: "from-amber-400 to-yellow-600",
      bg: "from-amber-50/50 to-yellow-50/50",
      accent: "amber",
      description: "Daftar hari besar dan hari raya penting umat Buddha"
    },
    {
      name: "Konghucu",
      holidays: religionData.confucianism,
      icon: Bookmark,
      color: "from-rose-500 to-red-700",
      bg: "from-rose-50/50 to-red-50/50",
      accent: "rose",
      description: "Daftar hari besar dan hari raya penting umat Konghucu"
    },
  ];

  const activeCategory = categories.find(c => c.name === selectedCategory) || categories[0];

  const HolidayItem = ({ holiday, category }: { holiday: any; category: any }) => {
    const daysUntil = getDaysUntilHoliday(holiday.date);
    const status = getHolidayStatus(daysUntil);
    const iscoming = isComingSoon(daysUntil);

    return (
      <motion.div
        layout
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="group relative"
      >
        <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`} />
        <Card className="p-5 border-gray-100 shadow-sm hover:shadow-md transition-all rounded-2xl overflow-hidden bg-white/60 backdrop-blur-md border border-white/40">
          <div className="flex items-start gap-4">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white text-2xl shadow-lg flex-shrink-0`}>
              {holiday.icon}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2 mb-1">
                <h3 className="font-bold text-gray-900 truncate">{holiday.name}</h3>
                {iscoming && (
                  <span className="flex-shrink-0 px-2 py-0.5 text-[10px] font-black uppercase tracking-wider bg-red-500 text-white rounded-full animate-pulse">
                    Segera
                  </span>
                )}
              </div>
              <p className="text-sm font-medium text-gray-600 mb-2 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-gray-400" />
                {holiday.date}
              </p>
              {holiday.description && (
                <p className="text-xs text-gray-500 leading-relaxed line-clamp-2 italic mb-3">
                  {holiday.description}
                </p>
              )}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {holiday.lunarBased && (
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-gray-100 text-gray-600 text-[10px] font-bold uppercase tracking-tight">
                      <Moon className="w-2.5 h-2.5" /> Lunar
                    </span>
                  )}
                </div>
                {daysUntil >= 0 && (
                  <span className={`text-[10px] font-bold px-2 py-1 rounded-md ${status.variant === 'today' ? 'bg-red-100 text-red-700' :
                    status.variant === 'soon' ? 'bg-orange-100 text-orange-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                    {status.label}
                  </span>
                )}
              </div>
            </div>
          </div>
        </Card>
      </motion.div>
    );
  };

  return (
    <>
      <SEOHead
        title={`Kalender Keagamaan Indonesia ${selectedYear} - Jadwal Hari Raya Lengkap | AgeInfo`}
        description={`Daftar lengkap kalender hari raya keagamaan tahun ${selectedYear} untuk Islam, Kristen, Hindu, dan Buddha dengan countdown timer. Jadwal hari libur agama di Indonesia.`}
        keywords="kalender keagamaan, hari raya islam, hari raya kristen, waisak, nyepi, idul fitri, natal, libur agama, kalender agama"
      />

      <div className="min-h-screen bg-[#F8FAFC]">
        {/* Hero Section with Glass Header */}
        <div className="relative overflow-hidden pt-12 pb-24 px-4">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-full pointer-events-none">
            <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-emerald-200/20 blur-[100px] rounded-full" />
            <div className="absolute bottom-0 left-[-5%] w-[300px] h-[300px] bg-blue-200/20 blur-[80px] rounded-full" />
          </div>

          <div className="container mx-auto max-w-5xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-md rounded-full mb-6 border border-white shadow-sm">
                <Calendar className="w-4 h-4 text-emerald-600" />
                <span className="text-sm font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent italic">
                  Jadwal Lengkap Hari Raya
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
                Kalender <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Hari Raya</span> {selectedYear}
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
                Cek jadwal hari raya keagamaan di Indonesia dengan hitung mundur dan keterangan yang akurat.
              </p>
            </motion.div>

            {/* Modern Year Selector */}
            <div className="flex justify-center mb-12">
              <div className="inline-flex p-1.5 bg-white/80 backdrop-blur-xl rounded-2xl border border-white shadow-xl">
                {years.map(y => (
                  <button
                    key={y}
                    onClick={() => setSelectedYear(y)}
                    className={`px-6 py-2.5 rounded-xl text-sm font-black transition-all ${selectedYear === y
                      ? "bg-slate-900 text-white shadow-lg scale-105"
                      : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
                      }`}
                  >
                    {y}
                  </button>
                ))}
              </div>
            </div>

            {/* Category Slider - Mobile Optimized */}
            <div className="flex overflow-x-auto no-scrollbar gap-3 mb-10 pb-2 -mx-4 px-4 md:justify-center">
              {categories.map((cat) => (
                <button
                  key={cat.name}
                  onClick={() => setSelectedCategory(cat.name)}
                  className={`flex items-center gap-3 px-8 py-5 rounded-2xl whitespace-nowrap transition-all border-2 ${selectedCategory === cat.name
                    ? `border-slate-900 bg-white shadow-xl scale-105 z-10`
                    : `border-transparent bg-white/40 hover:bg-white/60 text-slate-500`
                    }`}
                >
                  <div className="text-center">
                    <div className={`text-[10px] font-black uppercase tracking-[0.2em] mb-1 ${selectedCategory === cat.name ? 'text-slate-400' : 'text-slate-400'}`}>
                      Agama
                    </div>
                    <div className={`text-lg font-black ${selectedCategory === cat.name ? 'text-slate-900' : 'text-slate-700'}`}>
                      {cat.name}
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Active Content Panel */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCategory + selectedYear}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-2 lg:grid-cols-2 gap-6"
              >
                <div className="md:col-span-2 flex items-center gap-4 mb-2">
                  <div className={`h-10 w-2 rounded-full bg-gradient-to-b ${activeCategory.color}`} />
                  <div>
                    <h2 className="text-2xl font-black text-slate-900 leading-none">Daftar Hari Raya {activeCategory.name}</h2>
                    <p className="text-sm text-slate-500 mt-1 font-medium italic">{activeCategory.description}</p>
                  </div>
                </div>

                {activeCategory.holidays.length > 0 ? (
                  activeCategory.holidays.map((holiday, idx) => (
                    <HolidayItem key={idx} holiday={holiday} category={activeCategory} />
                  ))
                ) : (
                  <Card className="md:col-span-2 p-12 bg-white/40 border-dashed border-2 border-slate-200 text-center">
                    <Calendar className="w-12 h-12 mx-auto mb-4 text-slate-300" />
                    <p className="text-slate-500 font-bold uppercase tracking-widest">Tidak ada jadwal ditemukan</p>
                  </Card>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Info and Tips */}
            <div className="mt-20 grid md:grid-cols-3 gap-6">
              <Card className="p-6 bg-slate-900 text-white rounded-[2rem] shadow-2xl overflow-hidden relative group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl rounded-full -mr-10 -mt-10" />
                <h3 className="text-lg font-black mb-3 flex items-center gap-2">
                  <Info className="w-5 h-5 text-emerald-400" />
                  Keterangan Resmi
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-medium">
                  Tanggal hari raya tertentu (Islam & Buddha) mengikuti kalender lunar dan dapat berubah 1-2 hari sesuai pengumuman resmi pemerintah.
                </p>
              </Card>

              <Card className="md:col-span-2 p-8 bg-white border border-slate-200 rounded-[2rem] shadow-sm flex flex-col md:flex-row gap-8 items-center">
                <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart className="w-10 h-10 text-emerald-600" />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-black text-slate-900 mb-2">Indahnya Kebersamaan</h3>
                  <p className="text-slate-600 font-medium leading-relaxed">
                    Indonesia kaya akan keberagaman. Dengan saling menghormati hari besar setiap agama, kita mempererat tali persaudaraan dan toleransi.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
