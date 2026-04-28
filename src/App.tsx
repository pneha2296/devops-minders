import { Layout } from './components/layout/Layout'
import Contact from './pages/Contact'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  )
}

export default App