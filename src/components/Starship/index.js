import ReactPlayer from 'react-player'
import Header from '../Header'
import './index.css'

const Starship = () => (
  <div className="background-colour">
    <div className="displaying-header">
      <Header />
    </div>
    <div className="background-falcon">
      <img src="https://media.istockphoto.com/id/594940208/photo/space-shuttle-launch-in-the-clouds.webp?b=1&s=170667a&w=0&k=20&c=rLmcaDq8yOM2pE4a6YUKLOKNlkhRnYPkKJZcHFXodkQ=" />
    </div>

    <h2 className="space-x-heading paragraph-width">STARSHIP</h2>
    <h1 className="space-x-heading paragraph-width">OVERVIEW</h1>
    <p className="space-x-heading paragraph-width">
      SpaceX’s Starship spacecraft and Super Heavy rocket – collectively
      referred to as Starship – represent a fully reusable transportation system
      designed to carry both crew and cargo to Earth orbit, the Moon, Mars and
      beyond. Starship is the world’s most powerful launch vehicle ever
      developed, capable of carrying up to 150 metric tonnes fully reusable and
      250 metric tonnes expendable.
    </p>
    <div className="paragraph-width overview-displaying">
      <h3 className="space-x-heading">HEIGHT</h3>
      <h4 className="space-x-heading">
        121m/<span className="span-colour">397 ft</span>
      </h4>
    </div>
    <hr className="paragraph-width" />
    <div className="paragraph-width overview-displaying">
      <h3 className="space-x-heading">DIAMETER</h3>
      <h4 className="space-x-heading">
        9m/<span className="span-colour">29.5 ft</span>
      </h4>
    </div>
    <hr className="paragraph-width" />
    <div className="paragraph-width overview-displaying">
      <h3 className="space-x-heading">PAYLOAD CAPACITY</h3>
      <h4 className="space-x-heading">
        100-
        <span className="span-colour">150t</span>
      </h4>
    </div>

    <hr className="paragraph-width" />
    <ReactPlayer
      url="https://www.youtube.com/watch?v=-1wcilQ58hI"
      width="1500px"
      height="500px"
      controls="true"
    />
    <h4 className="space-x-heading paragraph-width">STARSHIP</h4>
    <h1 className="space-x-heading paragraph-width">CAPABILITES</h1>

    <p className="space-x-heading paragraph-width">
      Starship leverages tanker vehicles (essentially the Starship spacecraft
      minus the windows) to refill the Starship spacecraft in low-Earth orbit
      prior to departing for Mars. Refilling on-orbit enables the transport of
      up to 100 tons all the way to Mars. And if the tanker ship has high reuse
      capability, the primary cost is just that of the oxygen and methane, which
      is extremely low.
    </p>

    <p className="span-colour">
      For information about our launch services, contact sales@spacex.com
    </p>
  </div>
)
export default Starship
