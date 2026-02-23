import { differenceInDays, differenceInHours, differenceInSeconds, intervalToDuration, addYears, addDays } from "date-fns";

type AgeResult = {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  totalDays: number;
};

export function calculateAge(birth: Date, now = new Date()): AgeResult {
  const dur = intervalToDuration({ start: birth, end: now });
  const totalDays = differenceInDays(now, birth);
  const totalHours = Math.floor((now.getTime() - birth.getTime()) / (1000 * 60 * 60));

  return {
    years: dur.years || 0,
    months: dur.months || 0,
    days: dur.days || 0,
    hours: totalHours % 24,
    minutes: Math.floor((now.getTime() - birth.getTime()) / (1000 * 60)) % 60,
    seconds: Math.floor((now.getTime() - birth.getTime()) / 1000) % 60,
    totalDays,
  };
}

export function calculateTotalDays(birth: Date, now = new Date()): number {
  return differenceInDays(now, birth);
}

export function calculateDaysUntilNextBirthday(birth: Date, now = new Date()): number {
  const year = now.getFullYear();
  const next = new Date(year, birth.getMonth(), birth.getDate());
  if (next <= now) {
    next.setFullYear(year + 1);
  }
  return differenceInDays(next, now);
}

export function convertAge(birth: Date, now = new Date()) {
  const days = calculateTotalDays(birth, now);
  const weeks = Math.floor(days / 7);
  const hours = days * 24;
  const minutes = hours * 60;
  const seconds = minutes * 60;

  return { days, totalDays: days, weeks, hours, minutes, seconds };
}

// Simple pasaran (weton) calculation using day count modulo 5.
const PASARAN = ["Legi", "Pahing", "Pon", "Wage", "Kliwon"];
const PASARAN_CHARACTER = {
  Legi: "Ramah dan beruntung",
  Pahing: "Tenang dan bijaksana",
  Pon: "Kuat dan pekerja keras",
  Wage: "Lincah dan cepat tanggap",
  Kliwon: "Misterius dan kreatif",
};

export function calculateWeton(birth: Date) {
  // Use unix day number as a deterministic source; offset chosen to align reasonably.
  const days = Math.floor(birth.getTime() / (1000 * 60 * 60 * 24));
  const idx = ((days % 5) + 5) % 5; // ensure positive
  const pasaran = PASARAN[idx];
  const weekdayNames = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  const hari = weekdayNames[birth.getDay()];

  return {
    weton: `${hari} ${pasaran}`,
    hari,
    pasaran,
    nilai: idx + 1,
    watak: (PASARAN_CHARACTER as any)[pasaran] || "-",
  };
}

export function calculateZodiac(birth: Date) {
  const m = birth.getMonth() + 1;
  const d = birth.getDate();

  const ranges: { name: string; start: [number, number]; end: [number, number] }[] = [
    { name: "Capricorn", start: [12, 22], end: [1, 19] },
    { name: "Aquarius", start: [1, 20], end: [2, 18] },
    { name: "Pisces", start: [2, 19], end: [3, 20] },
    { name: "Aries", start: [3, 21], end: [4, 19] },
    { name: "Taurus", start: [4, 20], end: [5, 20] },
    { name: "Gemini", start: [5, 21], end: [6, 20] },
    { name: "Cancer", start: [6, 21], end: [7, 22] },
    { name: "Leo", start: [7, 23], end: [8, 22] },
    { name: "Virgo", start: [8, 23], end: [9, 22] },
    { name: "Libra", start: [9, 23], end: [10, 22] },
    { name: "Scorpio", start: [10, 23], end: [11, 21] },
    { name: "Sagittarius", start: [11, 22], end: [12, 21] },
  ];

  const ZODIAC_TRAITS: Record<string, string> = {
    Capricorn: "Bertanggung jawab, disiplin",
    Aquarius: "Orisinal, independen",
    Pisces: "Empatik, imajinatif",
    Aries: "Berani, energik",
    Taurus: "Teguh, praktis",
    Gemini: "Adaptif, komunikatif",
    Cancer: "Perasa, protektif",
    Leo: "Percaya diri, hangat",
    Virgo: "Teliti, analitis",
    Libra: "Diplomatis, estetis",
    Scorpio: "Intens, penuh gairah",
    Sagittarius: "Optimis, petualang",
  };

  for (const r of ranges) {
    const [sM, sD] = r.start;
    const [eM, eD] = r.end;

    const startsBefore = m > sM || (m === sM && d >= sD);
    const endsAfter = m < eM || (m === eM && d <= eD);

    if (sM <= eM) {
      if (startsBefore && endsAfter) return { name: r.name, symbol: r.name.charAt(0), traits: ZODIAC_TRAITS[r.name] };
    } else {
      // range wraps year end (e.g., Capricorn)
      if (startsBefore || endsAfter) return { name: r.name, symbol: r.name.charAt(0), traits: ZODIAC_TRAITS[r.name] };
    }
  }

  return { name: "-", symbol: "-", traits: "-" };
}

export function getMicroMilestones(birth: Date, now = new Date()) {
  const milestonesDays = [10000, 20000, 30000, 36500]; // days
  const totalDays = calculateTotalDays(birth, now);

  const milestones = milestonesDays.map((days) => ({
    title: `${days.toLocaleString('id-ID')} Hari`,
    description: `Mencapai ${days.toLocaleString('id-ID')} hari sejak lahir`,
    achieved: totalDays >= days,
    date: addDays(birth, days),
  }));

  // hours milestone example
  const hoursMilestone = 100000;
  const hoursDate = new Date(birth.getTime() + hoursMilestone * 3600 * 1000);
  milestones.push({
    title: `${hoursMilestone.toLocaleString('id-ID')} Jam`,
    description: `Mencapai ${hoursMilestone.toLocaleString('id-ID')} jam sejak lahir`,
    achieved: (totalDays * 24) >= hoursMilestone,
    date: hoursDate,
  });

  return milestones;
}

export function getHistoricalContext(birth: Date) {
  const y = birth.getFullYear();
  let era = "Modern era";

  if (y < 1900) era = "Pre-20th century";
  else if (y < 1946) era = "Early 20th century";
  else if (y < 1970) era = "Post-war era";
  else if (y < 1990) era = "Late 20th century";
  else if (y < 2010) era = "Early 21st century";
  const events: string[] = [];
  if (era === 'Early 20th century') {
    events.push('Perang Dunia I & perubahan geopolitik');
  } else if (era === 'Post-war era') {
    events.push('Rekonstruksi pasca perang dan era industri modern');
  } else if (era === 'Late 20th century') {
    events.push('Diseminasi televisi dan budaya pop global');
  } else if (era === 'Early 21st century') {
    events.push('Ledakan internet & smartphone');
  } else if (era === 'Modern era') {
    events.push('Era konektivitas, AI, dan layanan digital');
  } else {
    events.push('Peristiwa sejarah penting dari era kelahiran Anda');
  }

  return { era, events };
}

export function calculateDateDifference(start: Date, end: Date) {
  const earlier = start <= end ? start : end;
  const later = start <= end ? end : start;

  const dur = intervalToDuration({ start: earlier, end: later });
  const totalDays = differenceInDays(later, earlier);
  const weeks = Math.floor(totalDays / 7);
  const hours = differenceInHours(later, earlier);
  const seconds = differenceInSeconds(later, earlier);

  return {
    years: dur.years || 0,
    months: dur.months || 0,
    days: dur.days || 0,
    totalDays,
    weeks,
    hours,
    seconds,
  };
}

export default {};
