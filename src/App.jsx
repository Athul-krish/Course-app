import { BrowserRouter, Route, Routes } from "react-router-dom"
import InsertCourse from "./components/InsertCourse"
import ViewCourse from "./components/ViewCourse"

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<InsertCourse/>}></Route>
        <Route path="/view" element={<ViewCourse/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
