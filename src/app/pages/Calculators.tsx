import { motion } from "framer-motion";
import { Link } from "react-router";
import {
  Calculator,
  Scale,
  Baby,
  Heart,
  Activity,
  TrendingUp,
  Calendar,
  Sparkles,
  ArrowRight
} from "lucide-react";
import { Card } from "../components/ui/card";
import SEOHead from "../components/SEOHead";

export default function Calculators() {
  const calculators = [
    {
      icon: TrendingUp,
      title: "Social Growth Tracker",
      description: "Analisis potensi viralitas akun media sosial kamu berdasarkan tanggal lahir dan tren.",
      color: "from-blue-600 to-indigo-700",
      status: "Coming Soon",
      path: "#",
    },
    {
      icon: Sparkles,
      title: "Luck & Compatibility",
      description: "Cek tingkat keberuntungan dan kecocokan pasangan melalui algoritma tanggal lahir.",
      color: "from-amber-500 to-red-600",
      status: "Coming Soon",
      path: "#",
    },
    {
      icon: Scale,
      title: "Kalkulator BMI",
      description: "Hitung Body Mass Index (BMI) untuk mengetahui status berat badan ideal Anda",
      color: "from-cyan-500 to-blue-600",
      status: "Coming Soon",
      path: "#",
    },
    {
      icon: Activity,
      title: "Kalkulator Kalori",
      description: "Hitung kebutuhan kalori harian berdasarkan aktivitas dan profil fisik Anda.",
      color: "from-emerald-500 to-green-600",
      status: "Coming Soon",
      path: "#",
    },
    {
      icon: Baby,
      title: "Kalkulator Kehamilan",
      description: "Hitung usia kehamilan dan perkiraan tanggal kelahiran bayi secara akurat.",
      color: "from-pink-500 to-rose-600",
      status: "Coming Soon",
      path: "#",
    },
    {
      icon: Heart,
      title: "Masa Subur & Ovulasi",
      description: "Tentukan masa subur dan prediksi ovulasi untuk perencanaan kehamilan.",
      color: "from-rose-500 to-pink-600",
      status: "Coming Soon",
      path: "#",
    },
  ];

  return (
    <>
      <SEOHead
        title="Kalkulator Lainnya - BMI, Kehamilan, Masa Subur, Kalori | AgeInfo"
        description="Kumpulan kalkulator kesehatan dan kehidupan: BMI, kehamilan, masa subur, kalori, pertumbuhan anak, dan lainnya. Gratis dan mudah digunakan!"
        keywords="kalkulator bmi, kalkulator kehamilan, masa subur, kalori, kalkulator kesehatan"
      />

      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-100 to-blue-100 rounded-full mb-4 border border-violet-200">
            <Calculator className="w-4 h-4 text-violet-600" />
            <span className="text-sm font-semibold text-violet-700">
              Kalkulator Berguna Lainnya
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Koleksi{" "}
            <span className="bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
              Kalkulator Premium
            </span>
          </h1>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Berbagai kalkulator untuk kesehatan, kehamilan, dan kehidupan sehari-hari
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {calculators.map((calc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
            >
              <Card className="p-6 h-full hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-violet-200 bg-white relative overflow-hidden">
                {calc.status && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-violet-100 to-blue-100 text-violet-700 border border-violet-200">
                      {calc.status}
                    </span>
                  </div>
                )}

                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${calc.color} flex items-center justify-center mb-4 shadow-lg`}>
                  <calc.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="font-bold text-xl mb-2 pr-20">{calc.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{calc.description}</p>

                <div className="flex items-center text-gray-400 font-semibold mt-auto">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Coming Soon
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="max-w-4xl mx-auto mt-16"
        >
          <Card className="bg-gradient-to-br from-violet-600 via-purple-600 to-blue-600 text-white p-8 md:p-12 shadow-2xl text-center">
            <Sparkles className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Lebih Banyak Fitur Segera Hadir!
            </h2>
            <p className="text-lg text-violet-100 mb-6">
              Kami sedang mengembangkan berbagai kalkulator baru untuk membantu Anda.
              Kembali lagi segera untuk update terbaru!
            </p>
            <Link to="/kalkulator-umur">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-violet-700 font-semibold px-8 py-4 rounded-xl shadow-lg inline-flex items-center gap-2"
              >
                Coba Kalkulator Umur
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </Card>
        </motion.div>
      </div>
    </>
  );
}
