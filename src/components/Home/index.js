import Header from '../Header'
import './index.css'

const Home = () => (
  <div>
    <div className="background-image">
      <div className="displaying-header">
        <Header />
      </div>
      <div className="heading">
        <h1 className="top-heading">CURRENT MISSSION</h1>
        <h2 className="bottom-heading">AX-3 MISSION</h2>
      </div>
      <div className="background-image-2">
        <div className="heading">
          <h1 className="top-heading">RECENT LAUNCH</h1>
          <h2 className="bottom-heading">STARLINK MISSION</h2>
        </div>
      </div>
      <div className="background-image-3">
        <div className="heading">
          <h1 className="top-heading">RECENT LAUNCH</h1>
          <h2 className="bottom-heading">STARLINK MISSION</h2>
        </div>
      </div>
    </div>
  </div>
)
export default Home
