import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import star from '../asset/image/start.jpg'
import axios from 'axios'
export default function Start(){

    const navigate = useNavigate();
    const start = () => { navigate('/Test');};
    let [input, setInput] = useState(false)
    return(
        <div className='start'>
            <b>나는 얼마나 덕질에 진심일까?</b>
            <h2>덕후 판독기</h2>
            <div className='img'><img src={star}></img></div>
            <button onClick={start}>시작</button>
        </div>
        
    )
}