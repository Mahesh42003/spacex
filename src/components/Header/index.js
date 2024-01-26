import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav>
    <ul className="top-header">
      <Link to="/">
        <img
          src="https://thumbs.dreamstime.com/b/illustration-deep-space-spacex-logo-over-vector-planet-195641418.jpg?w=992"
          className="image-widthing"
        />
      </Link>
      <Link
        to="/vehicles/falcon-9"
        className="space-between-them text-decoration"
      >
        FALCON 9
      </Link>
      <Link
        to="/vehicles/falcon-heavy"
        className="space-between-them text-decoration"
      >
        FALCON HEAVY
      </Link>
      <Link
        to="/vehicles/dragon"
        className="space-between-them text-decoration"
      >
        DRAGON
      </Link>
      <Link
        to="/vehicles/starship"
        className="space-between-them text-decoration"
      >
        STARSHIP
      </Link>
    </ul>
  </nav>
)
export default Header
