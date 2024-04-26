import { Component, Fragment } from 'react';
import './App.css';

class WhoAmI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      years: 27,
      text: '+++',
      position: ''
    }
  }

  nextYear = () => {
    this.setState(state => ({
        years: state.years + 1
    }))
  }

  commitInputChnges = (e, color) => {
    /*console.log(e.target.value)*/
    console.log(color)
    this.setState({
      position: e.target.value
    })
  }

  render() {
    const{name, surname, link} = this.props;
    const {position, years} = this.state;

    return (
      <Fragment>
        <button onClick={this.nextYear} >{this.state.text}</button>
        <h1>My name is {name}, surname - {surname}, 
            age - {years}, 
            position - {position} </h1>
        <a href={link}>My profile</a>
        <form>
          <span>Введите должность</span>
          <input type="text" onChange={(e) => this.commitInputChnges(e, 'someColor')}/>
        </form>
      </Fragment>
    )
  }
}

function App() {
  return (
    <div className="App">
      <WhoAmI name='John' surname="Smith" link='facebook.com' />
      <WhoAmI name='Alex' surname="Sheldon" link='vk.com' />
    </div>
  );
}

export default App;
