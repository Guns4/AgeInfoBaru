/**
 * Utility functions for National Days and Religious Calendar
 */

export interface Holiday {
  date: string;
  name: string;
  icon: string;
  category: string;
  type?: string;
  description?: string;
  lunarBased?: boolean;
}

/**
 * Get number of days until a specific holiday
 */
export const getDaysUntilHoliday = (dateString: string): number => {
  try {
    // Parse date string (format: "DD bulan YYYY" atau "Tanggal spesifik")
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // For dates like "29 April 2026"
    const parts = dateString.split(' ');
    if (parts.length === 3) {
      const day = parseInt(parts[0]);
      const month = getMonthNumber(parts[1]);
      const year = parseInt(parts[2]);

      if (month !== -1) {
        const holidayDate = new Date(year, month, day);
        const diff = Math.ceil((holidayDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
        return diff;
      }
    }

    return -1;
  } catch {
    return -1;
  }
};

const monthNames: Record<string, number> = {
  Januari: 0, Februari: 1, Maret: 2, April: 3, Mei: 4, Juni: 5,
  Juli: 6, Agustus: 7, September: 8, Oktober: 9, November: 10, Desember: 11
};

const monthNamesID = Object.keys(monthNames);

const getMonthNumber = (monthName: string): number => {
  return monthNames[monthName] ?? -1;
};

/**
 * Get date for Nth weekday of a month (e.g., 4th Thursday of November)
 */
export const getNthWeekdayOfMonth = (year: number, month: number, weekday: number, n: number): Date => {
  const date = new Date(year, month, 1);
  let count = 0;
  while (date.getMonth() === month) {
    if (date.getDay() === weekday) {
      count++;
      if (count === n) return new Date(date);
    }
    date.setDate(date.getDate() + 1);
  }
  return new Date(year, month, date.getDate() - 1); // Fallback
};

/**
 * Get date for Last weekday of a month (e.g., Last Monday of May)
 */
export const getLastWeekdayOfMonth = (year: number, month: number, weekday: number): Date => {
  const date = new Date(year, month + 1, 0); // Last day of month
  while (date.getDay() !== weekday) {
    date.setDate(date.getDate() - 1);
  }
  return new Date(date);
};

const getFormattedDate = (d: Date) => {
  return `${d.getDate()} ${monthNamesID[d.getMonth()]} ${d.getFullYear()}`;
};

/**
 * Check if holiday is coming soon (within 7 days)
 */
export const isComingSoon = (daysUntil: number): boolean => {
  return daysUntil >= 0 && daysUntil <= 7;
};

/**
 * Check if holiday is today
 */
export const isToday = (daysUntil: number): boolean => {
  return daysUntil === 0;
};

/**
 * Get holiday status badge
 */
export const getHolidayStatus = (daysUntil: number): { label: string; variant: string } => {
  if (daysUntil < 0) return { label: 'Sudah berlalu', variant: 'passed' };
  if (daysUntil === 0) return { label: 'Hari ini!', variant: 'today' };
  if (daysUntil <= 7) return { label: `${daysUntil} hari lagi`, variant: 'soon' };
  if (daysUntil <= 30) return { label: `${daysUntil} hari lagi`, variant: 'upcoming' };
  return { label: `${daysUntil} hari lagi`, variant: 'far' };
};

/**
 * Sort holidays by proximity to today
 */
export const sortHolidaysByDate = (holidays: Holiday[]): Holiday[] => {
  return [...holidays].sort((a, b) => {
    const daysA = getDaysUntilHoliday(a.date);
    const daysB = getDaysUntilHoliday(b.date);

    // Passed holidays go to the end
    if (daysA < 0 && daysB < 0) return daysA - daysB;
    if (daysA < 0) return 1;
    if (daysB < 0) return -1;

    return daysA - daysB;
  });
};

/**
 * Get religious holidays for a specific year
 * Future-proofed for 2026-2030 based on official estimations
 */
export const getReligiousHolidays = (year: number = 2026) => {
  // Easter calculation (Meeus algorithm)
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31);
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  const easterDate = new Date(year, month - 1, day);

  const getFormattedDateLocal = (d: Date) => {
    return `${d.getDate()} ${monthNamesID[d.getMonth()]} ${d.getFullYear()}`;
  };

  const goodFriday = new Date(easterDate);
  goodFriday.setDate(easterDate.getDate() - 2);

  const ascension = new Date(easterDate);
  ascension.setDate(easterDate.getDate() + 39);

  // Data for Lunar/Hijri based holidays (Official Estimations 2026-2030)
  const lunarData: Record<number, any> = {
    2026: {
      isra: "16 Januari 2026",
      imlek: "17 Februari 2026",
      nyepi: "19 Maret 2026",
      eidFitr: ["21 Maret 2026", "22 Maret 2026"],
      eidAdha: "27 Mei 2026",
      waisak: "31 Mei 2026",
      hijriNewYear: "16 Juni 2026",
      mawlid: "25 Agustus 2026"
    },
    2027: {
      isra: "6 Januari 2027",
      imlek: "6 Februari 2027",
      nyepi: "8 Maret 2027",
      eidFitr: ["9 Maret 2027", "10 Maret 2027"],
      eidAdha: "17 Mei 2027",
      waisak: "20 Mei 2027",
      hijriNewYear: "6 Juni 2027",
      mawlid: "15 Agustus 2027"
    },
    2028: {
      isra: "25 Desember 2027", // falls in 2027 for 2028 cycle? Actually Jan 2028
      imlek: "26 Januari 2028",
      nyepi: "26 Maret 2028",
      eidFitr: ["26 Februari 2028", "27 Februari 2028"],
      eidAdha: "5 Mei 2028",
      waisak: "9 Mei 2028",
      hijriNewYear: "25 Mei 2028",
      mawlid: "3 Agustus 2028"
    },
    2029: {
      isra: "12 Januari 2029",
      imlek: "13 Februari 2029",
      nyepi: "15 Maret 2029",
      eidFitr: ["14 Februari 2029", "15 Februari 2029"],
      eidAdha: "24 April 2029",
      waisak: "28 April 2029",
      hijriNewYear: "14 Mei 2029",
      mawlid: "24 Juli 2029"
    },
    2030: {
      isra: "2 Januari 2030",
      imlek: "3 Februari 2030",
      nyepi: "5 Maret 2030",
      eidFitr: ["3 Februari 2030", "4 Februari 2030"],
      eidAdha: "14 April 2030",
      waisak: "18 April 2030",
      hijriNewYear: "4 Mei 2030",
      mawlid: "13 Juli 2030"
    }
  };

  const currentLunar = lunarData[year] || lunarData[2026]; // Fallback to 2026 if out of range

  return {
    islam: [
      { date: currentLunar.isra, name: "Isra Mi'raj", icon: "🌙", description: "Perjalanan malam Nabi Muhammad SAW", lunarBased: true },
      { date: currentLunar.eidFitr[0], name: "Idul Fitri", icon: "🎉", description: "Hari Raya umat Islam setelah Ramadan", lunarBased: true },
      { date: currentLunar.eidAdha, name: "Idul Adha", icon: "🐑", description: "Hari Raya Qurban", lunarBased: true },
      { date: currentLunar.hijriNewYear, name: `Tahun Baru Islam`, icon: "🌙", description: "Awal tahun Hijriyyah", lunarBased: true },
      { date: currentLunar.mawlid, name: "Maulid Nabi Muhammad", icon: "🕌", description: "Pemeriksaan lahirnya Nabi Muhammad", lunarBased: true },
    ],
    christian: [
      { date: getFormattedDateLocal(goodFriday), name: "Wafat Yesus Kristus", icon: "✝️", description: "Jumat Agung (Good Friday)" },
      { date: getFormattedDateLocal(easterDate), name: "Paskah", icon: "🐣", description: "Kebangkitan Yesus Kristus" },
      { date: getFormattedDateLocal(ascension), name: "Kenaikan Yesus Kristus", icon: "✝️", description: "Perayaan Kenaikan ke Surga" },
      { date: `25 Desember ${year}`, name: "Natal", icon: "🎄", description: "Kelahiran Yesus Kristus" },
    ],
    hindu: [
      { date: currentLunar.nyepi, name: "Hari Raya Nyepi", icon: "🕉️", description: "Tahun Baru Saka", lunarBased: true },
    ],
    buddhist: [
      { date: currentLunar.waisak, name: "Hari Raya Waisak", icon: "☸️", description: "Kelahiran, Pencerahan, dan Parinirvana Buddha", lunarBased: true },
    ],
    confucianism: [
      { date: currentLunar.imlek, name: "Tahun Baru Imlek", icon: "🧧", description: "Tahun Baru Kalender Cina", lunarBased: true },
    ]
  };
};

/**
 * Get national holidays for specific country and year
 */
export const getNationalHolidays = (year: number = 2026, country: string = 'ID') => {
  const holidays: any = { libur: [], peringatan: [], spesial: [] };

  if (country === 'ID') {
    holidays.libur = [
      { date: `1 Januari ${year}`, name: "Tahun Baru Masehi", icon: "🎉", description: "Awal tahun kalender Masehi" },
      { date: `1 Mei ${year}`, name: "Hari Buruh Internasional", icon: "⚒️", description: "Peringatan hak-hak pekerja sedunia" },
      { date: `1 Juni ${year}`, name: "Hari Lahir Pancasila", icon: "⭐", description: "Peringatan lahirnya dasar negara Indonesia" },
      { date: `17 Agustus ${year}`, name: "Hari Kemerdekaan RI", icon: "🇮🇩", description: "Proklamasi Kemerdekaan Indonesia" },
    ];
    holidays.peringatan = [
      { date: `14 Februari ${year}`, name: "Hari Kasih Sayang", icon: "💝", description: "Valentine's Day" },
      { date: `21 April ${year}`, name: "Hari Kartini", icon: "👗", description: "Peringatan emansipasi wanita Indonesia" },
      { date: `2 Mei ${year}`, name: "Hari Pendidikan Nasional", icon: "📚", description: "Hari lahir Ki Hajar Dewantara" },
      { date: `20 Mei ${year}`, name: "Hari Kebangkitan Nasional", icon: "🌅", description: "Kebangkitan nasional Indonesia" },
      { date: `28 Oktober ${year}`, name: "Hari Sumpah Pemuda", icon: "✊", description: "Sumpah Pemuda 1928" },
      { date: `10 November ${year}`, name: "Hari Pahlawan", icon: "🦸", description: "Mengenang jasa para pahlawan" },
      { date: `22 Desember ${year}`, name: "Hari Ibu", icon: "👩‍👧‍👦", description: "Apresiasi untuk ibu di Indonesia" },
    ];
    holidays.spesial = [
      { date: `22 April ${year}`, name: "Hari Bumi", icon: "🌍", description: "Peringatan untuk kelestarian lingkungan" },
      { date: `8 Maret ${year}`, name: "Hari Perempuan Internasional", icon: "♀️", description: "Peringatan hak wanita global" },
    ];
  } else if (country === 'US') {
    const mlkDay = getNthWeekdayOfMonth(year, 0, 1, 3);
    const presidentsDay = getNthWeekdayOfMonth(year, 1, 1, 3);
    const memorialDay = getLastWeekdayOfMonth(year, 4, 1);
    const laborDay = getNthWeekdayOfMonth(year, 8, 1, 1);
    const thanksgiving = getNthWeekdayOfMonth(year, 10, 4, 4);

    holidays.libur = [
      { date: `4 Juli ${year}`, name: "Independence Day", icon: "🇺🇸", description: "National Day of the United States" },
      { date: getFormattedDate(thanksgiving), name: "Thanksgiving Day", icon: "🦃", description: "Harvest festival and day of thanks" },
      { date: getFormattedDate(laborDay), name: "Labor Day", icon: "👷", description: "Honoring the American labor movement" },
      { date: getFormattedDate(mlkDay), name: "MLK Jr. Day", icon: "🗣️", description: "Martin Luther King Jr. Day" },
    ];
    holidays.peringatan = [
      { date: getFormattedDate(presidentsDay), name: "Presidents' Day", icon: "🎩", description: "Washington's Birthday" },
      { date: getFormattedDate(memorialDay), name: "Memorial Day", icon: "🎖️", description: "Honoring military personnel" },
      { date: `11 November ${year}`, name: "Veterans Day", icon: "🪖", description: "Honoring all military veterans" },
    ];
  } else if (country === 'JP') {
    holidays.libur = [
      { date: `11 Februari ${year}`, name: "Kenkoku Kinen no Hi", icon: "🇯🇵", description: "National Foundation Day" },
      { date: `29 April ${year}`, name: "Showanohi", icon: "🌳", description: "Showa Day" },
      { date: `3 Mei ${year}`, name: "Kenpo Kinenbi", icon: "📜", description: "Constitution Memorial Day" },
      { date: `4 Mei ${year}`, name: "Midori no Hi", icon: "🌿", description: "Greenery Day" },
      { date: `5 Mei ${year}`, name: "Kodomo no Hi", icon: "🎏", description: "Children's Day" },
      { date: `11 Agustus ${year}`, name: "Yama no Hi", icon: "⛰️", description: "Mountain Day" },
      { date: `23 November ${year}`, name: "Kinro Kansha no Hi", icon: "🌾", description: "Labor Thanksgiving Day" },
    ];
  } else if (country === 'SG') {
    holidays.libur = [
      { date: `9 Agustus ${year}`, name: "National Day", icon: "🇸🇬", description: "Independence Day of Singapore" },
      { date: `1 Mei ${year}`, name: "Labour Day", icon: "👷", description: "International Workers' Day" },
    ];
  } else if (country === 'AU') {
    holidays.libur = [
      { date: `26 Januari ${year}`, name: "Australia Day", icon: "🇦🇺", description: "Official national day of Australia" },
      { date: `25 April ${year}`, name: "Anzac Day", icon: "🌺", description: "National day of remembrance" },
    ];
  } else if (country === 'GB') {
    holidays.libur = [
      { date: `17 Maret ${year}`, name: "St Patrick's Day", icon: "☘️", description: "Feast of Saint Patrick" },
      { date: `5 Juli ${year}`, name: "NHS Day", icon: "🏥", description: "National Health Service birthday" },
    ];
  }

  return holidays;
};

/**
 * Get all holidays combined and sorted
 */
export const getAllUpcomingHolidays = (limit?: number, year: number = 2026, country: string = 'ID'): Holiday[] => {
  const national = getNationalHolidays(year, country);
  const religious = getReligiousHolidays(year);

  const allHolidays: Holiday[] = [
    ...(Object.values(national).flat() as any[]).map(h => ({ ...h, category: 'nasional' })),
    ...(Object.values(religious).flat() as any[]).map(h => ({ ...h, category: 'keagamaan' })),
  ];

  const sorted = sortHolidaysByDate(allHolidays);
  return limit ? sorted.slice(0, limit) : sorted;
};
