import React, {useState} from 'react'
import { useMemo } from "react";  
import { DropDownList } from "@progress/kendo-react-dropdowns";  
import { Helmet } from 'react-helmet'
import VideoBox from './videobox'
//import './styleing.less';
import { Slider } from 'rsuite';
import './home.css'
import movies from './movies.json'




const categories = ["Action", "Adventure", "Anime", "Biography","Comedy","Crime","Documentary","Drama","Family","Fantasy","History","Horror","Musical","Mystery","Sci-Fi","Science","SUspense","Thriller"];  
const labels = ['0', '1', '2', '3','4','5','6','7','8','9','10'];


const Home = (props) => {
  const [search, setSearch] =useState("");
  const [rating, setRating] = React.useState(0);
  const [category, setCategory] = useState(""); 
  const [isOpen,setisOpen]=useState(false);
  const HandleClick=()=>{setisOpen(true);}
  const HandleOut=()=>{setisOpen(false);}
 

  return (
    <div className="home-container">
      <Helmet>
        <title>Snarling Hidden Goose</title>
        <meta property="og:title" content="Snarling Hidden Goose" />
      </Helmet>
      
      <img
        alt="image"
        src="/playground_assets/mov-1400h-1900w.jpeg"
        className="home-image"
      />
      <img
        alt="image"
        src="/playground_assets/image-700h.png"
        className="home-image1"

      />
      {/* <button className="home-button button">View all movies</button>
      <Link to="/page" className="home-navlink button">
        Search
      </Link> */}

      
      
<div className='dropdown'>
<DropDownList data={categories} onChange={e => setCategory(e.value) } placeholder="select a game" />





<div style={{ width: 300,height:100, marginLeft: 320,marginTop:-40}}>
      <Slider
        min={0}
        max={labels.length - 1}
        rating={rating}
        className="custom-slider"
        handleStyle={{
          borderRadius: 10,
          color: '#fff',
          fontSize: 15,
          width: 32,
          height: 22
        }}
        graduated
        tooltip={false}
        handleTitle={labels[rating]}
        onChange={setRating}
      />
    </div>
    </div>

    


<input
        type="text"
        autoFocus
        onChange={e=>setSearch(e.target.value)}
        placeholder="Search for movie/show"
        className="home-textinput input"
      />

 

      <div className="grid-container">
        {movies
        .filter((movie)=>movie.name.toLowerCase().indexOf(search.toLowerCase())>-1)
        .filter((movie)=>movie.rating >= rating)
        .filter((movie)=>movie.genre.toLowerCase().indexOf(category.toLowerCase())>-1)
        .map((movie)=>
        <div className="grid-item" onMouseOver={HandleClick} onMouseLeave={HandleOut}>
            <p>{movie.name}</p>
            <img src={movie.poster}></img>
             {/* {isOpen && 
              (<div>{movie.desc}</div>)} */}
            
            </div>
        )}
      </div>


      
    </div>
    
    
  )
  
}

export default Home
