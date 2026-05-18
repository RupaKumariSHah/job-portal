import "../styles/ProfileBooster.css";
import {
  Bell,
  ShoppingCart,
  Smartphone,
  BriefcaseBusiness,
  Phone,
} from "lucide-react";

function ProfileBooster() {
  return (
    <div className="profile-booster-page">

      {/* TOPBAR */}
      <div className="pb-topbar">

        <div className="pb-topbar-container">

          <div className="pb-topbar-right">

            <div className="pb-top-item">
              <Smartphone size={17} />
              <span>Download App</span>
            </div>

            <div className="pb-top-item">
              <BriefcaseBusiness size={17} />
              <span>For Employers</span>
            </div>

            <div className="pb-top-item">
              <Phone size={17} />
              <span>Help</span>
            </div>

          </div>

        </div>

      </div>

      {/* HEADER */}
      <header className="pb-header">

        <div className="pb-header-container">

          {/* LOGO */}
          <div className="pb-logo-section">

            <div className="pb-logo-circle">
              <span>K</span>
            </div>

            <div>
              <h2 className="pb-logo-text">Krishna</h2>
              <p className="pb-logo-subtext">JOB PORTAL</p>
            </div>

          </div>

          {/* RIGHT */}
          <div className="pb-header-right">

            <button className="pb-login-btn">
              Login
            </button>

            <button className="pb-register-btn">
              Register
            </button>

            <Bell className="pb-icon" size={22} />

            <ShoppingCart className="pb-icon" size={22} />

          </div>

        </div>

        {/* NAVBAR */}
        <nav className="pb-navbar">

          <a href="/">HOME</a>

          <a href="/">JOBS</a>

          <a href="/">JOB SEEKING ASSISTANCE</a>

          <a href="/">COURSES</a>

          <a href="/">CAREER GUIDANCE</a>

        </nav>

      </header>

      {/* HERO */}
      <section className="pb-hero-section">

        {/* LEFT */}
        <div className="pb-left">

          <h1>Profile Booster</h1>

          <div className="pb-rating">

            <span className="pb-star">★</span>

            <span>4</span>

            <span>(Bought by 405 people)</span>

          </div>

          <p>
            Your resume is shared with 1000+ active consultants via email.
            Increases reach beyond regular job portals. Get access to
            exclusive and undisclosed job opportunities.
          </p>

        </div>

        {/* RIGHT */}
        <div className="pb-right">

          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            alt="profile booster"
          />

        </div>

      </section>

      {/* WHY SECTION */}
      <section className="pb-why-section">

        <div className="pb-why-container">

          <h2>Why do you need Profile Booster ?</h2>

          <div className="pb-table-wrapper">

            <table className="pb-comparison-table">

              <thead>

                <tr>
                  <th></th>
                  <th>Without</th>
                  <th>With</th>
                </tr>

              </thead>

              <tbody>

                <tr>
                  <td>Highlight your application to recruiter</td>
                  <td className="pb-cross">✖</td>
                  <td className="pb-check">✔</td>
                </tr>

                <tr>
                  <td>Get Upto 10X attention from recruiters</td>
                  <td className="pb-cross">✖</td>
                  <td className="pb-check">✔</td>
                </tr>

                <tr>
                  <td>Profile is tagged as Priority applicant</td>
                  <td className="pb-cross">✖</td>
                  <td className="pb-check">✔</td>
                </tr>

                <tr>
                  <td>Increase your chance of shortlisting</td>
                  <td className="pb-cross">✖</td>
                  <td className="pb-check">✔</td>
                </tr>

                <tr>
                  <td>Active support from our customer service team</td>
                  <td className="pb-cross">✖</td>
                  <td className="pb-check">✔</td>
                </tr>

                <tr>
                  <td>Guaranteed job</td>
                  <td className="pb-cross">✖</td>
                  <td className="pb-cross">✖</td>
                </tr>

              </tbody>

            </table>

          </div>

        </div>

      </section>
      {/* FREE JOB ALERT SECTION */}
<section className="free-job-alert-section">
  <div className="free-job-alert-container">

    {/* LEFT SIDE FORM */}
    <div className="free-job-alert-left">

      <h2>Create a Free Job Alert</h2>

      <p className="free-job-alert-subtitle">
        You can create upto 5 alerts.
      </p>

      <div className="free-job-alert-card">

        <p className="free-job-alert-text">
          Let us know what kind of job you are looking for and we'll send them to your inbox.
        </p>

        <input type="text" placeholder="Keywords" />
        <input type="text" placeholder="Salary" />
        <input type="text" placeholder="Experience" />
        <input type="text" placeholder="Location" />
        <input type="text" placeholder="Department" />
        <input type="text" placeholder="Industry" />

        <button>Create Job Alert</button>

      </div>
    </div>

    {/* RIGHT SIDE FAQ */}
    <div className="free-job-alert-right">

      <div className="faq-card">

        <h3>Free Job Alerts FAQs</h3>

        <div className="faq-item active">
          <div className="faq-question">
            Why set up a free job alert?
          </div>

          <div className="faq-answer">
            You will save time and boost your job search with our free job alerts.
            You will receive personalized notifications for roles that match your
            skills and experience.
          </div>
        </div>

        <div className="faq-item">
          <div className="faq-question">
            How do I get a job alert on my email ID?
          </div>
        </div>

        <div className="faq-item">
          <div className="faq-question">
            How to get the best out of a free job alert?
          </div>
        </div>

        <div className="faq-item">
          <div className="faq-question">
            Who can see my information provided to set up a job alert?
          </div>
        </div>

      </div>
    </div>

  </div>
</section>

    </div>
  );
}

export default ProfileBooster;