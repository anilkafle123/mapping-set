import React from 'react'

function Card({name,emoji,meaning,id,anil}) {
    return (
        <div>
            <div className="term">
                <h3>{id}</h3>
                <h4>{anil}</h4>

                <dt>
                    <span className="emoji" role="img" aria-label="Tense Biceps">
                        {emoji}
                    </span>
                    <span>{name}</span>
                </dt>
                <dd>
                  {meaning}
                </dd>
            </div>



        </div>
    )
}

export default Card