import React,{useState} from 'react';


function MainText(){
    const [input, setInput] = useState("")
    const handleOnChange=(e)=>setInput(e.target.value)
    
    return (
        <div>
            <form>
            <input type='text' placeholder='글을 입력하세요.' onChange={handleOnChange}/>
            </form>
        </div>
    )
}

export default MainText;