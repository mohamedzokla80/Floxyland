import React, { useState } from "react";
import blogImage1 from "../../assets/Blog_Dummy-1.jpg";
import blogImage2 from "../../assets/mark-champs-Id2IIl1jOB0-unsplash-800-opt-300x225.jpg";
import blogImage3 from "../../assets/thumb.jpg";

export default function BlogPreviews() {
  const [activeCategory, setActiveCategory] = useState('All');

  const blogPosts = [
    {
      id: 1,
      title: "Top 10 Luxury Hotel Amenities That Define Excellence",
      excerpt: "Discover the essential amenities that separate truly luxurious hotels from the rest. From world-class spas to personalized butler services, learn what makes a stay unforgettable.",
      image: blogImage1,
      author: "Jessica Miller",
      authorRole: "Hospitality Expert",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Travel Tips",
      tags: ["Luxury", "Amenities", "Hotels"],
      featured: true
    },
    {
      id: 2,
      title: "The Art of Fine Dining: A Culinary Journey Through Excellence",
      excerpt: "Explore the exquisite world of fine dining and discover the culinary masterpieces that await you at our award-winning restaurants. From farm-to-table concepts to molecular gastronomy.",
      image: blogImage2,
      author: "Chef Antonio Rodriguez",
      authorRole: "Executive Chef",
      date: "March 12, 2024",
      readTime: "7 min read",
      category: "Dining",
      tags: ["Fine Dining", "Culinary", "Restaurants"],
      featured: false
    },
    {
      id: 3,
      title: "Wellness Retreats: The Ultimate Guide to Mind-Body Rejuvenation",
      excerpt: "Discover how our comprehensive spa and wellness programs can help you achieve the perfect balance of relaxation and revitalization during your luxury stay.",
      image: blogImage3,
      author: "Dr. Sarah Chen",
      authorRole: "Wellness Director",
      date: "March 10, 2024",
      readTime: "6 min read",
      category: "Wellness",
      tags: ["Spa", "Wellness", "Relaxation"],
      featured: false
    },
    {
      id: 4,
      title: "Sustainable Luxury: How Modern Hotels Lead Environmental Change",
      excerpt: "Learn about the innovative sustainability practices that luxury hotels are implementing without compromising on comfort and elegance.",
      image: blogImage1,
      author: "Michael Green",
      authorRole: "Sustainability Expert",
      date: "March 8, 2024",
      readTime: "4 min read",
      category: "Sustainability",
      tags: ["Eco-Friendly", "Green Hotels", "Environment"],
      featured: false
    },
    {
      id: 5,
      title: "Business Travel Redefined: Executive Amenities for Modern Professionals",
      excerpt: "Discover how luxury hotels are revolutionizing business travel with state-of-the-art meeting facilities and executive services.",
      image: blogImage2,
      author: "Robert Kim",
      authorRole: "Business Travel Consultant",
      date: "March 5, 2024",
      readTime: "5 min read",
      category: "Business",
      tags: ["Business Travel", "Executive", "Meetings"],
      featured: false
    },
    {
      id: 6,
      title: "Local Experiences: Immersive Cultural Adventures Beyond Your Hotel",
      excerpt: "Explore curated local experiences that connect you with the authentic culture and hidden gems of your destination.",
      image: blogImage3,
      author: "Elena Martinez",
      authorRole: "Cultural Experience Curator",
      date: "March 3, 2024",
      readTime: "6 min read",
      category: "Travel Tips",
      tags: ["Local Culture", "Experiences", "Adventure"],
      featured: false
    }
  ];

  const categories = ['All', 'Travel Tips', 'Dining', 'Wellness', 'Sustainability', 'Business'];
  
  const filteredPosts = activeCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-4 block">
            Insights & Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Latest <span className="text-yellow-600">Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest insights, tips, and stories from the world of luxury hospitality. 
            Discover what makes your experience truly exceptional.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-yellow-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-yellow-50 hover:text-yellow-600 shadow-md'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        {featuredPost && activeCategory === 'All' && (
          <div className="mb-16">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-yellow-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                      {featuredPost.category}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                        <span className="text-yellow-600 font-semibold text-sm">
                          {featuredPost.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{featuredPost.author}</p>
                        <p className="text-sm text-gray-500">{featuredPost.authorRole}</p>
                      </div>
                    </div>
                    <div className="text-right text-sm text-gray-500">
                      <p>{featuredPost.date}</p>
                      <p>{featuredPost.readTime}</p>
                    </div>
                  </div>
                  <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 self-start">
                    Read Full Article
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(activeCategory === 'All' ? regularPosts : filteredPosts).map((post) => (
            <article key={post.id} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              {/* Blog Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-semibold">
                  {post.category}
                </div>
                <div className="absolute bottom-4 right-4 bg-yellow-600 text-white px-3 py-1 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {post.readTime}
                </div>
              </div>

              {/* Blog Content */}
              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.tags.slice(0, 2).map((tag, index) => (
                    <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded-md text-xs">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-yellow-600 transition-colors duration-200">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Author & Meta */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                      <span className="text-yellow-600 font-semibold text-xs">
                        {post.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 text-sm">{post.author}</p>
                      <p className="text-xs text-gray-500">{post.date}</p>
                    </div>
                  </div>
                </div>

                {/* Read More Button */}
                <button className="w-full bg-gray-50 hover:bg-yellow-50 text-gray-700 hover:text-yellow-600 font-semibold py-2 px-4 rounded-lg transition-all duration-200 group-hover:bg-yellow-600 group-hover:text-white">
                  Read Article
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Load More & Newsletter Signup */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <button className="bg-transparent border-2 border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200">
              Load More Articles
            </button>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Stay <span className="text-yellow-600">Informed</span>
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Subscribe to our newsletter for the latest luxury travel insights, exclusive offers, and insider tips.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
              />
              <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
