import Header from '../Header'
import './index.css'

const Cart = () => (
  <>
    <Header />
    <div className="main-container">
      <div className="cart-container">
        <h1>Select Categories to Explore</h1>
        <ul>
          <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-20695 last">
            <button type="button" onClick={() => {}}>
              CATEGORIES
            </button>
            <ul className="sub-menu">
              <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-20596">
                <a href="https://www.touryatras.com/category/world/">World</a>
              </li>
              <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-20628">
                <a href="https://www.touryatras.com/category/continents/">
                  Continents
                </a>
                <ul className="sub-menu">
                  <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-20636">
                    <a href="https://www.touryatras.com/category/america/">
                      America
                    </a>
                  </li>
                  <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-20630">
                    <a href="https://www.touryatras.com/category/continents/antarctica/">
                      Antarctica
                    </a>
                  </li>
                  <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-20632">
                    <a href="https://www.touryatras.com/category/continents/australia/">
                      Australia
                    </a>
                  </li>
                  <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-20633">
                    <a href="https://www.touryatras.com/category/continents/europe/">
                      Europe
                    </a>
                  </li>
                  <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-20631">
                    <a href="https://www.touryatras.com/category/continents/asia/">
                      Asia
                    </a>
                  </li>
                  <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-20629">
                    <a href="https://www.touryatras.com/category/continents/africa/">
                      Africa
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </>
)

export default Cart
