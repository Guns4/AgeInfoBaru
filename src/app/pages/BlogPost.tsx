import { motion } from "framer-motion";
import { useParams, Link } from "react-router";
import { Calendar, Clock, ArrowLeft, Share2, BookOpen, ChevronRight } from "lucide-react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import SEOHead from "../components/SEOHead";
import { toast } from "sonner";
import { getBlogPostBySlug, getRelatedBlogPosts } from "../utils/blogContent";

export default function BlogPost() {
  const { slug } = useParams();
  
  const post = getBlogPostBySlug(slug || "") || {
    title: "Artikel Tidak Ditemukan",
    category: "Unknown",
    date: "",
    readTime: "",
    image: "📝",
    content: "<p>Maaf, artikel yang Anda cari tidak ditemukan.</p>",
  };

  const relatedPosts = getRelatedBlogPosts(slug || "", 3);

  const handleShare = async () => {
    const shareText = `${post.title} - AgeInfo Blog`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: shareText,
          url: window.location.href,
        });
        toast.success("Berhasil dibagikan!");
      } catch (err) {
        console.error("Error sharing:", err);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success("Link disalin ke clipboard!");
    }
  };

  return (
    <>
      <SEOHead
        title={`${post.title} | AgeInfo Blog`}
        description={post.content.substring(0, 160)}
        type="article"
        publishedTime={post.date}
      />

      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          {/* Back Button */}
          <Link to="/blog">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Kembali ke Blog
            </Button>
          </Link>

          <Card className="p-8 md:p-12 bg-white shadow-2xl border-2 border-gray-100">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="text-6xl mb-6">{post.image}</div>
              <span className="inline-block px-4 py-2 text-sm font-semibold rounded-full bg-violet-100 text-violet-700 mb-4">
                {post.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                {post.title}
              </h1>
              <div className="flex items-center justify-center gap-6 text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </div>
              </div>
            </div>

            {/* Content */}
            <div 
              className="prose prose-lg max-w-none mb-8"
              dangerouslySetInnerHTML={{ __html: post.content }}
              style={{
                lineHeight: "1.8",
              }}
            />

            {/* Share Button */}
            <div className="border-t border-gray-200 pt-8 flex justify-center">
              <Button
                onClick={handleShare}
                className="bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700 text-white"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Bagikan Artikel
              </Button>
            </div>
          </Card>

          {/* Related Articles */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-12"
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-violet-600" />
              Artikel Lainnya
            </h2>
            {relatedPosts.length > 0 ? (
              <div className="grid md:grid-cols-3 gap-6">
                {relatedPosts.map((article, index) => (
                  <motion.div
                    key={article.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <Link to={`/blog/${article.slug}`}>
                      <Card className="p-5 h-full hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-violet-200 bg-white">
                        <div className="text-3xl mb-3">{article.image}</div>
                        <span className="inline-block px-2 py-1 text-xs font-semibold rounded-full bg-violet-100 text-violet-700 mb-2">
                          {article.category}
                        </span>
                        <h3 className="font-bold text-sm mb-2 line-clamp-2">{article.title}</h3>
                        <p className="text-xs text-gray-500">{article.readTime}</p>
                      </Card>
                    </Link>
                  </motion.div>
                ))}
              </div>
            ) : (
              <Card className="p-8 text-center bg-gray-50">
                <p className="text-gray-600">Tidak ada artikel terkait. Kembali ke <Link to="/blog" className="text-violet-600 font-semibold hover:underline">daftar blog</Link></p>
              </Card>
            )}
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
