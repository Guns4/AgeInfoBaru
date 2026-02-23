import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Flag, Calendar, ChevronRight, Globe, Info, Sparkles, Star, TrendingUp } from "lucide-react";
import { Card } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import SEOHead from "../components/SEOHead";
import { getNationalHolidays, getDaysUntilHoliday, isComingSoon, getHolidayStatus, type Holiday } from "../utils/calendarUtils";

export default function NationalDays() {
  const [selectedCountry, setSelectedCountry] = useState("ID");
  const [selectedYear, setSelectedYear] = useState(2026);
  const [selectedCategory, setSelectedCategory] = useState<string>("mendatang");

  const nationalData = useMemo(() => getNationalHolidays(selectedYear, selectedCountry), [selectedYear, selectedCountry]);

  const countries = [
    { code: "ID", name: "Indonesia", flag: "🇮🇩" },
    { code: "US", name: "USA", flag: "🇺🇸" },
    { code: "GB", name: "UK", flag: "🇬🇧" },
    { code: "JP", name: "Jepang", flag: "🇯🇵" },
    { code: "AU", name: "Australia", flag: "🇦🇺" },
    { code: "SG", name: "Singapura", flag: "🇸🇬" },
  ];

  const years = [2026, 2027, 2028, 2029, 2030];

  // Flatten and enhance data
  interface EnhancedHoliday extends Holiday {
    type: string;
    category: string;
    daysUntil: number;
    isComingSoon: boolean;
  }

  const holidays = useMemo(() => {
    const libur = (nationalData.libur as Holiday[]).map(d => ({ ...d, type: "Wajib Libur", category: "libur" }));
    const peringatan = (nationalData.peringatan as Holiday[]).map(d => ({ ...d, type: "Peringatan", category: "peringatan" }));
    const spesial = (nationalData.spesial as Holiday[]).map(d => ({ ...d, type: "Hari Spesial", category: "spesial" }));

    const all = [...libur, ...peringatan, ...spesial];

    return all.map(d => ({
      ...d,
      daysUntil: getDaysUntilHoliday(d.date),
      isComingSoon: isComingSoon(getDaysUntilHoliday(d.date)),
    })).sort((a, b) => {
      if (a.daysUntil < 0 && b.daysUntil < 0) return a.daysUntil - b.daysUntil;
      if (a.daysUntil < 0) return 1;
      if (b.daysUntil < 0) return -1;
      return a.daysUntil - b.daysUntil;
    }) as EnhancedHoliday[];
  }, [nationalData]);

  const filteredDays = useMemo(() => {
    if (selectedCategory === "mendatang") return holidays.filter(d => d.daysUntil >= 0);
    return holidays.filter(d => d.category === selectedCategory);
  }, [holidays, selectedCategory]);

  const countryName = countries.find(c => c.code === selectedCountry)?.name || "Indonesia";

  const metrics = [
    { label: "Total Hari Libur", value: nationalData.libur.length, icon: Calendar, color: "text-red-600", bg: "bg-red-50" },
    { label: "Peringatan Nasional", value: nationalData.peringatan.length, icon: Star, color: "text-amber-600", bg: "bg-amber-50" },
    { label: "Mendatang (7 Hari)", value: holidays.filter(h => h.isComingSoon).length, icon: TrendingUp, color: "text-blue-600", bg: "bg-blue-50" },
  ];

  const HolidayCard = ({ day, index }: { day: EnhancedHoliday; index: number }) => {
    const status = day.daysUntil >= 0 ? getHolidayStatus(day.daysUntil) : null;

    const colors: Record<string, string> = {
      libur: "from-red-500 to-rose-600",
      peringatan: "from-amber-400 to-orange-500",
      spesial: "from-blue-400 to-indigo-500"
    };

    return (
      <motion.div
        layout
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="group"
      >
        <Card className="h-full relative overflow-hidden bg-white/60 backdrop-blur-xl border-white/40 shadow-sm hover:shadow-xl transition-all duration-500 rounded-3xl p-6">
          <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${colors[day.category]} opacity-5 blur-2xl group-hover:opacity-20 transition-opacity`} />

          <div className="flex flex-col h-full">
            <div className="flex items-start justify-between mb-4">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${colors[day.category]} flex items-center justify-center text-3xl shadow-lg shadow-black/5`}>
                {day.icon}
              </div>
              {day.isComingSoon && (
                <span className="px-3 py-1 rounded-full bg-red-500 text-[10px] font-black text-white uppercase tracking-wider animate-pulse">
                  Segera
                </span>
              )}
            </div>

            <div className="flex-1">
              <h3 className="text-xl font-black text-slate-900 mb-1 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-slate-900 group-hover:to-slate-600 transition-all">
                {day.name}
              </h3>
              <div className="flex items-center gap-2 text-sm font-bold text-slate-500 mb-3">
                <Calendar className="w-4 h-4 text-slate-400" />
                {day.date}
              </div>
              {day.description && (
                <p className="text-xs text-slate-500 leading-relaxed italic mb-4 line-clamp-2">
                  {day.description}
                </p>
              )}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <span className={`text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-lg ${day.category === 'libur' ? 'bg-red-50 text-red-600' :
                day.category === 'peringatan' ? 'bg-amber-50 text-amber-600' :
                  'bg-blue-50 text-blue-600'
                }`}>
                {day.type}
              </span>
              {status && (
                <span className={`text-[10px] font-bold px-2.5 py-1 rounded-lg ${status.variant === 'today' ? 'bg-red-100 text-red-700' :
                  status.variant === 'soon' ? 'bg-orange-100 text-orange-700' :
                    'bg-slate-100 text-slate-700'
                  }`}>
                  {status.label}
                </span>
              )}
              {day.daysUntil < 0 && (
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-lg bg-slate-100 text-slate-400">
                  Selesai
                </span>
              )}
            </div>
          </div>
        </Card>
      </motion.div>
    );
  };

  return (
    <>
      <SEOHead
        title={`Kalender Hari Penting & Libur ${countryName} ${selectedYear} | AgeInfo`}
        description={`Cek daftar lengkap hari libur nasional, hari peringatan, dan hari penting di ${countryName} tahun ${selectedYear} dengan hitung mundur otomatis.`}
        keywords="hari libur nasional, hari penting dunia, kalender internasional, jadwal libur 2026"
      />

      <div className="min-h-screen bg-[#F1F5F9] pb-20">
        {/* International Header */}
        <div className="relative pt-16 pb-32 px-4 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-400/10 blur-[120px] rounded-full" />
            <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-indigo-500/10 blur-[100px] rounded-full" />
          </div>

          <div className="container mx-auto max-w-6xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-md rounded-full mb-8 border border-white shadow-sm">
                <Globe className="w-5 h-5 text-blue-600 animate-spin-slow" />
                <span className="text-sm font-black text-blue-700 uppercase tracking-widest">Global Insights</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">
                Kalender{" "}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Hari Penting
                </span>{" "}
                Dunia
              </h1>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
                Jadwal lengkap hari libur dan peringatan penting untuk berbagai negara besar di seluruh dunia.
              </p>
            </motion.div>

            {/* Premium Selectors Panel */}
            <div className="max-w-4xl mx-auto space-y-6">
              {/* Country Picker - Horizontal Slide */}
              <div className="flex flex-col items-center">
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-4">Pilih Negara</div>
                <div className="flex overflow-x-auto no-scrollbar gap-3 pb-4 max-w-full -mx-4 px-4">
                  {countries.map((c) => (
                    <button
                      key={c.code}
                      onClick={() => setSelectedCountry(c.code)}
                      className={`flex items-center gap-3 px-5 py-3 rounded-2xl whitespace-nowrap transition-all border-2 ${selectedCountry === c.code
                        ? "border-slate-900 bg-white shadow-xl scale-105 z-10"
                        : "border-transparent bg-white/40 hover:bg-white/60 text-slate-500"
                        }`}
                    >
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${selectedCountry === c.code ? 'bg-slate-900 text-white' : 'bg-slate-200 text-slate-500'} transition-colors`}>
                        <Flag className="w-4 h-4" />
                      </div>
                      <span className={`text-sm font-black tracking-widest ${selectedCountry === c.code ? 'text-slate-900' : 'text-slate-600'}`}>
                        {c.code}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Year Picker */}
              <div className="flex justify-center">
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
            </div>
          </div>
        </div>

        {/* Dynamic Metrics Section */}
        <div className="container mx-auto max-w-6xl -mt-16 relative z-20 px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {metrics.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="p-8 bg-white/80 backdrop-blur-2xl border-white shadow-xl rounded-[2.5rem] flex items-center justify-between group hover:scale-[1.02] transition-transform">
                  <div>
                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">{m.label}</p>
                    <p className="text-4xl font-black text-slate-900">{m.value}</p>
                  </div>
                  <div className={`w-14 h-14 rounded-2xl ${m.bg} flex items-center justify-center group-hover:rotate-12 transition-transform`}>
                    <m.icon className={`w-7 h-7 ${m.color}`} />
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Main Content Areas */}
        <div className="container mx-auto max-w-6xl mt-12 px-4">
          <Tabs defaultValue="mendatang" className="w-full" onValueChange={setSelectedCategory}>
            <div className="flex items-center justify-between mb-10 flex-col md:flex-row gap-6">
              <TabsList className="bg-white/50 backdrop-blur-xl p-1.5 rounded-2xl border border-white/40 shadow-sm h-auto">
                <TabsTrigger value="mendatang" className="rounded-xl px-6 py-3 font-black text-xs uppercase tracking-wider data-[state=active]:bg-slate-900 data-[state=active]:text-white transition-all">
                  Mendatang
                </TabsTrigger>
                <TabsTrigger value="libur" className="rounded-xl px-6 py-3 font-black text-xs uppercase tracking-wider data-[state=active]:bg-red-500 data-[state=active]:text-white transition-all">
                  Libur
                </TabsTrigger>
                <TabsTrigger value="peringatan" className="rounded-xl px-6 py-3 font-black text-xs uppercase tracking-wider data-[state=active]:bg-amber-500 data-[state=active]:text-white transition-all">
                  Peringatan
                </TabsTrigger>
                <TabsTrigger value="spesial" className="rounded-xl px-6 py-3 font-black text-xs uppercase tracking-wider data-[state=active]:bg-blue-500 data-[state=active]:text-white transition-all">
                  Spesial
                </TabsTrigger>
              </TabsList>

              <div className="flex items-center gap-2 text-slate-500 text-sm font-bold bg-white/40 px-5 py-2.5 rounded-full border border-white/40">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>Kalender {countryName} {selectedYear}</span>
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCountry + selectedYear + selectedCategory}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredDays.length > 0 ? (
                    filteredDays.map((day, index) => (
                      <HolidayCard key={index} day={day} index={index} />
                    ))
                  ) : (
                    <div className="col-span-1 md:col-span-2 lg:col-span-3 py-20 bg-white/40 border-2 border-dashed border-slate-200 rounded-[3rem] text-center">
                      <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Calendar className="w-10 h-10 text-slate-400" />
                      </div>
                      <h3 className="text-xl font-black text-slate-900">Belum Ada Jadwal</h3>
                      <p className="text-slate-500 font-medium">Data hari penting untuk kategori ini belum tersedia.</p>
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </Tabs>

          {/* Expert Insight / About */}
          <div className="mt-24 max-w-4xl mx-auto">
            <Card className="p-10 bg-slate-900 border-none shadow-3xl rounded-[3rem] overflow-hidden relative group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-3xl rounded-full -mr-32 -mt-32" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-600/10 blur-3xl rounded-full -ml-24 -mb-24" />

              <div className="relative z-10 flex flex-col md:flex-row gap-10 items-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/20">
                  <Globe className="w-12 h-12 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white mb-4">Akses Kalender Global</h3>
                  <p className="text-slate-400 leading-relaxed font-medium mb-6">
                    Indonesia bangga akan pluralisme. Melalui sistem kalender internasional ini, kami membantu Anda terhubung dengan jadwal penting dari berbagai belahan dunia—mulai dari hari libur perbankan hingga hari kemerdekaan nasional.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-xl border border-white/10">
                      <div className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span className="text-[10px] font-black text-white uppercase tracking-widest">Real-time Data</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-xl border border-white/10">
                      <div className="w-2 h-2 rounded-full bg-blue-500" />
                      <span className="text-[10px] font-black text-white uppercase tracking-widest">Global Support</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
