// BlogPages.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import "../styles/BlogPages.css";

export default function BlogPages() {
  const { blog } = useParams();
  const navigate = useNavigate();

  const getBlogContent = () => {
    const blogs = {
      'career-tips': {
        title: 'Career Tips',
        icon: '💡',
        articles: [
          { title: 'How to Choose the Right Career Path', readTime: '5 min read' },
          { title: 'Top Skills Employers Look For in 2024', readTime: '4 min read' },
          { title: 'Career Change Guide: Switching Industries', readTime: '6 min read' }
        ]
      },
      'interview-tips': {
        title: 'Interview Tips',
        icon: '🎤',
        articles: [
          { title: '10 Common Interview Questions & Answers', readTime: '5 min read' },
          { title: 'Virtual Interview Tips for Success', readTime: '4 min read' },
          { title: 'Body Language Tips for Interviews', readTime: '3 min read' }
        ]
      },
      'resume-tips': {
        title: 'Resume Tips',
        icon: '📄',
        articles: [
          { title: 'How to Make Your Resume ATS-Friendly', readTime: '5 min read' },
          { title: 'Resume Formatting Guide 2024', readTime: '4 min read' },
          { title: 'What to Include in a Resume', readTime: '3 min read' },
        ]
      },
      'success-stories': {
        title: 'Success Stories',
        icon: '🏆',
        articles: [
          { title: 'From Fresher to Team Lead: A Journey', readTime: '7 min read' },
          { title: 'How I Got Hired at Google', readTime: '6 min read' },
          { title: 'Career Transformation Stories', readTime: '5 min read' }
        ]
      }
    };
    return blogs[blog] || blogs['career-tips'];
  };

  const blogData = getBlogContent();

  return (
    <div className="blog-page">
      <div className="blog-header">
        <div className="blog-icon">{blogData.icon}</div>
        <h1>{blogData.title}</h1>
        <p>Expert insights and advice for your career growth</p>
      </div>

      <div className="blog-content">
        {blogData.articles.map((article, index) => (
          <div key={index} className="blog-card">
            <h3>{article.title}</h3>
            <p className="read-time">📖 {article.readTime}</p>
            <button className="read-more-btn" onClick={() => alert('Coming Soon!')}>
              Read More →
            </button>
          </div>
        ))}
      </div>

      <button className="back-home-btn" onClick={() => navigate('/')}>
        ← Back to Home
      </button>
    </div>
  );
}