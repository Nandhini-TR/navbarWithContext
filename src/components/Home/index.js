import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <>
          <Navbar />
          {isDarkTheme ? (
            <div className="home-dark-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
                alt="home"
                className="home"
              />
              <h1 className="heading-dark">Home</h1>
            </div>
          ) : (
            <div className="home-light-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
                alt="home"
                className="home"
              />
              <h1 className="heading-light">Home</h1>
            </div>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
