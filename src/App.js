import React, {useState, useEffect} from "react";
import "./App.css";
import pic1 from "./pictures/ch1.png"
import pic2 from "./pictures/bell.png"
import pic3 from "./pictures/feature11.png"
import pic4 from "./pictures/icons8-love-30.png"
import pic5 from "./pictures/image1.png"
import pic6 from "./pictures/image2 (2).png"
import pic7 from "./pictures/image3 (2).png"
import pic8 from "./pictures/image4.png"
import pic9 from "./pictures/play.png"




// const Val = () =>{
//   const [ valueInput, setValueInput] = useState("Dickson")

//   const onChange = (event) =>{
//     const newvalue = event.target.value;
//     setValueInput(newvalue)
//   }
// }
const App = () =>{
  const [counter, setCounter]=useState(0)
  //  const counter = () =>{
  //    setCounter(counter+1)
  //  }
 const slide=[{
   product:"Easy setup",
   text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta sunt beatae accusantium incidunt",
   image:"./pictures/bell.png",
   more: "Read More"
},
{
  product:"Free use",
  text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta sunt beatae accusantium incidunt",
  image:"./pictures/bell.png",
  more: "Read More"
},
{
  product:"Secure Lock",
  text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta sunt beatae accusantium incidunt",
  image:"./pictures/bell.png",
  more: "Read More"
},
{
  product:"Best Design",
  text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta sunt beatae accusantium incidunt",
  image:"./pictures/bell.png",
  more: "Read More"
}]
const slided=[{
  products:"Easy setup",
  texts:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta sunt beatae accusantium incidunt",
  images:"./pictures/bell.png",
  mores: "Read More"
},
{
  products:"Free Use",
  texts:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta sunt beatae accusantium incidunt",
  images:"./pictures/bell.png",
  mores: "Read More"
},
{
  products:"Secure lock",
  texts:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta sunt beatae accusantium incidunt",
  images:"./pictures/bell.png",
  mores: "Read More"
},
{
  products:"Best Design",
  texts:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta sunt beatae accusantium incidunt",
  images:"./pictures/bell.png",
  mores: "Read More"
}]
// const go = () =>{
//   setFirst(first+1)
// }
// const going = () =>{
//   setSecond(second+1)
// }
useEffect(()=>{
  setInterval(()=>{
setCounter((el)=>el+1)
  },2000)
},[])
 
 
  
  return(
    <div>
    <div className="container">
     <div className="firstHero">
       <div classname="header">
         <header>
           <div  className="headwrap">
             <div className="logo">
               ApKly.
             </div>
             <div className="navs">
               <nav>Home</nav>
               <nav>Overflow</nav>
               <nav>feature</nav>
               <nav>price</nav>
               <nav>Contact</nav>
               <nav><button>sign up</button></nav>
             </div>
           </div>
         </header>
       </div>
       <div className="middle">
       <div className="left">
         <div className="awe">
           Awesome
         </div>
        <div className="awe2">
        App Of The Year
        </div>
        <div className="lorem">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit Ad<br/> doloribus laborum omnis obcaecati sit dolore
        </div>
        <div className="get">
        <button> Get it Now</button>
        </div>
       </div>
       <div classname="right">
         <div className="circle"><div className="phone"><img src={pic1}/></div></div>
         
       </div>
     </div>
     </div>
    
</div> 
<div className="slider">
  <div className="slidehead">
    OVERVIEW
  </div>
  <div className="firstbyleft">
    <div className="wrapps">
    <div className="firstbyleftwrap">
      <div className="bestdesign">
      {slide[counter%slide.length].product}
      </div>
      <div className="line"></div>
      <div className="text">
      {slide[counter%slide.length].text}
        
      </div>
      <div className="Read">
      {slide[counter%slide.length].more}
     
      </div>
      <div className="imagecircle">
        <div className="image">
          <img src={pic2}/>
        </div>
      </div>
    </div>
  </div>
  <div className="firstbyleft2">
    <div className="firstbyleftwrap">
      <div className="bestdesign">
      {slided[counter%slided.length].products}
      
      </div>
      <div className="line"></div>
      <div className="text">
      
      {slided[counter%slided.length].texts}
      
      </div>
      <div className="Read">
      {slided[counter%slided.length].mores}
     <div className="imagecircle">
        <div className="image">
          <img src={pic2}/>
        </div>
      </div>
      </div>
      
    </div>
  </div>
  </div>
</div>
<div className="featuring">
  <div className="slidehead">
    FEATURE
  </div>
</div>
<div className="pack">
  <div className="leftFeature">
    <div className="circle2"></div>
    <div className="ftimg">
      <img src={pic3}/>
    </div>
  </div>
  <div className="rightFeature">
    <div className="unlocking">
      UNLOCK THE BEST
    </div>
    <div className="unlockred">
      App Features Here
    </div>
    <div className="lorems">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit Ad<br/> doloribus laborum omnis obcaecati sit dolore
    </div>
    <div className="insidewrap">
      <div className="textandicon">
        <span className="tocolorOrange"><img src ={pic4}/></span>
        <span>Light weight & super fast</span>

      </div>
      <div className="textandicon">
        <span className="tocolorOrange"><img src ={pic4}/></span>
        <span>Strong security with privacy care</span>

      </div>
      <div className="textandicon">
        <span className="tocolorOrange"><img src ={pic4}/></span>
        <span>Best support from our big community</span>

      </div>
      <div className="textandicon">
        <span className="tocolorOrange"><img src ={pic4}/></span>
        <span>Latest update on every week and stress free</span>

      </div>
      
    </div>
  </div>

</div>
<div className="rates">
 <div className="rateshero">
   <div className="firstrates">
     <span><img src={pic5}/></span>
     <span><img src={pic6}/></span>
     <div className="dload">
       <span>Downloads</span>
       <span className="side1">Ratings</span>
     </div>
     <div className="allrates">
       <span>1.5B</span>
       <span className="side">4.6</span>
     </div>
   </div>
   <div className="secondrates">
     <span><img src={pic7}/></span>
     <span><img src={pic8}/></span>
     <div className="dload">
       <span>Active users</span>
       <span className="side2">Uploads</span>
     </div>
     <div className="allrates">
       <span>500M</span>
       <span className="side4">13K</span>
     </div>
   </div>
   <div className="playcircle">
     <div className="watch">watch our History</div>
     <div className="playimg">
       <img src={pic9}/>
     </div>
   </div>
 </div>
</div>
</div>
  )
};
export default App; 






































































































































































































  //  setCounter ( Counter +1)
         
  // }
  // const redcount = () =>{
  //   setCounter ( Counter -1)
  //   if (Counter === 0){
     
  //     setCounter ( Counter)
  //   }   

 /* <div className = "butt">
       <button onClick={addcount}>+</button>
      <h1>{Counter}</h1>
    <button onClick={redcount}>-</button>
     </div>
     {/* <div>
       <input placeholder="say something " onChange={onChange}></input>
     </div> */