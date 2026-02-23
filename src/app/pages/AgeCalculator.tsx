import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Calculator, Loader2, Clock, Sparkles } from "lucide-react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import AgeResultCard from "../components/AgeResultCard";
import ShareableResultCard from "../components/ShareableResultCard";
import SEOHead from "../components/SEOHead";
import {
  calculateAge,
  calculateTotalDays,
  calculateDaysUntilNextBirthday,
  convertAge,
  calculateWeton,
  calculateZodiac,
  getMicroMilestones,
  getHistoricalContext,
} from "../utils/ageCalculations";

export default function AgeCalculator() {
  const [userName, setUserName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [isCalculating, setIsCalculating] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleCalculate = () => {
    if (!birthDate) return;

    setIsCalculating(true);

    // Simulate calculation delay for smooth animation
    setTimeout(() => {
      const birth = new Date(`${birthDate}T00:00:00`);

      const ageData = calculateAge(birth);
      const daysUntilBirthday = calculateDaysUntilNextBirthday(birth);
      const conversions = convertAge(birth);
      const weton = calculateWeton(birth);
      const zodiac = calculateZodiac(birth);
      const milestones = getMicroMilestones(birth);
      const historical = getHistoricalContext(birth);

      setResult({
        userName,
        birthDate: birth,
        ageData,
        daysUntilBirthday,
        conversions,
        weton,
        zodiac,
        milestones,
        historical,
      });

      setIsCalculating(false);

      // Scroll to result
      setTimeout(() => {
        document.getElementById("result-section")?.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }, 100);
    }, 1000);
  };

  const handleReset = () => {
    setResult(null);
    setBirthDate("");
    setUserName("");
  };

  // Get today's date in YYYY-MM-DD format for max attribute
  const today = new Date().toISOString().split('T')[0];

  return (
    <>
      <SEOHead
        title="Kalkulator Umur Lengkap - Hitung Umur, Weton, Zodiak | AgeInfo"
        description="Kalkulator umur terlengkap dengan fitur hitung umur detail, weton Jawa, zodiak, pencapaian unik, dan konteks sejarah. Gratis dan akurat!"
        keywords="kalkulator umur, hitung umur online, weton, zodiak, umur detail, tanggal lahir, age calculator indonesia"
      />

      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
          role="banner"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-100 to-blue-100 rounded-full mb-4 border border-violet-200">
            <Calculator className="w-4 h-4 text-violet-600" aria-hidden="true" />
            <span className="text-sm font-semibold text-violet-700">
              Kalkulator Umur Premium
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter">
            Bukan Sekadar Hitung,{" "}
            <span className="bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
              Bedah Usia Anda
            </span>
          </h1>

          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Masukkan tanggal lahir Anda dan dapatkan informasi lengkap tentang umur,
            weton, zodiak, pencapaian unik, dan konteks sejarah yang menarik!
          </p>
        </motion.div>

        {/* Input Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto mb-12"
        >
          <Card
            className="p-6 md:p-10 bg-white shadow-2xl border-2 border-violet-200/50 rounded-3xl overflow-hidden relative"
            role="form"
            id="calculator-form"
            aria-label="Formulir Kalkulator Umur"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500" />

            <form onSubmit={(e) => { e.preventDefault(); handleCalculate(); }} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                {/* Name Input */}
                <fieldset className="space-y-2">
                  <Label
                    htmlFor="userName"
                    className="text-base font-semibold text-gray-800 flex items-center gap-2"
                  >
                    <span className="w-8 h-8 rounded-lg bg-violet-100 flex items-center justify-center text-violet-600">
                      <Calculator className="w-4 h-4" />
                    </span>
                    Siapa Nama Anda? (Opsional)
                  </Label>
                  <Input
                    id="userName"
                    type="text"
                    placeholder="Contoh: Budi Santoso"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="h-12 border-gray-200 focus:border-violet-500 focus:ring-violet-500 rounded-xl"
                  />
                </fieldset>

                {/* Date Input */}
                <fieldset className="space-y-2">
                  <Label
                    htmlFor="birthDate"
                    className="text-base font-semibold text-gray-800 flex items-center gap-2"
                  >
                    <span className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                      <Calendar className="w-4 h-4" />
                    </span>
                    Tanggal Lahir <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="birthDate"
                    type="date"
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                    max={today}
                    className="h-12 border-gray-200 focus:border-violet-500 focus:ring-violet-500 rounded-xl"
                    aria-required="true"
                    autoComplete="bday"
                  />
                </fieldset>

                {/* Helpful Tip */}
                <div className="md:flex items-center hidden">
                  <div className="bg-violet-50 rounded-2xl p-4 border border-violet-100 flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-violet-600 mt-1 flex-shrink-0" />
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Lengkapi data Anda untuk mendapatkan hasil weton dan zodiak yang lebih personal.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-gray-100">
                <Button
                  type="submit"
                  disabled={!birthDate || isCalculating}
                  className="flex-1 h-12 text-lg font-bold bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700 text-white shadow-xl shadow-violet-500/20 rounded-xl"
                  aria-busy={isCalculating}
                >
                  {isCalculating ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Menganalisis...
                    </>
                  ) : (
                    <>
                      <Calculator className="w-5 h-5 mr-2" />
                      Bedah Usia Saya
                    </>
                  )}
                </Button>

                {result && (
                  <Button
                    type="button"
                    onClick={handleReset}
                    variant="outline"
                    className="h-12 px-8 border-2 border-gray-200 hover:bg-gray-50 rounded-xl font-semibold"
                  >
                    Reset
                  </Button>
                )}
              </div>
            </form>
          </Card>

          {/* Info Cards - Optimized for Mobile (Forced Single Row) */}
          <div className="grid grid-cols-3 gap-2 md:gap-4 mt-6" role="region" aria-label="Fitur kalkulator">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-xl p-2 md:p-4 border border-violet-200 text-center md:text-left"
              role="article"
              aria-label="Fitur akurat perhitungan hingga detik"
            >
              <div className="font-bold text-violet-700 text-xs md:text-base mb-0.5 md:mb-1" aria-hidden="true">
                <span className="hidden md:inline">✨ </span>Akurat
              </div>
              <p className="text-[10px] md:text-sm text-gray-600 hidden md:block">Perhitungan hingga detik</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-2 md:p-4 border border-blue-200 text-center md:text-left"
              role="article"
              aria-label="Fitur lengkap termasuk weton dan zodiak"
            >
              <div className="font-bold text-blue-700 text-xs md:text-base mb-0.5 md:mb-1" aria-hidden="true">
                <span className="hidden md:inline">🎯 </span>Lengkap
              </div>
              <p className="text-[10px] md:text-sm text-gray-600 hidden md:block">Termasuk weton & zodiak</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-2 md:p-4 border border-green-200 text-center md:text-left"
              role="article"
              aria-label="Fitur mudah dibagikan ke media sosial"
            >
              <div className="font-bold text-green-700 text-xs md:text-base mb-0.5 md:mb-1" aria-hidden="true">
                <span className="hidden md:inline">📱 </span>Share
              </div>
              <p className="text-[10px] md:text-sm text-gray-600 hidden md:block">Share ke media sosial</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Result Section */}
        {result && (
          <motion.section
            id="result-section"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="scroll-mt-24"
            role="region"
            aria-live="polite"
            aria-label="Hasil perhitungan umur"
          >
            <AgeResultCard
              {...result}
              role="article"
              aria-label="Kartu hasil detail perhitungan umur"
            />

            {/* Spacer */}
            <div className="h-12" />

            {/* Shareable Card */}
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Kartu Hasil yang Dapat Dibagikan</h2>
              <p className="text-gray-600 mt-2">Download atau bagikan hasil perhitungan Anda</p>
            </div>
            <ShareableResultCard
              birthDate={result.birthDate}
              ageData={result.ageData}
              daysUntilBirthday={result.daysUntilBirthday}
              conversions={result.conversions}
              weton={result.weton}
              zodiac={result.zodiac}
              historical={result.historical}
              userName={userName}
            />
          </motion.section>
        )}

        {/* SEO Content */}
        {!result && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="max-w-4xl mx-auto mt-16 space-y-8"
          >
            <Card className="p-8 bg-white shadow-lg border border-gray-200">
              <h2 className="text-2xl font-bold mb-4">Apa itu Kalkulator Umur AgeInfo?</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                AgeInfo adalah kalkulator umur online terlengkap di Indonesia yang tidak hanya menghitung
                umur Anda dalam tahun, bulan, dan hari, tetapi juga memberikan informasi detail seperti:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-violet-600 mt-1">•</span>
                  <span>Konversi umur ke berbagai satuan (minggu, jam, menit, detik)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-violet-600 mt-1">•</span>
                  <span>Perhitungan weton Jawa lengkap dengan watak dan karakteristik</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-violet-600 mt-1">•</span>
                  <span>Zodiak dan sifat-sifat kepribadian berdasarkan tanggal lahir</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-violet-600 mt-1">•</span>
                  <span>Pencapaian unik (micro-milestones) seperti 10,000 hari hidup</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-violet-600 mt-1">•</span>
                  <span>Konteks sejarah tentang era kelahiran Anda</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-violet-50 to-blue-50 border border-violet-200">
              <h2 className="text-2xl font-bold mb-4">Cara Menggunakan Kalkulator Umur</h2>
              <ol className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="font-bold text-violet-600 flex-shrink-0">1.</span>
                  <span>Pilih tanggal lahir Anda menggunakan kalender atau ketik manual</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-violet-600 flex-shrink-0">2.</span>
                  <span>Klik tombol "Hitung Umur Saya"</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-violet-600 flex-shrink-0">3.</span>
                  <span>Lihat hasil lengkap yang mencakup semua detail tentang umur Anda</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-violet-600 flex-shrink-0">4.</span>
                  <span>Bagikan hasil ke media sosial atau download sebagai gambar</span>
                </li>
              </ol>
            </Card>
          </motion.div>
        )}
      </div>
    </>
  );
}
