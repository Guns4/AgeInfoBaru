// Blog content database with all post information
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: "Budaya" | "Tutorial" | "Astrologi" | "Lifestyle" | "Sejarah" | "Kesehatan" | "Sosial";
  date: string;
  readTime: string;
  image: string;
  featured: boolean;
  content: string;
}

export const blogPostsData: BlogPost[] = [
  {
    slug: "arti-weton-jawa-dan-karakteristiknya",
    title: "Arti Weton Jawa dan Karakteristik Kepribadian",
    excerpt: "Pelajari makna mendalam dari weton Jawa dan bagaimana pengaruhnya terhadap kepribadian Anda menurut tradisi Jawa kuno.",
    category: "Budaya",
    date: "15 Februari 2026",
    readTime: "5 menit",
    image: "🌟",
    featured: true,
    content: `
      <h2 style="font-size: 1.875rem; font-weight: bold; margin-top: 1.5rem; margin-bottom: 1rem; color: #1f2937;">Apa Itu Weton?</h2>
      <p style="margin-bottom: 1rem; line-height: 1.6;">Weton adalah sistem penanggalan tradisional Jawa yang menggabungkan hari dalam seminggu (7 hari) dengan pasaran Jawa (5 hari). Kombinasi ini menghasilkan 35 weton yang berbeda, masing-masing dengan makna dan karakteristik unik.</p>
      
      <h3 style="font-size: 1.375rem; font-weight: bold; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Sistem Pasaran Jawa</h3>
      <p style="margin-bottom: 1rem; line-height: 1.6;">Pasaran Jawa terdiri dari 5 nama hari yang berputar dalam siklus: <strong>Kliwon, Legi, Pahing, Pon, dan Wage</strong>. Setiap pasaran memiliki makna, nilai numerik, dan karakteristik tersendiri yang dipercaya mempengaruhi nasib.</p>
      <ul style="margin-left: 1.5rem; margin-bottom: 1rem; line-height: 1.8;">
        <li><strong>Kliwon:</strong> Melambangkan kekuatan dan ketegasan</li>
        <li><strong>Legi:</strong> Melambangkan keberuntungan dan kemakmuran</li>
        <li><strong>Pahing:</strong> Melambangkan kewaspadaan dan keseriusan</li>
        <li><strong>Pon:</strong> Melambangkan kestabilan dan ketenangan</li>
        <li><strong>Wage:</strong> Melambangkan kebijaksanaan dan pembelajaran</li>
      </ul>
      
      <h3 style="font-size: 1.375rem; font-weight: bold; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Perhitungan Nilai Weton</h3>
      <p style="margin-bottom: 1rem; line-height: 1.6;">Setiap hari dalam seminggu memiliki nilai numerik: Senin (4), Selasa (3), Rabu (7), Kamis (8), Jumat (6), Sabtu (9), Minggu (5). Demikian pula dengan pasaran: Kliwon (8), Legi (5), Pahing (7), Pon (4), Wage (6). Total dari kedua nilai ini menentukan karakter individu.</p>
      
      <h3 style="font-size: 1.375rem; font-weight: bold; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Pengaruh Weton pada Kehidupan</h3>
      <p style="margin-bottom: 1rem; line-height: 1.6;">Dalam tradisi Jawa, weton dipercaya mempengaruhi kepribadian, nasib, dan bahkan kecocokan jodoh. Banyak orang Jawa yang masih menggunakan weton sebagai panduan untuk menentukan hari baik dalam berbagai acara penting seperti pernikahan, kelahiran, dan milestones kehidupan lainnya.</p>
      
      <h3 style="font-size: 1.375rem; font-weight: bold; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Relevansi di Era Modern</h3>
      <p style="margin-bottom: 1rem; line-height: 1.6;">Meski banyak yang menganggap weton sebagai superstisi, sistem ini tetap menjadi bagian integral dari budaya Jawa. Banyak individu yang menemukan nilai filosofis dan spiritual dalam memahami weton mereka, bahkan menggunakannya sebagai alat refleksi diri.</p>
    `,
  },
  {
    slug: "cara-menghitung-umur-secara-akurat",
    title: "Cara Menghitung Umur Secara Akurat dan Lengkap",
    excerpt: "Panduan lengkap menghitung umur dari tanggal lahir, termasuk konversi ke berbagai satuan waktu.",
    category: "Tutorial",
    date: "12 Februari 2026",
    readTime: "4 menit",
    image: "📊",
    featured: false,
    content: `
      <h2 style="font-size: 1.875rem; font-weight: bold; margin-top: 1.5rem; margin-bottom: 1rem; color: #1f2937;">Mengapa Perhitungan Umur Penting?</h2>
      <p style="margin-bottom: 1rem; line-height: 1.6;">Mengetahui umur secara akurat penting untuk berbagai keperluan administrasi, kesehatan, dan perencanaan hidup. Dari pengehcekan asuransi, pendaftaran sekolah, hingga perhitungan masa kerja, akurasi dalam menghitung umur sangat diperlukan.</p>
      
      <h3 style="font-size: 1.375rem; font-weight: bold; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Langkah-langkah Menghitung Umur</h3>
      <p style="margin-bottom: 1rem; line-height: 1.6;"><strong>Metode Manual:</strong></p>
      <ol style="margin-left: 1.5rem; margin-bottom: 1rem; line-height: 1.8;">
        <li>Tentukan tanggal lahir dan tanggal perhitungan (hari ini)</li>
        <li>Hitung selisih tahun dari kedua tanggal</li>
        <li>Jika bulan dan hari belum mencapai bulan/hari lahir, kurangi 1 tahun</li>
        <li>Hasilnya adalah umur dalam tahun</li>
      </ol>
      
      <h3 style="font-size: 1.375rem; font-weight: bold; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Konversi ke Satuan Lain</h3>
      <p style="margin-bottom: 1rem; line-height: 1.6;">Umur dapat dikonversi ke berbagai satuan waktu untuk keperluan tertentu:</p>
      <ul style="margin-left: 1.5rem; margin-bottom: 1rem; line-height: 1.8;">
        <li><strong>Bulan:</strong> Tahun × 12 + bulan tambahan</li>
        <li><strong>Minggu:</strong> Total hari ÷ 7</li>
        <li><strong>Hari:</strong> Hitung dari tanggal lahir hingga hari ini</li>
        <li><strong>Jam:</strong> Total hari × 24</li>
        <li><strong>Menit:</strong> Total jam × 60</li>
        <li><strong>Detik:</strong> Total menit × 60</li>
      </ul>
      
      <h3 style="font-size: 1.375rem; font-weight: bold; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Hal-hal Penting yang Harus Diperhatikan</h3>
      <ul style="margin-left: 1.5rem; margin-bottom: 1rem; line-height: 1.8;">
        <li>Pastikan tanggal lahir tercatat dengan benar di dokumen resmi</li>
        <li>Perhitungan umur biasanya dilakukan setelah tanggal lahir terlewat dalam tahun itu</li>
        <li>Perbedaan zona waktu dapat mempengaruhi perhitungan jam dan menit</li>
        <li>Tahun kabisat (leap year) mempengaruhi perhitungan hari yang akurat</li>
      </ul>
    `,
  },
  {
    slug: "zodiak-dan-kepribadian",
    title: "Mengenal Zodiak dan Pengaruhnya pada Kepribadian",
    excerpt: "Eksplorasi mendalam tentang 12 zodiak dan bagaimana mereka mencerminkan sifat dan karakter seseorang.",
    category: "Astrologi",
    date: "10 Februari 2026",
    readTime: "6 menit",
    image: "♈",
    featured: true,
    content: `
      <h2 style="font-size: 1.875rem; font-weight: bold; margin-top: 1.5rem; margin-bottom: 1rem; color: #1f2937;">Sejarah Zodiak</h2>
      <p style="margin-bottom: 1rem; line-height: 1.6;">Zodiak adalah sistem astrologi yang membagi tahun menjadi 12 konstelasi bintang. Sistem ini berasal dari peradaban Babilonia kuno dan telah digunakan selama ribuan tahun untuk memahami kepribadian dan memprediksi masa depan.</p>
      
      <h3 style="font-size: 1.375rem; font-weight: bold; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">12 Zodiak dan Karakteristiknya</h3>
      
      <div style="margin-bottom: 1.5rem;">
        <p style="margin-bottom: 0.5rem; line-height: 1.6;"><strong>♈ Aries (21 Maret - 19 April):</strong> Pemimpin yang berani, energik, dan penuh inisiatif. Mereka cenderung impulsif namun memiliki semangat yang tinggi.</p>
      </div>
      
      <div style="margin-bottom: 1.5rem;">
        <p style="margin-bottom: 0.5rem; line-height: 1.6;"><strong>♉ Taurus (20 April - 20 Mei):</strong> Stabil, praktis, dan setia. Mereka menghargai kenyamanan dan keamanan finansial serta memiliki sifat yang sabar.</p>
      </div>
      
      <div style="margin-bottom: 1.5rem;">
        <p style="margin-bottom: 0.5rem; line-height: 1.6;"><strong>♊ Gemini (21 Mei - 20 Juni):</strong> Cerdas, komunikatif, dan fleksibel. Mereka menyukai pembelajaran dan sering menjadi mediator yang baik.</p>
      </div>
      
      <div style="margin-bottom: 1.5rem;">
        <p style="margin-bottom: 0.5rem; line-height: 1.6;"><strong>♋ Cancer (21 Juni - 22 Juli):</strong> Sensitif, emosional, dan protektif terhadap keluarga. Mereka memiliki intuisi yang kuat dan mudah berempati.</p>
      </div>
      
      <div style="margin-bottom: 1.5rem;">
        <p style="margin-bottom: 0.5rem; line-height: 1.6;"><strong>♌ Leo (23 Juli - 22 Agustus):</strong> Percaya diri, karismatik, dan suka menjadi pusat perhatian. Mereka memiliki hati yang murah hati dan loyalitas tinggi.</p>
      </div>
      
      <div style="margin-bottom: 1.5rem;">
        <p style="margin-bottom: 0.5rem; line-height: 1.6;"><strong>♍ Virgo (23 Agustus - 22 September):</strong> Analitis, teratur, dan perfeksionist. Mereka detail dalam segala hal dan suka membantu orang lain.</p>
      </div>
      
      <div style="margin-bottom: 1.5rem;">
        <p style="margin-bottom: 0.5rem; line-height: 1.6;"><strong>♎ Libra (23 September - 22 Oktober):</strong> Diplomatis, adil, dan sosial. Mereka mencari keseimbangan dalam hidup dan menghindari konflik.</p>
      </div>
      
      <div style="margin-bottom: 1.5rem;">
        <p style="margin-bottom: 0.5rem; line-height: 1.6;"><strong>♏ Scorpio (23 Oktober - 21 November):</strong> Misterius, intens, dan penuh gairah. Mereka memiliki kemauan yang kuat dan sifat yang transformatif.</p>
      </div>
      
      <div style="margin-bottom: 1.5rem;">
        <p style="margin-bottom: 0.5rem; line-height: 1.6;"><strong>♐ Sagittarius (22 November - 21 Desember):</strong> Optimis, petualang, dan filosofis. Mereka mencintai kebebasan dan selalu mencari pengalaman baru.</p>
      </div>
      
      <div style="margin-bottom: 1.5rem;">
        <p style="margin-bottom: 0.5rem; line-height: 1.6;"><strong>♑ Capricorn (22 Desember - 19 Januari):</strong> Ambisius, disiplin, dan bertanggung jawab. Mereka fokus pada pencapaian jangka panjang dan kesuksesan karir.</p>
      </div>
      
      <div style="margin-bottom: 1.5rem;">
        <p style="margin-bottom: 0.5rem; line-height: 1.6;"><strong>♒ Aquarius (20 Januari - 18 Februari):</strong> Inovatif, independen, dan humanis. Mereka suka membantu komunitas dan memiliki pemikiran yang unik.</p>
      </div>
      
      <div style="margin-bottom: 1.5rem;">
        <p style="margin-bottom: 0.5rem; line-height: 1.6;"><strong>♓ Pisces (19 Februari - 20 Maret):</strong> Intuitif, kreatif, dan empatik. Mereka sering bermimpi dan memiliki imajinasi yang kaya.</p>
      </div>
      
      <h3 style="font-size: 1.375rem; font-weight: bold; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Kompatibilitas Zodiak</h3>
      <p style="margin-bottom: 1rem; line-height: 1.6;">Tidak semua kombinasi zodiak memiliki kompatibilitas yang sama dalam hubungan. Elemen (Api, Tanah, Udara, Air) memainkan peran penting dalam menentukan keseimbangan antara dua zodiak.</p>
    `,
  },
  {
    slug: "milestone-kehidupan-yang-perlu-dirayakan",
    title: "10 Milestone Kehidupan yang Perlu Dirayakan",
    excerpt: "Dari 10,000 hari hidup hingga 1 miliar detik, temukan pencapaian unik yang patut Anda rayakan.",
    category: "Lifestyle",
    date: "8 Februari 2026",
    readTime: "7 menit",
    image: "🎉",
    featured: false,
    content: `
      <h2 style="font-size: 1.875rem; font-weight: bold; margin-top: 1.5rem; margin-bottom: 1rem; color: #1f2937;">Mengapa Merayakan Milestone Penting?</h2>
      <p style="margin-bottom: 1rem; line-height: 1.6;">Setiap milestone kehidupan adalah kesempatan untuk merefleksikan perjalanan kita, menghargai pencapaian, dan merayakan kemenangan, baik besar maupun kecil. Merayakan milestone membantu kita membangun kepercayaan diri dan motivasi untuk melangkah ke fase berikutnya.</p>
      
      <h3 style="font-size: 1.375rem; font-weight: bold; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">10 Milestone Kehidupan yang Perlu Dirayakan</h3>
      
      <p style="margin-bottom: 1rem; line-height: 1.6;"><strong>1. 1,000 Hari Hidup (Sekitar 2.7 Tahun)</strong><br/>Pencapaian pertama yang menandai anak telah melewati masa bayi. Ini adalah waktu yang tepat untuk merayakan kekuatan dan ketahanan mereka.</p>
      
      <p style="margin-bottom: 1rem; line-height: 1.6;"><strong>2. 5,000 Hari Hidup (Sekitar 13.7 Tahun)</strong><br/>Memasuki masa remaja awal. Waktu yang tepat untuk merefleksikan pertumbuhan fisik dan emosional.</p>
      
      <p style="margin-bottom: 1rem; line-height: 1.6;"><strong>3. 10,000 Hari Hidup (Sekitar 27.4 Tahun)</strong><br/>Pencapaian besar yang menandai masuk ke fase kedewasaan. Banyak yang merayakan milestone ini dengan cara istimewa.</p>
      
      <p style="margin-bottom: 1rem; line-height: 1.6;"><strong>4. 100,000 Jam Hidup (Sekitar 11.4 Tahun)</strong><br/>Milestone temporal yang menunjukkan pengalaman dan pembelajaran signifikan.</p>
      
      <p style="margin-bottom: 1rem; line-height: 1.6;"><strong>5. 500,000 Jam Hidup (Sekitar 57 Tahun)</strong><br/>Memasuki fase kehidupan yang lebih bijaksana dengan pengalaman puluhan tahun.</p>
      
      <p style="margin-bottom: 1rem; line-height: 1.6;"><strong>6. Ulang Tahun Ke-20</strong><br/>Transisi dari remaja ke dewasa muda. Waktu untuk merencanakan masa depan dengan lebih serius.</p>
      
      <p style="margin-bottom: 1rem; line-height: 1.6;"><strong>7. Ulang Tahun Ke-30</strong><br/>Memasuki dekade ketiga dengan pencapaian karir, pendidikan, dan personal yang signifikan.</p>
      
      <p style="margin-bottom: 1rem; line-height: 1.6;"><strong>8. 1 Miliar Detik Hidup (Sekitar 31.7 Tahun)</strong><br/>Pencapaian numerik fantastis yang layak dirayakan dengan cara yang bermakna.</p>
      
      <p style="margin-bottom: 1rem; line-height: 1.6;"><strong>9. Jalan Spiritualitas atau Pencapaian Pribadi</strong><br/>Baik itu menyelesaikan pendidikan, mendapatkan pekerjaan impian, atau menemukan pasangan hidup.</p>
      
      <p style="margin-bottom: 1rem; line-height: 1.6;"><strong>10. Saat Berbagi dan Memberikan Kembali</strong><br/>Mencapai kemampuan untuk membantu komunitas dan meninggalkan warisan positif.</p>
      
      <h3 style="font-size: 1.375rem; font-weight: bold; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Cara Bermakna Merayakan Milestone</h3>
      <ul style="margin-left: 1.5rem; margin-bottom: 1rem; line-height: 1.8;">
        <li>Berkumpul bersama keluarga dan teman-teman terdekat</li>
        <li>Menulis jurnal tentang perjalanan dan pembelajaran</li>
        <li>Memberi donasi atau membantu mereka yang membutuhkan</li>
        <li>Mengambil foto atau video untuk mengabadikan momen</li>
        <li>Menetapkan tujuan baru untuk fase berikutnya</li>
      </ul>
    `,
  },
  {
    slug: "sejarah-kalender-dan-perhitungan-waktu",
    title: "Sejarah Kalender dan Perhitungan Waktu",
    excerpt: "Perjalanan manusia dalam mengukur waktu, dari kalender kuno hingga sistem modern yang kita gunakan saat ini.",
    category: "Sejarah",
    date: "5 Februari 2026",
    readTime: "8 menit",
    image: "📅",
    featured: false,
    content: `
      <h2 style="font-size: 1.875rem; font-weight: bold; margin-top: 1.5rem; margin-bottom: 1rem; color: #1f2937;">Mengapa Manusia Membutuhkan Kalender?</h2>
      <p style="margin-bottom: 1rem; line-height: 1.6;">Sejak zaman kuno, manusia memerlukan cara untuk mengukur dan mengorganisir waktu. Kalender menjadi alat vital untuk pertanian, perdagangan, keagamaan, dan administrasi. Tanpa kalender, kehidupan modern akan kacau balau.</p>
      
      <h3 style="font-size: 1.375rem; font-weight: bold; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Kalender Kuno</h3>
      <p style="margin-bottom: 1rem; line-height: 1.6;"><strong>Kalender Mesir:</strong> Salah satu kalender tertua, yang dibagi menjadi 3 musim dengan 12 bulan, masing-masing 30 hari. Mereka juga mengamati bintang Sirius untuk menandai awal tahun baru.</p>
      
      <p style="margin-bottom: 1rem; line-height: 1.6;"><strong>Kalender Babilonia:</strong> Menggunakan siklus Bulan (lunisolar) dan menjadi dasar bagi banyak kalender berikutnya, termasuk kalender Ibrani.</p>
      
      <p style="margin-bottom: 1rem; line-height: 1.6;"><strong>Kalender Mayan:</strong> Salah satu kalender paling akurat dalam sejarah, dengan presisi yang luar biasa untuk zaman itu.</p>
      
      <p style="margin-bottom: 1rem; line-height: 1.6;"><strong>Kalender Cina:</strong> Lunisolar yang masih digunakan untuk menentukan perayaan tradisional di Asia Timur.</p>
      
      <h3 style="font-size: 1.375rem; font-weight: bold; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Kalender Julian dan Gregorian</h3>
      <p style="margin-bottom: 1rem; line-height: 1.6;">Pada tahun 45 SM, Julius Caesar memperkenalkan Kalender Julian dengan tahun yang dibagi menjadi 365 hari dan 4 tahun sekali ada hari tambahan (kabisat). Namun, sistem ini masih tidak sempurna.</p>
      
      <p style="margin-bottom: 1rem; line-height: 1.6;">Tahun 1582 Masehi, Paus Gregorius XIII memodifikasi kalender Julian menjadi Kalender Gregorian yang lebih akurat. Sistem ini menghilangkan 3 dari setiap 400 hari kabisat untuk memperbaiki kesalahan perhitungan.</p>
      
      <h3 style="font-size: 1.375rem; font-weight: bold; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Kalender Hijriah (Lunar Islamic Calendar)</h3>
      <p style="margin-bottom: 1rem; line-height: 1.6;">Kalender ini hanya berdasarkan siklus Bulan, bukan Matahari. Satu tahun Hijriah adalah 354 atau 355 hari, sehingga tahun Hijriah lebih pendek 11 hari dari tahun matahari. Digunakan untuk menentukan waktu Ramadan dan Haji.</p>
      
      <h3 style="font-size: 1.375rem; font-weight: bold; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Sistem Waktu Modern</h3>
      <p style="margin-bottom: 1rem; line-height: 1.6;"><strong>Waktu Universal Terkoordinasi (UTC):</strong> Standar internasional untuk mengatur waktu di seluruh dunia. Memungkinkan sinkronisasi global untuk komunikasi, transportasi, dan teknologi.</p>
      
      <p style="margin-bottom: 1rem; line-height: 1.6;"><strong>Zona Waktu:</strong> Dunia dibagi menjadi 24 zona waktu berdasarkan rotasi Bumi. Ini memastikan bahwa waktu lokal sejalan dengan kedudukan Matahari.</p>
      
      <h3 style="font-size: 1.375rem; font-weight: bold; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Masa Depan Kalender</h3>
      <p style="margin-bottom: 1rem; line-height: 1.6;">Ada proposal untuk mereformasi kalender Gregorian agar lebih konsisten, tetapi perubahan besar tidak mungkin terjadi karena dampaknya pada miliaran orang di seluruh dunia. Sistem waktu yang ada kemungkinan akan terus digunakan dengan modifikasi teknologi minor.</p>
    `,
  },
  {
    slug: "rahasia-umur-panjang-dan-sehat",
    title: "Rahasia Umur Panjang dan Hidup Sehat",
    excerpt: "Tips dan trik dari berbagai penelitian tentang bagaimana hidup lebih lama dengan kualitas hidup yang baik.",
    category: "Kesehatan",
    date: "3 Februari 2026",
    readTime: "6 menit",
    image: "💪",
    featured: true,
    content: `
      <h2 style="font-size: 1.875rem; font-weight: bold; margin-top: 1.5rem; margin-bottom: 1rem; color: #1f2937;">Apakah Umur Panjang Itu Mungkin?</h2>
      <p style="margin-bottom: 1rem; line-height: 1.6;">Penelitian modern menunjukkan bahwa harapan hidup dipengaruhi oleh faktorgenetik (30%) dan gaya hidup (70%). Ini berarti bahwa mayoritas faktor yang menentukan umur panjang berada dalam kendali kita. Dengan pilihan yang tepat, kita dapat menambah tahun berkualitas dalam hidup.</p>
      
      <h3 style="font-size: 1.375rem; font-weight: bold; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">7 Kunci Umur Panjang</h3>
      
      <p style="margin-bottom: 1rem; line-height: 1.6;"><strong>1. Olahraga Teratur</strong><br/>Aktivitas fisik 30 menit setiap hari dapat mengurangi risiko penyakit jantung hingga 40%. Kombinasi cardio, strength training, dan flexibility work memberikan manfaat maksimal.</p>
      
      <p style="margin-bottom: 1rem; line-height: 1.6;"><strong>2. Nutrisi Seimbang</strong><br/>Diet Mediterania telah terbukti meningkatkan umur. Fokus pada sayuran, buah, biji-bijian, ikan, dan minyak zaitun. Kurangi gula, garam, dan lemak jenuh.</p>
      
      <p style="margin-bottom: 1rem; line-height: 1.6;"><strong>3. Manajemen Stres</strong><br/>Stress kronis meningkatkan risiko penyakit dan mempercepat penuaan. Meditasi, yoga, dan aktivitas yang menenangkan jiwa sangat bermanfaat.</p>
      
      <p style="margin-bottom: 1rem; line-height: 1.6;"><strong>4. Tidur Berkualitas</strong><br/>Orang yang tidur 7-9 jam per malam memiliki umur lebih panjang. Tidur yang baik membantu regenerasi sel dan memperkuat sistem imun.</p>
      
      <p style="margin-bottom: 1rem; line-height: 1.6;"><strong>5. Hubungan Sosial yang Kuat</strong><br/>Orang yang memiliki hubungan sosial yang baik memiliki umur 50% lebih panjang. Keluarga, teman, dan komunitas memberikan dukungan emosional.</p>
      
      <p style="margin-bottom: 1rem; line-height: 1.6;"><strong>6. Pembelajaran Seumur Hidup</strong><br/>Menjaga otak tetap aktif dengan belajar hal baru mengurangi risiko demensia. Baca buku, ikuti kursus, atau pelajari keterampilan baru.</p>
      
      <p style="margin-bottom: 1rem; line-height: 1.6;"><strong>7. Tujuan Hidup yang Jelas</strong><br/>Orang dengan tujuan hidup yang jelas memiliki harapan hidup lebih lama. Memiliki makna dan arah dalam hidup memberikan motivasi untuk menjaga kesehatan.</p>
      
      <h3 style="font-size: 1.375rem; font-weight: bold; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Zona Biru Dunia</h3>
      <p style="margin-bottom: 1rem; line-height: 1.6;">Banyak penelitian fokus pada "Blue Zones" - wilayah di dunia di mana orang hidup paling lama: Okinawa (Jepang), Sardinia (Italia), Nicoya (Costa Rica), Ikaria (Yunani), dan Loma Linda (USA). Mereka memiliki kesamaan: aktivitas fisik, diet nabati, hubungan sosial kuat, dan tujuan hidup yang jelas.</p>
      
      <h3 style="font-size: 1.375rem; font-weight: bold; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Tips Praktis Mulai Hari Ini</h3>
      <ul style="margin-left: 1.5rem; margin-bottom: 1rem; line-height: 1.8;">
        <li>Mulai dengan berjalan 30 menit setiap hari</li>
        <li>Tambahkan lebih banyak sayuran dan buah ke dalam diet</li>
        <li>Kurangi waktu layar sebelum tidur</li>
        <li>Hubungi teman atau keluarga yang lama tidak dihubungi</li>
        <li>Tentukan 3 tujuan jangka panjang yang bermakna</li>
      </ul>
    `,
  },
  {
    slug: "memahami-generasi-berdasarkan-tahun-lahir",
    title: "Memahami Generasi Berdasarkan Tahun Lahir",
    excerpt: "Dari Baby Boomers hingga Gen Z dan Alpha, pelajari karakteristik setiap generasi.",
    category: "Sosial",
    date: "1 Februari 2026",
    readTime: "5 menit",
    image: "👥",
    featured: false,
    content: `
      <h2 style="font-size: 1.875rem; font-weight: bold; margin-top: 1.5rem; margin-bottom: 1rem; color: #1f2937;">Apa Itu Generasi?</h2>
      <p style="margin-bottom: 1rem; line-height: 1.6;">Generasi adalah sekelompok orang yang lahir dalam periode yang sama (biasanya 15-25 tahun) dan berbagi pengalaman historis, budaya, dan sosial yang serupa. Ini mempengaruhi nilai, sikap, dan perilaku mereka sepanjang hidup.</p>
      
      <h3 style="font-size: 1.375rem; font-weight: bold; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Baby Boomers (1946-1964)</h3>
      <p style="margin-bottom: 1rem; line-height: 1.6;"><strong>Karakteristik:</strong> Bekerja keras, loyal, optimis, dan menghargai stabilitas. Mereka tumbuh di era pertumbuhan ekonomi pasca-perang dunia dan menghargai karir jangka panjang.</p>
      <p style="margin-bottom: 1rem; line-height: 1.6;"><strong>Nilai:</strong> Keamanan pekerjaan, loyalitas perusahaan, penghematan, dan tradisi.</p>
      
      <h3 style="font-size: 1.375rem; font-weight: bold; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Generasi X (1965-1980)</h3>
      <p style="margin-bottom: 1rem; line-height: 1.6;"><strong>Karakteristik:</strong> Mandiri, adaptif, skeptis, dan pragmatis. Disebut "generasi lupa" karena mereka sering terlampaui antara Boomer dan Millennial.</p>
      <p style="margin-bottom: 1rem; line-height: 1.6;"><strong>Nilai:</strong> Keseimbangan kerja-hidup, diversitas, keterampilan praktis, dan teknologi awal.</p>
      
      <h3 style="font-size: 1.375rem; font-weight: bold; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Millennial/Gen Y (1981-1996)</h3>
      <p style="margin-bottom: 1rem; line-height: 1.6;"><strong>Karakteristik:</strong> Idealis, ambisius, terkoneksi, dan mencari makna. Mereka tumbuh dengan internet dan mobile technology, sehingga sangat digital-savvy.</p>
      <p style="margin-bottom: 1rem; line-height: 1.6;"><strong>Nilai:</strong> Pekerjaan dengan makna, keterlibatan sosial, kolaborasi, dan inovasi. Sering mencari pekerjaan yang sejalan dengan nilai-nilai pribadi mereka.</p>
      
      <h3 style="font-size: 1.375rem; font-weight: bold; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Generasi Z (1997-2012)</h3>
      <p style="margin-bottom: 1rem; line-height: 1.6;"><strong>Karakteristik:</strong> Digital natives, pragmatis, sosial-conscious, dan entrepreneurial. Mereka tidak pernah mengenal dunia tanpa internet.</p>
      <p style="margin-bottom: 1rem; line-height: 1.6;"><strong>Nilai:</strong> Autentisitas, keberlanjutan, keragaman, dan kemerdekaan finansial. Mereka peduli dengan isu sosial dan lingkungan.</p>
      
      <h3 style="font-size: 1.375rem; font-weight: bold; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Generasi Alpha (2013-2025)</h3>
      <p style="margin-bottom: 1rem; line-height: 1.6;"><strong>Karakteristik:</strong> Generasi paling muda saat ini, tumbuh dengan AI, virtual reality, dan teknologi canggih. Mereka akan menghadapi dunia yang sangat berbeda dari generasi-generasi sebelumnya.</p>
      <p style="margin-bottom: 1rem; line-height: 1.6;"><strong>Nilai:</strong> Belum sepenuhnya terbentuk, tetapi kemungkinan akan menjadi generasi yang sangat terampil secara teknologi dan beradaptasi dengan perubahan cepat.</p>
      
      <h3 style="font-size: 1.375rem; font-weight: bold; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Perbedaan Kunci Antar Generasi</h3>
      <table style="width: 100%; margin-bottom: 1rem; border-collapse: collapse;">
        <tr style="border-bottom: 1px solid #e5e7eb;">
          <th style="text-align: left; padding: 0.75rem; font-weight: bold;">Aspek</th>
          <th style="text-align: left; padding: 0.75rem; font-weight: bold;">Boomer</th>
          <th style="text-align: left; padding: 0.75rem; font-weight: bold;">Gen X</th>
          <th style="text-align: left; padding: 0.75rem; font-weight: bold;">Millennial</th>
          <th style="text-align: left; padding: 0.75rem; font-weight: bold;">Gen Z</th>
        </tr>
        <tr style="border-bottom: 1px solid #e5e7eb;">
          <td style="padding: 0.75rem;">Teknologi</td>
          <td style="padding: 0.75rem;">Adopter lambat</td>
          <td style="padding: 0.75rem;">Awal adaptif</td>
          <td style="padding: 0.75rem;">Sangat digital</td>
          <td style="padding: 0.75rem;">Native digital</td>
        </tr>
        <tr style="border-bottom: 1px solid #e5e7eb;">
          <td style="padding: 0.75rem;">Karir</td>
          <td style="padding: 0.75rem;">1-2 pekerjaan</td>
          <td style="padding: 0.75rem;">3-5 pekerjaan</td>
          <td style="padding: 0.75rem;">5+ pekerjaan</td>
          <td style="padding: 0.75rem;">Beragam karir</td>
        </tr>
        <tr>
          <td style="padding: 0.75rem;">Nilai Utama</td>
          <td style="padding: 0.75rem;">Stabilitas</td>
          <td style="padding: 0.75rem;">Fleksibilitas</td>
          <td style="padding: 0.75rem;">Makna</td>
          <td style="padding: 0.75rem;">Autentisitas</td>
        </tr>
      </table>
    `,
  },
  {
    slug: "tradisi-ulang-tahun-di-berbagai-negara",
    title: "Tradisi Ulang Tahun Unik di Berbagai Negara",
    excerpt: "Eksplorasi cara unik berbagai budaya merayakan hari kelahiran dan ulang tahun.",
    category: "Budaya",
    date: "28 Januari 2026",
    readTime: "6 menit",
    image: "🎂",
    featured: false,
    content: `
      <h2 style="font-size: 1.875rem; font-weight: bold; margin-top: 1.5rem; margin-bottom: 1rem; color: #1f2937;">Sejarah Perayaan Ulang Tahun</h2>
      <p style="margin-bottom: 1rem; line-height: 1.6;">Perayaan ulang tahun tidak selalu menjadi tradisi universal dalam sejarah manusia. Banyak budaya kuno tidak merayakan hari kelahiran individu sampai era modern. Tradisi ini sebagian besar berasal dari Eropa dan Amerika, kemudian menyebar ke seluruh dunia.</p>
      
      <h3 style="font-size: 1.375rem; font-weight: bold; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Tradisi Ulang Tahun di Indonesia</h3>
      <p style="margin-bottom: 1rem; line-height: 1.6;">Di Indonesia, ulang tahun dirayakan dengan kumpul keluarga, makan kue, dan hadiah. Tradisi meniup lilin sambil membuat permintaan menjadi bagian dari perayaan modern.</p>
      
      <h3 style="font-size: 1.375rem; font-weight: bold; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Jermani - Kue Ulang Tahun dan Lagu Tradisional</h3>
      <p style="margin-bottom: 1rem; line-height: 1.6;">Orang Jerman merayakan ulang tahun dengan kue bertingkat dan lagu "Zum Geburtstag Viel Glück" (Banyak Keberuntungan untuk Ulang Tahunmu). Dekorasi dengan hiasan berwarna-warni dan tradisi memberikan bunga sangat umum.</p>
      
      <h3 style="font-size: 1.375rem; font-weight: bold; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Jepang - Seijin Shiki (Perayaan Kedewasaan)</h3>
      <p style="margin-bottom: 1rem; line-height: 1.6;">Di Jepang, ulang tahun ke-20 (sekarang 18) adalah Seijin Shiki (Hari Kedewasaan). Pemuda dan siswi mengenakan kimono tradisional dan menghadiri upacara resmi di pemerintahan lokal. Ini adalah perayaan besar yang menandai transisi menjadi dewasa.</p>
      
      <h3 style="font-size: 1.375rem; font-weight: bold; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Meksiko - Piñata dan Quinceañera</h3>
      <p style="margin-bottom: 1rem; line-height: 1.6;">Meksiko terkenal dengan piñata - wadah berbentuk karakter yang diisi dengan permen. Pemecahan piñata sambil tertutup mata menjadi bagian seru dari pesta. Untuk anak perempuan berusia 15 tahun, ada Quinceañera - perayaan besar dengan gaun pengantin, dansa, dan upacara formal yang menandai peralihan dari anak-anak ke remaja.</p>
      
      <h3 style="font-size: 1.375rem; font-weight: bold; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Brasil - Samba dan Perayaan Meriah</h3>
      <p style="margin-bottom: 1rem; line-height: 1.6;">Pesta ulang tahun Brasil penuh warna, musik samba, dan makanan lezat. Sangat sosial dan meriah dengan banyak kehadiran teman dan keluarga.</p>
      
      <h3 style="font-size: 1.375rem; font-weight: bold; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Cina - "Shengri" dan Mie Panjang</h3>
      <p style="margin-bottom: 1rem; line-height: 1.6;">Di Cina tradisional, ulang tahun individu kurang menonjol. Namun, ulang tahun ke-60, 70, 80 dianggap milestone penting yang dirayakan besarnya. Makan mie panjang ("longevity noodles") dipercaya membawa umur panjang.</p>
      
      <h3 style="font-size: 1.375rem; font-weight: bold; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Inggris - Teh Ulang Tahun dan Crown Tiara</h3>
      <p style="margin-bottom: 1rem; line-height: 1.6;">Di Inggris, teh sore ulang tahun adalah tradisi elegan dengan kue berlapis, teh, dan permen kecil. Anak-anak sering memakai mahkota kertas dan membuka hadiah sambil dikelilingi teman-teman.</p>
      
      <h3 style="font-size: 1.375rem; font-weight: bold; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Kesamaan Lintas Budaya</h3>
      <p style="margin-bottom: 1rem; line-height: 1.6;">Meskipun berbeda dalam detail, semua tradisi ulang tahun di dunia berbagi tema umum: perayaan kehidupan, berkumpul dengan orang-orang terkasih, memberikan hadiah, dan membuat kenangan. Ini menunjukkan bahwa pada intinya, semua manusia ingin merayakan kehadiran dan pencapaian satu sama lain.</p>
    `,
  },
];

// Helper functions
export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPostsData.find(post => post.slug === slug);
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPostsData;
}

export function getFeaturedBlogPosts(): BlogPost[] {
  return blogPostsData.filter(post => post.featured);
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  return blogPostsData.filter(post => post.category === category);
}

export function getRelatedBlogPosts(slug: string, limit: number = 3): BlogPost[] {
  const currentPost = getBlogPostBySlug(slug);
  if (!currentPost) return [];

  return blogPostsData
    .filter(post => post.category === currentPost.category && post.slug !== slug)
    .slice(0, limit);
}

export function getCategories(): string[] {
  const categories = new Set(blogPostsData.map(post => post.category));
  return Array.from(categories).sort();
}

export function calculateReadTime(content: string): string {
  // Approximate: 200 words per minute
  const wordCount = content.split(/\s+/).length;
  const minutes = Math.ceil(wordCount / 200);
  return `${minutes} menit`;
}
