import { Component } from 'react';
import styled from 'styled-components';

import './App.css';

const EmpItem = styled.div`
  padding: 20px;
  margin-bottom: 15px;
  border-radius: 5px;
  box-shadow: 5px 5px 10px rgba(0,0,0, .2);
`;

const Header = styled.h2`
  font-size: 22px;
`;

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
      <EmpItem>
        <button onClick={this.nextYear} >{this.state.text}</button>
        <Header>My name is {name}, surname - {surname}, 
            age - {years}, 
            position - {position} </Header>
        <a href={link}>My profile</a>
        <form>
          <span>Введите должность</span>
          <input type="text" onChange={(e) => this.commitInputChnges(e, 'someColor')}/>
        </form>
      </EmpItem>
    )
  }
}

const Wrapper = styled.div`
  width: 600px;
  margin: 80px auto 0 auto;
`;

function App() {
  return (
    <Wrapper className="App">
      <WhoAmI name='John' surname="Smith" link='facebook.com' />
      <WhoAmI name='Alex' surname="Sheldon" link='vk.com' />
    </Wrapper>
  );
}

export default App;
