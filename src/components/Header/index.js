import {Link, withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <nav className="nav-header">
      <div className="nav-content">
        <Link to="/">
          <img
            className="website-logo"
            src="https://www.touryatras.com/wp-content/uploads/2024/01/Untitled-design-22.png"
            alt="website logo"
          />
        </Link>
        <ul className="nav-menu">
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/cart" className="nav-link">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/cart" className="nav-link">
              Contact Us
            </Link>
          </li>
          <li className="menu-item">
            <button type="button" onClick={() => {}}>
              Categories
            </button>
            <ul className="sub-menu">
              <li className="menu-item">
                <a href="https://www.touryatras.com/category/continents/">
                  Continents
                </a>
                <li>
                  <li className="menu-item ">
                    <a href="https://www.touryatras.com/category/america/">
                      America
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="https://www.touryatras.com/category/continents/antarctica/">
                      Antarctica
                    </a>
                  </li>
                  <li className="menu-item ">
                    <a href="https://www.touryatras.com/category/continents/australia/">
                      Australia
                    </a>
                  </li>
                  <li className="menu-item ">
                    <a href="https://www.touryatras.com/category/continents/europe/">
                      Europe
                    </a>
                  </li>
                  <li className="menu-item ">
                    <a href="https://www.touryatras.com/category/continents/asia/">
                      Asia
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="https://www.touryatras.com/category/continents/africa/">
                      Africa
                    </a>
                  </li>
                </li>
              </li>
            </ul>
          </li>
        </ul>
        <button
          type="button"
          className="logout-desktop-btn"
          onClick={onClickLogout}
        >
          Logout
        </button>
        <button
          type="button"
          className="logout-mobile-btn"
          onClick={onClickLogout}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
            alt="logout icon"
            className="logout-icon"
          />
        </button>
      </div>
      <div className="nav-menu-mobile">
        <ul className="nav-menu-list-mobile">
          <Link to="/">
            <li className="nav-menu-item-mobile">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
                alt="nav home"
                className="nav-bar-image"
              />
            </li>
          </Link>
          <Link to="/products">
            <li className="nav-menu-item-mobile">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
                alt="nav products"
                className="nav-bar-image"
              />
            </li>
          </Link>
          <Link to="/cart">
            <li className="nav-menu-item-mobile">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
                alt="nav cart"
                className="nav-bar-image"
              />
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  )
}
export default withRouter(Header)
