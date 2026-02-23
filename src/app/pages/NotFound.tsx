import { motion } from "framer-motion";
import { Link } from "react-router";
import { Home, Search, ArrowLeft } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto text-center"
      >
        <Card className="p-12 bg-gradient-to-br from-white via-violet-50/30 to-blue-50/30 border-2 border-violet-200/50 shadow-2xl">
          <motion.div
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
            className="text-8xl mb-6"
          >
            🔍
          </motion.div>

          <h1 className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
            404
          </h1>

          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
            Halaman Tidak Ditemukan
          </h2>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Maaf, halaman yang Anda cari tidak dapat ditemukan. 
            Mungkin halaman tersebut telah dipindahkan atau tidak pernah ada.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/">
              <Button
                size="lg"
                className="bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700 text-white shadow-lg"
              >
                <Home className="w-5 h-5 mr-2" />
                Kembali ke Beranda
              </Button>
            </Link>

            <Link to="/kalkulator-umur">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-violet-300 hover:bg-violet-50"
              >
                <Search className="w-5 h-5 mr-2" />
                Hitung Umur
              </Button>
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-4">Halaman populer:</p>
            <div className="flex flex-wrap gap-2 justify-center">
              <Link to="/kalkulator-umur" className="text-violet-600 hover:underline text-sm">
                Kalkulator Umur
              </Link>
              <span className="text-gray-300">•</span>
              <Link to="/selisih-tanggal" className="text-violet-600 hover:underline text-sm">
                Selisih Tanggal
              </Link>
              <span className="text-gray-300">•</span>
              <Link to="/kalender-keagamaan" className="text-violet-600 hover:underline text-sm">
                Kalender Keagamaan
              </Link>
              <span className="text-gray-300">•</span>
              <Link to="/blog" className="text-violet-600 hover:underline text-sm">
                Blog
              </Link>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
