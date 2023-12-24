import React from 'react'

import { snsLink } from '../../data/Header'

const Sns = () => {
    return (
        <div className="header_sns">
            <ul>
                {snsLink.map((sns, key) => (
                    <li key={key}>
                        <a href={sns.url} 
                            target='_black' 
                            rel='noopener noreferrer' 
                            aria-label={sns.title}
                        >
                            <span>{sns.icon}</span>    
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Sns
