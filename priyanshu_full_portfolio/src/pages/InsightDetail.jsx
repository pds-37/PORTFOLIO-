import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { insights } from '../data/portfolioData';
import SectionKicker from '../components/SectionKicker';

export default function InsightDetail() {
  const { id } = useParams();
  const post = insights.find(p => p.id === id) || insights[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="insight-detail-page section-light">
      <div className="id-container">
        
        <Link to="/#insights" className="id-back">
          <ArrowLeft size={16} /> Back to Insights
        </Link>

        <article className="id-article">
          <div className="id-header">
            <SectionKicker num="06">ENGINEERING NOTES</SectionKicker>
            <h1>{post.title}</h1>
            <div className="id-meta">
              <span>{post.category}</span>
              <span className="dot">•</span>
              <span>{post.date}</span>
            </div>
          </div>

          <div className="id-hero">
            <img src={`/assets/${post.image}`} alt={post.title} />
          </div>

          <div className="id-content">
            {post.content.split('\n\n').map((paragraph, i) => {
              if (paragraph.startsWith('### ')) {
                return <h3 key={i}>{paragraph.replace('### ', '')}</h3>;
              }
              if (paragraph.startsWith('> **Key idea:**')) {
                return (
                  <blockquote key={i}>
                    <strong>Key idea:</strong>{paragraph.replace('> **Key idea:**', '')}
                  </blockquote>
                );
              }
              if (paragraph.trim() === '') return null;
              return <p key={i}>{paragraph}</p>;
            })}
          </div>
        </article>

      </div>
    </div>
  );
}
