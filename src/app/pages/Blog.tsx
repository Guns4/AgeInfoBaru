import { motion } from "framer-motion";
import { Link } from "react-router";
import { BookOpen, Calendar, Clock, ArrowRight, TrendingUp, Star } from "lucide-react";
import { Card } from "../components/ui/card";
import SEOHead from "../components/SEOHead";
import { getAllBlogPosts, getFeaturedBlogPosts, getCategories, getBlogPostsByCategory } from "../utils/blogContent";
import { useState } from "react";

export default function Blog() {
  const allPosts = getAllBlogPosts();
  const featuredPosts = getFeaturedBlogPosts();
  const categories = ["Semua", ...getCategories()];
  
  const [activeCategory, setActiveCategory] = useState("Semua");
  const filteredPosts = activeCategory === "Semua" 
    ? allPosts 
    : getBlogPostsByCategory(activeCategory);

  return (
    <>
      <SEOHead
        title="Blog - Artikel Menarik tentang Umur, Weton, Zodiak | AgeInfo"
        description="Baca artikel menarik seputar perhitungan umur, weton Jawa, zodiak, milestone kehidupan, dan banyak lagi di blog AgeInfo."
        keywords="blog umur, artikel weton, zodiak, milestone kehidupan, kesehatan, budaya"
      />

      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full mb-4 border border-amber-200">
            <BookOpen className="w-4 h-4 text-amber-600" />
            <span className="text-sm font-semibold text-amber-700">
              Blog & Artikel
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Artikel{" "}
            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Menarik & Inspiratif
            </span>
          </h1>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Baca berbagai artikel seputar umur, kesehatan, budaya, dan kehidupan
          </p>
        </motion.div>

        {/* Featured Posts */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Star className="w-6 h-6 text-amber-500 fill-amber-500" />
            <h2 className="text-2xl font-bold">Artikel Pilihan</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
              >
                <Link to={`/blog/${post.slug}`}>
                  <Card className="p-6 h-full hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-amber-200 bg-gradient-to-br from-white to-amber-50/30">
                    <div className="text-5xl mb-4">{post.image}</div>
                    <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-amber-100 text-amber-700 mb-3">
                      {post.category}
                    </span>
                    <h3 className="font-bold text-xl mb-2 line-clamp-2">{post.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>
                    <div className="flex items-center text-amber-600 font-semibold">
                      Baca Selengkapnya
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="w-6 h-6 text-violet-600" />
            <h2 className="text-2xl font-bold">Semua Artikel</h2>
          </div>
          
          {/* Category Pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-violet-600 to-blue-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post, index) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                  whileHover={{ scale: 1.03, y: -5 }}
                >
                  <Link to={`/blog/${post.slug}`}>
                    <Card className="p-5 h-full hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-violet-200 bg-white">
                      <div className="text-4xl mb-3">{post.image}</div>
                      <span className="inline-block px-2 py-1 text-xs font-semibold rounded-full bg-violet-100 text-violet-700 mb-2">
                        {post.category}
                      </span>
                      <h3 className="font-bold text-lg mb-2 line-clamp-2">{post.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed mb-3 line-clamp-2">{post.excerpt}</p>
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-600 text-lg">Tidak ada artikel dalam kategori ini.</p>
              </div>
            )}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="max-w-4xl mx-auto mt-16"
        >
          <Card className="bg-gradient-to-br from-violet-600 via-purple-600 to-blue-600 text-white p-8 md:p-12 shadow-2xl text-center">
            <BookOpen className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ingin Berkontribusi?
            </h2>
            <p className="text-lg text-violet-100 mb-6">
              Punya artikel menarik atau pengalaman unik? Hubungi kami untuk berbagi cerita Anda!
            </p>
          </Card>
        </motion.div>
      </div>
    </>
  );
}
