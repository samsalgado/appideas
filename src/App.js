import logo from './logo.png';
import './App.css';
import Topbar from './topbar';
import Ideas from './ideas'
function App() {
  return (
    <div className="App">
      <Topbar />
      <header className="App-header">
        <br></br>
        <br></br>
        <br></br>
        <iframe width="560" height="400" src="https://www.youtube.com/embed/OaYIM8GJWqQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <h1>App Ideas</h1>
        <Ideas />

      </header>
    </div>
  );
}

export default App;
