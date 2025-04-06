import './App.css';


function App() {
const img = "https://picsum.photos/200";
  
  return (
    <div>
     
     <h1 className='app'>Random Images Generator</h1>
      <img className='img' src={img}/>
     
     
    </div>
  );
}

export default App;
