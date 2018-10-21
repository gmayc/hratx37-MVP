import React from 'react';
import StoryListEntry from './StoryListEntry.jsx';

class StoryList extends React.Component {
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
        <h4> Story List </h4>
        <ol id='story-list'>
          {this.props.stories.map((story, i)=>
            <li><StoryListEntry storyEntry={story} key={i}/></li>
          )}
      </ol>
    </div>
    )
  }
}

export default StoryList;