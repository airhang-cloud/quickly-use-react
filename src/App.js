import './App.css';
// import Home from  './Components/Home'
import { HomeHock } from './Components/HomeHock';
import Count from './Components/Count';
import { useSelector } from 'react-redux';
function App() {
  const count = useSelector(state => state.counter.value)
  const title = useSelector(state => state.title.value)
  return (
    <div className="App">
      <h1>{title}</h1>
      <h1>{ count }</h1>
      <HomeHock list={[2,3,6]} />
      <Count/>
    </div>
  );
}

export default App;
