import {Route, Routes} from "react-router-dom";
import Predictions from "./page/Predictions.jsx";

export default function App() {
  return(
      <div>
        <Routes>
          <Route path={'/'} element={<Predictions/>}/>
        </Routes>
      </div>
  )
}
