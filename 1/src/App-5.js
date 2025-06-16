import ReactPlayer from 'react-player';
import './App.css';

function App() {
  return (
      <div className="App">
        <h1>React Player Demo</h1>
        <ReactPlayer url={'https://www.youtube.com/watch?v=pruy8nIfk7Q'} playing={true} volume={0.5}/>
    </div>
  );
}

export default App;
