import React, { useState } from 'react'
import './AddPage.css'

function AddPage() {

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        media: null,
        positive_feedback: '',
        negative_feedback: '',
        physical_effort: 0,
        budget_effort: 0,
        cost: 0
    })

    function handleFormData(e) {
        e.preventDefault()

        const key = e.target.name
        let val;
        if (e.target.type === "file") {
            val = e.target.files[0];
        } else if (e.target.type === "checkbox") {
            val = e.target.checked;
        } else {
            val = e.target.value;
        }

        setFormData({
            ...formData,
            [key]: val
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        const url = "http://localhost:3000/api/moments";

        const data = new FormData();
        data.append("title", formData.title);
        data.append("description", formData.description);
        data.append("positive_feedback", formData.positive_feedback);
        data.append("negative_feedback", formData.negative_feedback);
        data.append("physical_effort", formData.physical_effort);
        data.append("budget_effort", formData.budget_effort);
        data.append("cost", formData.cost);
        if (formData.media) {
            data.append("media", formData.media);
        }

        fetch(url, {
            method: "POST",
            body: data
        })
            .then(res => {
                if (res.status === 201) {
                    alert("Post salvato con successo.");
                }
                return res.json();
            })
            .then(console.log)
            .catch(console.error);
    }

    return (
        <div className='addFormContainer'>
            <div className="container">
                <div className="headerContainer">
                    <h1>Add a Moment</h1>
                    {/* Form submit button */}
                    <div className='headerActions'>
                        <button
                            className='btn btn-text'
                            onClick={() => setFormData({
                                title: '',
                                description: '',
                                media: '',
                                positive_feedback: '',
                                negative_feedback: '',
                                physical_effort: 0,
                                budget_effort: 0,
                                cost: 0
                            })}
                        >
                            Reset
                        </button>
                        <button
                            className='btn btn-primary'
                            type='submit'
                            onClick={handleSubmit}
                        >
                            Publish
                        </button>
                    </div>
                </div>
                <form>
                    <div className="leftContainer">
                        {/* Title input */}
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            name='title'
                            id='title'
                            value={formData.title}
                            onChange={handleFormData}
                            placeholder='Type a title...'
                        />

                        {/* Description input */}
                        <label htmlFor="description">Description</label>
                        <textarea
                            type="text"
                            name='description'
                            id='description'
                            rows={3}
                            value={formData.description}
                            onChange={handleFormData}
                            placeholder='Type a description...'
                        />

                        {/* Positive feedback input */}
                        <label htmlFor="positive_feedback">Positive feedback</label>
                        <input
                            type="text"
                            name='positive_feedback'
                            id='positive_feedback'
                            value={formData.positive_feedback}
                            onChange={handleFormData}
                            placeholder='Type a positive feedback...'
                        />

                        {/* Negative feedback input */}
                        <label htmlFor="negative_feedback">Negative feedback</label>
                        <input
                            type="text"
                            name='negative_feedback'
                            id='negative_feedback'
                            value={formData.negative_feedback}
                            onChange={handleFormData}
                            placeholder='Type a negative feedback...'
                        />

                        {/* Physical effort select */}
                        <label htmlFor="physical_effort">Physical effort</label>
                        <select
                            name='physical_effort'
                            id='physical_effort'
                            value={formData.physical_effort}
                            onChange={handleFormData}
                        >
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                        </select>

                        {/* Economic effort select */}
                        <label htmlFor="budget_effort">Budget effort</label>
                        <select
                            name='budget_effort'
                            id='budget_effort'
                            value={formData.budget_effort}
                            onChange={handleFormData}
                        >
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                        </select>

                        {/* Cost input */}
                        <label htmlFor='cost'>Cost</label>
                        <input
                            placeholder='Type the total cost of your journey...'
                            name='cost'
                            id='cost'
                            type='number'
                            step='any'
                            min={0}
                            value={formData.cost}
                            onChange={handleFormData}
                        />
                    </div>

                    <div className="rightContainer">
                        {/* Media upload input */}
                        <label id='mediaLabel' htmlFor="media">Images or Videos</label>
                        <input
                            type="file"
                            name='media'
                            id='media'
                            accept="image/png, image/jpeg, video/mp4, video,mov, video/avi"
                            onChange={handleFormData}
                        />

                        {/* Place upload input */}
                        <label id='mediaLabel' htmlFor="media">Place</label>
                        <input
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddPage