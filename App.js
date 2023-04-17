import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from 'react';
import { CircularProgress } from '@mui/material';
import RouterProva from './components/router/router';
 
//fetch con axios.
 
let baseEndpoint="https://jsonplaceholder.typicode.com/"


 
// poi chiamo la funzione nell'useEffect 

function App() {
  let [posts,setPosts] = useState([]);
  let [loading,setLoading] = useState(false);
 
  const getPosts =()=>{
    setLoading(true)
    setTimeout(() => {    
      //con fetch normale senza axios
      //metto timeout x simulare lentezza caricamento
      fetch(`${baseEndpoint}posts`)
      .then(res=>res.json())
      .then(body=>{setPosts(body)})
      .then(res=>{      
          console.log("res",res)
          setLoading(false)
      })
      .catch(err=>{
          setLoading(false)
          console.err("errore axios",err)
      })
    }, 1000);

  }
  useEffect(()=>{
    console.log('posts :',posts) 
  },[posts])    
 
  return (
    <>          
   {/*  qui c'è il componente del React-Router */}
      <RouterProva/> 
        
    {/*   post button + post list */}
      <button onClick={getPosts}>Posts</button>
    { loading ? <CircularProgress /> 
      : posts.map(post=>(
          <article key={post.id} style={{ width:"500px",dispay:"flex", flexWrap:"wrap",border:"2px solid black",borderRadius:5,marginBottom:15,padding:10}}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </article>
        ))
      
    }
    </>
  );
}
export default App;
