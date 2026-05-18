// ServicePages.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import "../styles/ServicePages.css"; 

export default function ServicePages() {
  const { service } = useParams();
  const navigate = useNavigate();

  const getServiceContent = () => {
    const services = {
      'profile-booster': {
        title: 'Profile Boosterdsdsdsdsdsdsd',
        icon: '🚀',
        color: '#4facfe',
        description: 'Get your profile noticed by top recruitersService pages',
        features: [
          'Profile optimization for better visibility',
          'Keyword optimization for ATS systems',
          'Professional headshot recommendations',
          'LinkedIn profile makeover',
          'SEO optimized profile content'
        ],
        price: '₹999',
        duration: '48 hours'
      },
      'applications-highlighter': {
        title: 'Applications Highlighter',
        icon: '✨',
        color: '#f093fb',
        description: 'Make your applications stand out',
        features: [
          'Application tracking system optimization',
          'Custom cover letter writing',
          'Application portfolio creation',
          'Follow-up email templates',
          'Application deadline tracking'
        ],
        price: '₹499',
        duration: '24 hours'
      },
      'resume-writing': {
        title: 'Resume Writing',
        icon: '📝',
        color: '#43e97b',
        description: 'Professional resume writing service',
        features: [
          'ATS-friendly resume formatting',
          'Professional content writing',
          'Keyword optimization',
          'Multiple format exports (PDF, DOC, TXT)',
          'Unlimited revisions'
        ],
        price: '₹1499',
        duration: '72 hours'
      },
      'resume-checking': {
        title: 'Resume Checking',
        icon: '🔍',
        color: '#fa709a',
        description: 'Get your resume reviewed by experts',
        features: [
          'Expert resume review',
          'Detailed feedback report',
          'Grammar and spelling check',
          'Formatting suggestions',
          'Content improvement tips'
        ],
        price: '₹299',
        duration: '24 hours'
      },
      'interview-preparation': {
        title: 'Interview Preparation',
        icon: '🎯',
        color: '#667eea',
        description: 'Mock interviews and tips',
        features: [
          'Mock interview sessions',
          'Common question practice',
          'Body language tips',
          'Salary negotiation strategies',
          'Post-interview follow-up guidance'
        ],
        price: '₹1999',
        duration: '1 week'
      },
      'career-counseling': {
        title: 'Career Counseling',
        icon: '💼',
        color: '#f5576c',
        description: 'Expert career guidance',
        features: [
          'One-on-one counseling sessions',
          'Career path assessment',
          'Skill gap analysis',
          'Industry trend insights',
          'Personalized action plan'
        ],
        price: '₹2499',
        duration: '1 week'
      }
    };
    return services[service] || services['profile-booster'];
  };

  const serviceData = getServiceContent();

  return (
    <div className="service-page">
      <div className="service-header" style={{ background: serviceData.color }}>
        <div className="service-icon">{serviceData.icon}</div>
        <h1>{serviceData.title}</h1>
        <p>{serviceData.description}</p>
      </div>

      <div className="service-content">
        <div className="service-info">
          <h2>What's Included?</h2>
          <ul className="features-list">
            {serviceData.features.map((feature, index) => (
              <li key={index}>
                <span className="check">✓</span> {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="service-pricing">
          <div className="price-card">
            <h3>Service Package</h3>
            <div className="price">{serviceData.price}</div>
            <div className="duration">⏱️ Delivery: {serviceData.duration}</div>
            <button className="buy-now-btn" onClick={() => alert('Coming Soon!')}>
              Get Started →
            </button>
            <p className="guarantee">✨ 100% Satisfaction Guarantee</p>
          </div>
        </div>
      </div>

      <button className="back-home-btn" onClick={() => navigate('/')}>
        ← Back to Home
      </button>
    </div>
  );
}