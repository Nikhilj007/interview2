import { useEffect, useState } from "react";

function Home() {
    const [polls, setPolls] = useState([
    ])
    useEffect(()=>{
        const fetchPolls=async ()=>{
            const response=await fetch('http://localhost:5000/api/polls');
            const data=await response.json();
            setPolls(data);
        };
        fetchPolls();
    },[])
    return ( 
        <div>
            <h1>Polls</h1>
            <ol>
                {
                    polls.map((poll)=>{
                        return (<li key={poll._id}>
                            <h2>{poll.question}</h2>
                            <select>
                                { 
                                    poll.options.map((optio,i)=>{
                                        return (
                                            <>
                                            <div>{optio.vote}</div>
                                            <option key={i}>{optio.option}</option>
                                            </>)
                                    })
                                }
                            </select>
                            <button>Delete</button>
                        </li>)
                    })
                }
            </ol>
        </div>
     );
}

export default Home;