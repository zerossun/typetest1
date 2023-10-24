import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import normal from '../../asset/image/normal.jpg'
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
        // social: {
        //   likeCount: 286,
        //   commentCount: 45,
        //   sharedCount: 845,
        // },
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
                <button className="kakao_btn" onClick={kakaoButton}/>
                <FacebookShareButton style={{ marginLeft: "12px" }} url={"https://virtupiaotakutest.netlify.app/Outcome1"}>
                <FacebookIcon size={48} round={true} borderRadius={24}></FacebookIcon>
                </FacebookShareButton>
                <LineShareButton style={{ marginLeft: "12px" }} url={"https://virtupiaotakutest.netlify.app/Outcome1"}>
                    <LineIcon size={48} round={true} borderRadius={24}></LineIcon>
                </LineShareButton>
                <TwitterShareButton style={{ marginLeft: "12px" }} url={"https://virtupiaotakutest.netlify.app/Outcome1"}>
                    <TwitterIcon size={48} round={true} borderRadius={24}></TwitterIcon>
                </TwitterShareButton>
                <button className="restart" onClick={restart}>인정할 수 없엉...!! 테스트 다시하기</button>
            </div>
            <OutcomeDown/>
        </div>
    </div>
    );
}