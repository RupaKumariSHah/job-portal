import React, { useState } from "react";
import "../styles/JobAlerts.css";

const JobAlerts = () => {
  const [formData, setFormData] = useState({
    keywords: "",
    salary: "",
    experience: "",
    location: "",
    department: "",
    industry: ""
  });
  
  const [activeFaq, setActiveFaq] = useState(0);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCreateAlert = (e) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.keywords || !formData.location) {
      showToastMessage("Please fill in Keywords and Location at minimum!");
      return;
    }
    
    showToastMessage("✅ Job Alert Created Successfully! You'll receive job notifications in your email.");
    
    // Reset form
    setFormData({
      keywords: "",
      salary: "",
      experience: "",
      location: "",
      department: "",
      industry: ""
    });
  };

  const showToastMessage = (message) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? -1 : index);
  };

  const faqData = [
    {
      question: "Why set up a free job alert?",
      answer: "You will save time and boost your job search with our free job alerts. You will receive personalized notifications for roles that match your skills and experience."
    },
    {
      question: "How do I get a job alert on my email ID?",
      answer: "Simply create a job alert by filling out the form with your preferences. Once registered, you'll receive job alerts directly to your registered email address based on your selected criteria."
    },
    {
      question: "How to get the best out of a free job alert?",
      answer: "To maximize benefits, create multiple alerts with different keyword combinations, keep your preferences updated, and act quickly on notifications to stay ahead of other candidates."
    },
    {
      question: "Who can see my information provided to set up a job alert?",
      answer: "Your information is kept confidential and is only used to send you relevant job matches. We never share your personal data with third parties without your consent."
    }
  ];

  return (
    <>
      <div className="free-job-alert-section">
        <div className="free-job-alert-container">

          {/* LEFT SIDE FORM */}
          <div className="free-job-alert-left">
            <h2>Create a Free Job Alert</h2>
            <p className="free-job-alert-subtitle">
              You can create up to 5 alerts.
            </p>

            <div className="free-job-alert-card">
              <p className="free-job-alert-text">
                Let us know what kind of job you are looking for and we'll send
                them to your inbox.
              </p>

              <form onSubmit={handleCreateAlert}>
                <input 
                  type="text" 
                  name="keywords"
                  placeholder="Keywords *" 
                  value={formData.keywords}
                  onChange={handleInputChange}
                  required
                />
                <input 
                  type="text" 
                  name="salary"
                  placeholder="Salary" 
                  value={formData.salary}
                  onChange={handleInputChange}
                />
                <input 
                  type="text" 
                  name="experience"
                  placeholder="Experience" 
                  value={formData.experience}
                  onChange={handleInputChange}
                />
                <input 
                  type="text" 
                  name="location"
                  placeholder="Location *" 
                  value={formData.location}
                  onChange={handleInputChange}
                  required
                />
                <input 
                  type="text" 
                  name="department"
                  placeholder="Department" 
                  value={formData.department}
                  onChange={handleInputChange}
                />
                <input 
                  type="text" 
                  name="industry"
                  placeholder="Industry" 
                  value={formData.industry}
                  onChange={handleInputChange}
                />

                <button type="submit">Create Job Alert</button>
              </form>
            </div>
          </div>

          {/* RIGHT SIDE FAQ */}
          <div className="free-job-alert-right">
            <div className="faq-card">
              <h3>Free Job Alerts FAQs</h3>

              {faqData.map((faq, index) => (
                <div 
                  key={index} 
                  className={`faq-item ${activeFaq === index ? 'active' : ''}`}
                >
                  <div 
                    className="faq-question"
                    onClick={() => toggleFaq(index)}
                  >
                    {faq.question}
                    <span className="faq-icon">{activeFaq === index ? '−' : '+'}</span>
                  </div>
                  
                  {activeFaq === index && (
                    <div className="faq-answer">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* JOB ALERT CONTENT SECTION */}
      <div className="job-alert-content-section">
        <div className="job-alert-content-container">
          <h1>Latest Free Job Alerts 2026: 300,000+ Jobs Now!</h1>

          <p>
            Looking for the perfect job can sometimes feel tiring. But what if you
            could turn the odds in your favour? Imagine receiving real-time updates
            about jobs that align with your skills and career aspirations. Use
            Shine.com's Free Job Alert Service – your ultimate job search companion.
          </p>

          <h2>What is a Free Job Alert?</h2>

          <p>
            Free Job Alert is a service that provides free notifications about the
            latest job vacancies. These alerts are typically sent via email and
            include details such as job title, company name, location, and how to
            apply. Users can subscribe to these alerts based on their preferences,
            such as job category, location, and experience level, to receive relevant
            job updates regularly.
          </p>

          <h2>Benefits of Free Job Alerts</h2>

          <p>
            Free Job Alerts are a convenient and efficient way for job seekers to stay
            informed about the latest job opportunities. Here are five benefits that
            you should know:
          </p>

          <ul>
            <li>
              <strong>Timely Notifications:</strong> Free Job Alerts provide timely
              updates on the latest job openings, ensuring job seekers don't miss out
              on new opportunities. This helps them apply as soon as vacancies become
              available, increasing their chances of securing a job.
            </li>

            <li>
              <strong>Personalised Job Matches:</strong> These alerts can be
              customised based on the job seeker's preferences, such as industry,
              location, job title, and experience level. This ensures that they
              receive notifications about jobs that are relevant to their skills and
              interests.
            </li>

            <li>
              <strong>Convenience:</strong> Receiving job alerts directly via email
              saves job seekers time and effort. They don't have to constantly search
              through multiple job portals; instead, the relevant opportunities will
              come directly to them.
            </li>

            <li>
              <strong>Increased Opportunities:</strong> Free Job Alerts often include
              a wide range of job listings from various sources. This broadens the
              scope of opportunities available to job seekers, increasing their
              chances of finding a suitable job quickly.
            </li>

            <li>
              <strong>Competitive Edge:</strong> By being among the first to know
              about new job openings, job seekers can apply early, potentially giving
              them a competitive edge over other applicants.
            </li>
          </ul>
        </div>
      </div>

      {/* TOAST NOTIFICATION */}
      {showToast && (
        <div className="job-alert-toast">
          {toastMessage}
        </div>
      )}
    </>
  );
};

export default JobAlerts;