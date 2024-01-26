import ReactPlayer from 'react-player'
import Header from '../Header'
import './index.css'

const Falcon9 = () => (
  <div className="background-colour">
    <div className="displaying-header">
      <Header />
    </div>
    <div className="background-falcon">
      <img src="https://media.istockphoto.com/id/564595626/photo/space-shuttle-taking-off-on-a-mission-spaceship-flying.jpg?s=612x612&w=0&k=20&c=VZXKcOnXzRK5L-1Ymd8cC3bwKnLPHDDj6B5kYGkwtcs=" />
    </div>
    <div className="names-displaying">
      <div className="space">
        <h1 className="space-x-heading alignment">291</h1>
        <h3 className="space-x-heading ">TOTAL LAUNCHES</h3>
      </div>
      <div className="space">
        <h1 className="space-x-heading alignment">249</h1>
        <h3 className="space-x-heading">TOTAL LANDINGS</h3>
      </div>
      <div className="space">
        <h1 className="space-x-heading alignment">223</h1>
        <h3 className="space-x-heading">TOTAL REFLIGHTS</h3>
      </div>
    </div>
    <p className="space-x-heading paragraph-width">
      Falcon 9 is a reusable, two-stage rocket designed and manufactured by
      SpaceX for the reliable and safe transport of people and payloads into
      Earth orbit and beyond. Falcon 9 is the world’s first orbital class
      reusable rocket. Reusability allows SpaceX to refly the most expensive
      parts of the rocket, which in turn drives down the cost of space access.
    </p>
    <h2 className="space-x-heading paragraph-width">FALCON 9</h2>
    <h1 className="space-x-heading paragraph-width">OVERVIEW</h1>
    <div className="paragraph-width overview-displaying">
      <h3 className="space-x-heading">HEIGHT</h3>
      <h4 className="space-x-heading">
        70m/<span className="span-colour">229.6 ft</span>
      </h4>
    </div>
    <hr className="paragraph-width" />
    <div className="paragraph-width overview-displaying">
      <h3 className="space-x-heading">DIAMETER</h3>
      <h4 className="space-x-heading">
        3.7m/<span className="span-colour">12 ft</span>
      </h4>
    </div>
    <hr className="paragraph-width" />
    <div className="paragraph-width overview-displaying">
      <h3 className="space-x-heading">MASS</h3>
      <h4 className="space-x-heading">
        549,054 kg/<span className="span-colour">1,207,920 lb</span>
      </h4>
    </div>
    <hr className="paragraph-width" />

    <div className="paragraph-width overview-displaying">
      <h3 className="space-x-heading">PAYLOAD TO LEO</h3>
      <h4 className="space-x-heading">
        22,800 kg/<span className="span-colour">50,265 lb</span>
      </h4>
    </div>
    <hr className="paragraph-width" />
    <div className="paragraph-width overview-displaying">
      <h3 className="space-x-heading">PAYLOAD TO GTO</h3>
      <h4 className="space-x-heading">
        8,300 kg/<span className="span-colour">18,300 lb</span>
      </h4>
    </div>
    <hr className="paragraph-width" />
    <div className="paragraph-width overview-displaying">
      <h3 className="space-x-heading">PAYLOAD TO MARS</h3>
      <h4 className="space-x-heading">
        4,020 kg/<span className="span-colour">8,860 lb</span>
      </h4>
    </div>
    <hr className="paragraph-width" />
    <ReactPlayer
      url="https://www.youtube.com/watch?v=Z4TXCZG_NEY"
      width="1500px"
      height="500px"
      controls="true"
    />
    <h4 className="space-x-heading paragraph-width">ENGINES</h4>
    <h1 className="space-x-heading paragraph-width">MERLIN</h1>
    <h3 className="space-x-heading paragraph-width">
      SEA LEVEL<span className="span-colour">| VACCUM</span>
    </h3>
    <p className="space-x-heading paragraph-width">
      Merlin is a family of rocket engines developed by SpaceX for use on its
      Falcon 1, Falcon 9 and Falcon Heavy launch vehicles. Merlin engines use a
      rocket grade kerosene (RP-1) and liquid oxygen as rocket propellants in a
      gas-generator power cycle. The Merlin engine was originally designed for
      recovery and reuse.
    </p>
    <div className="paragraph-width overview-displaying">
      <h3 className="space-x-heading">PROPELLANT</h3>
      <h4 className="space-x-heading">
        LOX<span className="span-colour">/RP-1</span>
      </h4>
    </div>
    <hr className="paragraph-width" />

    <div className="paragraph-width overview-displaying">
      <h3 className="space-x-heading">THRUST</h3>
      <h4 className="space-x-heading">
        845 kN <span className="span-colour">/ 190,000 lbf</span>
      </h4>
    </div>
    <hr className="paragraph-width" />
    <p className="span-colour">
      For information about our launch services, contact sales@spacex.com
    </p>
  </div>
)
export default Falcon9
