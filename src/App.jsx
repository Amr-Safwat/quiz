
import './App.css';
import { Routes, Route} from 'react-router';
import QuistionPage from './components/pages/QuistionPage.jsx';
import FirstPage from './components/pages/FirstPage.jsx';


function App() {
  return (
    <>
      {/* Routes */}
      <Routes>
        <Route path="/quiz" element={<FirstPage />} />
        <Route path="/quiz/quistions" element={<QuistionPage />} />
      </Routes>
    </>
  );
}

export default App;
