import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <>
          <Navbar />
          {isDarkTheme ? (
            <div className="not-found-dark-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                alt="not found"
                className="not-found-image"
              />
              <h1 className="notfound-heading">Lost Your Way?</h1>
              <p className="not-found-description">
                We cannot seem to find the page you are looking for
              </p>
            </div>
          ) : (
            <div className="not-found-light-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                alt="not found"
                className="not-found-image"
              />
              <h1 className="notfound-heading">Lost Your Way?</h1>
              <p className="not-found-description">
                We cannot seem to find the page you are looking for
              </p>
            </div>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
