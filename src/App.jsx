// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import JobPortal from "./pages/JobPortal";
import OperationsJobsPage from "./pages/OperationsJobsPage";
import ServicePages from "./pages/ServicePages";
import BlogPages from "./pages/BlogPages";
import ProfileBooster from "./pages/ProfileBooster";
import Recruiterment from "./pages/RecruiterPage";
import JobAlerts from "./pages/JobAlerts";
import Loader from "./components/Loader"; // 

function App() {
  const [showLoader, setShowLoader] = useState(true);
  const [loaderCompleted, setLoaderCompleted] = useState(false);

  const handleLoaderExit = () => {
    setLoaderCompleted(true);
    setShowLoader(false);
  };

  // Show loader first
  if (showLoader) {
    return <Loader onExitComplete={handleLoaderExit} minDisplayTime={2500} />;
  }

  return (
    <BrowserRouter>
      <Routes>
        {/* home route */}
        <Route path="/" element={<JobPortal />} />
        {/* Ye route match karega /jobs/operations, /jobs/marketing, etc. */}
        <Route path="/jobs/:category" element={<OperationsJobsPage />} />
        
        {/* Service Routes */}
        <Route path="/services/applications-highlighter" element={<ServicePages />} />
        <Route path="/services/resume-writing" element={<ServicePages />} />
        <Route path="/services/resume-checking" element={<ServicePages />} />
        <Route path="/services/interview-preparation" element={<ServicePages />} />
        <Route path="/services/career-counseling" element={<ServicePages />} />
        <Route path="/services/profile-booster" element={<ProfileBooster />} />

        <Route path="/recruiterment" element={<Recruiterment />} />
        <Route path="/job-alerts" element={<JobAlerts />} />

        {/* Blog Routes */}
        <Route path="/blog/:blog" element={<BlogPages />} />
        
        {/* Optional: 404 route */}
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;