import { motion } from "framer-motion";
import { Link } from "react-router";
import {
  Calculator,
  Calendar,
  CalendarDays,
  Sparkles,
  BookOpen,
  TrendingUp,
  Users,
  Clock,
  ArrowRight,
  Star,
  CheckCircle2
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import SEOHead from "../components/SEOHead";

export default function Home() {
  const features = [
    {
      icon: Calculator,
      title: "Kalkulator Umur Lengkap",
      description: "Hitung umur dalam tahun, bulan, hari, minggu, jam, hingga detik dengan akurat",
      color: "from-violet-500 to-purple-600",
      path: "/kalkulator-umur",
    },
    {
      icon: CalendarDays,
      title: "Selisih Tanggal",
      description: "Hitung jarak waktu antara dua tanggal dengan detail lengkap",
      color: "from-blue-500 to-cyan-600",
      path: "/selisih-tanggal",
    },
    {
      icon: Calendar,
      title: "Kalender Keagamaan",
      description: "Jadwal hari raya Islam, Kristen, Hindu, Buddha lengkap tahun ini",
      color: "from-green-500 to-emerald-600",
      path: "/kalender-keagamaan",
    },
    {
      icon: Sparkles,
      title: "Hari Penting Nasional",
      description: "Informasi hari libur nasional dan peringatan penting Indonesia",
      color: "from-amber-500 to-orange-600",
      path: "/hari-penting",
    },
    {
      icon: Calculator,
      title: "Kalkulator Lainnya",
      description: "BMI, kehamilan, masa subur, dan kalkulator berguna lainnya",
      color: "from-pink-500 to-rose-600",
      path: "/kalkulator",
    },
    {
      icon: BookOpen,
      title: "Blog & Artikel",
      description: "Baca artikel menarik seputar umur, kesehatan, dan kehidupan",
      color: "from-indigo-500 to-purple-600",
      path: "/blog",
    },
  ];

  const stats = [
    { label: "Pengguna Aktif", value: "50K+", icon: Users },
    { label: "Perhitungan", value: "500K+", icon: Calculator },
    { label: "Rating Kepuasan", value: "4.9/5", icon: Star },
    { label: "Waktu Respons", value: "<0.1s", icon: Clock },
  ];

  const benefits = [
    "Perhitungan akurat hingga detik",
    "Termasuk weton dan zodiak",
    "Konteks sejarah unik",
    "Pencapaian milestone otomatis",
    "Hasil bisa langsung dibagikan",
    "100% gratis selamanya",
  ];

  return (
    <>
      <SEOHead />
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-100 to-blue-100 rounded-full mb-6 border border-violet-200"
          >
            <Sparkles className="w-4 h-4 text-violet-600" />
            <span className="text-sm font-semibold text-violet-700">
              #1 Platform Bedah Usia di Indonesia
            </span>
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight tracking-tighter">
            Bukan Sekadar Angka,{" "}
            <span className="bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
              Temukan Cerita Usia Anda
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Bedah detail usia Anda secara presisi—dari hitungan detik, weton, zodiak, hingga momen sejarah unik yang terjadi saat Anda lahir.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/kalkulator-umur">
              <Button
                size="lg"
                className="bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700 text-white shadow-xl shadow-violet-500/30 px-8 py-6 text-lg"
              >
                <Calculator className="w-5 h-5 mr-2" />
                Hitung Umur Sekarang
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center"
            >
              <stat.icon className="w-8 h-8 mx-auto mb-3 text-violet-600" />
              <div className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-700">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Fitur Lengkap untuk Semua Kebutuhan
            </h2>
            <p className="text-gray-700 text-lg">
              Lebih dari sekedar kalkulator umur biasa
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
              >
                <Link to={feature.path}>
                  <Card className="p-6 h-full hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-violet-200 bg-white">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 shadow-lg`}>
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-bold text-xl mb-2">{feature.title}</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">{feature.description}</p>
                    <div className="flex items-center text-violet-600 font-semibold">
                      Coba Sekarang
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mb-16"
        >
          <Card className="bg-gradient-to-br from-violet-600 via-purple-600 to-blue-600 text-white p-8 md:p-12 shadow-2xl">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Mengapa Memilih AgeInfo?
                </h2>
                <p className="text-lg text-violet-100">
                  Platform terpercaya dengan fitur terlengkap
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4"
                  >
                    <CheckCircle2 className="w-6 h-6 text-green-300 flex-shrink-0" />
                    <span className="text-lg">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center"
        >
          <Card className="bg-gradient-to-br from-violet-50 via-white to-blue-50 p-12 shadow-xl border-2 border-violet-200">
            <TrendingUp className="w-16 h-16 mx-auto mb-6 text-violet-600" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Siap Menghitung Umur Anda?
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Dapatkan informasi lengkap tentang usia Anda dalam hitungan detik.
              Gratis, akurat, dan mudah digunakan!
            </p>
            <Link to="/kalkulator-umur">
              <Button
                size="lg"
                className="bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700 text-white shadow-xl shadow-violet-500/30 px-10 py-6 text-lg"
              >
                <Calculator className="w-5 h-5 mr-2" />
                Mulai Hitung Umur
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </Card>
        </motion.div>
      </div>
    </>
  );
}
