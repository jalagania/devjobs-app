import "./JobApplyPage.css";
import { useGlobalContext } from "../context";

function JobApplyPage() {
  const { appData, applyJobID, toHomePage } = useGlobalContext();
  const job = appData.filter((job) => job.id === applyJobID)[0];

  return (
    <div>
      <div className="job-apply-container">
        <div className="company-info-box">
          <div
            className="company-logo-box"
            style={{ backgroundColor: job.logoBackground }}
          >
            <img src={job.logo} alt={job.company} className="company-logo" />
          </div>
          <div className="company-name-box">
            <p className="company-name">{job.company}</p>
            <p className="company-website">{job.company}.com</p>
          </div>
          <button className="btn-company-website">Company Site</button>
        </div>
        <div className="job-info-box">
          <div className="job-apply-box">
            <div className="job-details-box">
              <div className="job-details-wrapper">
                <p className="job-posted">{job.postedAt}</p>
                <p className="bullet">&bull;</p>
                <p className="job-contract">{job.contract}</p>
              </div>
              <h3 className="apply-job-position">{job.position}</h3>
              <p className="job-location">{job.location}</p>
            </div>
            <button className="btn-apply blue">Apply Now</button>
          </div>
          <p className="job-description">{job.description}</p>
          <h4 className="job-requirements-title">Requirements</h4>
          <p className="job-requirements-description">
            {job.requirements.content}
          </p>
          <ul className="job-requirement-list">
            {job.requirements.items.map((item, index) => {
              return (
                <li className="job-requirement-item" key={index}>
                  {item}
                </li>
              );
            })}
          </ul>
          <h4 className="job-role-title">What You Will Do</h4>
          <p className="job-role-description">{job.role.content}</p>
          <ol className="job-role-list">
            {job.role.items.map((item, index) => {
              return (
                <li className="job-role-item" key={index}>
                  {item}
                </li>
              );
            })}
          </ol>
        </div>
      </div>
      <div className="apply-footer">
        <div className="apply-footer-box">
          <div className="apply-footer-text">
            <p className="apply-footer-position">{job.position}</p>
            <p className="apply-footer-company">{job.company}</p>
          </div>
          <button className="btn-apply blue" onClick={toHomePage}>
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default JobApplyPage;
