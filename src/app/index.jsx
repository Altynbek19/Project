import {createBrowserRouter} from "react-router-dom";
import Main from '../pages/Main.jsx'
import App from "../App.jsx";
import Footer from "../components/footer/Footer"
import Header_white from "../components/header/Header_white"
import Header from "../components/header/Header"
import Product from "../components/catalog/Product.jsx";
import NotFound from "../pages/NotFound.jsx";
import Clothes from '../components/catalog/Clothes'
import Man_catalog from "../components/catalog/Man_catalog.jsx";
import Woman_catalog from "../components/catalog/Woman_catalog.jsx";
import Kids_catalog from "../components/catalog/Kids_catalog";
import Authorization from "../components/auth/Authorization.jsx";
import Registration from "../components/auth/Registration";
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
    path: `${path}/Clothes`,
    element: (
      <div>
        <Header />
        <Clothes />
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
  {
    path: `${path}*`,
    element: (
      <div>
        <NotFound />
      </div>
    )
  },
  {
    path: `${path}/man_catalog`,
    element: (
      <div>
        <Header />
        <Man_catalog />
        <Footer />
      </div>
    )
  },
  {
    path: `${path}/woman_catalog`,
    element: (
      <div>
        <Header />
        <Woman_catalog />
        <Footer />
      </div>
    )
  },
  {
    path: `${path}/kids_catalog`,
    element: (
      <div>
        <Header />
        <Kids_catalog />
        <Footer />
      </div>
    )
  },
  {
    path: `${path}/sign_in`,
    element: (
      <div>
        <Header_white />
        <Authorization />
      </div>
    )
  },
  {
    path: `${path}/register`,
    element: (
      <div>
        <Header_white />
        <Registration />
      </div>
    )
  },
]);

export default router;