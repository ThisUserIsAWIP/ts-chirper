import { Link, useHistory } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

const Post = (props: PostProps) => {

    const [username, setUsername] = useState<string>('Username')
    const [chirpText, setChirpText] = useState<string>('chirpText')
    let history = useHistory()
    const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        const ChirpData = {
            author:  username ,
            text:  chirpText 
        }

        fetch('/api/chirps', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(ChirpData)
        })
            .then(res => alert(res))
            .then(() => history.push(`/`))
    }

    return (
        <>
            <div className="container form m-3">
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">@</span>
                    <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)} type="text" className="form-control" placeholder="username" aria-label="Username" aria-describedby="basic-addon1" />
                    <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setChirpText(e.target.value)} type="text" className="form-control" placeholder="chirpText" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    <button onClick={handleButtonClick} className="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
                </div>
            </div>
        </>
    )
}
interface PostProps { };

interface PostState { };
export default Post;