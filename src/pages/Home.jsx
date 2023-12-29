import React from 'react'

import Main from '../components/section/Main'
import Today from '../components/contents/Today'
import Developer from '../components/contents/Developer'
import VideoSlider from '../components/video/VideoSlider'

import { webdText } from '../data/webd'
import { websiteText } from '../data/website'
import { gsapText } from '../data/gsap'
import { portfolioText } from '../data/portfolio'
import { youtubeText } from '../data/youtube'


const Home = () => {
    return (
        <Main
        title = "Catgeot 유튜브"
        description="Catgeot 유튜버 사이트에 오신 것을 환영합니다."
        >
            <Today />
            <Developer />
            <VideoSlider videos={webdText} title='WebDesign' id='webd' />
            <VideoSlider videos={ websiteText } title='Website' id='website' />
            <VideoSlider videos={gsapText} title='Gsap' id='gsap' />
            <VideoSlider videos={portfolioText} title='Portfolio' id='portfolio' />
            <VideoSlider videos={youtubeText} title='youtube' id='youtube' />
        </Main>
    )
}

export default Home
