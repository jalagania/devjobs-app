import "./Jobs.css";
import { data } from "../data";
import { useGlobalContext } from "../context";

function Jobs() {
  const {
    appData,
    setAppData,
    setApplyJobID,
    setShowApplyPage,
    showLoadButton,
    setShowLoadButton,
  } = useGlobalContext();

  function handleLoadButton() {
    setAppData(data);
    setShowLoadButton(false);
  }

  return (
    <div>
      <div className="jobs-container">
        {appData.map((job) => {
          return (
            <div className="job-box" key={job.id}>
              <div
                className="job-logo-bg"
                style={{ backgroundColor: job.logoBackground }}
              >
                <img src={job.logo} alt={job.company} className="job-logo" />
              </div>
              <div className="job-info">
                <p className="job-posted">{job.postedAt}</p>
                <p className="bullet">&bull;</p>
                <p className="job-contract">{job.contract}</p>
              </div>
              <p
                className="job-position"
                onClick={() => {
                  setApplyJobID(job.id);
                  setShowApplyPage(true);
                  document.body.scrollIntoView();
                }}
              >
                {job.position}
              </p>
              <p className="job-company">{job.company}</p>
              <p className="job-location">{job.location}</p>
            </div>
          );
        })}
      </div>
      {showLoadButton && (
        <button className="btn-load blue" onClick={handleLoadButton}>
          Load More
        </button>
      )}
    </div>
  );
}

export default Jobs;
