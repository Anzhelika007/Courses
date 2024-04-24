import logo from './logo.svg';
import './App.css';

const Header = () => {
  return <h2>Hello world!</h2>
}

const Field = () => {
  return <input placeholder='Type here' type='text' />
}

function Btn() {
  //const text = 'Log in';
  const result = () => {
    return 'Log in';
  }
  const p = <p>Log in</p>
  return <button>{result()}</button>
}


function App() {
  return (
    <div className="App">
      <Header />
      <Field />
      <Btn />
    </div>
  );
}

export default App;
