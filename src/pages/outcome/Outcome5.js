import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import fourth from '../../asset/image/fourth.jpeg'
import Facebook from '../../asset/image/facebook.png';
import line from '../../asset/image/line.png'
import twitter from '../../asset/image/twitter.png'
import share from '../../asset/image/share.png'
import OutcomeDown from '../../component/OutcomeDown';
import {FacebookShareButton, FacebookIcon, FacebookMessengerShareButton, FacebookMessengerIcon, TwitterShareButton, TwitterIcon, LineShareButton, LineIcon,} from "react-share";

export default function Outcome5(){
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
            'https://i.postimg.cc/2jwc82k1/fourth.jpg',
          link: {
            webUrl: 'https://virtupiaotakutest.netlify.app/Outcome5/',
          },
        },
        buttons: [
          {
            title: '웹으로 보기',
            link: {
              webUrl: 'https://virtupiaotakutest.netlify.app/Outcome5',
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
                <b>궁극의 십덕</b>
                <img src={fourth}></img>
                <p>오타쿠 특 : 혼자 벅차오름<br/>당신은 누구보다 순수한 마음을 가진 덕후</p>
            </div>
        </div>  
        <div className='down'>
            <div className="sns">
                <p>몇 안되는 친구들에게 공유해보세요!</p>
                <button className='share' onClick={()=>{handle()}}><img src={share} style={{width:'50px'}}></img></button>
                <button className="kakao_btn" style={{ marginLeft: "16px" }} onClick={kakaoButton}/>
                <FacebookShareButton style={{ width:'50px', marginLeft: "16px" }} url={"https://virtupiaotakutest.netlify.app/Outcome5"}>
                <img src={Facebook} style={{width:'50px'}}></img>
                </FacebookShareButton>
                <LineShareButton style={{ marginLeft: "16px" }} url={"https://virtupiaotakutest.netlify.app/Outcome5"}>
                    <img src={line} style={{width:'50px'}}></img>
                </LineShareButton>
                <TwitterShareButton style={{ marginLeft: "16px" }} url={"https://virtupiaotakutest.netlify.app/Outcome5"}>
                    <img src={twitter} style={{width:'50px'}}></img>
                </TwitterShareButton>
                <button className="restart" onClick={restart}>인정할 수 없엉...!! 테스트 다시하기</button>
            </div>
        </div>
        <OutcomeDown/>
    </div>
    );
}