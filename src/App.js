import NavBar from './components/NavBar'
import DeviceTable from './components/DeviceTable'
import { deviceData as devices } from './data/deviceData'

const App = () => {
  return (
    <>
      <NavBar />
      <DeviceTable devices={devices} />
    </>
  )
}
export default App
