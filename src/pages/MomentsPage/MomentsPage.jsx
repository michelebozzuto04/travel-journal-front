import React, { useEffect, useState } from 'react'

function MomentsPage() {

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
        <div>MomentsPage</div>
    )
}

export default MomentsPage