import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, Calculator, Loader2 } from "lucide-react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import SEOHead from "../components/SEOHead";
import { calculateDateDifference } from "../utils/ageCalculations";

export default function DateDifference() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isCalculating, setIsCalculating] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleCalculate = () => {
    if (!startDate || !endDate) return;

    setIsCalculating(true);

    setTimeout(() => {
      const start = new Date(startDate);
      const end = new Date(endDate);
      
      const diff = calculateDateDifference(start, end);

      setResult({
        startDate: start,
        endDate: end,
        ...diff,
      });

      setIsCalculating(false);

      setTimeout(() => {
        document.getElementById("result-section")?.scrollIntoView({ 
          behavior: "smooth", 
          block: "start" 
        });
      }, 100);
    }, 800);
  };

  const handleReset = () => {
    setResult(null);
    setStartDate("");
    setEndDate("");
  };

  return (
    <>
      <SEOHead
        title="Kalkulator Selisih Tanggal - Hitung Jarak Waktu | AgeInfo"
        description="Hitung selisih atau jarak waktu antara dua tanggal dalam tahun, bulan, hari, minggu, dan jam. Gratis dan mudah digunakan!"
        keywords="selisih tanggal, hitung jarak tanggal, perbedaan tanggal, kalkulator tanggal, date difference"
      />

      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full mb-4 border border-blue-200">
            <CalendarDays className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-700">
              Kalkulator Selisih Tanggal
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hitung{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Jarak Waktu
            </span>
            {" "}Antara 2 Tanggal
          </h1>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Temukan selisih waktu yang akurat antara dua tanggal dalam berbagai satuan
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <Card className="p-8 bg-white shadow-2xl border-2 border-blue-200/50">
            <div className="space-y-6">
              <div>
                <Label htmlFor="startDate" className="text-lg mb-2">
                  Tanggal Mulai
                </Label>
                <Input
                  id="startDate"
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="h-14 text-lg border-2 border-gray-200 focus:border-blue-500 rounded-xl"
                />
              </div>

              <div>
                <Label htmlFor="endDate" className="text-lg mb-2">
                  Tanggal Akhir
                </Label>
                <Input
                  id="endDate"
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="h-14 text-lg border-2 border-gray-200 focus:border-blue-500 rounded-xl"
                />
              </div>

              <div className="flex gap-3">
                <Button
                  onClick={handleCalculate}
                  disabled={!startDate || !endDate || isCalculating}
                  className="flex-1 h-14 text-lg bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-lg"
                >
                  {isCalculating ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Menghitung...
                    </>
                  ) : (
                    <>
                      <Calculator className="w-5 h-5 mr-2" />
                      Hitung Selisih
                    </>
                  )}
                </Button>

                {result && (
                  <Button
                    onClick={handleReset}
                    variant="outline"
                    className="h-14 px-6 border-2 border-blue-300 hover:bg-blue-50"
                  >
                    Reset
                  </Button>
                )}
              </div>
            </div>
          </Card>
        </motion.div>

        {result && (
          <motion.div
            id="result-section"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-4xl mx-auto scroll-mt-24"
          >
            <Card className="p-8 bg-gradient-to-br from-white via-blue-50/30 to-cyan-50/30 border-2 border-blue-200/50 shadow-2xl">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
                  {result.years} Tahun {result.months} Bulan {result.days} Hari
                </h2>
                <div className="text-gray-600 space-y-1">
                  <p>Dari: {result.startDate.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                  <p>Ke: {result.endDate.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-4 gap-4">
                <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl p-6 text-white shadow-lg">
                  <div className="text-3xl font-bold mb-1">{result.totalDays}</div>
                  <div className="text-sm opacity-90">Total Hari</div>
                </div>
                <div className="bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl p-6 text-white shadow-lg">
                  <div className="text-3xl font-bold mb-1">{result.weeks}</div>
                  <div className="text-sm opacity-90">Minggu</div>
                </div>
                <div className="bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl p-6 text-white shadow-lg">
                  <div className="text-3xl font-bold mb-1">{result.hours.toLocaleString('id-ID')}</div>
                  <div className="text-sm opacity-90">Jam</div>
                </div>
                <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl p-6 text-white shadow-lg">
                  <div className="text-3xl font-bold mb-1">{(result.hours * 60).toLocaleString('id-ID')}</div>
                  <div className="text-sm opacity-90">Menit</div>
                </div>
              </div>
            </Card>
          </motion.div>
        )}
      </div>
    </>
  );
}
