import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import StoryList from './components/StoryList.jsx';
// import StoryList from './components/StoryList.jsx';



class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      stories: []
    }
    this.search = this.search.bind(this);
    this.retrieve = this.retrieve.bind(this);
  }

  search(story) {
    console.log(story + ' topic was searched')
    $('#inputbox').val('');
    $.ajax({
      url: '/topics',
      method: 'POST',
      data:{ story },
      success: (data) => {

        console.log('success')
        console.log(data);
        this.retrieve(story);
        // $('#stories').remove();
      },
      error: (a,b) => {
        console.log(a)
        console.log(b)
      }
    })

    
  }
  retrieve(story) {
    fetch('/topics', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res)=>{
      if(res.ok) {
        console.log('success');
          return res.json();
      }}).then((res)=>{
      console.log(res); // It is like final answer ofXHR or jQuery Ajax
      this.setState({
        stories: res
      })
      });
  }

  render() {
    return (
      <div>
        <h1> Top Stories NYT </h1>
        <Search search={this.search} />
        <StoryList stories={this.state.stories} />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);