import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Falcon9 from './components/Falcon9'
import FalconHeavy from './components/FalconHeavy'
import Dragon from './components/Dragon'
import Starship from './components/Starship'
import './App.css'

const App = () => (
  <>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/vehicles/falcon-9" component={Falcon9} />
      <Route exact path="/vehicles/falcon-heavy" component={FalconHeavy} />
      <Route exact path="/vehicles/dragon" component={Dragon} />
      <Route exact path="/vehicles/starship" component={Starship} />
    </Switch>
  </>
)
export default App
