import { useState } from "react";

function New() {
    const [question, setQuestion] = useState("")
    const [options, setOptions] = useState([])
    const [option1, setOption1] = useState({})
    const [option2, setOption2] = useState({})
    const [option3, setOption3] = useState({})

    const handler = (e) => {
        e.preventDefault();
        const data = {
            question: question,
            options: [option1, option2, option3]
        }
        fetch('http://localhost:5000/api/polls', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        }).then((res) => {
            console.log(res);
        })
        console.log("submitted");
    }
    
    return ( 
        <form className="new" onSubmit={handler}>
            <label htmlFor="question" />
                Question:
                <input type="text" name="question" id="question"/>
            <label htmlFor="options" />
                Options:
                <input type="text" onChange={(e)=>{
                    setOption1({option:e.target.value,vote:0})
                }} />
                <input type="text" 
                onChange={(e)=>{
                    setOption2({option:e.target.value,vote:0})
                }} />
                <input type="text" onChange={(e)=>{
                    setOption3({option:e.target.value,vote:0})
                }} />

            <button>submit</button>
        </form>
     );
}

export default New;