import "./Filter.css";
import { useState, useEffect } from "react";
import { useGlobalContext } from "../context";
import { data } from "../data";
import search from "./assets/desktop/icon-search.svg";
import location from "./assets/desktop/icon-location.svg";
import check from "./assets/desktop/icon-check.svg";

function Filter() {
  const { appData, setAppData, fullTime, setFullTime, setShowLoadButton } =
    useGlobalContext();
  const [searchInput, setSearchInput] = useState("");
  const [locationInput, setLocationInput] = useState("");
  const [showSearchResult, setShowSearchResult] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);

  function handleSearchInput(event) {
    setSearchInput(event.target.value);
  }

  function handleLocationInput(event) {
    setLocationInput(event.target.value);
  }

  function handleSearchButton() {
    if (fullTime) {
      setAppData(
        data.filter(
          (job) =>
            (job.company.toLowerCase().includes(searchInput.toLowerCase()) ||
              job.position.toLowerCase().includes(searchInput.toLowerCase())) &&
            job.location.toLowerCase().includes(locationInput.toLowerCase()) &&
            job.contract === "Full Time"
        )
      );
    } else {
      setAppData(
        data.filter(
          (job) =>
            (job.company.toLowerCase().includes(searchInput.toLowerCase()) ||
              job.position.toLowerCase().includes(searchInput.toLowerCase())) &&
            job.location.toLowerCase().includes(locationInput.toLowerCase())
        )
      );
    }

    setSearchInput("");
    setLocationInput("");
    setShowLoadButton(false);
    setShowFilterModal(false);
  }

  useEffect(() => {
    if (appData.length === 0) {
      setShowSearchResult(true);
    } else {
      setShowSearchResult(false);
    }
  }, [appData]);

  return (
    <div className="filter-container-wrapper">
      <form className="filter-container" onSubmit={(e) => e.preventDefault()}>
        <div className="search-box">
          <img src={search} alt="search" className="search-icon" />
          <input
            type="text"
            className="search-input"
            placeholder="Filter by title, companies, expertise…"
            value={searchInput}
            onChange={handleSearchInput}
          />
        </div>
        <div
          className={`filter-modal ${showFilterModal ? "" : "hidden-mobile"}`}
        >
          <div className="location-check-wrapper">
            <div className="location-box">
              <img src={location} alt="location" className="location-icon" />
              <input
                type="text"
                className="location-input"
                placeholder="Filter by location…"
                value={locationInput}
                onChange={handleLocationInput}
              />
            </div>
            <div className="check-search-box">
              <div className="check-box">
                <div
                  className={`check-bg ${fullTime ? "blue" : ""}`}
                  onClick={() => setFullTime(!fullTime)}
                >
                  {fullTime && (
                    <img src={check} alt="check" className="check" />
                  )}
                </div>
                <p className="check-box-text">
                  Full Time
                  {window.innerWidth < 769 && window.innerWidth > 425
                    ? ""
                    : " Only"}
                </p>
              </div>
              <button className="btn-search blue" onClick={handleSearchButton}>
                Search
              </button>
            </div>
          </div>
          <div
            className="filter-modal-bg"
            onClick={() => setShowFilterModal(false)}
          ></div>
        </div>
        <button
          className="btn-filter-sm"
          onClick={() => setShowFilterModal(true)}
        >
          <svg
            className="filter-sm"
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.108 0H.86a.86.86 0 00-.764.455.833.833 0 00.068.884l6.685 9.202.007.01c.242.32.374.708.375 1.107v7.502a.825.825 0 00.248.594.865.865 0 00.942.18l3.756-1.4c.337-.1.56-.41.56-.784v-6.092c0-.399.132-.787.375-1.108l.007-.009 6.685-9.202c.19-.26.217-.6.068-.884A.86.86 0 0019.108 0z"
              fillRule="nonzero"
            />
          </svg>
        </button>
        <button className="btn-search-sm" onClick={handleSearchButton}>
          <img src={search} alt="search" className="search-sm" />
        </button>
      </form>
      {showSearchResult && <p className="search-result">No jobs found</p>}
    </div>
  );
}

export default Filter;
