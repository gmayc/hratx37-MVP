import React from 'React';
const StoryListEntry = (props) => (
  <div id= 'stories'>
    <h1>{props.storyEntry.section}</h1>
    <h2> Title: {props.storyEntry.title}</h2>
    <img src={props.storyEntry.mediaUrl} height="150" width="200" ></img>
    <p>{props.storyEntry.mediaCaption}</p>
    <p> Abstract: {props.storyEntry.abstract}</p>
    <h4> created: {props.storyEntry.author} </h4>
    <p> Published: {props.storyEntry.published}</p>
    <a href={props.storyEntry.url}> read me! </a>
  </div>
)

export default StoryListEntry;