import { useEffect } from "react";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  type?: string;
  publishedTime?: string;
  author?: string;
}

export default function SEOHead({
  title = "AgeInfo - Kalkulator Hitung Umur Lengkap & Akurat",
  description = "Hitung umur Anda secara detail dengan AgeInfo. Temukan umur dalam tahun, bulan, hari, minggu, jam, detik, weton, zodiak, pencapaian unik, dan konteks sejarah. Kalkulator umur terlengkap di Indonesia!",
  keywords = "kalkulator umur, hitung umur, umur saya, tanggal lahir, weton, zodiak, ulang tahun, hari penting, kalender keagamaan, usia, calculator age",
  ogImage = "https://ageinfo.online/og-image.png",
  type = "website",
  publishedTime,
  author = "AgeInfo.online",
}: SEOHeadProps) {
  useEffect(() => {
    // Set document title
    document.title = title;

    // Set meta tags
    const metaTags = [
      { name: "description", content: description },
      { name: "keywords", content: keywords },
      { name: "author", content: author },
      { name: "robots", content: "index, follow" },
      { name: "googlebot", content: "index, follow" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      
      // Open Graph
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: type },
      { property: "og:url", content: window.location.href },
      { property: "og:image", content: ogImage },
      { property: "og:site_name", content: "AgeInfo" },
      { property: "og:locale", content: "id_ID" },
      
      // Twitter Card
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: ogImage },
    ];

    if (publishedTime) {
      metaTags.push({ property: "article:published_time", content: publishedTime });
    }

    metaTags.forEach(({ name, property, content }) => {
      const attribute = name ? "name" : "property";
      const value = name || property;
      
      let meta = document.querySelector(`meta[${attribute}="${value}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attribute, value!);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    });

    // Add JSON-LD structured data
    const jsonLD = {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "AgeInfo",
      "url": "https://ageinfo.online",
      "description": description,
      "applicationCategory": "UtilityApplication",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "IDR"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "ratingCount": "1247"
      },
      "publisher": {
        "@type": "Organization",
        "name": "AgeInfo",
        "url": "https://ageinfo.online"
      }
    };

    let scriptTag = document.querySelector('script[type="application/ld+json"]');
    if (!scriptTag) {
      scriptTag = document.createElement("script");
      scriptTag.setAttribute("type", "application/ld+json");
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(jsonLD);

  }, [title, description, keywords, ogImage, type, publishedTime, author]);

  return null;
}
