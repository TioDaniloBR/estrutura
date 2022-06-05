import { Route, Routes } from "react-router-dom";

import Page1 from "../pages/page1/page1";
import Page2 from "../pages/page2/page2";

const Router = ()=>{
    return(
        <Routes>
            <Route element={<Page1 />} path="/" />
            <Route element={<Page2 />} path="/page2" />
        </Routes>
    );
}

export default Router