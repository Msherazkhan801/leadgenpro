// app/blog/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { FiCalendar, FiClock, FiArrowLeft } from 'react-icons/fi';
import Link from 'next/link';
import { blogPosts } from '@/utils/BlogsData';
import './blog.css';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPost({ params }) {
  const post = blogPosts.find((post) => post.slug === params.slug);

  if (!post) {
    return notFound();
  }

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-8">
        <Link 
          href="/blog" 
          className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          <FiArrowLeft className="mr-2" /> Back to all articles
        </Link>
      </div>

      <header className="mb-12">
        <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-50 rounded-full mb-4">
          {post.category}
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{post.title}</h1>
        <div className=" items-center space-x-4 text-gray-500">
          <div className="flex items-center">
            <FiCalendar className="mr-2" />
            <span>{new Date(post.date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</span>
          </div>
          <br/>
          <h3 style={{fontWeight:600}}>Author:{post.author}</h3>
        </div>
      </header>

      {/* Safe HTML rendering */}
     <div className="prose prose-lg max-w-none text-black">
        <div 
        // className={`prose prose-lg max-w-none text-black  `}
         className="blog-content"
        
        dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </article>
  );
}