import React from 'react'
import { developerText } from '../../data/developer'
import { Link } from 'react-router-dom'

const Developer = () => {
    return (
        <section id='developer'>
            <h2>추천개발자</h2>
            <div className="developer_inner">
                {developerText.map((developer, key) => (
                    <div className="developer" key={key}>
                        <div className="developer_img">
                            <Link to={`/channel/${developer.channelId}`}>
                                <img src={developer.img} alt={developer.neme} />
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
    )
}

export default Developer
