import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import HomePage from './pages/HomePage/HomePage'
import MomentsPage from './pages/MomentsPage/MomentsPage'
import SingleMomentPage from './pages/SingleMomentPage/SingleMomentPage'
import PlacesPage from './pages/PlacesPage/PlacesPage'
import AddPage from './pages/AddPage/AddPage'
import DefaultLayout from './layouts/DefaultLayout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/moments' element={<MomentsPage />} />
          <Route path='/moments/:id' element={<SingleMomentPage />} />
          <Route path='/places' element={<PlacesPage />} />
          <Route path='/add' element={<AddPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
