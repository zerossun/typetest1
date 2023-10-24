import { useEffect } from 'react'
import virtupia from '../../src/asset/image/virtupia.png'
import appstore from '../../src/asset/image/appstore.png'
import googlestore from '../../src/asset/image/googleplay.png'


export default function OutcomeDown(){
const appStoreUrl = "https://apps.apple.com/kr/app/%EB%B2%84%ED%8A%9C%ED%94%BC%EC%95%84/id6451460797"
const googleStroeeUrl = "https://play.google.com/store/apps/details?id=com.virtuverseapp&pcampaignid=web_share"

    return(
   <div>
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
    );
}