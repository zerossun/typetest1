import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import normal from '../../asset/image/normal.jpg'
import Facebook from '../../asset/image/facebook.png';
import line from '../../asset/image/line.png'
import twitter from '../../asset/image/twitter.png'
import share from '../../asset/image/share.png'
import OutcomeDown from '../../component/OutcomeDown';
import {FacebookShareButton, FacebookIcon, FacebookMessengerShareButton, FacebookMessengerIcon, TwitterShareButton, TwitterIcon, LineShareButton, LineIcon,} from "react-share";

export default function Outcome1(){
const navigate = useNavigate();
const restart = () => {navigate('/')}
const location = useLocation();
const kakaoButton = () => {
    if (window.Kakao) {
      const kakao = window.Kakao
      if (!kakao.isInitialized()) {
        kakao.init('206dac13674d5431132f3d0db85f378f')
      }

      kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: '덕후 판독기',
          description: '나는 덕질에 얼마나 진심일까?',
          imageUrl:
            'https://i.postimg.cc/C1JyjYg8/normal.jpg',
          link: {
            webUrl: 'https://virtupiaotakutest.netlify.app/Outcome1',
          },
        },
        buttons: [
          {
            title: '웹으로 보기',
            link: {
              webUrl: 'https://virtupiaotakutest.netlify.app/Outcome1',
            },
          },
        ],
      });
    }
  }
  const handle = () => {
    if (navigator.share) {
        navigator.share({
            title: '덕후 판독기',
            text: '나는 덕질에 얼마나 진심일까?',
            url: 'https://virtupiaotakutest.netlify.app/Outcome5',
        });
    }else{
        alert("공유하기가 지원되지 않는 환경 입니다.")
    }
  }

    return(
    <div className='result'>
        <div className='up'>
            <p className='ques'>당신의 덕력은..?</p>
            <div className='content'>
                <b>민간인</b>
                <img src={normal}></img>
                <p>정석적인 삶을 사셨군요.<br/>당신은 갓반인</p>
            </div>
        </div>  
        <div className='down'>
            <div className="sns">
                <p>몇 안되는 친구들에게 공유해보세요!</p>
                <button className='share' onClick={()=>{handle()}}><img src={share} style={{width:'50px'}}></img></button>
                <button className="kakao_btn" style={{ marginLeft: "16px" }} onClick={kakaoButton}/>
                <FacebookShareButton style={{ marginLeft: "16px" }} url={"https://virtupiaotakutest.netlify.app/Outcome1"}>
                  <img src={Facebook} style={{width:'50px'}}></img>
                </FacebookShareButton>
                <LineShareButton style={{ marginLeft: "16px" }} url={"https://virtupiaotakutest.netlify.app/Outcome1"}>
                  <img src={line} style={{width:'50px'}}></img>
                </LineShareButton>
                <TwitterShareButton style={{ marginLeft: "16px" }} url={"https://virtupiaotakutest.netlify.app/Outcome1"}>
                  <img src={twitter} style={{width:'50px'}}></img>
                </TwitterShareButton>
                <button className="restart" onClick={restart}>인정할 수 없엉...!! 테스트 다시하기</button>
            </div>
        </div>
        <OutcomeDown/>
    </div>
    );
}