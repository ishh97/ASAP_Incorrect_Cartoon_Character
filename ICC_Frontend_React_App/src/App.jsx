import './App.css'
import Home from './Pages/Home'
import {Routes , Route} from 'react-router-dom'
import Content from './Pages/Content'
import AddForm from './Pages/AddForm'
import UpdateContent from './Pages/UpdateContent'
import LoginForm from './Pages/LoginForm'
function App() {

  return (
    <>
    <div className='mainPage'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/content" element={<Content />}/>
          <Route path='/add' element={<AddForm/>}/>
          <Route path='/update/:id' element={<UpdateContent/>}/>
          <Route path='/login' element={<LoginForm/>}/>
        </Routes>
    </div>
      
    </>
  )
}

export default App
