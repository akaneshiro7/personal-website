import {Route, Routes} from "react-router-dom";
import Layout from "./Layout";
import Landing from "./pages/Landing";
// import About from "./pages/About";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    document.documentElement.classList.add('dark');

  })
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Landing/>} />
          {/* <Route path='/about' element={<About/>} /> */}
          <Route path="*" element={<Landing />} />
        </Route>
      </Routes>
    </div>

  )
}
