import React from 'react'

class Search extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      query: ''
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event){

    const { value } = event.target;

    this.setState({ query: value});
  }

  onSubmit(event){

    const { query } = this.state;


    event.preventDefault();
  }

  render(){
    return (

      <form onSubmit={this.onSubmit}>
        <input onChange={this.onChange} type='text' value={this.state.query}/>
        <button type='submit'>Search</button>
      </form>
    );
  }
}

export default Search;
