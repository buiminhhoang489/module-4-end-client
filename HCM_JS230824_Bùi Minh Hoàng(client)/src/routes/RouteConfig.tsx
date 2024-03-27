import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazyFn,lazyFnReal } from "./lazy";

export default function RouteConfig() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={lazyFnReal(() => import('@/pages/home/Home'))}>
        <Route path="*" element={lazyFn(() => import('@/pages/home/HomeContent'))}/>
        <Route path="about" element={lazyFn(() => import('@/pages/about/About'))}/>
        </Route>
        <Route path="authen" element={lazyFn(() => import('@/pages/authen/Authen'))}>
         </Route>
      </Routes>
    </BrowserRouter>
  );
}
