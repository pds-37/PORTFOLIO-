import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionKicker from '../components/SectionKicker';
import { insights } from '../data/portfolioData';

export default function Insights() {
  return (
    <section id="insights" className="insights section-light">
      <div className="insights-head">
        <div>
          <SectionKicker num="06">THINKING / INSIGHTS</SectionKicker>
          <h2>Notes from<br /><em>my journey.</em></h2>
          <p>Thoughts, learnings, and ideas around AI, product development, and everything in between.</p>
        </div>
        <button className="btn outline dark-outline">Read All Articles <ArrowRight size={15} /></button>
      </div>
      <div className="posts">
        {insights.map((post) => (
          <article key={post.id}>
            <img src={"/src/assets/" + post.image} alt={post.title} />
            <div className="post-body">
              <small>{post.date} • {post.category}</small>
              <h3>{post.title}</h3>
              <p>{post.desc}</p>
              <Link to={`/insight/${post.id}`} target="_blank">
                Read More <ArrowRight size={13} />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}