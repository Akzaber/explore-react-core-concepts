import './App.css'
import Counter from './Counter';
import Magic from './Magic';
import Users from './Users';

function App() {

  function handleButton(){
    alert("Button Clicked");
  }

  const handleButtonTwo = (num) => {
      alert(num + 2);
  }

  return (
    <>
      <Users></Users>
      <Magic></Magic>
      <Counter></Counter>
      <h1>React core concepts Part-02</h1>
      <button onClick={handleButton} style={{color:"white", backgroundColor:"black", border: "2px solid white"}}>Click Me</button>
      <button onClick={() => handleButtonTwo(2)}>Two</button>
    </>
  )
}


export default App
