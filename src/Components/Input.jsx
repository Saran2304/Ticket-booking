import React, { useState } from 'react'
import axios from 'axios'

export default function Input() {

    // For POST data

    const [file, setfile] = useState('')
    const [name, setname] = useState('')
    const [grade, setgrade] = useState('')
    const [language, setlanguage] = useState('')

    const [tamil, settamil] = useState('')
    const [hindi, sethindi] = useState('')
    const [eng, seteng] = useState('')
    const [telugu, settelugu] = useState('')
    const [malayalam, setmalayalam] = useState('')

    const formdata = new FormData();
    formdata.append('MovieImage', file)
    formdata.append('MovieName', name)
    formdata.append('MovieGrade', grade)
    formdata.append('MovieLanguages', language)
    formdata.append('Tamil', tamil)
    formdata.append('Hindi', hindi)
    formdata.append('English', eng)
    formdata.append('Telugu', telugu)
    formdata.append('Malayalam', malayalam)

    function upload() {
        axios.post('https://ticket-backend-zjwf.onrender.com/movies/uploadimage', formdata, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
            .then(alert("data uploaded"), window.location.reload())
            .catch((err) => console.log(err))
    }


    return (
        <div style={{ display: 'flex', height: '100vh', justifyContent: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', lineHeight: '2' }}>
                <input type="file" onChange={(e) => setfile(e.target.files[0])} />
                <input type="text" placeholder='Movie Name' value={name} onChange={(e) => setname(e.target.value)} />
                <input type="text" placeholder='Movie Grade' value={grade} onChange={(e) => setgrade(e.target.value)} />
                <input type="text" placeholder='Movie Languages' value={language} onChange={(e) => setlanguage(e.target.value)} />
                <br />
                <input type="text" placeholder='Tamil' value={tamil} onChange={(e) => settamil(e.target.value)} />
                <input type="text" placeholder='Hindi' value={hindi} onChange={(e) => sethindi(e.target.value)} />
                <input type="text" placeholder='English' value={eng} onChange={(e) => seteng(e.target.value)} />
                <input type="text" placeholder='Telugu' value={telugu} onChange={(e) => settelugu(e.target.value)} />
                <input type="text" placeholder='Malayalam' value={malayalam} onChange={(e) => setmalayalam(e.target.value)} />

                <button onClick={upload}>Upload</button>
            </div>
        </div>
    )
}
