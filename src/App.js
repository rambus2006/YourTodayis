import './App.css';
import React from 'react';
import Comment from './component/Comment.jsx'
import MainText from './component/MainText.jsx'

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
  return <img src='./asset/Bgimg.png' className='my_bg'></img>
}
function Dairy1(){
  return(
    <>
    {/* <img src='./asset/Bgimg.png' className='my_bg'></img> */}
    <Bgimg/>
    <div className='page'>
      <div className='header'>
        <h4 className='headerleft'>00의 일기</h4>
        <h4 className='headerright'>00의 일기</h4>
        
      </div>
      <div className='body'>
        <div className='bodyleft'>
          <MainText/>
        </div>
        <div className='bodyright'>

        </div>
      </div>
      <div className='comment'>
        <div className='commentleft'>
          <Comment/>
        </div>
        <div className='commentright'>
          <Comment/>
        </div>
      </div>
    
    </div>
    </>

  ) 
}

function App() {
  return(
    <>
    <Dairy1/>
    <Sidebar/>
    {/* <Bgimg /> */}
      
    </>
    
  ) 
  
}

export default App;
