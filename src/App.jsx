import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageContent from "./layout/PageContent";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageContent />} />
        {/* Diğer route'larınızı buraya ekleyebilirsiniz */}
      </Routes>
    </Router>
  );
}

export default App;