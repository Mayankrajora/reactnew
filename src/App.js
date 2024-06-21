import './App.css';
import Navbar from './components/Navbar';
import TextForm1 from './components/TextForm1';

function App() {
  return (
    <>
      <Navbar title="Apps" abouttext="About us"/>
      <div className ="container my-3">
      <TextForm1 heading="Enter Text here"/>
      </div>
    </>
  );
}

export default App;
