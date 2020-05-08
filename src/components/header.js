import { Link } from "gatsby"
import React from "react"
import './header.css'


class Header extends React.Component {
  constructor(props) {
    super(props)

    // Add initial state
    this.state = {
      hasScrolled: false
    }
  }

  // Listen for events and pass the callback function
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  // Event listener callback
  handleScroll = (event) => {
    console.log(event)
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState({hasScrolled: true})
    }
    else {
      this.setState({hasScrolled: false})
    }
  }

  render() {
    {/** Add a css class based on some property state */}
    return (
      <div className={this.state.hasScrolled ? 'HeaderScrolled Header' : 'Header'}>
        <div className="HeaderGroup">
          <Link to="/"><img src={require('../images/logo-designcode.svg')} width="30" /></Link>
          <Link to="/countries">Countries</Link>
          <Link to="/updates">Updates</Link>
          <Link to="/forecast">Forecast</Link>
          <Link to="/forecast"><button>Live</button></Link>
        </div>
      </div>
    )
  }
}

export default Header
