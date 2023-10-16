import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Data from '../asset/Data.js';
import normal from '../asset/image/normal.jpg'
import first from '../asset/image/second.png'
import second from '../asset/image/second.png'
import third from '../asset/image/third.jpg'
import fourth from '../asset/image/fourth.jpeg'
import { shareKakao } from "../../utils/shareKakaoLink";
export default function Result(){
useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://developers.kakao.com/sdk/js/kakao.js";
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
    }, []);
const navigate = useNavigate();
const restart = () => {navigate('/')}
const [questionList] = useState(Data);
const location = useLocation();
let {data} = location.state;
var score = data;

function setsocre(score){
if(score < 2){
    return(
    <div>
        <b>민간인</b>
        <img src={normal}></img>
        <p>정석적인 삶을 사셨군요.</p>
        <p>당신은 갓반인</p>
    </div>
    )
    }
    else if(2 <= score &&  score < 4){
    return(
        <div>
            <b>입덕</b>
            <img src={first}></img>
            <p>입덕 부정기는 짧을수록 좋다.</p>
            <p>덕직의 세계에 온 걸 환영합니다.</p>
        </div>
        )
    }else if(4 <= score &&  score < 6){
    return(
        <div>
            <b>참덕</b>
            <img src={second}></img>
            <p>덕질의 오감을 다 느껴보셨군요.</p>
            <p>덕생덕살 인생</p>
        </div>
        )
    }else if(6 <= score &&  score < 9){
    return(
        <div>
            <b>오덕</b>
            <img src={third}></img>
            <p>감춘다고 감춰지지 않는 덕력의 상태</p>
            <p>당신은 더이상 일반인이 아닙니다.</p>
        </div>
        )
    }else if(9 <= score &&  score < 11){
    return(
        <div>
            <b>궁극의 십덕</b>
            <img src={fourth}></img>
            <p>오타쿠 특 : 혼자 벅차오름</p>
            <p>당신은 누구보다 순수한 마음을 가진 덕후</p>
        </div>
        )
    }
}
    return(
    <div className='result'>
        <div className='up'>
            <p className='ques'>당신의 덕력은..</p>
            <div className='content'>{setsocre(score)}</div>
        </div>  
        <div className='down'>
            <button onClick={restart}>다시하기</button>
            <button onClick={() => shareKakao(route, title)}>
            <img className="w-12 h-12" src={`${process.env.PUBLIC_URL}/assets/KakaoLogo.png`} alt={"Kakao Logo"} />
            </button>
        </div>
    </div>
    );
}