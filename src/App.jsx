import './App.css'
import Greet from './components/Greet'
import Hello from './components/Hello'
import Welcome from './components/Welcome'

function App() {
  return (
    <>
      <Greet name="Bruce" heroName="Batman"> This is children</Greet>
      <Greet name="Clark" heroName="Superman"> <button>Action </button> </Greet>
      <Greet name="Diana" heroName="Wonder Woman"/>
      <Welcome name="Bruce" heroName="Batman"> This is children</Welcome>
      <Welcome name="Clark" heroName="Superman"> <button>Action </button> </Welcome>
      <Welcome name="Diana" heroName="Wonder Woman"> </Welcome>
      {/* <Welcome/> */}
      {/* <Hello/> */}
    </>
  )
}

export default App

