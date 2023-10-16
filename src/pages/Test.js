import { Router, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Data from '../asset/Data.js';

export default function Test(){
const navigate = useNavigate();
const restart = () => {navigate('/')}


const [questionList, setQuestionList] = useState(Data);
const [page,setPage] = useState(0);
const [num, setNum] = useState(1);
const plus = () => {setNum(num+1)};

const score = num;

const next = () => {
    setPage(page + 1)
    if(page + 1 === questionList.length){
        navigate('/result', {state : {data : num} } )
    }
}

    return(
        <div className='test'>
            <div className='number'>
                <h2>{`${page+1} / ${questionList.length}`}</h2>
            </div>
                       
        {questionList.map((val, idx)=>
        
            <div style={{display:page===idx? 'block' : 'none'}} key={idx}>
                
                {val.q.map((qval, qidx)=>{
                    <div className='question_q' key={qidx}>
                        <div>{qval}</div>
                    </div>
                })}
               <div className='question'>
                    {val.q.map((qval,qidx)=>
                    <div key={qidx}>
                        <div className='question_q'>{qval}</div>
                    </div>)}
                    <div className='answer'>
                        {val.a.map((aval,aidx)=>
                            <button onClick={()=> 
                                {next(); plus();}}>{aval.text}</button>
                        )}
                        {val.n.map((nval,nidx)=>
                            <button onClick={next}>{nval.text}</button>
                        )}
                    </div>
                </div>
            </div>
        )}
        </div>
    )
}