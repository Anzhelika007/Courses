import {Component} from 'react';
import logo from './logo.svg';
import './App.css';

const Header = () => {
  return <h2>Hello world!</h2>
}

// const Field = () => {
//   const holder = 'Enter here';
//   const styledField = {
//     width: '300px'
//   }
//   return <input 
//           placeholder={holder} 
//           type='text' 
//           style={styledField}/>
// }

function Btn() {
  const text = 'Log in';
  const logged = false;

  return <button>{logged ? 'Enter' : text}</button>
}

class Field extends Component {
  render() {
    const holder = 'Enter here';
    const styledField = {
      width: '300px'
    };

    return <input 
            placeholder={holder} 
            type='text' 
            style={styledField}/>
  }
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

export {Header};
export default App;
