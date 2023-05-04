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
import Authorization from "../components/auth/Authorization.jsx";
import Authorization_icon from "../components/auth/Authorization_icon.jsx";
import Registration from "../components/auth/Registration";
import Registration_icon from "../components/auth/Registration_icon";
import Profile from '../components/auth/Profile/Profile';
import Home from '../pages/Home'
import About_us from "../components/content/About_us.jsx";
import Return from "../components/content/Return.jsx";
import Guarantee from "../components/content/Guarantee.jsx";
import Brands from "../components/content/Brands.jsx";
const path = (import.meta.env.PROD)? '/project' : ''
import BurgerMenu from '../components/header/BurgerMenu.jsx'
  
const router = createBrowserRouter([
  {
    path: `${path}/`,
    element: (
      <div>
        <Header />
        <Home />
        <Footer />
        <BurgerMenu/>
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
        <BurgerMenu/>
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
        <BurgerMenu/>
      </div>
    )
  },
  {
    path: `${path}/category`,
    element: (
      <div>
        <Header />
        <Footer />
        <BurgerMenu/>
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
        <BurgerMenu/>
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
        <BurgerMenu/>
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
        <BurgerMenu/>
      </div>
    )
  },
  {
    path: `${path}/sign_in_icon`,
    element: (
      <div>
        <Header />
        <Authorization_icon />
        <BurgerMenu/>
      </div>
    )
  },
  {
    path: `${path}/register_icon`,
    element: (
      <div>
        <Header />
        <Registration_icon />
        <BurgerMenu/>
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
        <BurgerMenu/>
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
        <BurgerMenu/>
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
        <BurgerMenu/>
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
        <BurgerMenu/>
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
        <BurgerMenu/>
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
        <BurgerMenu/>
    </div>
    )
  }
]);

export default router;