import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaCalendarAlt, FaUser, FaArrowLeft, FaQuoteLeft, FaShareAlt } from "react-icons/fa";

const BlogPost = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { post } = location.state || {};

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-50 to-white">
        <div className="text-center p-10 bg-white rounded-2xl shadow-lg max-w-md">
          <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <FaQuoteLeft className="text-yellow-600 text-2xl" />
          </div>
          <h2 className="text-2xl font-bold text-yellow-800 mb-2">Post Not Found</h2>
          <p className="text-yellow-700 mb-6">The blog post you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate("/blog")}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-600 to-yellow-800 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
          >
            <FaArrowLeft className="text-sm" />
            <span>Back to Blog</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Blog Post Hero with Integrated Image */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-yellow-300 via-yellow-100 to-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-200 rounded-full filter blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-yellow-300 rounded-full filter blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <button
            onClick={() => navigate("/blog")}
            className="inline-flex items-center gap-2 text-yellow-700 hover:text-yellow-900 mb-8 transition-colors duration-300"
          >
            <FaArrowLeft />
            <span>Back to Blog</span>
          </button>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-yellow-700 text-yellow-100 text-sm font-medium px-4 py-1 rounded-full mb-6">
                TRAVEL STORY
              </div>
              
              <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-800 mb-6 leading-tight">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-yellow-700 mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
                    <FaUser className="text-yellow-600" />
                  </div>
                  <span className="font-medium">{post.author}</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
                    <FaCalendarAlt className="text-yellow-600" />
                  </div>
                  <span className="font-medium">{post.date}</span>
                </div>
              </div>
              
              <button className="flex items-center gap-2 text-yellow-700 hover:text-yellow-900 transition-colors duration-300">
                <FaShareAlt />
                <span>Share this article</span>
              </button>
            </div>
            
            <div className="relative">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-300 rounded-lg transform rotate-12 z-0"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-yellow-400 rounded-lg transform -rotate-12 z-0"></div>
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-80 object-cover rounded-2xl shadow-xl border-4 border-yellow-300 relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-br from-yellow-50 to-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            <p className="text-yellow-900 leading-relaxed whitespace-pre-line text-lg">
              {post.content}
            </p>
          </div>
          
          <div className="mt-12 pt-8 border-t border-yellow-200">
            <h3 className="text-xl font-bold text-yellow-800 mb-4">Share this article</h3>
            <div className="flex gap-4">
              <button className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-700 hover:bg-yellow-600 hover:text-white transition-all duration-300">
                <FaShareAlt />
              </button>
              <button className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-700 hover:bg-yellow-600 hover:text-white transition-all duration-300">
                <span className="font-bold">f</span>
              </button>
              <button className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-700 hover:bg-yellow-600 hover:text-white transition-all duration-300">
                <span className="font-bold">t</span>
              </button>
              <button className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-700 hover:bg-yellow-600 hover:text-white transition-all duration-300">
                <span className="font-bold">in</span>
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <button
            onClick={() => navigate("/blog")}
            className="inline-flex items-center gap-2 border-2 border-yellow-600 text-yellow-700 px-6 py-3 rounded-full font-medium transition-all duration-300 hover:bg-yellow-600 hover:text-white"
          >
            <FaArrowLeft className="text-sm" />
            <span>Back to Blog</span>
          </button>
        </div>
      </section>
    </>
  );
};

export default BlogPost;