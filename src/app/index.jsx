import {createBrowserRouter} from "react-router-dom";
import Main from '../pages/Main.jsx'
import App from "../App.jsx";
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import Product from "../components/catalog/Product.jsx";
import NotFound from "../pages/NotFound.jsx";
import Clothes from '../components/catalog/Clothes'
import Category from "../components/catalog/Category.jsx";
import Basket from "../components/catalog/Basket.jsx";
import Favorites from "../components/catalog/Favorites.jsx";
import Home from '../pages/Home'
import About_us from "../components/content/About_us.jsx";
import Return from "../components/content/Return.jsx";
import Guarantee from "../components/content/Guarantee.jsx";
import Brands from "../components/content/Brands.jsx";
const path = (import.meta.env.PROD)? '/project' : ''
  
const router = createBrowserRouter([
  {
    path: `${path}/`,
    element: (
      <div>
        <Header />
        <Home />
        <Footer />
      </div>
    )
  },
  {
    path: `${path}/category`,
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
        <Header />
        <Product />
        <Footer />
      </div>
    )
  },
  {
    path: `${path}/category`,
    element: (
      <div>
        <Header />
        <Footer />
      </div>
    )
  },
  {
    path: `${path}/basket`,
    element: (
      <div>
        <Header />
        <Basket />
        <Footer />
      </div>
    )
  },
  {
    path: `${path}/favorites`,
    element: (
      <div>
        <Header />
        <Favorites />
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
        <Category />
        <Footer />
      </div>
    )
  },
  {
    path: `${path}/profile`,
    element: (
      <div>
        <Header />
        <Main />
        {/* <Authorization_icon/> */}
        <Footer/>
      </div>
    )
  },
  {
    path: `${path}/about_us`,
    element: (
      <div>
        <Header />
        <About_us />
        <Footer/>
      </div>
    )
  },
  {
    path: `${path}/return`,
    element: (
      <div>
        <Header />
        <Return />
        <Footer/>
      </div>
    )
  },
  {
    path: `${path}/guarantee`,
    element: (
      <div>
        <Header />
        <Guarantee />
        <Footer/>
      </div>
    )
  },
  {
    path: `${path}/brands`,
    element: (
      <div>
        <Header />
        <Brands />
        <Footer/>
      </div>
    )
  },
  {
    path: `/category/:category`,
    element:(
    <div>
        <Header />
        <Category />
        <Footer/>
    </div>
    )
  }
]);

export default router;