import ReactPlayer from 'react-player'
import Header from '../Header'
import './index.css'

const FalconHeavy = () => (
  <div className="background-colour">
    <div className="displaying-header">
      <Header />
    </div>
    <div className="background-falcon">
      <img
        src="https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8RkFMQ09OJTIwSEVBVlklMjBST0NLRVR8ZW58MHx8MHx8fDA%3D"
        className="image-width"
      />
    </div>
    <div className="names-displaying">
      <div className="space">
        <h1 className="space-x-heading alignment">9</h1>
        <h3 className="space-x-heading ">TOTAL LAUNCHES</h3>
      </div>
      <div className="space">
        <h1 className="space-x-heading alignment">17</h1>
        <h3 className="space-x-heading">TOTAL LANDINGS</h3>
      </div>
      <div className="space">
        <h1 className="space-x-heading alignment">14</h1>
        <h3 className="space-x-heading">TOTAL REFLIGHTS</h3>
      </div>
    </div>
    <p className="space-x-heading paragraph-width">
      Falcon Heavy is composed of three reusable Falcon 9 nine-engine cores
      whose 27 Merlin engines together generate more than 5 million pounds of
      thrust at liftoff, equal to approximately eighteen 747 aircraft. As one of
      the world’s most powerful operational rockets, Falcon Heavy can lift
      nearly 64 metric tons (141,000 lbs) to orbit.
    </p>
    <h2 className="space-x-heading paragraph-width">FALCON HEAVY</h2>
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
        12.2m/<span className="span-colour">39.9 ft</span>
      </h4>
    </div>
    <hr className="paragraph-width" />
    <div className="paragraph-width overview-displaying">
      <h3 className="space-x-heading">MASS</h3>
      <h4 className="space-x-heading">
        1,420,788 kg/<span className="span-colour">3,125,735 lb</span>
      </h4>
    </div>
    <hr className="paragraph-width" />

    <div className="paragraph-width overview-displaying">
      <h3 className="space-x-heading">PAYLOAD TO LEO</h3>
      <h4 className="space-x-heading">
        63,800 kg/<span className="span-colour">140,660 lb</span>
      </h4>
    </div>
    <hr className="paragraph-width" />
    <div className="paragraph-width overview-displaying">
      <h3 className="space-x-heading">PAYLOAD TO GTO</h3>
      <h4 className="space-x-heading">
        26,700 kg/<span className="span-colour">58,860 lb</span>
      </h4>
    </div>
    <hr className="paragraph-width" />
    <div className="paragraph-width overview-displaying">
      <h3 className="space-x-heading">PAYLOAD TO MARS</h3>
      <h4 className="space-x-heading">
        16,800 kg <span className="span-colour">37,040 lb</span>
      </h4>
    </div>
    <hr className="paragraph-width" />
    <ReactPlayer
      url="https://www.youtube.com/watch?v=wbSwFU6tY1c"
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
      Falcon 1, Falcon 9 and Falcon Heavy launch vehicles. Merlin engines use
      RP-1 and liquid oxygen as rocket propellants in a gas-generator power
      cycle. The Merlin engine was originally designed for recovery and reuse.
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
export default FalconHeavy
