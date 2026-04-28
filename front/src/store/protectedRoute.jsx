import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

export function ProtectedRoute({ children }) {
  const { isAuthenticated } = useSelector((state) => state.auth)
  
  const token = localStorage.getItem('token')
  
  if (!isAuthenticated && !token) {
    return <Navigate to="/login" replace />
  }
  
  return children
}

export default ProtectedRoute