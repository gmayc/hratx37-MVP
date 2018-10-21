import React from 'react'

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      story: ''
    }

    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    this.setState({
      story: e.target.value
    });
  }

  render() {
    return (
      <div>
        <h2>Fetch stories</h2>
        <h3>Topics</h3>
          <input id='inputbox' list='stories' name ='story' value={this.state.story} onChange={this.onChange}/>
          <datalist id='stories'>
            <option value='home'/>
            <option value='opinion'/>
            <option value='world'/>
            <option value='national'/>
            <option value='politics'/>
            <option value='technology'/>
            <option value='science'/>
            <option value='health'/>
            <option value='sports'/>
            <option value='arts'/>
            <option value='books'/>
            <option value='movies'/>
          </datalist>
        <button type='submit' onClick={() => this.props.search(this.state.story)}> Submit </button>
      </div>
    )
  }
}

export default Search;