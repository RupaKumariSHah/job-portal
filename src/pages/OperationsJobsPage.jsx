// OperationsJobsPage.jsx - Add route detection
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import "../styles/JobPortal.css";
import "../styles/OperationsJobsPage.css";
import workImg from "../assets/img.svg";


export default function OperationsJobsPage() {
  const navigate = useNavigate();
  const { category } = useParams(); // Get category from URL
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('category');
  const [showJobsPage, setShowJobsPage] = useState(false);
  const [currentCategory, setCurrentCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  
  // Modal States
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showPostJobModal, setShowPostJobModal] = useState(false);
  const [showEventModal, setShowEventModal] = useState(null);
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  // Form States
  const [registerData, setRegisterData] = useState({ name: '', email: '', password: '', userType: 'jobseeker' });
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [jobData, setJobData] = useState({ title: '', company: '', location: '', salary: '', jobType: 'Full-time', experience: 'Fresher', description: '', skills: '', contactEmail: '' });
  const [eventRegistration, setEventRegistration] = useState({ name: '', email: '', phone: '', experience: '' });

  // Check URL parameter on component mount and when category changes
  useEffect(() => {
    if (category) {
      // Validate if category exists in our list
      const validCategories = [
        'operations', 'marketing', 'sales', 'it-software', 
        'data-science', 'customer-service', 'insurance', 'bfsi', 
        'hr', 'finance', 'engineering', 'education'
      ];
      
      if (validCategories.includes(category)) {
        setCurrentCategory(category);
        setShowJobsPage(true);
      } else {
        // Invalid category, go home
        setShowJobsPage(false);
        setCurrentCategory('');
      }
    } else {
      setShowJobsPage(false);
      setCurrentCategory('');
    }
  }, [category]);

  // Complete job data for all categories
  const getAllJobsData = () => {
    return {
      operations: [
        {
          id: 1,
          title: "Data Privacy Operations Manager",
          company: "Barclays PLC",
          experience: "5 to 9 Yrs",
          location: "All India, Chennai",
          skills: ["Compliance", "Assessments", "Training Programs", "Privacy Regulations", "Communication Skills"],
          posted: "2 months ago",
          salary: "₹15-25 LPA",
          logo: "🏦"
        },
        {
          id: 2,
          title: "People & Business Operations Manager",
          company: "LinkedIn Corporation",
          experience: "3 to 7 Yrs",
          location: "Bangalore",
          skills: ["Business Operations", "HR", "Communication", "People Management"],
          posted: "2 months ago",
          salary: "₹18-30 LPA",
          logo: "🔗"
        },
        {
          id: 3,
          title: "Operations Analyst",
          company: "Amazon",
          experience: "1 to 3 Yrs",
          location: "Hyderabad",
          skills: ["Data Analysis", "Excel", "SQL", "Process Improvement"],
          posted: "1 week ago",
          salary: "₹8-12 LPA",
          logo: "📦"
        },
        {
          id: 4,
          title: "Senior Operations Manager",
          company: "Microsoft",
          experience: "8 to 12 Yrs",
          location: "Bangalore",
          skills: ["Leadership", "Strategic Planning", "Team Management", "Budgeting"],
          posted: "3 days ago",
          salary: "₹25-40 LPA",
          logo: "💻"
        }
      ],
      marketing: [
        {
          id: 1,
          title: "Digital Marketing Manager",
          company: "Google",
          experience: "4 to 8 Yrs",
          location: "Bangalore",
          skills: ["SEO", "SEM", "Social Media", "Analytics", "Content Strategy"],
          posted: "1 week ago",
          salary: "₹20-35 LPA",
          logo: "🔍"
        },
        {
          id: 2,
          title: "Marketing Analytics Specialist",
          company: "Amazon",
          experience: "2 to 5 Yrs",
          location: "Hyderabad",
          skills: ["Data Analytics", "Python", "Tableau", "Marketing Metrics"],
          posted: "3 days ago",
          salary: "₹12-18 LPA",
          logo: "📊"
        },
        {
          id: 3,
          title: "Brand Manager",
          company: "Nike",
          experience: "4 to 7 Yrs",
          location: "Mumbai",
          skills: ["Brand Strategy", "Campaign Management", "Market Research"],
          posted: "5 days ago",
          salary: "₹18-28 LPA",
          logo: "👟"
        }
      ],
      sales: [
        {
          id: 1,
          title: "Sales Director",
          company: "Salesforce",
          experience: "6 to 10 Yrs",
          location: "Mumbai",
          skills: ["B2B Sales", "Team Leadership", "CRM", "Negotiation"],
          posted: "3 days ago",
          salary: "₹30-50 LPA",
          logo: "📈"
        },
        {
          id: 2,
          title: "Enterprise Sales Manager",
          company: "Oracle",
          experience: "5 to 9 Yrs",
          location: "Pune",
          skills: ["Enterprise Software", "Client Relations", "Solution Selling"],
          posted: "1 week ago",
          salary: "₹25-40 LPA",
          logo: "💼"
        },
        {
          id: 3,
          title: "Inside Sales Representative",
          company: "Zoho",
          experience: "1 to 3 Yrs",
          location: "Chennai",
          skills: ["Cold Calling", "Lead Generation", "CRM", "Communication"],
          posted: "2 days ago",
          salary: "₹5-8 LPA",
          logo: "📞"
        }
      ],
      'it-software': [
        {
          id: 1,
          title: "Senior Software Engineer",
          company: "Microsoft",
          experience: "4 to 8 Yrs",
          location: "Bangalore",
          skills: ["React", "Node.js", "Azure", "System Design"],
          posted: "2 days ago",
          salary: "₹20-35 LPA",
          logo: "⌨️"
        },
        {
          id: 2,
          title: "Full Stack Developer",
          company: "Flipkart",
          experience: "3 to 6 Yrs",
          location: "Bangalore",
          skills: ["Java", "React", "MongoDB", "AWS"],
          posted: "5 days ago",
          salary: "₹15-25 LPA",
          logo: "🛒"
        },
        {
          id: 3,
          title: "DevOps Engineer",
          company: "Amazon",
          experience: "3 to 5 Yrs",
          location: "Hyderabad",
          skills: ["Docker", "Kubernetes", "Jenkins", "AWS"],
          posted: "1 week ago",
          salary: "₹18-28 LPA",
          logo: "🐳"
        }
      ],
      'data-science': [
        {
          id: 1,
          title: "Data Scientist",
          company: "Flipkart",
          experience: "3 to 6 Yrs",
          location: "Bangalore",
          skills: ["Python", "Machine Learning", "SQL", "Statistics"],
          posted: "1 week ago",
          salary: "₹18-30 LPA",
          logo: "📊"
        },
        {
          id: 2,
          title: "AI/ML Engineer",
          company: "Google",
          experience: "2 to 5 Yrs",
          location: "Hyderabad",
          skills: ["TensorFlow", "PyTorch", "Deep Learning", "NLP"],
          posted: "4 days ago",
          salary: "₹22-38 LPA",
          logo: "🤖"
        },
        {
          id: 3,
          title: "Data Analyst",
          company: "Microsoft",
          experience: "1 to 3 Yrs",
          location: "Bangalore",
          skills: ["SQL", "Power BI", "Excel", "Tableau"],
          posted: "3 days ago",
          salary: "₹8-12 LPA",
          logo: "📈"
        }
      ],
      'customer-service': [
        {
          id: 1,
          title: "Customer Support Manager",
          company: "Zomato",
          experience: "5 to 8 Yrs",
          location: "Gurgaon",
          skills: ["Communication", "Team Management", "CRM Tools"],
          posted: "5 days ago",
          salary: "₹12-18 LPA",
          logo: "🍔"
        },
        {
          id: 2,
          title: "Customer Success Executive",
          company: "Swiggy",
          experience: "1 to 3 Yrs",
          location: "Bangalore",
          skills: ["Problem Solving", "Communication", "Customer Handling"],
          posted: "2 days ago",
          salary: "₹4-6 LPA",
          logo: "🍕"
        }
      ],
      insurance: [
        {
          id: 1,
          title: "Insurance Underwriter",
          company: "ICICI Lombard",
          experience: "3 to 6 Yrs",
          location: "Mumbai",
          skills: ["Risk Assessment", "Insurance Regulations", "Analytics"],
          posted: "3 days ago",
          salary: "₹8-14 LPA",
          logo: "🛡️"
        },
        {
          id: 2,
          title: "Claims Manager",
          company: "HDFC ERGO",
          experience: "4 to 7 Yrs",
          location: "Pune",
          skills: ["Claims Processing", "Customer Service", "Insurance"],
          posted: "1 week ago",
          salary: "₹10-15 LPA",
          logo: "📋"
        }
      ],
      bfsi: [
        {
          id: 1,
          title: "Relationship Manager",
          company: "HDFC Bank",
          experience: "2 to 5 Yrs",
          location: "Multiple Locations",
          skills: ["Banking", "Sales", "Customer Relations"],
          posted: "1 week ago",
          salary: "₹6-10 LPA",
          logo: "🏦"
        },
        {
          id: 2,
          title: "Investment Banking Analyst",
          company: "Goldman Sachs",
          experience: "1 to 3 Yrs",
          location: "Bangalore",
          skills: ["Financial Modeling", "Valuation", "Excel"],
          posted: "4 days ago",
          salary: "₹15-25 LPA",
          logo: "💹"
        }
      ],
      hr: [
        {
          id: 1,
          title: "HR Business Partner",
          company: "Infosys",
          experience: "5 to 9 Yrs",
          location: "Pune",
          skills: ["Employee Relations", "Talent Management", "HR Policies"],
          posted: "6 days ago",
          salary: "₹12-20 LPA",
          logo: "👥"
        },
        {
          id: 2,
          title: "Talent Acquisition Specialist",
          company: "TCS",
          experience: "2 to 4 Yrs",
          location: "Mumbai",
          skills: ["Recruitment", "Screening", "Interviewing"],
          posted: "3 days ago",
          salary: "₹5-8 LPA",
          logo: "🎯"
        }
      ],
      finance: [
        {
          id: 1,
          title: "Financial Analyst",
          company: "Goldman Sachs",
          experience: "2 to 4 Yrs",
          location: "Bangalore",
          skills: ["Financial Modeling", "Excel", "Valuation"],
          posted: "4 days ago",
          salary: "₹15-25 LPA",
          logo: "💰"
        },
        {
          id: 2,
          title: "Account Manager",
          company: "Deloitte",
          experience: "3 to 6 Yrs",
          location: "Mumbai",
          skills: ["Accounting", "Taxation", "Auditing"],
          posted: "1 week ago",
          salary: "₹8-12 LPA",
          logo: "📊"
        }
      ],
      engineering: [
        {
          id: 1,
          title: "Mechanical Engineer",
          company: "Tata Motors",
          experience: "3 to 6 Yrs",
          location: "Pune",
          skills: ["CAD", "Manufacturing", "Quality Control"],
          posted: "2 weeks ago",
          salary: "₹6-10 LPA",
          logo: "🔧"
        },
        {
          id: 2,
          title: "Civil Engineer",
          company: "L&T",
          experience: "2 to 5 Yrs",
          location: "Mumbai",
          skills: ["AutoCAD", "Site Management", "Construction"],
          posted: "5 days ago",
          salary: "₹5-8 LPA",
          logo: "🏗️"
        }
      ],
      education: [
        {
          id: 1,
          title: "Instructional Designer",
          company: "BYJU'S",
          experience: "2 to 5 Yrs",
          location: "Bangalore",
          skills: ["Curriculum Design", "E-Learning", "Content Development"],
          posted: "1 week ago",
          salary: "₹8-12 LPA",
          logo: "📚"
        },
        {
          id: 2,
          title: "Subject Matter Expert",
          company: "Unacademy",
          experience: "1 to 3 Yrs",
          location: "Remote",
          skills: ["Teaching", "Content Creation", "Subject Expertise"],
          posted: "3 days ago",
          salary: "₹6-9 LPA",
          logo: "🎓"
        }
      ]
    };
  };

  // Navigation function for all categories - updates URL
  const handleCategoryClick = (categoryName, title) => {
    setCurrentCategory(categoryName);
    setShowJobsPage(true);
    navigate(`/jobs/${categoryName}`); // Update URL
    showToast(`📁 ${title} page loaded!`);
    window.scrollTo(0, 0);
  };

  // Function to go back to home
  const handleBackToHome = () => {
    setShowJobsPage(false);
    setCurrentCategory('');
    navigate('/'); // Navigate to home
    setSearchTerm('');
  };

  // Get page title
  const getPageTitle = () => {
    const titles = {
      'operations': 'Operations',
      'marketing': 'Marketing',
      'sales': 'Sales',
      'it-software': 'IT & Software',
      'data-science': 'Data Science',
      'customer-service': 'Customer Service',
      'insurance': 'Insurance',
      'bfsi': 'BFSI',
      'hr': 'HR',
      'finance': 'Finance',
      'engineering': 'Engineering',
      'education': 'Education'
    };
    return titles[currentCategory] || 'Jobs';
  };

  // Category Jobs Data with updated navigation
  const categoryJobs = [
    { icon: "🌐", title: "Operations", jobs: 1240, category: "operations", path: "/jobs/operations", onClick: () => handleCategoryClick("operations", "Operations") },
    { icon: "📊", title: "Marketing", jobs: 2100, category: "marketing", path: "/jobs/marketing", onClick: () => handleCategoryClick("marketing", "Marketing") },
    { icon: "💸", title: "Sales", jobs: 1850, category: "sales", path: "/jobs/sales", onClick: () => handleCategoryClick("sales", "Sales") },
    { icon: "💻", title: "IT & Software", jobs: 5200, category: "it-software", path: "/jobs/it-software", onClick: () => handleCategoryClick("it-software", "IT & Software") },
    { icon: "⚛️", title: "Data Science", jobs: 980, category: "data-science", path: "/jobs/data-science", onClick: () => handleCategoryClick("data-science", "Data Science") },
    { icon: "🎧", title: "Customer Service", jobs: 3100, category: "customer-service", path: "/jobs/customer-service", onClick: () => handleCategoryClick("customer-service", "Customer Service") },
    { icon: "🛡️", title: "Insurance", jobs: 760, category: "insurance", path: "/jobs/insurance", onClick: () => handleCategoryClick("insurance", "Insurance") },
    { icon: "🏢", title: "BFSI", jobs: 1430, category: "bfsi", path: "/jobs/bfsi", onClick: () => handleCategoryClick("bfsi", "BFSI") },
    { icon: "👤", title: "HR", jobs: 890, category: "hr", path: "/jobs/hr", onClick: () => handleCategoryClick("hr", "HR") },
    { icon: "📈", title: "Finance", jobs: 1670, category: "finance", path: "/jobs/finance", onClick: () => handleCategoryClick("finance", "Finance") },
    { icon: "🔧", title: "Engineering", jobs: 2450, category: "engineering", path: "/jobs/engineering", onClick: () => handleCategoryClick("engineering", "Engineering") },
    { icon: "📚", title: "Education", jobs: 1120, category: "education", path: "/jobs/education", onClick: () => handleCategoryClick("education", "Education") }
  ];

  // Work Mode Jobs Data
  const workModeJobs = [
    { icon: "🏢", title: "On-Site", description: "Work from office", color: "#667eea", jobs: 12500 },
    { icon: "🏠", title: "Remote", description: "Work from home", color: "#f093fb", jobs: 8900 },
    { icon: "🔄", title: "Hybrid", description: "Mix of both", color: "#f5576c", jobs: 6700 }
  ];
const locations = useLocation();
console.log("Currentttttt URL:", locations.pathname);
  // Event Cards Data
  const eventCards = [
    {
      id: 1,
      type: "recruiter",
      badge: "🚀 For Recruiters",
      title: "Post a Job Now",
      description: "Reach millions of active job seekers. Get 100+ quality applications in days.",
      meta: "✨ Starting at just ₹999",
      buttonText: "Post Free Job →",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format",
      modalType: "postJob"
    },
    {
      id: 2,
      type: "event",
      badge: "🎯 EVENT • May 20, 2026",
      title: "Tech Career Summit 2026",
      description: "Hybrid meetup with 50+ top startups. On-spot interviews and networking.",
      meta: "📍 Bangalore | 📅 10 AM - 5 PM | 🎟️ Limited Seats",
      buttonText: "Register Free →",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&auto=format",
      modalType: "techSummit"
    },
    {
      id: 4,
      type: "internship",
      badge: "🎓 Freshers & Students",
      title: "Summer Internship Drive 2026",
      description: "Top MNCs hiring interns. Stipend up to ₹40k/month. Deadline: May 25th.",
      meta: "📅 Apply by May 22 • 2,000+ openings • PAN India",
      buttonText: "Apply for Internship →",
      image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600&auto=format",
      modalType: "internship"
    }
  ];

  // Companies Data
  const companies = ["Capgemini", "Genpact", "ICICI Bank", "Kotak", "Tech Mahindra", "Infosys", "Wipro", "TCS", "HCL", "Amazon", "Google", "Microsoft"];

  // Handlers
  const handleRegisterChange = (e) => setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  const handleLoginChange = (e) => setLoginData({ ...loginData, [e.target.name]: e.target.value });
  const handleJobChange = (e) => setJobData({ ...jobData, [e.target.name]: e.target.value });
  const handleEventChange = (e) => setEventRegistration({ ...eventRegistration, [e.target.name]: e.target.value });

  const showToast = (message) => {
    setToastMessage(message);
    setShowSuccessToast(true);
    setTimeout(() => setShowSuccessToast(false), 4000);
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    showToast(`🎉 Welcome ${registerData.name}! Registration successful.`);
    setShowRegisterModal(false);
    setRegisterData({ name: '', email: '', password: '', userType: 'jobseeker' });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    showToast(`🔐 Welcome back! Login successful.`);
    setShowLoginModal(false);
    setLoginData({ email: '', password: '' });
  };

  const handlePostJobSubmit = (e) => {
    e.preventDefault();
    showToast(`✅ Job "${jobData.title}" posted successfully at ${jobData.company}!`);
    setShowPostJobModal(false);
    setJobData({ title: '', company: '', location: '', salary: '', jobType: 'Full-time', experience: 'Fresher', description: '', skills: '', contactEmail: '' });
  };

  const handleEventSubmit = (e, eventName) => {
    e.preventDefault();
    showToast(`🎉 Successfully registered for ${eventName}! Check your email for confirmation.`);
    setShowEventModal(null);
    setEventRegistration({ name: '', email: '', phone: '', experience: '' });
  };

  const handleCardClick = (card) => {
    if (card.modalType === 'postJob') setShowPostJobModal(true);
    else if (card.modalType === 'techSummit') setShowEventModal('techSummit');
    else if (card.modalType === 'remoteWeek') setShowEventModal('remoteWeek');
    else if (card.modalType === 'internship') setShowEventModal('internship');
    else alert(`✨ ${card.title} feature coming soon!`);
  };

  const handleBackdropClick = (setter) => (e) => {
    if (e.target.classList.contains('modal-overlay')) setter(false);
  };

  // Event Modal Content
  const getEventModalContent = () => {
    switch(showEventModal) {
      case 'techSummit':
        return {
          title: "🎯 Tech Career Summit 2026",
          color: "#667eea",
          eventName: "Tech Career Summit 2026",
          extraFields: (
            <select name="experience" value={eventRegistration.experience} onChange={handleEventChange} required>
              <option value="">Select Experience Level</option>
              <option>Fresher (0-1 years)</option>
              <option>Mid Level (2-5 years)</option>
              <option>Senior (5+ years)</option>
            </select>
          )
        };
      case 'remoteWeek':
        return {
          title: "🌍 Global Remote Hiring Week",
          color: "#4facfe",
          eventName: "Global Remote Hiring Week",
          extraFields: (
            <>
              <select name="experience" value={eventRegistration.experience} onChange={handleEventChange} required>
                <option value="">Select Experience Level</option>
                <option>Fresher</option>
                <option>1-3 Years</option>
                <option>3-5 Years</option>
                <option>5+ Years</option>
              </select>
              <select name="domain" value={eventRegistration.domain} onChange={handleEventChange} required>
                <option value="">Select Your Domain</option>
                <option>Software Development</option>
                <option>Data Science/AI</option>
                <option>Marketing</option>
                <option>Sales</option>
                <option>Customer Support</option>
                <option>HR/Admin</option>
              </select>
            </>
          )
        };
      case 'internship':
        return {
          title: "🎓 Summer Internship Drive 2026",
          color: "#43e97b",
          eventName: "Summer Internship Drive 2026",
          extraFields: (
            <>
              <select name="course" value={eventRegistration.course} onChange={handleEventChange} required>
                <option value="">Select Course</option>
                <option>B.Tech/B.E</option>
                <option>BCA/MCA</option>
                <option>BBA/MBA</option>
                <option>B.Com/M.Com</option>
                <option>BA/MA</option>
              </select>
              <select name="year" value={eventRegistration.year} onChange={handleEventChange} required>
                <option value="">Select Year of Study</option>
                <option>1st Year</option>
                <option>2nd Year</option>
                <option>3rd Year</option>
                <option>4th Year</option>
                <option>Recently Graduated</option>
              </select>
              <input type="text" name="resume" placeholder="Resume/CV Link (Google Drive/LinkedIn)" onChange={handleEventChange} />
            </>
          )
        };
      default: return null;
    }
  };

  const eventModalContent = getEventModalContent();

  // Render Jobs Page if a category is selected
  if (showJobsPage && currentCategory) {
    const allJobsData = getAllJobsData();
    let jobs = allJobsData[currentCategory] || [];
    const pageTitle = getPageTitle();

    // Filter jobs based on search term
    if (searchTerm) {
      jobs = jobs.filter(job => 
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    return (
      <>
        {/* Navbar */}
        <nav className="navbar-enhanced">
          <div className="nav-left">
            <div className="logo-enhanced" onClick={handleBackToHome} style={{ cursor: 'pointer' }}>
              Krishna<span>.com</span>
            </div>
            <div className="nav-links-enhanced">
              <a href="#" onClick={(e) => { e.preventDefault(); handleBackToHome(); }}>Home</a>
              <a href="#" onClick={(e) => { e.preventDefault(); }}>Jobs</a>
              <a href="#">Companies</a>
              <a href="#">Blogs</a>
            </div>
          </div>
          <div className="nav-right">
            <button className="btn-outline" onClick={() => setShowRegisterModal(true)}>Register</button>
            <button className="btn-primary" onClick={() => setShowLoginModal(true)}>Login</button>
            <button className="btn-recruiter">For Recruiters ↗</button>
          </div>
        </nav>

        {/* Breadcrumb */}
        {/* <div className="breadcrumb">
          <span onClick={handleBackToHome}>Home</span> &gt; 
          <span className="active">{pageTitle}</span>
        </div> */}

        {/* Breadcrumb with dynamic category attribute */}
<div className="breadcrumb" data-category={currentCategory}>
  <span onClick={handleBackToHome}>Home</span> &gt; 
  <span className="active">{pageTitle}</span>
</div>

        {/* Main Content */}
        <div className="operations-page">
          {/* Search Area */}
          <div className="top-search-bar">
            <input
              type="text"
              placeholder={`Search ${pageTitle} jobs by title, company, or skills...`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="filter-section">
              <button>All Jobs</button>
              <button>Recent</button>
              <button>Location</button>
              <button>Experience</button>
              <button>Salary</button>
            </div>
          </div>

          {/* Main Layout */}
          <div className="operations-container">
            {/* Left Side - Jobs List */}
            <div className="jobs-section">
              <h2 className="job-count">
                {jobs.length} {pageTitle} Jobs Found
              </h2>

              {jobs.length === 0 ? (
                <div className="no-jobs">
                  <h3>🔍 No jobs found</h3>
                  <p>Try adjusting your search or check back later for new opportunities.</p>
                </div>
              ) : (
                jobs.map((job) => (
                  <div className="job-card" key={job.id}>
                    <div className="job-header">
                      <div className="company-logo">{job.logo}</div>
                      <div className="job-header-info">
                        <h3>{job.title}</h3>
                        <h4>{job.company}</h4>
                      </div>
                      <p className="posted">📅 posted {job.posted}</p>
                    </div>
                    <div className="job-meta">
                      <span>💼 {job.experience}</span>
                      <span>📍 {job.location}</span>
                      <span>💰 {job.salary}</span>
                    </div>
                    <div className="skills">
                      {job.skills.map((skill, index) => (
                        <span key={index}>{skill}</span>
                      ))}
                    </div>
                    <div className="job-footer">
                      <button className="active-btn">🔥 ACTIVELY HIRING</button>
                      <button className="apply-btn" onClick={() => showToast(`✓ Applied to ${job.title} at ${job.company}!`)}>
                        Apply Now →
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Right Side - Sidebar */}
            <div className="sidebar">
              <div className="sidebar-card">
                <h3>🏆 Top Companies are Hiring</h3>
                <p>For Multiple Roles in {pageTitle}</p>
                <button onClick={() => setShowRegisterModal(true)}>Register / Sign In</button>
              </div>
              <div className="salary-card">
                <h3>📊 Salary Benchmarking</h3>
                <p>Compare your package against market data for {pageTitle} roles.</p>
                <button>Check Benchmarks →</button>
              </div>
              <div className="salary-card" style={{ marginTop: '20px', backgroundColor: '#2c3e50' }}>
                <h3>🔔 Get Job Alerts</h3>
                <p>Get notified about new {pageTitle} jobs</p>
                <button>Subscribe →</button>
              </div>
              <div className="sidebar-card">
                <h3>💡 Pro Tip</h3>
                <p>Update your profile to get matched with top {pageTitle} jobs</p>
                <button>Update Profile</button>
              </div>
            </div>
          </div>
        </div>

        {/* Toast Notification */}
        {showSuccessToast && (
          <div className="toast-notification">
            {toastMessage}
          </div>
        )}

        {/* Register Modal */}
        {showRegisterModal && (
          <div className="modal-overlay" onClick={handleBackdropClick(setShowRegisterModal)}>
            <div className="modal-content">
              <button className="modal-close" onClick={() => setShowRegisterModal(false)}>×</button>
              <h2>Create Account</h2>
              <form onSubmit={handleRegisterSubmit}>
                <input type="text" name="name" placeholder="Full Name" value={registerData.name} onChange={handleRegisterChange} required />
                <input type="email" name="email" placeholder="Email" value={registerData.email} onChange={handleRegisterChange} required />
                <input type="password" name="password" placeholder="Password" value={registerData.password} onChange={handleRegisterChange} required />
                <select name="userType" value={registerData.userType} onChange={handleRegisterChange}>
                  <option value="jobseeker">Job Seeker</option>
                  <option value="recruiter">Recruiter</option>
                  <option value="other">Franchise</option>
                </select>
                <button type="submit" className="submit-btn">Register</button>
              </form>
              <p className="modal-footer">
                Already have an account? <span onClick={() => { setShowRegisterModal(false); setShowLoginModal(true); }}>Login</span>
              </p>
            </div>
          </div>
        )}

        {/* Login Modal */}
        {showLoginModal && (
          <div className="modal-overlay" onClick={handleBackdropClick(setShowLoginModal)}>
            <div className="modal-content">
              <button className="modal-close" onClick={() => setShowLoginModal(false)}>×</button>
              <h2>Welcome Back</h2>
              <form onSubmit={handleLoginSubmit}>
                <input type="email" name="email" placeholder="Email" value={loginData.email} onChange={handleLoginChange} required />
                <input type="password" name="password" placeholder="Password" value={loginData.password} onChange={handleLoginChange} required />
                <button type="submit" className="submit-btn">Login</button>
              </form>
              <p className="modal-footer">
                Don't have an account? <span onClick={() => { setShowLoginModal(false); setShowRegisterModal(true); }}>Register</span>
              </p>
            </div>
          </div>
        )}
      </>
    );
  }

  // Render Main Home Page
  return (
    <div className="job-portal-enhanced">
      {/* Navbar */}
      <nav className="navbar-enhanced">
        <div className="nav-left">
          <div className="logo-enhanced" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>Krishna<span>.com</span></div>
          <div className="nav-links-enhanced">
            <a href="#" onClick={(e) => { e.preventDefault(); navigate('/'); }}>Home</a>
            <a href="#" onClick={(e) => { e.preventDefault(); }}>Jobs</a>
            <a href="#" onClick={(e) => { e.preventDefault(); }}>Companies</a>
            <a href="#" onClick={(e) => { e.preventDefault(); }}>Blogs</a>
          </div>
        </div>
        <div className="nav-right">
          <button className="btn-outline" onClick={() => setShowRegisterModal(true)}>Register</button>
          <button className="btn-primary" onClick={() => setShowLoginModal(true)}>Login</button>
          <button className="btn-recruiter" onClick={() => setShowPostJobModal(true)}>For Recruiters ↗</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-enhanced">
        <div className="hero-badge">🚀 50,000+ Jobs Added This Week</div>
        <h1>Search Your <span className="gradient-text">Dream Job</span></h1>
        <p>Discover 5 lakh+ job opportunities from top companies</p>
        
        {/* Search Box */}
        <div className="search-box-enhanced">
          <select>
            <option>Select Job Role</option>
            <option>React Developer</option>
            <option>.NET Developer</option>
            <option>Angular Developer</option>
            <option>Full Stack Developer</option>
            <option>Java Developer</option>
            <option>Node.js Developer</option>
            <option>PHP Developer</option>
            <option>Python Developer</option>
            <option>UI/UX Designer</option>
            <option>SQL Developer</option>
          </select>
          <select>
            <option>Select Skills</option>
            <option>React.js</option>
            <option>Angular</option>
            <option>.NET Core</option>
            <option>JavaScript</option>
            <option>Node.js</option>
            <option>SQL</option>
            <option>MongoDB</option>
            <option>PHP</option>
            <option>Python</option>
            <option>Azure</option>
          </select>
          <select>
            <option>Select City</option>
            <option>Surat</option>
            <option>Mumbai</option>
            <option>Bangalore</option>
            <option>Pune</option>
            <option>Hyderabad</option>
            <option>Ahmedabad</option>
            <option>Chennai</option>
            <option>Delhi</option>
          </select>
          <select>
            <option>Select Experience</option>
            <option>Fresher</option>
            <option>1-3 Years</option>
            <option>3-5 Years</option>
            <option>5+ Years</option>
          </select>
          <button>COOL PLACES TO WORK 🔍 Search Jobs →</button>
        </div>
      </section>

      {/* Explore Jobs Section */}
      <section className="explore-enhanced">
        <div className="section-title">
          <span></span>
          <h2>EXPLORE JOBS</h2>
          <span></span>
        </div>
        <div className="tabs-enhanced">
          <button className={activeTab === 'category' ? 'active' : ''} onClick={() => setActiveTab('category')}>By Category</button>
          <button className={activeTab === 'workmode' ? 'active' : ''} onClick={() => setActiveTab('workmode')}>By Work Mode</button>
        </div>

        {activeTab === 'category' && (
          <div className="category-grid">
            {categoryJobs.map((job, idx) => (
              <div 
                className="category-card" 
                key={idx} 
                style={{ cursor: 'pointer' }}
                onClick={() => job.onClick && job.onClick()}
              >
                <div className="card-icon">{job.icon}</div>
                <h3>{job.title}</h3>
                <p>{job.jobs.toLocaleString()}+ jobs</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'workmode' && (
          <div className="workmode-grid">
            {workModeJobs.map((job, idx) => (
              <div className="workmode-card" key={idx} style={{ borderBottomColor: job.color }}>
                <div className="workmode-icon" style={{ background: job.color }}>{job.icon}</div>
                <h3>{job.title}</h3>
                <p>{job.description}</p>
                <div className="workmode-footer">
                  <span>📍 {job.jobs.toLocaleString()}+ jobs</span>
                  <button>View Jobs →</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Post a Job & Events Section */}
      <section className="events-enhanced">
        <div className="section-header">
          <h2>📢 Post a Job & Upcoming Events</h2>
          <p>Share opportunities or join exciting career events near you</p>
        </div>
        <div className="events-grid">
          {eventCards.map((card) => (
            <div className="event-card" key={card.id} data-type={card.type} onClick={() => handleCardClick(card)}>
              <img src={card.image} alt={card.title} loading="lazy" />
              <div className="event-content">
                <span className="event-badge">{card.badge}</span>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <div className="event-meta">{card.meta}</div>
                <button className="event-btn">{card.buttonText}</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="cta-enhanced">
        <div className="cta-card">
          <div className="cta-text">
            <h3>Find Your Perfect Career Match</h3>
            <p>Build a professional profile, explore jobs from top companies, and get hired faster with AI-powered recommendations.</p>
            <button>Explore Jobs →</button>
          </div>
          <div className="cta-circle"><div className="emoji">👨‍💼</div></div>
        </div>
      </section>

      {/* App Download Section */}
      <section className="app-enhanced">
        <div className="app-card">
          <div className="app-info">
            <div className="app-logo">Krishna<span>.com</span></div>
            <h2>Get the Krishna App Now!</h2>
            <p>Access lakhs of jobs and apply instantly from anywhere.</p>
            <div className="app-stats">
              <div><h3>4.8 ★</h3><span>App Rating</span></div>
              <div className="divider"></div>
              <div><h3>10M+</h3><span>Downloads</span></div>
              <div className="store-buttons">📱 ▶️</div>
            </div>
          </div>
          <div className="app-qr">
            <div className="scan-tag">SCAN & DOWNLOAD</div>
            <div className="qr-box"><img src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://krishna-job-portal.com" alt="QR" /></div>
          </div>
        </div>
      </section>

      {/* Expert Edge Reels Section */}
      <section className="expert-reels-section">
        <div className="expert-header">
          <div>
            <h2>Finconcept Edge Reels</h2>
            <div className="expert-tabs">
              <button className="active-tab">Sales and Marketing</button>
              <button>IT & Software</button>
              <button>BFSI</button>
            </div>
          </div>
          <div className="expert-arrows">
            <button>←</button>
            <button>→</button>
          </div>
        </div>
        <div className="expert-cards">
          <div className="expert-card">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="expert" />
            <div className="expert-content">
              <h3>Leadership in Sales - From Ground level...</h3>
              <p>Vice President, Sales, Finconcept Pvt Ltd</p>
            </div>
            <button className="play-btn">▶</button>
          </div>
          <div className="expert-card">
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="expert" />
            <div className="expert-content">
              <h3>Sales Leadership 101 - What it takes to...</h3>
              <p>Vice President Sales · Finconcept Life</p>
            </div>
            <button className="play-btn">▶</button>
          </div>
        </div>
        <div className="view-all-wrapper">
          <button className="view-all-btn">View All</button>
        </div>
      </section>

      {/* Cool Places To Work Section */}
      <section className="cool-work-section">
        <div className="cool-title-wrapper">
          <div className="line"></div>
          <div className="cool-title">COOL PLACES TO WORK</div>
          <div className="line"></div>
        </div>
        <div className="company-marquee">
          <div className="company-track">
            <div className="company-card"><img src="./lti.png" alt="LTIMindtree" /></div>
            <div className="company-card"><img src="./nitdata.png" alt="NTT Data" /></div>
            <div className="company-card"><img src="https://upload.wikimedia.org/wikipedia/commons/9/9d/Capgemini_201x_logo.svg" alt="Capgemini" /></div>
            <div className="company-card"><img src="https://upload.wikimedia.org/wikipedia/commons/7/74/Reliance_Nippon_Life_Insurance_logo.png" alt="Reliance" /></div>
            <div className="company-card"><img src="jio.png" alt="Jio" /></div>
            <div className="company-card"><img src="https://upload.wikimedia.org/wikipedia/commons/5/56/Hewlett_Packard_Enterprise_logo.svg" alt="HPE" /></div>
            <div className="company-card"><img src="https://upload.wikimedia.org/wikipedia/commons/3/3b/LTIMindtree_logo.svg" alt="LTIMindtree" /></div>
            <div className="company-card"><img src="https://upload.wikimedia.org/wikipedia/commons/5/55/NTT_Data_logo.svg" alt="NTT Data" /></div>
          </div>
          <div className="work-illustration">
            <img src={workImg} alt="work illustration" />
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="companies-enhanced">
        <p className="companies-title">Trusted by 10,000+ companies</p>
        <div className="companies-grid">
          {companies.map((company, idx) => <div key={idx}>{company}</div>)}
        </div>
      </section>

      {/* Toast Notification */}
      {showSuccessToast && <div className="toast-notification">{toastMessage}</div>}

      {/* Modals */}
      {showRegisterModal && (
        <div className="modal-overlay" onClick={handleBackdropClick(setShowRegisterModal)}>
          <div className="modal-content">
            <button className="modal-close" onClick={() => setShowRegisterModal(false)}>×</button>
            <h2>Create Account</h2>
            <form onSubmit={handleRegisterSubmit}>
              <input type="text" name="name" placeholder="Full Name" value={registerData.name} onChange={handleRegisterChange} required />
              <input type="email" name="email" placeholder="Email" value={registerData.email} onChange={handleRegisterChange} required />
              <input type="password" name="password" placeholder="Password" value={registerData.password} onChange={handleRegisterChange} required />
              <select name="userType" value={registerData.userType} onChange={handleRegisterChange}>
                <option value="jobseeker">Job Seeker</option>
                <option value="recruiter">Recruiter</option>
                <option value="other">Franchise</option>
              </select>
              <button type="submit" className="submit-btn">Register</button>
            </form>
            <p className="modal-footer">Already have an account? <span onClick={() => { setShowRegisterModal(false); setShowLoginModal(true); }}>Login</span></p>
          </div>
        </div>
      )}

      {showLoginModal && (
        <div className="modal-overlay" onClick={handleBackdropClick(setShowLoginModal)}>
          <div className="modal-content">
            <button className="modal-close" onClick={() => setShowLoginModal(false)}>×</button>
            <h2>Welcome Back</h2>
            <form onSubmit={handleLoginSubmit}>
              <input type="email" name="email" placeholder="Email" value={loginData.email} onChange={handleLoginChange} required />
              <input type="password" name="password" placeholder="Password" value={loginData.password} onChange={handleLoginChange} required />
              <button type="submit" className="submit-btn">Login</button>
            </form>
            <p className="modal-footer">Don't have an account? <span onClick={() => { setShowLoginModal(false); setShowRegisterModal(true); }}>Register</span></p>
          </div>
        </div>
      )}

      {showPostJobModal && (
        <div className="modal-overlay" onClick={handleBackdropClick(setShowPostJobModal)}>
          <div className="modal-content large">
            <button className="modal-close" onClick={() => setShowPostJobModal(false)}>×</button>
            <h2>📢 Post a New Job</h2>
            <form onSubmit={handlePostJobSubmit}>
              <div className="form-row">
                <input type="text" name="title" placeholder="Job Title*" value={jobData.title} onChange={handleJobChange} required />
                <input type="text" name="company" placeholder="Company Name*" value={jobData.company} onChange={handleJobChange} required />
              </div>
              <div className="form-row">
                <input type="text" name="location" placeholder="Location" value={jobData.location} onChange={handleJobChange} required />
                <input type="text" name="salary" placeholder="Salary Range" value={jobData.salary} onChange={handleJobChange} required />
              </div>
              <div className="form-row">
                <select name="jobType" value={jobData.jobType} onChange={handleJobChange}>
                  <option>Full-time</option><option>Part-time</option><option>Contract</option><option>Internship</option>
                </select>
                <select name="experience" value={jobData.experience} onChange={handleJobChange}>
                  <option>Fresher</option><option>1-2 Years</option><option>3-5 Years</option><option>5+ Years</option>
                </select>
              </div>
              <textarea name="description" placeholder="Job Description" rows="3" value={jobData.description} onChange={handleJobChange} required></textarea>
              <input type="text" name="skills" placeholder="Required Skills (comma separated)" value={jobData.skills} onChange={handleJobChange} required />
              <input type="email" name="contactEmail" placeholder="Contact Email for Applications" value={jobData.contactEmail} onChange={handleJobChange} required />
              <button type="submit" className="submit-btn">Post Job →</button>
            </form>
          </div>
        </div>
      )}

      {showEventModal && eventModalContent && (
        <div className="modal-overlay" onClick={handleBackdropClick(setShowEventModal)}>
          <div className="modal-content" style={{ borderTop: `5px solid ${eventModalContent.color}` }}>
            <button className="modal-close" onClick={() => setShowEventModal(null)}>×</button>
            <h2>{eventModalContent.title}</h2>
            <form onSubmit={(e) => handleEventSubmit(e, eventModalContent.eventName)}>
              <input type="text" name="name" placeholder="Full Name*" value={eventRegistration.name} onChange={handleEventChange} required />
              <input type="email" name="email" placeholder="Email Address*" value={eventRegistration.email} onChange={handleEventChange} required />
              <input type="tel" name="phone" placeholder="Phone Number*" value={eventRegistration.phone} onChange={handleEventChange} required />
              {eventModalContent.extraFields}
              <button type="submit" className="submit-btn">Register Now →</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}