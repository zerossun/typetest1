import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import second from '../../asset/image/second.png'
import virtupia from '../../asset/image/virtupia.png'
import appstore from '../../asset/image/appstore.png'
import googlestore from '../../asset/image/googleplay.png'
import {FacebookShareButton, FacebookIcon, FacebookMessengerShareButton, FacebookMessengerIcon, TwitterShareButton, TwitterIcon, LineShareButton, LineIcon,} from "react-share";

export default function Outcome3(){
const appStoreUrl = "https://apps.apple.com/kr/app/%EB%B2%84%ED%8A%9C%ED%94%BC%EC%95%84/id6451460797"
const googleStroeeUrl = "https://play.google.com/store/apps/details?id=com.virtuverseapp&pcampaignid=web_share"
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
            'https://ifh.cc/g/rR3gVj.jpg',
          link: {
            webUrl: 'https://virtupiaotakutest.netlify.app/Outcome3',
          },
        },
        social: {
          likeCount: 286,
          commentCount: 45,
          sharedCount: 845,
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
                <FacebookIcon size={48} round={true} borderRadius={24}></FacebookIcon>
                </FacebookShareButton>
                <LineShareButton style={{ marginLeft: "12px" }} url={"https://virtupiaotakutest.netlify.app/Outcome3"}>
                    <LineIcon size={48} round={true} borderRadius={24}></LineIcon>
                </LineShareButton>
                <TwitterShareButton style={{ marginLeft: "12px" }} url={"https://virtupiaotakutest.netlify.app/Outcome3"}>
                    <TwitterIcon size={48} round={true} borderRadius={24}></TwitterIcon>
                </TwitterShareButton>
                <button className="restart" onClick={restart}>인정할 수 없엉...!! 테스트 다시하기</button>
            </div>
            <div className='virtupia'>
                <img src={virtupia}></img>
                <div>
                    <b>당신과 같은 사람들만 모여있어요!</b>
                    <p>#함께하는 #버츄얼덕질 #버튜피아</p>
                </div>
            </div>
            <div className='store'>
                <button onClick={()=>window.open(appStoreUrl)}><img src={appstore}></img></button>
                <button onClick={()=>window.open(googleStroeeUrl)}><img src={googlestore}></img></button>
            </div>
        </div>
    </div>
    );
}