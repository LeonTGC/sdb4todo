
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AddTodo from "./pages/AddTodo"
import Navbar from "./components/Navbar"
const App = () => {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route
            // localhost:4000/
              path="/"
              element={<Home />}
            />
            <Route 
              path="/add-todo"
              element={<AddTodo />}
            />
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
