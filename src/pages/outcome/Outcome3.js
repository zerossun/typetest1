import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import second from '../../asset/image/second.png'
import Facebook from '../../asset/image/facebook.png';
import line from '../../asset/image/line.png'
import twitter from '../../asset/image/twitter.png'
import OutcomeDown from '../../component/OutcomeDown';
import {FacebookShareButton, FacebookIcon, FacebookMessengerShareButton, FacebookMessengerIcon, TwitterShareButton, TwitterIcon, LineShareButton, LineIcon,} from "react-share";

export default function Outcome3(){
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
            'https://i.postimg.cc/SsDSm3gy/second.png',
          link: {
            webUrl: 'https://virtupiaotakutest.netlify.app/Outcome3',
          },
        },
        buttons: [
          {
            title: '웹으로 보기',
            link: {
              webUrl: 'https://virtupiaotakutest.netlify.app/Outcome3',
            },
          },
        ],
      });
    }
  }


    return(
    <div className='result'>
        <div className='up'>
            <p className='ques'>당신의 덕력은..?</p>
            <div className='content'>
                <b>참덕</b>
                <img src={second}></img>
                <p>덕질의 오감을 다 느껴보셨군요.<br/>덕생덕살 인생</p>
            </div>
        </div>  
        <div className='down'>
            <div className="sns">
                <p>몇 안되는 친구들에게 공유해보세요!</p>
                <button className="kakao_btn" onClick={kakaoButton}/>
                <FacebookShareButton style={{ marginLeft: "12px" }} url={"https://virtupiaotakutest.netlify.app/Outcome3"}>
                  <img src={Facebook} style={{width:'50px'}}></img>
                </FacebookShareButton>
                <LineShareButton style={{ marginLeft: "12px" }} url={"https://virtupiaotakutest.netlify.app/Outcome3"}>
                  <img src={line} style={{width:'50px'}}></img>
                </LineShareButton>
                <TwitterShareButton style={{ marginLeft: "12px" }} url={"https://virtupiaotakutest.netlify.app/Outcome3"}>
                  <img src={twitter} style={{width:'50px'}}></img>
                </TwitterShareButton>
                <button className="restart" onClick={restart}>인정할 수 없엉...!! 테스트 다시하기</button>
            </div>
        </div>
        <OutcomeDown/>
    </div>
    );
}