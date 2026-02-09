import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PortfolioPage from './pages/PortfolioPage'
import PresentationsListPage from './pages/PresentationsListPage'
import PresentationViewer from './pages/PresentationViewer'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PortfolioPage />} />
        <Route path="/presentation" element={<PresentationsListPage />} />
        <Route path="/presentation/:slug" element={<PresentationViewer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
