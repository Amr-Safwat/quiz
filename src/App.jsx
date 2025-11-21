
import './App.css';
import { Routes, Route} from 'react-router';
import QuistionPage from './components/pages/QuistionPage.jsx';
import FirstPage from './components/pages/FirstPage.jsx';


function App() {
  return (
    <>
      {/* Routes */}
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/quistions" element={<QuistionPage />} />
      </Routes>
    </>
  );
}

export default App;
