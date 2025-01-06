import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import Layout from './Layout'
import ComponentTry from './Pages/ComponentTry'
import Login from './Pages/Login'
import ProtectedRoute from './Components/ProtectedRoute'
import Inicio from './Pages/Inicio'
import Pacientes from './Pages/Pacientes'
import PacientePage from './Pages/PacientePage'
import Medicos from './Pages/Medicos'
import MedicoPage from './Pages/MedicoPage'
import Usuarios from './Pages/Usuarios'
import Unauthorized from './Pages/Unauthorized'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/unauthorized' element={<Unauthorized/>}/>
    <Route
      path={'/'}
      element={
        <Layout>
          <ProtectedRoute allowedRoles={['administrador', 'asistente', 'medico', 'laboratorista']}>
            <Inicio/>
          </ProtectedRoute>
        </Layout>
        }/>
    <Route
      path={'/pacientes'}
      element={
        <Layout>
          <ProtectedRoute allowedRoles={['administrador', 'asistente', 'medico', 'laboratorista']}>
            <Pacientes/>
          </ProtectedRoute>
        </Layout>
        }/>
    <Route
      path={'/pacientes/:id'}
      element={
        <Layout>
          <ProtectedRoute allowedRoles={['administrador', 'asistente', 'medico', 'laboratorista']}>
            <PacientePage/>
          </ProtectedRoute>
        </Layout>
        }/>
    <Route
      path={'/medicos'}
      element={
        <Layout>
          <ProtectedRoute allowedRoles={['administrador']}>
            <Medicos/>
          </ProtectedRoute>
        </Layout>
        }/>
    <Route
      path={'/medicos/:id'}
      element={
        <Layout>
          <ProtectedRoute allowedRoles={['administrador']}>
            <MedicoPage/>
          </ProtectedRoute>
        </Layout>
        }/>
    <Route
      path={'/usuarios'}
      element={
        <Layout>
          <ProtectedRoute allowedRoles={['administrador']}>
            <Usuarios/>
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
