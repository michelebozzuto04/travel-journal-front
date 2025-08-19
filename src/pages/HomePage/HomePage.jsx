import React, { useEffect, useState } from 'react'

function HomePage() {

    const moments_api_url = "http://localhost:3000/api/moments";
    const [moments, setMoments] = useState([]);
    const [loading, setLoading] = useState();

    useEffect(() => {
        fetch(moments_api_url)
            .then(res => res.json())
            .then(data => setMoments(data))

        moments.length !== null && setLoading(false)
    }, [])

    return (
        <div style={{ width: '100%', backgroundColor: 'black' }}>
            <h1>HomePage</h1>
            <ul>
                {moments.map((moment) => {
                    return (
                        <li key={moment.id}>{moment.title}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default HomePage