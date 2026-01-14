import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { getAllPosts, getPostBySlug } from '../lib/writings';
import type { WritingPost, WritingPostPreview } from '../lib/writings';
import { ArrowLeft } from 'lucide-react';

interface WritingProps {
  previewMode?: boolean;
}

const Writing: React.FC<WritingProps> = ({ previewMode = false }) => {
  const [filter, setFilter] = useState<'All' | 'Note' | 'Thought' | 'Essay'>('All');
  const [view, setView] = useState<'list' | 'detail'>('list');
  const [selectedPost, setSelectedPost] = useState<WritingPost | null>(null);
  const [posts, setPosts] = useState<WritingPostPreview[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllPosts().then((loadedPosts) => {
      setPosts(loadedPosts);
      setLoading(false);
    });
  }, []);

  const filteredPosts = filter === 'All'
    ? posts
    : posts.filter((post) => post.category === filter);

  const displayPosts = previewMode ? posts.slice(0, 3) : filteredPosts;

  const handlePostClick = async (slug: string) => {
    const post = await getPostBySlug(slug);
    if (post) {
      setSelectedPost(post);
      setView('detail');
    }
  };

  const handleBack = () => {
    setView('list');
    setSelectedPost(null);
  };

  if (loading) {
    return (
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h2 className="text-sm font-bold text-stone-900 uppercase tracking-wider flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-stone-300"></span>
            {previewMode ? 'Recent Writing' : 'Writing'}
          </h2>
        </div>
        <div className="animate-pulse space-y-3">
          <div className="h-6 bg-stone-100 rounded w-3/4"></div>
          <div className="h-6 bg-stone-100 rounded w-1/2"></div>
          <div className="h-6 bg-stone-100 rounded w-5/6"></div>
        </div>
      </section>
    );
  }

  if (view === 'detail' && selectedPost) {
    return (
      <section className="space-y-6">
        <button
          onClick={handleBack}
          className="flex items-center gap-2 text-sm text-stone-500 hover:text-stone-900 transition-colors mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to writings
        </button>

        <article className="space-y-4">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-serif text-stone-900">{selectedPost.title}</h2>
            <span className={`text-[10px] px-2 py-1 rounded border ${
              selectedPost.category === 'Essay' ? 'bg-indigo-50 border-indigo-100 text-indigo-700' :
              selectedPost.category === 'Note' ? 'bg-amber-50 border-amber-100 text-amber-700' :
              'bg-emerald-50 border-emerald-100 text-emerald-700'
            }`}>
              {selectedPost.category}
            </span>
          </div>
          <div className="flex items-center gap-3 text-sm text-stone-500">
            <span className="font-mono">{selectedPost.date}</span>
          </div>
          <div className="prose prose-stone prose-sm max-w-none prose-headings:font-serif prose-headings:text-stone-900 prose-p:text-stone-700 prose-a:text-crimson-700 prose-a:no-underline hover:prose-a:underline prose-blockquote:border-l-crimson-700 prose-blockquote:italic prose-code:text-indigo-600 prose-code:bg-indigo-50 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-xs prose-code:before:content-none prose-code:after:content-none prose-pre:bg-stone-900 prose-pre:text-stone-100 prose-li:text-stone-700">
            <ReactMarkdown>{selectedPost.content}</ReactMarkdown>
          </div>
        </article>
      </section>
    );
  }

  return (
    <section className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h2 className="text-sm font-bold text-stone-900 uppercase tracking-wider flex items-center gap-2">
           <span className="w-2 h-2 rounded-full bg-stone-300"></span>
           {previewMode ? 'Recent Writing' : 'Writing'}
        </h2>
        
        {!previewMode && (
          <div className="flex gap-1">
            {['All', 'Essay', 'Thought', 'Note'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat as any)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                  filter === cat 
                    ? 'bg-stone-900 text-white' 
                    : 'bg-stone-100 text-stone-500 hover:bg-stone-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="grid gap-1">
        {displayPosts.map((post) => (
          <div 
            key={post.slug} 
            className="group flex flex-col sm:flex-row sm:items-baseline justify-between py-2.5 sm:py-2 hover:bg-stone-50 -mx-3 px-3 rounded-lg transition-colors cursor-pointer"
            onClick={() => handlePostClick(post.slug)}
          >
            <div className="flex items-center gap-3">
              <span className="text-stone-800 font-medium group-hover:text-crimson-700 transition-colors">
                {post.title}
              </span>
              {!previewMode && (
                <span className={`text-[10px] px-1.5 py-0.5 rounded border ${
                  post.category === 'Essay' ? 'bg-indigo-50 border-indigo-100 text-indigo-700' :
                  post.category === 'Note' ? 'bg-amber-50 border-amber-100 text-amber-700' :
                  'bg-emerald-50 border-emerald-100 text-emerald-700'
                }`}>
                  {post.category}
                </span>
              )}
            </div>
            <div className="flex items-center gap-3 shrink-0">
               <span className="hidden sm:inline-block h-px w-8 bg-stone-200"></span>
               <span className="text-xs font-mono text-stone-400 group-hover:text-stone-500">{post.date}</span>
            </div>
          </div>
        ))}
      </div>
      
      {previewMode && (
        <div className="pt-2">
           <span className="text-xs font-medium text-stone-400">See "Writing" tab for more notes & thoughts.</span>
        </div>
      )}
    </section>
  );
};

export default Writing;
