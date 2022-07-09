
import { Route, Routes } from "react-router-dom"
import ShowDetails from "./componenets/ShowDetails"
import ShowList from "./componenets/ShowList"


function App() {


  return (
    <div className='bg-gray-200' >
      <Routes>
        <Route index element={<ShowList />} />
        <Route path="/shows/:id" element={<ShowDetails />} />
      </Routes>
    </div>
  )
}

export default App
