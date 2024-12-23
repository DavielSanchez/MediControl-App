import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import Layout from './Layout'
import ComponentTry from './Pages/ComponentTry'
import Login from './Pages/Login'
import ProtectedRoute from './Components/ProtectedRoute'
import Inicio from './Pages/Inicio'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route
      path={'/'}
      element={
        <Layout>
          <ProtectedRoute allowedRoles={['administrador', 'asistente', 'medico', 'laboratorista']}>
            <Inicio/>
          </ProtectedRoute>
        </Layout>
        }/>
      <Route path={'/try'} element={<ComponentTry/>}/>
      <Route path={'/login'} element={<Login/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
