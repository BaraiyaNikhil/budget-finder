import Home from "./pages/Home";
import BudgetMaker from "./pages/BudgetMaker";
import NotFound from "./pages/NotFound";
import { Routes, Route } from "react-router-dom";
function App() {

  return (
   <>
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/budget_maker" element={<BudgetMaker/>} />
    <Route path="*" element={<NotFound/>} />
   </Routes>
   </>
  )
}

export default App
