import React,{useState} from 'react';

function CommentInput({handleCommentAdd}){
    //1. input의 useState 정의 
    const [input, setInput] = useState("")
    const handleOnChange = (e) => setInput(e.target.value)
    
    return (
        <div>
            <input type='text' placeholder='댓글을 입력하세요.'onChange={handleOnChange} value={input}/>
            <button onClick={()=>{
                handleCommentAdd({content:input})
                setInput("") 
        }}>게시</button>
        </div>
    )
}
function CommentElement({comment,index,handleCommentRemove}){
    return <li>{comment.content}<button onClick={()=>handleCommentRemove(index)}>삭제 </button></li>
}
function CommentList({commentcontent,handleCommentRemove}){
    return (<ul style={{listStyle:"none"}}>{
        commentcontent.map((comment,index)=>{
            return <CommentElement comment={comment} handleCommentRemove={handleCommentRemove} index={index} />
        })
    }</ul>
    )
}

function Comment(props){
    const [commentcontent,setComment] = useState([
        {content : "댓글1"},
        {content : "댓글2"}
    ])
    const handleCommentAdd = comment => setComment(commentcontent.concat(comment));
    const handleCommentRemove = i => setComment(commentcontent.filter((_,index)=>i !==index));

    return(
        <>
            <CommentList commentcontent={commentcontent} handleCommentRemove={handleCommentRemove} />
            <CommentInput handleCommentAdd={handleCommentAdd}/>
        </>

    ) 
}
export default Comment;
