import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import NewVersion3 from "./pages/NewVersion3";
import NewVersion4 from "./pages/NewVersion4";
import NewVersion5 from "./pages/NewVersion5";
import NewVersion6 from "./pages/NewVersion6";
import NewVersion7 from "./pages/NewVersion7";
import NewVersion8 from "./pages/NewVersion8";
import NewVersion9 from "./pages/NewVersion9";
import NewVersion10 from "./pages/NewVersion10";
import NewVersion11 from "./pages/NewVersion11";
import NewVersion12 from "./pages/NewVersion12";
import NewVersion13 from "./pages/NewVersion13";
import NewVersion14 from "./pages/NewVersion14";
import NewVersion15 from "./pages/NewVersion15";
import NewVersion16 from "./pages/NewVersion16";
import NewVersion17 from "./pages/NewVersion17";
import NewVersion18 from "./pages/NewVersion18";
import NewVersion19 from "./pages/NewVersion19";
import NewVersion20 from "./pages/NewVersion20";
import NewVersion2 from "./pages/NewVersion2";
import NewVersion1 from "./pages/NewVersion";
import Dash from"./pages/Dashboard";
import { useEffect } from "react";
import NewVersion21 from "./pages/NewVersion21";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/new-version3":
        title = "";
        metaDescription = "";
        break;
      case "/new-version4":
        title = "";
        metaDescription = "";
        break;
      case "/new-version5":
        title = "";
        metaDescription = "";
        break;
      case "/new-version6":
        title = "";
        metaDescription = "";
        break;
      case "/new-version7":
        title = "";
        metaDescription = "";
        break;
      case "/new-version8":
        title = "";
        metaDescription = "";
        break;
      case "/new-version9":
        title = "";
        metaDescription = "";
        break;
      case "/new-version10":
        title = "";
        metaDescription = "";
        break;
      case "/new-version11":
        title = "";
        metaDescription = "";
        break;
      case "/new-version12":
        title = "";
        metaDescription = "";
        break;
      case "/new-version13":
        title = "";
        metaDescription = "";
        break;
      case "/new-version14":
        title = "";
        metaDescription = "";
        break;
      case "/new-version15":
        title = "";
        metaDescription = "";
        break;
      case "/new-version16":
        title = "";
        metaDescription = "";
        break;
      case "/new-version17":
        title = "";
        metaDescription = "";
        break;
      case "/new-version18":
        title = "";
        metaDescription = "";
        break;
      case "/new-version19":
        title = "";
        metaDescription = "";
        break;
      case "/new-version1":
        title = "";
        metaDescription = "";
        break;
      case "/new-version":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Dash />} />
      <Route path="/new-version2" element={<NewVersion3 />} />
      <Route path="/new-version3" element={<NewVersion4 />} />
      <Route path="/new-version4" element={<NewVersion5 />} />
      <Route path="/new-version5" element={<NewVersion6 />} />
      <Route path="/new-version6" element={<NewVersion7 />} />
      <Route path="/new-version7" element={<NewVersion8 />} />
      <Route path="/new-version8" element={<NewVersion9 />} />
      <Route path="/new-version9" element={<NewVersion10 />} />
      <Route path="/new-version10" element={<NewVersion11 />} />
      <Route path="/new-version11" element={<NewVersion12 />} />
      <Route path="/new-version12" element={<NewVersion13 />} />
      <Route path="/new-version13" element={<NewVersion14 />} />
      <Route path="/new-version14" element={<NewVersion15 />} />
      <Route path="/new-version15" element={<NewVersion16 />} />
      <Route path="/new-version16" element={<NewVersion17 />} />
      <Route path="/new-version17" element={<NewVersion18 />} />
      <Route path="/new-version18" element={<NewVersion19 />} />
      <Route path="/new-version19" element={<NewVersion20 />} />
      <Route path="/new-version1" element={<NewVersion2 />} />
      <Route path="/new-version" element={<NewVersion1 />} />
      <Route path="/new-version20" element={<NewVersion21 />} />
    </Routes>
  );
}
export default App;
