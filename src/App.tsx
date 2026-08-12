import './App.css'
import FirstComponent from "./components/MyFirstComponents.tsx";

function App() {

  return (
    <>
      Hello Vlad!!!!
      <FirstComponent text={'Hello Vlad'}>Lorem ipsum dolor.</FirstComponent>
      {FirstComponent({text: 'Hello World!!!!'})}
    </>
  )
}

export default App
