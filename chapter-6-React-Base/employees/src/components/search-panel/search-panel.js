import { Component } from "react";


class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }

  }

  onUpdateSearch = (e) => {
    const term = e.target.value;
    this.setState({term});
    this.props.onUpdateSearch(term); // здесь метод из компонента App!!!
  }

  render() {
    return (
      <input 
        className="form-control search-input" 
        type="text" 
        placeholder="Найти сотрудника"
        value={this.state.term}
        onChange={this.onUpdateSearch}/>
    )
  }
}

export default SearchPanel;