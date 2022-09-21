import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <h1>React Similar in look different in Data</h1>
      <District
      name='Dhaka'
      town ='Gulshan'
      ></District>
      <District
      name='Rajshahi'
      town ='Charghat'
      ></District>
      <District
      name='Chittagong'
      town ='Potengga'
      ></District>
      <LoadPosts></LoadPosts>
    </div>
  );
}

function LoadPosts(){
  const[posts, setPosts] = useState([])
  useEffect(()=>{

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPosts(data))

  },[])

  return(
    <div>
      <h2>Posts</h2>
      <h4>Total Posts: {posts.length}</h4>
      <div  className='post-container'>
      {
        posts.map(post => <Post post={post}></Post>)
      }
      </div>
      
    </div>
  )
}

function Post(props){
  const {id,title,body} = props.post;
  return(
    <div className='post'>
      <h3>ID: {id} </h3>
      <p>Title: {title} </p>
      <small>Post: {body}</small>
    </div>
  )
}

function District(props){
  const [power, setPower] = useState(1);
  const boostPower = () => setPower(power*2);
  return(
    <div className='district'>
      <h3>Distric: {props.name} </h3>
      <p>Town: {props.town} </p>
      <h4>Power: {power} </h4>
      <button onClick={boostPower}>Boost</button>
    </div>
  )
}

export default App;
