import React from 'react'
import {Link} from 'react-router-dom'
import Header from '../Header'
import './index.css'

class Home extends React.Component {
  state = {
    currentSlideIndex: 0,
  }

  numSlides = 3 // Number of slides

  nextSlide = () => {
    this.setState(prevState => ({
      currentSlideIndex: (prevState.currentSlideIndex + 1) % this.numSlides,
    }))
  }

  prevSlide = () => {
    this.setState(prevState => ({
      currentSlideIndex:
        (prevState.currentSlideIndex - 1 + this.numSlides) % this.numSlides,
    }))
  }

  render() {
    const {currentSlideIndex} = this.state

    return (
      <>
        <Header />
        <div className="home-container">
          <div className="home-content">
            <h1 className="home-heading">Places That Thrills You</h1>
            <p className="home-description">
              Traveling and exploration ignite a thrilling sense of adventure.
              From majestic mountains to serene shores, each destination
              promises awe-inspiring beauty. Tasting exotic cuisines and
              connecting with diverse cultures fuels our wanderlust. With every
              journey, we embrace the unknown, savoring the joy of discovery and
              the freedom of exploration.
            </p>
            <Link to="/cart" className="shop-now-button">
              <button type="button" className="shop-now-button">
              Explore Now
              </button>
            </Link>
          </div>
          <div className="slider-container">
            <div
              className="slides"
              style={{transform: `translateX(-${currentSlideIndex * 100}%)`}}
            >
              <img
                src="https://www.touryatras.com/wp-content/uploads/2024/04/leh-ladakh-tour-full-details-950x630.jpg"
                alt="clothes to be noticed"
                className="slide"
              />
              <img
                src="https://www.touryatras.com/wp-content/uploads/2024/04/nainital-tour-full-details-950x630.jpg"
                alt="clothes to be noticed 1"
                className="slide"
              />
              <img
                src="https://www.touryatras.com/wp-content/uploads/2022/11/6-Toughest-Trek-to-do-in-this-Winter-2022-2.jpg"
                alt="clothes to be noticed 2"
                className="slide"
              />
              {/* Add more slide images here */}
            </div>
            <div className="arrow-container">
              <div className="arrow-container">
                <div
                  className="left-arrow"
                  onClick={this.prevSlide}
                  role="button"
                  tabIndex="0"
                >
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/000/592/783/original/vector-left-arrow-icon.jpg"
                    alt="Left Arrow"
                    className="icon"
                  />
                </div>
                <div
                  className="right-arrow"
                  onClick={this.nextSlide}
                  role="button"
                  tabIndex="0"
                >
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/000/592/783/original/vector-left-arrow-icon.jpg"
                    alt="Right Arrow"
                    className="icon2"
                  />
                </div>
              </div>
            </div>
            <div className="bullet-container">
              {/* Add bullet components here */}
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Home
