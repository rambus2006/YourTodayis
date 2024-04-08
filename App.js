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
// const Bgimg = () =>{
//   return <img src='./asset/Bgimg.png'></img>
// }
function Article(props) {
  return <article>
    <h2>{props.title}</h2>
    {props.body}
  </article>
}
function Create(props) {
  return <article>    
    <h2>글 작성</h2>
    <form onSubmit={event=>{
      event.preventDefault();
      const title = event.target.title.value;
      const body = event.target.body.value;
      props.onCreate(title,body)
    }}>
      <p>제목</p>
      <p><input type="text" name="title" placeholder="title"/></p>
      <p>내용</p>
      <p><textarea name="body" placeholder="body"></textarea></p>
      <p><input type="submit" value="작성 완료"/></p>     
    </form>
  </article>
}

const Dairy = () => {
  const [mode,setMode] = useState('welcome');
  const [id,setId] = useState(null);
  const [nextId,setNextId] = useState(4);
  const [topics,setTopics] = useState([
    {id:1,title:'apple',body:'사과'},
    {id:2,title:'banana',body:'맛있다.'}

  ])
  let content = null;
  let contextControl = null;

  if(mode==='welcome'){
    content = <Article title="Welcome" body="Hello, web"></Article>
    contextControl = <>
      <a class="btn" href="/create" onClick={event => {
        event.preventDefault();
        setMode('CREATE');
      }}>글 작성</a>
    </>
  }
  else if (mode === 'READ') {
    let title, body = null;
    for (let i = 0; i < topics.length; i++) {
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body}></Article>
    contextControl = <>
      <a class="btn" href="/create" onClick={event => {
        event.preventDefault();
        setMode('CREATE');
      }}>글 작성</a>
      <a class="btn" href={'/update/' + id} onClick={event => {
        event.preventDefault();
        setMode('UPDATE');
      }}>글 수정</a>
      <input class="btn" type="button" value="글 삭제" onClick={() => {
        const newTopics = []
        for (let i = 0; i < topics.length; i++) {
          if (topics[i].id !== id) {
            newTopics.push(topics[i]);
          }
        }
        setTopics(newTopics);
        setMode('WELCOME');
      }} />
   </>
  }
  else if (mode === 'CREATE') {
    content = <Create onCreate={(_title,_body)=>{
      const newTopic = {id:nextId, title:_title,body:_body};
      const newTopics = [...topics];
      newTopics.push(newTopic);
      setTopics(newTopics);
      setMode('READ');
      setId(nextId);
      setNextId(nextId+1);
    }}></Create>
  }
  return (
      <div className='dairy'> 
          <a href='/create' onClick={event=>{
            event.preventDefault(); //클릭해도 url 안바뀌게 하는 코드 
            setMode('create');
          }}>+추가하기</a>
      </div>
  );
};

function App() {
  return(
    <>
    <div className='my_bg'>
    <Dairy className="dairy"/>
    <Sidebar/>
    </div>
      
      
    </>
    
  ) 
  
}

export default App;
