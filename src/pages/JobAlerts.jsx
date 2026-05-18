import React from "react";
import "../styles/JobAlerts.css";

const JobAlerts = () => {
  return (
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
              Let us know what kind of job you are looking for and we'll send
              them to your inbox.
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
                You will save time and boost your job search with our free job
                alerts. You will receive personalized notifications for roles
                that match your skills and experience.
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
  );
};

export default JobAlerts;