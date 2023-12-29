import React from 'react'
import Main from '../components/section/Main'

import { developerText } from '../data/developer'
import { Link } from 'react-router-dom'

const Developer = () => {
    return (
        <Main
            title='추천개발자'
            description='추천개발자를 소개합니다.'
        >
            <section id='developerPage'>
                <h2>추천개발자</h2>
                <div className="developer_inner">
                    {developerText.map((developer, key) => (
                        <div className="developer" key={key}>
                            <div className="developer_img play_icon">
                                <Link to={`/channel/${developer.channelId}`}>
                                    <img src={developer.img} alt={developer.name} />
                                </Link>
                            </div>
                            <div className="developer_info">
                                <Link to={`/channel/${developer.channelId}`}>
                                    {developer.name}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </Main>
    )
}

export default Developer
