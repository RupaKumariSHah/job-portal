import "../styles/RecruiterPage.css";
import {
  Phone,
  User,
  MessageCircle,
  X,
} from "lucide-react";

function RecruiterPage() {
  return (
    <div className="recruiter-page">

      {/* TOP AD BANNER */}
      <div className="rp-top-banner">

        <div className="rp-banner-content">

          <div className="rp-banner-left">
            <h3>Reduce Your Time To Hire</h3>

            <p>
              with our new
              <span> ChatGPT Powered Search</span>
            </p>
          </div>

          <button className="rp-close-btn">
            <X size={20} />
          </button>

        </div>

      </div>

      {/* HEADER */}
      <header className="rp-header">

        {/* LOGO */}
        <div className="rp-logo-section">

          <div className="rp-logo-circle">
            <span>K</span>
          </div>

          <div>
            <h2 className="rp-logo-text">Krishna</h2>
          </div>

        </div>

        {/* NAV LINKS */}
        <nav className="rp-navbar">

          <a href="/">FOR STARTUPS & SMEs</a>

          <a href="/">JOB SEEKER?</a>

          <a href="/">FUTURE OF WORK</a>

        </nav>

        {/* RIGHT */}
        <div className="rp-header-right">

          <button className="rp-login-btn">

            <User size={18} />

            Recruiter Login

          </button>

          <div className="rp-contact">

            <Phone size={18} />

            <div>
              <h4>8010062222</h4>
              <p>recruiterservices@Krishna.com</p>
            </div>

          </div>

        </div>

      </header>

      {/* HERO SECTION */}
      <section className="rp-hero-section">

        {/* LEFT */}
        <div className="rp-left">

          <h1>
            Hire the
            <span> Right Talent </span>
            with
            <span> Right Skills</span>
          </h1>

          <p>
            Over <strong>50M+</strong> Qualified Candidates
          </p>

          {/* BUTTONS */}
          <div className="rp-buttons">

            <button className="rp-yellow-btn">
              Startups & SME
            </button>

            <button className="rp-purple-btn">
              Post a Job for Free*
            </button>

            <button className="rp-outline-btn">
              Conduct Hackathon
            </button>

          </div>

        </div>

        {/* RIGHT FORM */}
        <div className="rp-right">

          <div className="rp-form-card">

            <h2>Request Free Demo</h2>

            <input type="text" placeholder="Name" />

            <input
              type="email"
              placeholder="Business Email"
            />

            <input type="text" placeholder="Mobile" />

            {/* RADIO */}
            <div className="rp-radio-group">

              <label>
                <input type="radio" name="type" checked />
                Company
              </label>

              <label>
                <input type="radio" name="type" />
                Consultant
              </label>

              <label>
                <input type="radio" name="type" />
                MSME
              </label>

            </div>

            <select>
              <option>Select Location---</option>
            </select>

            <button className="rp-demo-btn">
              Request Demo
            </button>

          </div>

        </div>

      </section>

      {/* COOKIE BAR */}
      <div className="rp-cookie-bar">

        <p>
          We use cookies to improve your experience.
          By continuing to browse the site,
          you agree to our
          <span> Privacy Policy </span>
          &
          <span> Cookie Policy</span>
        </p>

        <button>
          Got it
        </button>

      </div>

      {/* CHAT BUTTON */}
      <button className="rp-chat-btn">

        <MessageCircle size={28} />

      </button>

      {/* =========================
   TOP COMPANIES SECTION
========================= */}

<section className="rp-companies-section">

  <div className="rp-companies-container">

    <h2>
      Top Companies Hiring on Krishna Infotech
    </h2>

    {/* MARQUEE */}
    <div className="rp-marquee">

      <div className="rp-marquee-track">

        {/* FIRST SET */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/8d/HCL_Technologies_logo.svg"
          alt="HCL"
        />

        <img
          src="https://1000logos.net/wp-content/uploads/2021/05/HGS-logo.png"
          alt="HGS"
        />

        <img
          src="https://www.peopleworks.in/wp-content/uploads/2022/05/logo.svg"
          alt="People Works"
        />

        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/93/Quess_Corp_logo.png"
          alt="Quess"
        />

        <img
          src="https://www.thyrocare.com/images/logo.png"
          alt="Thyrocare"
        />

        <img
          src="https://www.centreforfundraising.org.uk/wp-content/uploads/2018/07/cff-logo.png"
          alt="Centre For Fundraising"
        />

        <img
          src="https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg"
          alt="American Express"
        />

        <img
          src="https://upload.wikimedia.org/wikipedia/commons/f/ff/General_Electric_logo.svg"
          alt="GE"
        />

        {/* DUPLICATE FOR SMOOTH LOOP */}

        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/8d/HCL_Technologies_logo.svg"
          alt="HCL"
        />

        <img
          src="https://1000logos.net/wp-content/uploads/2021/05/HGS-logo.png"
          alt="HGS"
        />

        <img
          src="https://www.peopleworks.in/wp-content/uploads/2022/05/logo.svg"
          alt="People Works"
        />

        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/93/Quess_Corp_logo.png"
          alt="Quess"
        />

        <img
          src="https://www.thyrocare.com/images/logo.png"
          alt="Thyrocare"
        />

        <img
          src="https://www.centreforfundraising.org.uk/wp-content/uploads/2018/07/cff-logo.png"
          alt="Centre For Fundraising"
        />

        <img
          src="https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg"
          alt="American Express"
        />

        <img
          src="https://upload.wikimedia.org/wikipedia/commons/f/ff/General_Electric_logo.svg"
          alt="GE"
        />

      </div>

    </div>

  </div>

</section>

{/* =========================
   OUR SERVICES SECTION
========================= */}

<section className="rp-services-section">

  <div className="rp-services-container">

    <h2>Our Services</h2>

    <div className="rp-services-grid">

      {/* CARD 1 */}

      <div className="rp-service-card">

        <div className="rp-service-icon yellow">
          📄
        </div>

        <h3>Job Posting</h3>

        <p>
          Post jobs and hire top talent faster
          with AI-powered recruitment tools.
        </p>

      </div>

      {/* CARD 2 */}

      <div className="rp-service-card">

        <div className="rp-service-icon green">
          ⚡
        </div>

        <h3>Smart Search</h3>

        <p>
          Search millions of qualified candidates
          with advanced AI-based filters.
        </p>

      </div>

      {/* CARD 3 */}

      <div className="rp-service-card">

        <div className="rp-service-icon purple">
          ⭐
        </div>

        <h3>Assisted Hiring</h3>

        <p>
          Dedicated hiring experts help
          shortlist and hire candidates faster.
        </p>

      </div>

    </div>

    {/* DEMO BUTTON */}

    <div className="rp-demo-center">

      <button>
        Request Free Demo
      </button>

    </div>

  </div>

</section>

<section className="rp-insights-section">
      <div className="rp-insights-container">
        
        {/* Main Heading */}
        <h1 className="rp-insights-title">Mint + krishna Talent Insights</h1>

        {/* Dashboard Grid Content */}
        <div className="rp-insights-grid">
          
          {/* Left Side: Main Feature Banner */}
          <div className="rp-insights-banner">
            <div className="rp-banner-content">
              <h2>2025’s Job market isn’t slowing, it’s getting selective!</h2>
              <a href="#download" className="rp-banner-link">
                Download the Talent Insights Report Q1'25
              </a>
            </div>
            {/* Visual Graphic Representation */}
            <div className="rp-banner-graphic">
              <div className="rp-graphic-magnifier">🔍</div>
              <div className="rp-graphic-people">
                <span>👤</span><span>👤</span><span>👤</span><span>👤</span>
              </div>
            </div>
          </div>

          {/* Right Side: Sidebar Insights List */}
          <div className="rp-insights-sidebar">
            
            <div className="rp-sidebar-header">
              <h3>Hiring is Evolving!</h3>
              <p>Are you upskilling or falling behind?</p>
              <span className="rp-sidebar-subtext">Download the Talent Insights Report Q4'25</span>
            </div>

            {/* Sidebar Item 1 */}
            <div className="rp-sidebar-item active">
              <div className="rp-item-details">
                <h4>Mint + krishna Talent Insights Q4 - 2025</h4>
                <div className="rp-item-meta">
                  <span>👁️ 523</span>
                </div>
              </div>
              <button className="rp-download-btn" aria-label="Download">⬇️</button>
            </div>

            {/* Sidebar Item 2 */}
            <div className="rp-sidebar-item">
              <div className="rp-item-details">
                <h4>Mint + Shine Talent Insights Q3 - 2024</h4>
                <div className="rp-item-meta">
                  <span>👁️ 456</span>
                </div>
              </div>
              <button className="rp-download-btn" aria-label="Download">⬇️</button>
            </div>

            {/* Sidebar Item 3 */}
            <div className="rp-sidebar-item dark">
              <div className="rp-item-details">
                <h4>Hiring Trends 2024: What's Shaping the Future of Talent Acquisition</h4>
                <p className="rp-item-subtext">Find out in <span className="highlight">Talent Insights Report Q2'24</span></p>
              </div>
            </div>

          </div>
        </div>

        {/* Request Demo Button Action */}
        <div className="rp-insights-action">
          <button className="rp-orange-btn">Request Free Demo</button>
        </div>

      </div>
    </section>

    </div>
  );
}

export default RecruiterPage;