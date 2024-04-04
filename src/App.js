import './App.css';
import React,{useEffect,useRef,useState} from 'react';



// function Sidebar
const Sidebar = ()=>{
  return(
    // <!-- Side navigation -->
  <div class="sidenav">
    <div className='couple_img'>
      <img className="coupleimg" src="./asset/coupleimg.png"/>
    </div>
    <a href="#">디데이</a>
    <a href="#">일기장 제목</a>
    <a href="#">일기장 설명</a>
    <a href="#" id='bottom_menu'>시작날짜</a>
    <a href="#" id='bottom_menu'>현재날짜</a>

  </div>
  )
} 
const Bgimg = () =>{
  return <img src='./asset/Bgimg.png'></img>
}


function App() {
  return(
    <>
      <Bgimg />
      
      <Sidebar/>
    </>
    
  ) 
  
}

export default App;
