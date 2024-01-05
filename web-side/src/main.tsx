
import { HashRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/page";
import Layout from "./layout";

import ReactDOM from "react-dom";
import "./styles/index.css"
import ExamplesProvider from "./context/config";

ReactDOM.createRoot(document.getElementById("root")!).render(

     <ExamplesProvider>
          <HashRouter >
               <Routes>
                    <Route path="/" element={<Layout />}>
                        
                    </Route>
               </Routes>
          </HashRouter>
     </ExamplesProvider>


);
