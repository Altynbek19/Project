import {createBrowserRouter} from "react-router-dom";
import Main from '../pages/Main.jsx'
import App from "../App.jsx";
import Footer from "../components/footer/Footer"
import Header_white from "../components/header/Header_white"
import Product from "../components/catalog/product.jsx";
const path = (import.meta.env.PROD)? '/project' : ''
  
const router = createBrowserRouter([
  {
    path: `${path}/`,
    element: (
      <div>
        <Header_white />
        <Main />
        <Footer />
      </div>
    )
  },
  {
    path: `${path}/product/:id`,
    element: (
      <div>
        <Header_white />
        <Product />
        <Footer />
      </div>
    )
  },
  {
    path: `${path}/category`,
    element: (
      <div>
        <Header_white />
        <Footer />
      </div>
    )
  },
  {
    path: `${path}/basket`,
    element: (
      <div>
        <Header_white />
        <Footer />
      </div>
    )
  },
]);

export default router;