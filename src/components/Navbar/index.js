import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const onClickTheme = () => {
        toggleTheme()
      }
      return (
        <>
          {isDarkTheme ? (
            <nav className="nav-dark-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
                alt="website logo"
                className="website-logo"
              />
              <ul className="ul-dark-list">
                <Link to="/" className="link-dark">
                  <li className="list-type">Home</li>
                </Link>
                <Link to="/about" className="link-dark">
                  <li className="list-type">About</li>
                </Link>
              </ul>
              <button
                className="dark-light-mode-button"
                type="button"
                onClick={onClickTheme}
                data-testid="theme"
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                  alt="theme"
                  className="theme"
                />
              </button>
            </nav>
          ) : (
            <nav className="nav-light-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
                alt="website logo"
                className="website-logo"
              />
              <ul className="ul-light-list">
                <Link to="/" className="link-light">
                  <li className="list-type">Home</li>
                </Link>
                <Link to="/about" className="link-light">
                  <li className="list-type">About</li>
                </Link>
              </ul>
              <button
                data-testid="theme"
                className="dark-light-mode-button"
                type="button"
                onClick={onClickTheme}
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                  alt="theme"
                  className="theme"
                />
              </button>
            </nav>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
