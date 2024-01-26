import ReactPlayer from 'react-player'
import Header from '../Header'
import './index.css'

const Dragon = () => (
  <div className="background-colour">
    <div className="displaying-header">
      <Header />
    </div>
    <div className="background-falcon">
      <img src="https://media.istockphoto.com/id/1185065140/photo/commercial-spacecraft-with-open-docking-hatch-orbiting-earth.webp?b=1&s=170667a&w=0&k=20&c=rETlDLSRWFe7RbpbrU2JKcbnXI3YWIPybdcNf3i_ngo=" />
    </div>
    <div className="names-displaying">
      <div className="space">
        <h1 className="space-x-heading alignment">44</h1>
        <h3 className="space-x-heading ">TOTAL LAUNCHES</h3>
      </div>
      <div className="space">
        <h1 className="space-x-heading alignment">39</h1>
        <h3 className="space-x-heading">TOTAL LANDINGS</h3>
      </div>
      <div className="space">
        <h1 className="space-x-heading alignment">23</h1>
        <h3 className="space-x-heading">TOTAL REFLIGHTS</h3>
      </div>
    </div>
    <p className="space-x-heading paragraph-width">
      The Dragon spacecraft is capable of carrying up to 7 passengers to and
      from Earth orbit, and beyond. It is the only spacecraft currently flying
      that is capable of returning significant amounts of cargo to Earth, and is
      the first private spacecraft to take humans to the space station.
    </p>
    <h2 className="space-x-heading paragraph-width">DRAGON</h2>
    <h1 className="space-x-heading paragraph-width">OVERVIEW</h1>
    <div className="paragraph-width overview-displaying">
      <h3 className="space-x-heading">HEIGHT</h3>
      <h4 className="space-x-heading">
        8.1m/<span className="span-colour">26.7 ft</span>
      </h4>
    </div>
    <hr className="paragraph-width" />
    <div className="paragraph-width overview-displaying">
      <h3 className="space-x-heading">DIAMETER</h3>
      <h4 className="space-x-heading">
        4m/<span className="span-colour">13 ft</span>
      </h4>
    </div>
    <hr className="paragraph-width" />
    <div className="paragraph-width overview-displaying">
      <h3 className="space-x-heading">SPACECRAFT VOLUME</h3>
      <h4 className="space-x-heading">
        9.3m<sup>3</sup>/
        <span className="span-colour">
          328 ft<sup>3</sup>
        </span>
      </h4>
    </div>
    <hr className="paragraph-width" />

    <div className="paragraph-width overview-displaying">
      <h3 className="space-x-heading">TRUNK VOLUME</h3>
      <h4 className="space-x-heading">
        37m<sup>3</sup>/
        <span className="span-colour">
          1300 ft<sup>3</sup>
        </span>
      </h4>
    </div>
    <hr className="paragraph-width" />
    <div className="paragraph-width overview-displaying">
      <h3 className="space-x-heading">LAUNCH PAYLOAD MASS</h3>
      <h4 className="space-x-heading">
        6,000 kg/<span className="span-colour">13,228 lbs</span>
      </h4>
    </div>
    <hr className="paragraph-width" />
    <div className="paragraph-width overview-displaying">
      <h3 className="space-x-heading">RETURN PAYLOAD MASS</h3>
      <h4 className="space-x-heading">
        3,000 kg/<span className="span-colour">6,614 lbs</span>
      </h4>
    </div>
    <hr className="paragraph-width" />
    <ReactPlayer
      url="https://www.youtube.com/watch?v=1gmvUPTdoP4"
      width="1500px"
      height="500px"
      controls="true"
    />
    <h4 className="space-x-heading paragraph-width">ENGINES</h4>
    <h1 className="space-x-heading paragraph-width">DRACO</h1>
    <h3 className="space-x-heading paragraph-width">
      DRACO<span className="span-colour">| SUPERDRACO</span>
    </h3>
    <p className="space-x-heading paragraph-width">
      The Dragon spacecraft is equipped with 16 Draco thrusters used to orient
      the spacecraft during the mission, including apogee/perigee maneuvers,
      orbit adjustment and attitude control. Each Draco thruster is capable of
      generating 90 pounds of force in the vacuum of space.
    </p>
    <div className="paragraph-width overview-displaying">
      <h3 className="space-x-heading">NUMBER OF ENGINES</h3>
      <h4 className="space-x-heading">16</h4>
    </div>
    <hr className="paragraph-width" />

    <div className="paragraph-width overview-displaying">
      <h3 className="space-x-heading">THRUST IN VACUUM</h3>
      <h4 className="space-x-heading">
        400 N <span className="span-colour">/ 90 lbf</span>
      </h4>
    </div>
    <hr className="paragraph-width" />
    <p className="span-colour">
      For information about our launch services, contact sales@spacex.com
    </p>
  </div>
)
export default Dragon
