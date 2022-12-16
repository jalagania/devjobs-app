import "./App.css";
import { useGlobalContext } from "./context";
import Header from "./components/Header";
import Filter from "./components/Filter";
import Jobs from "./components/Jobs";
import JobApplyPage from "./components/JobApplyPage";

function App() {
  const { showApplyPage } = useGlobalContext();

  return (
    <div>
      <Header />
      {!showApplyPage && <Filter />}
      {!showApplyPage && <Jobs />}
      {showApplyPage && <JobApplyPage />}
    </div>
  );
}

export default App;
