
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import { Calendar } from "lucide-react";

const GHOST_URL = "http://localhost:2368"; // Your local Ghost URL
const GHOST_CONTENT_API_KEY = "5739f3b93fa4a4488d9d0a715d"; // Your Content API key
const GHOST_API_VERSION = "v5.0";

type Post = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  published_at: string;
};

const fetchThesisPosts = async (): Promise<Post[]> => {
  const url = `${GHOST_URL}/ghost/api/content/posts/?key=${GHOST_CONTENT_API_KEY}&filter=tag:thesis&include=tags,authors&limit=3`;
  const response = await fetch(url);

  if (!response.ok) {
    console.error("Error fetching thesis posts:", response.status, response.statusText);
    return []; // Return an empty array in case of error
  }

  const data = await response.json();
  return data.posts;
};

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const ThesisCard = ({ post }: { post: Post }) => { // Changed prop name to 'post'
  return (
    <div className="bg-studio-muted/10 rounded-lg p-8 border border-gray-800 hover:border-studio-accent/30 transition-all duration-300">
      <h3 className="text-2xl font-bold mb-4">{post.title}</h3> {/* Use post.title */}
      <p className="text-gray-300 mb-6">{post.excerpt}</p> {/* Use post.excerpt */}
      <Link
        to={`/blog/${post.slug}`} // Link to the full blog post
        className="inline-flex items-center text-studio-accent hover:underline"
      >
        Read Full Thesis
      </Link>
      <div className="flex items-center text-gray-500 text-sm mt-3">
        <Calendar className="h-4 w-4 mr-2" />
        <span>{formatDate(post.published_at)}</span>
      </div>
    </div>
  );
};

const Thesis = () => {
  const [thesisPosts, setThesisPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getThesisPosts = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const posts = await fetchThesisPosts();
        setThesisPosts(posts);
      } catch (e: any) {
        setError(e.message || "Failed to load thesis posts.");
        console.error("Error fetching thesis posts:", e);
      } finally {
        setIsLoading(false);
      }
    };

    getThesisPosts();
  }, []);

  return (
    <section id="thesis" className="py-24 bg-gradient-to-b from-studio-muted/5 to-studio">
      <div className="section-container">
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Thesis</h2>
          <p className="text-lg text-gray-300">
            33 Digital is a thesis-driven venture and product studio.
            We invest sweat equity, expertise, and hands-on leadership into companies
            that match our worldview. We work with founders building products that
            sell themselves — businesses designed for compounding growth, not brute force.
          </p>
        </div>

        {isLoading ? (
          <p className="text-center text-gray-400">Loading thesis posts...</p>
        ) : error ? (
          <p className="text-center text-red-400">{error}</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {thesisPosts.map((post) => (
              <ThesisCard key={post.id} post={post} /> // Changed prop to 'post'
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Thesis;
