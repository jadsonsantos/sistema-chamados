import './App.scss'
import { BrowserRouter } from 'react-router-dom'
import RoutesApp from './routes'
import AuthProvider from './contexts/auth'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <RoutesApp />
        </AuthProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
